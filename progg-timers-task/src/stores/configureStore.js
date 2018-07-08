import { createStore } from 'redux'

var States = {
    key: '',
    time: {},
    seconds: 0,
    stopped: false,
    timersStatus: {}
};

function counterState(state = States, action) {
    if (action.type === 'SET_COUNTER') {
        var newStatus = States.timersStatus;
        if(action.updateStatus === 0){
            newStatus[action.key] = action.updateStatus;
        }else{
            newStatus[action.key] =  1;
        }
        return {
            ...state,
            seconds: action.seconds,
            key: action.key,
            stopped: action.stopped || false,
            timersStatus: newStatus
        }
    }
    else{
        return state;
    }
}

var store = createStore(counterState);

export default store;



