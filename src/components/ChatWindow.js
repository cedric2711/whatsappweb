import React, {Component} from 'react';
import { connect } from 'react-redux';
import ChatSection from './ChatSection';
import {updateChatInfo} from '../actions/shared';
import { getRandomMessage } from '../utils/randomMessage';

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
            debugger;
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
        if(!this.props.activeChat){
            return (
                <div>No Chat Selected</div>
            );
        }
        return(
            <div>
               <ChatSection />
               <div>
                   <input type="text" value={textMessage} onChange= {(e) =>this.messageChange(e)} onKeyDown= {(e)=>this.checkForEnter(e)} />
                   <input type="submit" onClick={(e)=>this.updateChat(e)}/>
                </div>
            </div>
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

export default connect(mapStateToProps)(ChatWindow)