import React from 'react';

export default class CallerListItem extends React.Component {
    render() {
        return (
            <tr>
                <td className='firstNamesCol'>{this.props.first_name}</td>

                <td className='LastNamesCol'>{this.props.last_name}</td>
                <td>
                    <button>Select</button>
                </td>
            </tr>
        );
    }
}