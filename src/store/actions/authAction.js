import Authenticate from "../../services/authenticate.service";
// import { getCurrentUser } from "./userAction";

const authen = new Authenticate();

export const login = (data, history) => dispatch => {
    authen
        .login(data)
        .then(res => {
            if (res) {
                if (res.status === 200) {
                    const { access_token } = res.data.data;
                    localStorage.setItem("access_token", access_token);
                    // dispatch(getCurrentUser());
                    history.push("/");
                } else if (res.status === 401) {
                    if (res.data.code === "user_not_active") {
                        history.push({
                            pathname: "/users/active",
                            state: { email: JSON.parse(res.config.data).email }
                        });
                    }
                }
            }
        })
        .catch(error => {
            console.log("error", error);
        });
};

export const logout = () => {
    localStorage.removeItem("access_token");
    window.location.reload();
};
