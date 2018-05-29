import React from 'react';
import './container/container_styles.css';
import CallsListItem from './calls-list-item';
import _ from 'lodash';
import data from '../../mock_data/calls_mock_data.json';

var callersList;
var startOffset=0;
var endOffset=0;
var array;

export default class Container extends React.Component {

    constructor(props) {
        super(props);
        callersList = this.props.todos;
        this.state = {value: ''};

        this.state = {
            array
        };
    }
    renderItems(startOffset, endOffset) {
        return _.map(data.slice(startOffset, endOffset), (todo, index) => <CallsListItem key={index}
                                                                                         {...todo} />)
    }
    onClickNext(){
        if(endOffset < data.length) {
            startOffset = endOffset;
            endOffset += 15;
            this.setState({
                array: this.renderItems(startOffset, endOffset)
            })

        }
    }
    loadCallers(){
        console.log(data);
        startOffset=0;
        endOffset=15;
        this.setState({
            array: this.renderItems(startOffset, endOffset)
        })

    }
    searchButtonClicked(){
        var temp = this.refs.serchInput.value;
        var index=0 ;
        data.forEach(function (element) {
            if(element['first_name'] === temp) {
                index=(element.id);

            }
        })
        this.setState({
            array: this.renderItems(index-1, index)
        })

    }

    render() {
        let {id,className} = this.props;

        return (
            <div className={className} id={id}>
                <p className='callsTitle'>Calls information</p>
                <p className='id'>ID</p>
                <p className='pID'>PID</p>
                <p className='time'>Time stamp</p>
                <p className='durationInSeconds'>Duration</p>
                <table className='callsListTable'>
                    <tbody>
                    {this.state.array}
                    </tbody>
                </table>
                <button className='loadData' onClick={  this.loadCallers.bind(this) }>Load</button>
            </div>
        );
    }
}