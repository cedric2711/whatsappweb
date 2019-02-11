import React from 'react';
import { connect } from 'react-redux';
import {formatChat} from '../utils/commonUtils';
import {setActiveChat} from '../actions/activeChat';
import {setFriendChat} from '../actions/friendChat';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const styles = {
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      margin: 10,
      width: 60,
      height: 60,
    },
  };

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
    let {friendID, users, classes} = this.props;
    if(!friendID){
        return (<div>No List</div>);
    }
    let {avatarURL, name} = users[friendID];
        return (
            <ListItem onClick={(e)=>this.selectChat(e)}>
                 <Avatar alt={name} src={require(`../${avatarURL}`)} className={classes.bigAvatar} />
                <ListItemText primary={name} secondary="Jan 9, 2014" />
            </ListItem>
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

export default connect(mapStateToProps)(withStyles(styles)(FriendListInto))