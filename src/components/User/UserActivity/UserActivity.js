import React, { Component } from "react";
import { Tabs } from "antd";
import QuestionList from "../../../components/Questions";
import TopicList from "../../../components/Topics";
import { Link } from "react-router-dom";
import data from "../../../data/data.json";
import _ from "lodash";

const { TabPane } = Tabs,
    followedIds = data.user.questions.followed,
    followedDetail = _.flatten(followedIds.map(id => data.questions.filter(question => question.id === id))),
    createdIds = data.user.questions.created,
    createdDetail = _.flatten(createdIds.map(id => data.questions.filter(question => question.id === id))),
    topicDetail = data.topics;

class UserActivityTabs extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="Questions Followed" key="1">
                    <QuestionList list={followedDetail.slice(0, 3)} />
                    <Link to="/my-questions">View All</Link>
                </TabPane>
                <TabPane tab="Questions Created" key="2">
                    <QuestionList list={createdDetail.slice(0, 3)} />
                    <Link to="/my-questions">View All</Link>
                </TabPane>
                <TabPane tab="Topics Created" key="3">
                    <TopicList list={topicDetail} />
                    <Link to="/my-topics">View All</Link>
                </TabPane>
            </Tabs>
        );
    }
}

export default UserActivityTabs;
