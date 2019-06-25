import React, { Component } from 'react';

class ListSuggest extends Component {
    state = {
        resultSearch: []
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({resultSearch: nextProps.resultSearch})
        }
    }

    

    handleClick  = (value) => {
        this.props.ClickItemSuggest(value)
        this.setState({resultSearch: []})
    }
    mappingData = () => this.state.resultSearch.map((value, key) => 
            (<ul className="list-group" key={key}>
                <li onClick={this.handleClick(value)} className="list-group-item list-group-item-action">{value.name}</li>
            </ul>)               
    )

    render() {
        return (
            <div>
                {this.mappingData()}
            </div>
        );
    }
}

export default ListSuggest;