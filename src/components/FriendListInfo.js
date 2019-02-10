import React from 'react';
import { connect } from 'react-redux';

const FriendListInto = function ({ friendID }) {
    if(!friendID){
        return (<div>No List</div>);
    }
    return (
        <div>
            {friendID}
        </div>
    );
}

function mapStateToProps({ authedUser, users, chats },{friendID}) {
    let chatList = null;
    if (friendID && authedUser) {
        chatList = users[authedUser].friendList[friendID];
        chatList = chatList.concat(users[friendID].friendList[authedUser]);

    }
    return {
        friendID,
        userInfo: (authedUser && users && users[authedUser]) ? users[authedUser] : null,
        users
    }
}

export default connect(mapStateToProps)(FriendListInto)