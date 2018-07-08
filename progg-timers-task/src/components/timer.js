import React from 'react';
import  '../styles/container_styles.css'
import store  from '../stores/configureStore'

export default class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { time: {}, seconds: 0, stopped: false };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.count = this.count.bind(this);
        this.timersStatuses = [];
        this.timersNames = [];
    }

    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": parseInt(hours),
            "m": parseInt(minutes),
            "s": parseInt(seconds)
        };
        return obj;
    }

    componentDidMount() {
        store.dispatch({
            key: this.props.timerName,
            updateStatus: 0,
            type: 'SET_COUNTER'
        })
        store.subscribe(() => {
            this.setState({})
        })
    }

    startTimer() {
        if (this.timer === 0) {
            this.timer = setInterval(this.count, 1000);
        }
    }

    count() {

        for (var key in store.getState().timersStatus) {
            if(store.getState().timersStatus[key] === 0){
                var index = this.timersNames.indexOf(key);
                if (index > -1) {
                    this.timersNames.splice(index, 1);
                    this.timersStatuses.splice(index, 1);
                }
                var className = "timerIsNotActive " + key.toString();
                this.timersStatuses.push(
                    <div className={className} id={key}>
                        {key}
                    </div>
                );
                this.timersNames.push(key);
            }
            else{
                var index = this.timersNames.indexOf(key);
                if (index > -1) {
                    this.timersNames.splice(index, 1);
                    this.timersStatuses.splice(index, 1);
                }
                var className = "timerIsActive " + key.toString();
                this.timersStatuses.push(
                    <div className={className} id={key}>
                        {key}
                    </div>
                );
                this.timersNames.push(key);
            }
        }
        if(!this.state.stopped) {
            var seconds = this.state.seconds +1;
           this.setState({
                time: this.secondsToTime(seconds),
                seconds: seconds
            });
            store.dispatch({
                key: this.props.timerName,
                type: 'SET_COUNTER'
            })
        }
    }

    start(){
        this.startTimer();
        this.setState({
           stopped: false
        });
    }

    stop(){
        this.setState({
            stopped: true
        });

        var seconds = store.getState().seconds;
        store.dispatch({
            key: this.props.timerName,
            updateStatus: 0,
            type: 'SET_COUNTER',
            stopped: true,
            time: this.secondsToTime(seconds)
        });
        for (var key in store.getState().timersStatus) {
            if(store.getState().timersStatus[key] === 0){

                var index = this.temm.indexOf(key);
                if (index > -1) {
                    this.temm.splice(index, 1);
                    this.timersStatuses.splice(index, 1);
                }
                var className = "timerIsNotActive " + key.toString();
                this.timersStatuses.push(
                    <div className={className} id={key}>
                        {key}
                    </div>
                );
                this.temm.push(key);
            }
        }
        store.subscribe(() => {
            this.setState({})
        })
    }
    resume(){
        this.setState({
            stopped: false
        });
        store.dispatch({
            key: this.props.timerName,
            updateStatus: 1,
            type: 'SET_COUNTER',
            stopped: false
        });
        for (var key in store.getState().timersStatus) {

            if(store.getState().timersStatus[key] === 1){
                var index = this.timersNames.indexOf(key);
                if (index > -1) {
                    this.timersNames.splice(index, 1);
                    this.timersStatuses.splice(index, 1);
                }
                var className = "timerIsActive " + key.toString();
                this.timersStatuses.push(
                    <div className={className} id={key}>
                        {key}
                    </div>
                );
                this.timersNames.push(key);
            }
        }
    }

    render() {
        //console.log(store.getState());
        let {timerName} = this.props;

        return (
            <div className='timerDiv'>
                <div className="timersStatuses">
                    <div>
                        {this.timersStatuses}
                    </div>
                </div>
                <p className='timerTitle'>{timerName}</p>
                <div className='clock'>

                    {this.state.time.m} : {this.state.time.s}
                </div>
                <div className='buttonsDiv'>
                    <button className='timerButton' onClick={this.resume.bind(this)}>Resume</button>
                    <button className='timerButton' onClick={this.stop.bind(this)}>Stop</button>
                    <button className='timerButton' onClick={this.start.bind(this)}>Start</button>
                </div>
            </div>
        );
    }
}