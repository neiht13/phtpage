import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/'
    // headers: {Authorization: "token"}
});
const fetch = (model) => {
    return instance.get(model).then(res => {
        return res.data;
    })
}

const create = (model, modelObj) => {
    return instance.post(`${model}/new`, modelObj).then(res => {
        return res.data;
    })
};
const update = (model, modelObj) => {
    debugger;
    return instance.put(`${model}/update`, modelObj).then(res => {
        return res.data;
    })
};

const remove = (model, id) => {
    return instance.delete(`${model}/delete/${id}`).then(res => {
        return res.data;
    })
}
export {
    fetch,
    create,
    update,
    remove,
}