import React, { Component } from "react";
import _ from "lodash";
import LayoutMain from "../layout/LayoutMain";
import CustomButton from "../components/Cores/button/CustomButton_v2";
import Input from "../components/Cores/input/Input_v2";
import Loading from "../components/Cores/loading";
import tags from "../services/tags.service";
import Questions from "../services/questions.service";
import Topics from "../services/topic.service";
import TagList from "../components/AskQuestion/TagList";
import ListSuggest from "../components/AskQuestion/ListSuggest";
import QuestionContentAsk from "./../components/AskQuestion/QuestionContentAsk";
import "./../components/AskQuestion/style.css";

const questions = new Questions(),
  topics = new Topics();

class AskQuestion extends Component {
  state = {
    topicInput: "",
    topicSelect: "",
    topicList: [],
    tagInput: "",
    tagSelect: [],
    tagList: [],
    title: "",
    content: "",
    _loading: {
      topics: false,
      tags: false
    }
  };

  searchTopicList = () => {
    this.setState({ _loading: { topics: true } });
    topics.get({ keyword: this.state.topicInput }).then(res => {
      this.setState({
        _loading: { topics: false },
        topicList: res.data.data.items,
        topicSelect: ""
      });
    });
  };

  searchTagList = () => {
    this.setState({ _loading: { tags: true } });
    tags.get({ keyword: this.state.tagInput }).then(res => {
      this.setState({
        _loading: { tags: false },
        tagList: _.differenceBy(
          res.data.data.items,
          this.state.tagSelect,
          "_id"
        )
      });
    });
  };

  onRemoveTag = tag => {
    this.setState({
      tagSelect: this.state.tagSelect.filter(t => t._id !== tag._id)
    });
  };

  onInputChange = ({ name, value }) => {
    this.setState({ [name]: value }, () => {
      if (name === "topicInput") {
        if (value === "") {
          this.setState({ topicList: [] });
        } else {
          this.searchTopicList();
        }
      }
      if (name === "tagInput") {
        if (value === "") {
          this.setState({ tagList: [] });
        } else {
          this.searchTagList();
        }
      }
    });
  };

  postQuestion = () => {
    const {
      topicInput,
      topicSelect: topicId,
      tagSelect,
      title,
      content
    } = this.state;
    const tags = tagSelect.map(t => t._id);
    if (topicId) {
      topics.postQuestion(topicId, topicInput, { title, content, tags });
    } else {
      questions.post({ title, content, tags });
      this.setState({
        topicInput: "",
        topicSelect: "",
        topicList: [],
        tagInput: "",
        tagSelect: [],
        tagList: [],
        title: "",
        content: "",
        _loading: {
          topics: false,
          tags: false
        }
      });
    }
  };

  handleSelect = ({ item, type }) => {
    switch (type) {
      case "topic":
        this.setState({
          topicInput: item.name,
          topicSelect: item._id,
          topicList: []
        });
        break;
      case "tag":
        this.setState({
          tagInput: "",
          tagSelect: [
            ...this.state.tagSelect,
            { name: item.name, _id: item._id }
          ],
          tagList: []
        });
        break;
    }
  };

  validate = () =>
    this.state.title && this.state.tagSelect.length > 0 ? false : true;

  render() {
    const header = {};
    const {
      topicInput,
      topicList,
      tagInput,
      tagSelect,
      tagList,
      title,
      _loading: { topics, tags }
    } = this.state;
    return (
      <LayoutMain header={header}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mt-2">
              <Input
                value={topicInput}
                name="topicInput"
                label="Topic"
                placeholder="Chọn Topic (không bắt buộc)"
                handleChange={this.onInputChange}
              />
              {topicList.length > 0 ? (
                <ListSuggest
                  list={topicList}
                  onClick={this.handleSelect}
                  type="topic"
                />
              ) : topics ? (
                <Loading />
              ) : null}
              <Input
                value={title}
                name="title"
                label="Tiêu đề câu hỏi"
                placeholder="Gõ tiêu đề (bắt buộc)"
                handleChange={this.onInputChange}
              />
              <QuestionContentAsk
                isChange={this.onInputChange}
                content={this.state.content}
              />
              <Input
                value={tagInput}
                name="tagInput"
                label="Chọn Tag"
                placeholder="Gõ tag (bắt buộc)"
                handleChange={this.onInputChange}
              />
              {tagList.length > 0 ? (
                <ListSuggest
                  list={tagList}
                  onClick={this.handleSelect}
                  type="tag"
                />
              ) : tags ? (
                <Loading />
              ) : null}
              {tagSelect ? (
                <TagList list={tagSelect} onClick={this.onRemoveTag} />
              ) : null}
            </div>
          </div>
          <CustomButton
            handleClick={this.postQuestion}
            className="btn-block mt-3"
            content="Ask Question"
            disabled={this.validate()}
          />
        </div>
      </LayoutMain>
    );
  }
}

export default AskQuestion;
