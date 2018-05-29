import React from 'react';
import './container_styles.css';
import _ from 'lodash';
import TodosListItem from '../caller-list-item';
import data from '../../../mock_data/callers_mock_data.json';

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
        return _.map(data.slice(startOffset, endOffset), (todo, index) => <TodosListItem key={index}
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
                <input className="searchField" placeholder="Search" ref='serchInput'></input>
                <p className='firstNameTitle'>First name</p>
                <p className='lastNameTitle'>Last name 	</p>
                <table className='callersListTable'>
                    <tbody>
                    {this.state.array}
                    </tbody>
                </table>
                <button className='nextButton' onClick={  this.onClickNext.bind(this) }>Next</button>
                <button className='loadData' onClick={  this.loadCallers.bind(this) }>Load</button>
                <button className='searchButton' onClick={  this.searchButtonClicked.bind(this) }>Search</button>

            </div>
        );
    }
}