import React from "react";
import QuestionList from "../../components/Questions/QuestionList";
import data from "../../data/data.json";

const QuestionListHome = data.questions.filter(question => question.author !== data.user.profile.id);
const Home = () => (
    <div>
        <QuestionList list={QuestionListHome} />
    </div>
);

export default Home;
