
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDy7zhXfXSMQkl1yGbPZM7p3VWO92_tTeE",
    authDomain: "shorturldtp.firebaseapp.com",
    projectId: "shorturldtp",
    storageBucket: "shorturldtp.appspot.com",
    messagingSenderId: "87442752231",
    appId: "1:87442752231:web:f8846ee9ea21bfd563d842"
};
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

async function getCities() {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log("cityList", cityList);
    return cityList;
}
export {getCities};