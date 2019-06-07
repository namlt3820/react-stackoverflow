import User from "../pages/User";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import ForgotPassWord from "../pages/Auth/ForgotPassWord";
import ActiveCode from "../pages/Auth/ActiveCode";
import ChangePassWord from "../pages/Auth/ChangePassWord";
import MyTopic from "../components/MyTopic";
import Tags from "../pages/Tags";
import AskQuestion from "../components/AskQuestion";
import QuestionDetail from "../components/QuestionDetails";
import TopicDetail from "../components/TopicDetail";
import MyQuestion from "../components/MyQuestion";

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
        path: "/topic-detail",
        component: TopicDetail
    },
    {
        path: "/my-topics",
        component: MyTopic
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
        path: "/tags",
        component: Tags
    }
];

export default routers;
