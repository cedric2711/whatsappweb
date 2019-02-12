import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import ChatSection from './ChatSection';
import {updateChatInfo} from '../actions/shared';
import { getRandomMessage } from '../utils/randomMessage';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      background: "#fff"
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  });

class ChatWindow extends Component {
    state = {
        textMessage:""
    }
    messageChange =(e) => {
        let text = e.target.value;
        this.setState({textMessage:text});
    }

    checkForEnter = (e) => {
        if(e.key === 'Enter'){
            this.updateChat();
        }
    }

    updateChat = (e) => {
        this.props.dispatch(updateChatInfo({
            message: this.state.textMessage,
            authedUser:this.props.authedUser,
            friendChat: this.props.friendChat
        }))

        setTimeout(function(state, props) {
            
            props.dispatch(updateChatInfo({
                message: getRandomMessage(),
                authedUser: props.friendChat,
                friendChat: props.authedUser
            }))
        },2000, this.state, this.props);
        this.setState({textMessage:""});
    }

    render () {
        let {textMessage} = this.state;
        let {classes} = this.props;
        if(!this.props.activeChat){
            return (
                <div>No Chat Selected</div>
            );
        }
        return(
            <Fragment>
               <ChatSection />
               <TextField
                id="chat-text-field"
                // label="Chat"
                placeholder="Type a message "
                // helperText="Enter Text Here!"
                className={classes.textField}
                fullWidth
                margin="normal"
                variant="outlined"
                value={textMessage} onChange= {(e) =>this.messageChange(e)}
                onKeyDown= {(e)=>this.checkForEnter(e)}
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