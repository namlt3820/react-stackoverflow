import User from "../pages/User";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import ForgotPassWord from "../pages/Auth/ForgotPassWord";
import ActiveCode from "../pages/Auth/ActiveCode";
import ChangePassWord from "../pages/Auth/ChangePassWord";
<<<<<<< HEAD
import TagList from "../pages/Tags";
//import Nhất
import MyTopic from "../pages/MyTopic";
import TopicDetail from "../pages/TopicDetail";
import MyQuestion from "../pages/MyQuestion";
import QuestionDetail from "../pages/QuestionDetail";
import AskQuestion from "../pages/AskQuestion";
=======
import MyTopic from "../components/MyTopic";
import Tags from "../pages/Tags";
import AskQuestion from "../components/AskQuestion";
import QuestionDetail from "../components/QuestionDetails";
import TopicDetail from "../components/TopicDetail";
import MyQuestion from "../components/MyQuestion";
>>>>>>> a1f53c4799a3478e8691ff5f8218ab7a8e0f9ee7

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
<<<<<<< HEAD
        path: "/ask-question",
        component: AskQuestion
=======
        path: "/tags",
        component: Tags
>>>>>>> a1f53c4799a3478e8691ff5f8218ab7a8e0f9ee7
    }
];

export default routers;
