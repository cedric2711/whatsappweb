import React from 'react';
import { connect } from 'react-redux';
import {formatChat} from '../utils/commonUtils';
import {setActiveChat} from '../actions/activeChat';
import {setFriendChat} from '../actions/friendChat';

class FriendListInto extends React.Component{
    selectChat =(e) =>{
        debugger;
        let {authedUser, chats, users, friendID, dispatch} = this.props;
        let authChat = users[authedUser].friendList[friendID];
        let frndChat = users[friendID].friendList[authedUser];
        let formatedChat = formatChat(authedUser, authChat, friendID, frndChat, chats);
        dispatch(setActiveChat(formatedChat));
        dispatch(setFriendChat(friendID));
    }

    render() {
    let {friendID} = this.props;
    if(!friendID){
        return (<div>No List</div>);
    }
        return (
            <div onClick={(e)=>this.selectChat(e)}>
                {friendID}
            </div>
        );
    };
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
        users,
        chats,
        authedUser
    }
}

export default connect(mapStateToProps)(FriendListInto)