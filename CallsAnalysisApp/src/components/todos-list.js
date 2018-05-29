import React from 'react';
import Container from "./container/container";
import CallsContainer from "./CallsContainer"

export default class TodosList extends React.Component {



    render() {

        let {todos} = this.props;
        return (
            <div>
                <Container className={'containerCallers'} todos={this.props.todos}/>
                <CallsContainer className={'containerCalls'} />

            </div>
        );
    }
}