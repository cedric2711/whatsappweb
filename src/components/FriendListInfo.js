import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatChat, getFullDate } from '../utils/commonUtils';
import { setActiveChat } from '../actions/activeChat';
import { setFriendChat } from '../actions/friendChat';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';

const styles = {
    avatar: {
        margin: 10,
    },
    centerSpace: {
        width: "75%"
    },
    cardSpace: {
        background: "white",
        marginTop: 5,
        '&:hover': {
            background: "#f4f5f5"
        }
    },
    selectedChat: {
        background: "#f4f5f5"
    }
};

class FriendListInto extends Component {
    extractChatHistory = () => {
        let { authedUser, chats, users, friendID } = this.props;
        let authChat = users[authedUser].friendList[friendID];
        let frndChat = users[friendID].friendList[authedUser];
        let formatedSortedChat = formatChat(authedUser, authChat, friendID, frndChat, chats);
        return formatedSortedChat;
    }
    selectChat = (e) => {
        let { dispatch, friendID } = this.props;
        let formatedChat = this.extractChatHistory();
        dispatch(setActiveChat(formatedChat));
        dispatch(setFriendChat(friendID));
    }

    render() {
        let { friendID, users, classes, friendChat, activeChat } = this.props;
        if (!friendID) {
            return (<div>No List</div>);
        }
        let setActive = (friendChat === friendID) ? true : false;

        let { avatarURL, name } = users[friendID];
        let formatedChat = (setActive) ? activeChat : this.extractChatHistory();
        let { text, timestamp } = formatedChat[formatedChat.length - 1];
        let lastDate = getFullDate(new Date(timestamp));
        return (
            <ListItem
                className={setActive ? classNames(classes.cardSpace, classes.selectedChat) : classes.cardSpace}
                onClick={(e) => this.selectChat(e)}
            >
                <Avatar alt={name} src={require(`../${avatarURL}`)} className={classes.avatar} />
                <ListItemText className={classes.centerSpace} primary={name} secondary={text} />
                <ListItemText secondary={lastDate} />
            </ListItem>
        );
    };
}

function mapStateToProps({ authedUser, users, chats, friendChat, activeChat }, { friendID }) {
    return {
        friendID,
        userInfo: (authedUser && users && users[authedUser]) ? users[authedUser] : null,
        users,
        chats,
        authedUser,
        friendChat,
        activeChat
    }
}

export default connect(mapStateToProps)(withStyles(styles)(FriendListInto))