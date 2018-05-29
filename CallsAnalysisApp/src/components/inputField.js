import React from 'react';
import '../styling/inputStyles.css';


export default class InputField extends React.Component {

    render() {
        let {id,placeholder,className} = this.props;

        return (
            <div className="inputField">
                <input className={className} placeholder={placeholder} id={id}></input>
            </div>
        );
    }
}