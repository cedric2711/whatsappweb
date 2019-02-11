import React, {Component} from 'react';
import { connect } from 'react-redux';

class ChatWindow extends Component {
    state ={
        chats:null
    }
    shouldComponentUpdate(nextProps, nextState) {
        debugger;
        // this.props.activeChats;
        return true;
    };

    render () {
        console.log(this.props.activeChat);
        debugger;
        if(!this.props.activeChat){
            return (
                <div>No Chat Selected</div>
            );
        }
        return (
            <div>Chat Window</div>
        );
    }
};

function mapStateToProps({ activeChat }) {
    return {
        activeChat
    }
}

export default connect(mapStateToProps)(ChatWindow)