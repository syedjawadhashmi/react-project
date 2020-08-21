import React from 'react';
import './index.css'

const Button = ({ onClick, title, white, lowerCase, icon }) => {
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


export default Button;