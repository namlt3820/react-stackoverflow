import User from "../components/User";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import ForgotPassWord from "../pages/Auth/ForgotPassWord";
import ActiveCode from "../pages/Auth/ActiveCode";
import ChangePassWord from "../pages/Auth/ChangePassWord";
import MyTopic from "../components/MyTopic/MyTopic";
import MyQuestion from "../components/MyQuestion/MyQuestion";
import TagList from "../components/Tags";
import AskQuestion from "../components/AskQuestion/AskQuestion";

const routers = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/register",
        component: SignUp
    },
    {
        path: "/forgot-password",
        component: ForgotPassWord
    },
    {
        path: "/active",
        component: ActiveCode
    },
    {
        path: "/change-password",
        component: ChangePassWord
    },
    {
        path: "/my-profile",
        component: User
    },
    {
        path: "/ask-question",
        component: AskQuestion
    },
    {
        path: "/my-questions",
        component: MyQuestion
    },
    {
        path: "/my-topics",
        component: MyTopic
    },
    {
        path: "/tags",
        component: TagList
    }
];

export default routers;
