import User from "../pages/User";
import Home from "../pages/Home/Home";
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
        path: "/tags",
        component: TagList
    },
    //path Nhất
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
        path: "/question-detail",
        component: QuestionDetail
    },
    {
        path: "/ask-question",
        component: AskQuestion
    }
];

export default routers;
