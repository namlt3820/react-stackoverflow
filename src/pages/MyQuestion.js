import React, { Component } from 'react';
import './../components/MyQuestion/style.css'
import QuestionList from '../components/MyQuestion/QuestionList';
import LayoutMain from '../layout/LayoutMain';
import Loading from '../components/Cores/loading';
import client from '../services/client';


const PER_PAGE = 10;
class MyQuestion extends Component {
    state = {
        loading: true
    };

    load = () => {
        const { offset, mode } = this.state;
        return new Promise((resolve, reject) => {
          this.setState({ loading: true });
          setTimeout(() => {
            resolve(client.loadTags({ limit: PER_PAGE, offset, mode }));
          }, 1);
        }).then(response => {
          this.setState({
            loading: false,
            topics: response.data,
            pageCount: response.meta.pageCount
          });
        });
      };

    

      componentDidMount() {
        this.load();
      }

    render() {
        const header = {
            placeholder: "Search questions...",
            // searchValue: searchValue,
            // onInputChange: this.onInputChange,
            // onSearchClick: this.onSearchClick
          };
        return (
            <LayoutMain header={header}>
                <div>
                {this.state.loading ? (
                    <Loading />
                    ) : (
                        <QuestionList/>
                    )}
                    
                </div>
            </LayoutMain>
        );
    }
}

export default MyQuestion;
