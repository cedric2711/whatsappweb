import React, {Component} from 'react';
import { connect } from 'react-redux';
import {formatChat} from '../utils/commonUtils';
import {setActiveChat} from '../actions/activeChat';
import {setFriendChat} from '../actions/friendChat';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
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
    cardSpace: {
      background:"white",
      marginTop:5,
      '&:hover': {
          background:"#f4f5f5"
      }
    },
    selectedChat: {
        background: "#f4f5f5"
    }
  };

class FriendListInto extends Component{
    selectChat =(e) =>{
        
        let {authedUser, chats, users, friendID, dispatch} = this.props;
        let authChat = users[authedUser].friendList[friendID];
        let frndChat = users[friendID].friendList[authedUser];
        let formatedChat = formatChat(authedUser, authChat, friendID, frndChat, chats);
        dispatch(setActiveChat(formatedChat));
        dispatch(setFriendChat(friendID));
    }

    render() {
    let {friendID, users, classes, friendChat} = this.props;
    if(!friendID){
        return (<div>No List</div>);
    }
    let setActive=(friendChat===friendID)?true:false;

    let {avatarURL, name} = users[friendID];
        return (
            <ListItem 
            className={setActive?classNames(classes.cardSpace, classes.selectedChat): classes.cardSpace}
            onClick={(e)=>this.selectChat(e)}
            >
                 <Avatar alt={name} src={require(`../${avatarURL}`)} className={classes.bigAvatar} />
                <ListItemText primary={name} secondary="Jan 9, 2014" />
            </ListItem>
        );
    };
}

function mapStateToProps({ authedUser, users, chats, friendChat },{friendID}) {
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
        authedUser,
        friendChat
    }
}

export default connect(mapStateToProps)(withStyles(styles)(FriendListInto))