import User from "../pages/User";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import ForgotPassWord from "../pages/Auth/ForgotPassWord";
import ActiveCode from "../pages/Auth/ActiveCode";
import ChangePassWord from "../pages/Auth/ChangePassWord";
import TagList from "../pages/Tags";
//import Nhất
import MyTopic from "../pages/MyTopic";
import TopicDetail from "../pages/TopicDetail";
import MyQuestion from "../pages/MyQuestion";
import QuestionDetail from "../pages/QuestionDetail";
import AskQuestion from "../pages/AskQuestion";


export const routers = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/my-profile",
        component: User
    },
    {
        path: "/tags",
        component: TagList
    },
    {
        path: "/my-topics",
        component: MyTopic
    },
    {
        path: "/topic-detail",
        component: TopicDetail
    },
    {
        path: "/my-questions",
        component: MyQuestion
    },
    {
        path: "/my-question/:slug.:id.html",
        component: QuestionDetail
    },
    {
        path: "/ask-question",
        component: AskQuestion
    }
];

export const routersAuth = [
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
    }
];
