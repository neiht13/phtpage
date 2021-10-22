import React, {useContext, createContext, useState, useEffect} from "react";
import firebase from "firebase/compat";
import firebaseConfig from "../../service/firebase-config";
import {Redirect, useHistory} from "react-router-dom";
import Notification from "../../common/Form/Notification";

export const UserContext = createContext({ name: '', auth: false });

export const UserProvider = ({ children }) => {
    // User is the name of the "data" that gets stored in context
    let history = useHistory();

    const [user, setUser] = useState({ name: '', auth: undefined });
    const firebaseInstance = firebase.initializeApp(firebaseConfig)
    const signUp = async (user) => {
        try {
            if (firebaseInstance) {
                const userr = await firebaseInstance.auth().createUserWithEmailAndPassword(user.email, user.pwd)
                console.log("user", user)
                Notification("success", "Thành công", "Welcome : " + userr.email)
            }
        } catch (error) {
            console.log("error", error);
            Notification("error", "Lỗi", error.message)
        }
    };

    const signIn = async (user) => {

        try {
            if (firebaseInstance) {
                const userr = await firebaseInstance
                    .auth()
                    .signInWithEmailAndPassword(user.email, user.pwd);
                console.log("user login", userr);
                localStorage.setItem("user", user.email);
                // Notification("success", "Thành công", "Welcome back! " + userr.email)
                return <Redirect to='/'/>
            }
        } catch (error) {
            console.log("error", error);
            Notification("error", "Lỗi", error.message)

        }
    };

    const signOut = async () => {
        try {
            if (firebaseInstance) {
                await firebaseInstance.auth().signOut();
                localStorage.removeItem("user");
                useHistory().push('/login')
                // Notification("info", "Thành công", "Đã đăng xuất")
                return <Redirect to='/login'/>
            }
        } catch (error) {
            console.log("error", error);
        }
    };
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        if (firebaseInstance) {
            firebaseInstance.auth().onAuthStateChanged((authUser) => {
                if (authUser) {
                    setCurrentUser(authUser.email);
                } else {
                    setCurrentUser(null);
                }
            });
        }
    }, []);

    return (
        <UserContext.Provider value={{ currentUser, signUp, signIn, signOut }}>
            {children}
        </UserContext.Provider>
    );
}
