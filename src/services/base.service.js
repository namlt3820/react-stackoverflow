import axios from "axios";

export default class Base {
    constructor(path) {
        this.path = `${path}`;
    }
    get() {
        return new Promise((resolve, reject) => {
            axios
                .get(`/${this.path}`)
                .then(respone => {
                    resolve(respone);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
    post(body) {
        return new Promise((resolve, reject) => {
            axios
                .post(`${this.path}`, body)
                .then(respone => {
                    resolve(respone);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
    put(id) {
        return new Promise((resolve, reject) => {
            axios
                .put(`/${this.path}/` + id)
                .then(respone => {
                    resolve(respone);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
    patch(id, param) {
        return new Promise((resolve, reject) => {
            axios
                .patch(`/${this.path}/` + id, param)
                .then(respone => {
                    resolve(respone);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}
