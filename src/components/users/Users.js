import React, { Component } from 'react';
import UserItem from './UserItem';


class Users extends Component {


    render() {
        return (
            <div style={userStyle}>
                {this.props.users.length > 0 ?
                    this.props.users.map(user => (
                        <UserItem key={user.id} user={user} />
                    )) : (<h1>No User Found</h1>)
                }
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users