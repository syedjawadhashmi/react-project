import React, { Component } from 'react';
import './index.css'

class TextInput extends Component {
    render() {
        const { value, onChange, placeholder, name, type } = this.props;
        return (
            <React.Fragment>
                <input
                    className="basicInput"
                    value={value}
                    style={{ height: 50 }}
                    onChange={(value) => onChange(name, value.target.value)}
                    placeholder={placeholder}
                    type={type ? type : 'text'}
                />
            </React.Fragment>
        );
    }
}

export default TextInput;