import React from 'react';
import { connect } from 'react-redux';

const FriendList = function ({ userInfo }) {
    if(!userInfo){
        return (<div>No List</div>);
    }
    let { friendList } = userInfo;
    let friedIDs = Object.keys(friendList);
    return (
        <div>
            {friedIDs.map((frd) => (<div key={frd}>{frd}</div>))}
        </div>
    );
}

function mapStateToProps({ authedUser, users }) {

    return {
        userInfo: (authedUser && users && users[authedUser]) ? users[authedUser] : null,
        users
    }
}

export default connect(mapStateToProps)(FriendList)