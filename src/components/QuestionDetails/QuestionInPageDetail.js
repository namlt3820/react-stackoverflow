<<<<<<< HEAD
import React, { Component } from 'react';
import TitleQuestion from './TitleQuestion';
import QuestionContent from '../TopicDetail/QuestionContent';
import LikeReplay from './LikeReplay';
=======
import React, { Component } from "react";
import TitleQuestion from "./TitleQuestion";
import QuestionContent from "../MyQuestion/MyQuestion";
import LikeReplay from "./LikeReplay";
>>>>>>> a1f53c4799a3478e8691ff5f8218ab7a8e0f9ee7

class QuestionInPageDetail extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="card mt-2 mb-2">
                                <TitleQuestion />
                                <QuestionContent />
                                <hr className="non-margin" />
                                <LikeReplay />
                            </div>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
            </div>
                </div>
            </div>
=======
>>>>>>> a1f53c4799a3478e8691ff5f8218ab7a8e0f9ee7
            </div>
        );
    }
}

export default QuestionInPageDetail;
