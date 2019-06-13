import React, { Component } from 'react';

class CustomButton_v3 extends Component {
    render() {
        const { content, handleClick, loading, style, className, datatoggle, datatarget, type } = this.props;
        return (
            <div>
                <button
                    type={type}
                    className={className}
                    onClick={handleClick}
                    loading={loading}
                    style={style}
                    datatoggle={datatoggle}
                    datatarget={datatarget}>
                    {/* Component Parent passing prop handleClick for Component Child */}
                    {content}
                </button>
            </div>
        );
    }
}

export default CustomButton_v3;