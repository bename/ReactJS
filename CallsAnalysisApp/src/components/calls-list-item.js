import React from 'react';

export default class CallsListItem extends React.Component {
    render() {
        return (
            <tr>
                <td className='callerId'>{this.props.caller_id}</td>

                <td className='calledPartyId'>{this.props.called_party_id}</td>

                <td className='timeStamp'>{this.props.timestamp}</td>

                <td className='duration'>{this.props.duration_in_seconds}</td>
            </tr>
        );
    }
}