import React from 'react';
import TodosList from "./todos-list";
import '../styles.css';
import './appStyles.css';
import data from '../../mock_data/callers_mock_data.json';

const todos = [
    {
        task: 'make something',
        isCompleted: true,
        hello: true
    },
    {
        task: 'eat something',
        isCompleted: true
    },
    {
        task: 'go to sleep',
        isCompleted: false
    }
];

const jsonData = data;

export default class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
          todos,
            jsonData
        };
    }

    render() {
        return (
            <div>
                <h1 className='mainTitle'> Calls analysis application</h1>
                <TodosList todos={ this.state.jsonData} />
            </div>
        );
    }
}