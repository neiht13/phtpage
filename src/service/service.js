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
    return instance.post(model, modelObj).then(res => {
        return res.data;
    })
};
const update = (model, modelObj) => {
    return instance.patch(model, modelObj).then(res => {
        return res.data;
    })
};

const remove = (model, modelObj) => {
    return instance.delete(model, modelObj).then(res => {
        return res.data;
    })
}
export {
    fetch,
    create,
    update,
    remove,
}