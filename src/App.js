import React, {Component} from 'react';
import User from './components/User'
import QuestionList from "./components/Home/QuestionList";
import "./general.css";
class App extends Component {
  render() {
    return (
      <div>
        <User />
        <QuestionList />
      </div>
    )
  }
}
export default App;
