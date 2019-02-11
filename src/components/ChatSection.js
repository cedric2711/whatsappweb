import React from 'react';
import { connect } from 'react-redux';

const ChatSection = function (props) {
    if(!props.activeChat){
        return (
            <div>No Chat Selected</div>
        );
    }
    return (
        <div>
            {
                props.activeChat.map((chat)=> {
                    return (<div key={chat.id}>
                        {chat.text}
                    </div>
                    );
                })
            }
        </div>
    );
}

function mapStateToProps({ activeChat }) {

    return {
        activeChat
    }
}

export default connect(mapStateToProps)(ChatSection)