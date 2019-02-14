import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ChatSection from './ChatSection';
import { updateChatInfo } from '../actions/shared';
import { getRandomMessage } from '../utils/randomMessage';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import Send from '@material-ui/icons/Send';

const styles = theme => ({
    textField: {
        background: "#fff",
        width: "90%"
    }
});

export class ChatWindow extends Component {
    state = {
        textMessage: ""
    }

    messageChange = (e) => {
        let text = e.target.value;
        this.setState({ textMessage: text });
    }

    checkForEnter = (e) => {
        if (e.key === 'Enter') {
            this.updateChat();
        }
    }

    updateChat = (e) => {
        if (!this.state.textMessage) {
            this.setState({ textMessage: "" });
            return false;
        }
        this.props.dispatch(updateChatInfo({
            message: this.state.textMessage,
            authedUser: this.props.authedUser,
            friendChat: this.props.friendChat
        }))

        setTimeout(function (state, props) {

            props.dispatch(updateChatInfo({
                message: getRandomMessage(),
                authedUser: props.friendChat,
                friendChat: props.authedUser
            }))
        }, 2000, this.state, this.props);
        this.setState({ textMessage: "" });
    }

    render() {
        let { textMessage } = this.state;
        let { classes } = this.props;
        if (!this.props.activeChat) {
            return (
                <div>Do select a chat to view.</div>
            );
        }
        return (
            <Fragment>
                <ChatSection />
                <TextField
                    id="chat-text-field"
                    // label="Chat"
                    placeholder="Type a message"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton
                                aria-label="Type a message to send."
                                onClick={this.updateChat}
                            >
                                {textMessage ? <Send /> : ""}
                            </IconButton>
                        </InputAdornment>
                    }}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    value={textMessage} onChange={(e) => this.messageChange(e)}
                    onKeyDown={(e) => this.checkForEnter(e)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Fragment>
        );
    }
};

function mapStateToProps({ activeChat, authedUser, friendChat }) {
    return {
        activeChat,
        authedUser,
        friendChat
    }
}

export default connect(mapStateToProps)(withStyles(styles)(ChatWindow))