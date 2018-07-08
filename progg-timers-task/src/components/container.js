import React from 'react';
import  '../styles/container_styles.css'
import  Timer from './timer.js'
import _ from 'lodash';



export default class Container extends React.Component {



    constructor(props) {
        super(props);
        this.tem = [];
        this.timerNames = [];
        this.state = {timers: []};
        this.addTimer = this.addTimer.bind(this);
    }
    renderItems() {
        return _.map(this.tem, (todo, index) => <Timer key={index} timerName={this.timerNames[index]}
                                                                                         {...todo} />)
    }

    addTimer(){

        this.tem.push([<Timer key = {this.refs.timerName.value} ></Timer>])
        this.timerNames.push(this.refs.timerName.value);
        this.setState({
            timers: this.renderItems()
        });
    }

    render() {
        let {title} = this.props;

        return (
            <div className='timersContainer'>
                <p className='mainTitle'> {title}</p>
                <div className='timersDiv'>
                    {this.state.timers}
                    <div className='inputField'>
                        <input className='newTimerInput' ref='timerName'/>
                        <button className='newTimerButton' onClick={this.addTimer.bind(this)}>New</button>
                    </div>
                </div>
            </div>
        );
    }
}