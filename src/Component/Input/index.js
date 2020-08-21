import React from 'react';
import './index.css'

const TextInput = ({ value, onChange, placeholder, name, type }) => {
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

export default TextInput;