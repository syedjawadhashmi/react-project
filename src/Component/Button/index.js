import React, { Component } from 'react';
import './index.css'

class Button extends Component {
    render() {
        const { onClick, title, white, lowerCase, icon } = this.props;
        return (
            <React.Fragment>
                <button
                    className={white ? "whiteButton" : "basicButton"}
                    style={{
                        height: 50,
                        backgroundColor: white ? '#fff' : '#F83B65',
                        color: white ? '#909090' : '#fff',
                        textTransform: lowerCase ? 'capitalize' : 'uppercase'
                    }}
                    onClick={() => onClick()}
                >
                    {icon}
                    {title}
                </button>
            </React.Fragment>
        );
    }
}

export default Button;