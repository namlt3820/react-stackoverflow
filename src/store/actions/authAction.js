import Authenticate from "../../services/authenticate.service";
import setAuthHeaders from "../../helpers/setAuthHeaders";

const authen = new Authenticate();

export const login = (data, history) => dispatch => {
    authen
        .login(data)
        .then(respone => {
            if (respone && respone.status === 200) {
                const { access_token } = respone.data.data;
                localStorage.setItem("access_token", access_token);
                history.push("/");
            }
        })
        .catch(error => {
            console.log("error", error);
        });
};

export const logout = () => {
    // localStorage.removeItem("jwt");
    // setAuthHeaders(null);
    // window.location.href("/login");
};
