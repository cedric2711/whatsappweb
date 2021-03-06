import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getTime } from '../utils/commonUtils';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    root: {
        flexGrow: 1,
        overflow: 'scroll',
        maxHeight: 600,
        height: 600,
        padding: `0 ${theme.spacing.unit * 3}px`,
    },
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing.unit}px auto`,
        padding: theme.spacing.unit * 2,
    },
    date: {
        fontSize: 11,
        height: 15,
        float: "right",
        whiteSpace: "nowrap"
    },
    message: {
        color: "#000",
        clear: "both",
        lineHeight: 18,
        fontSize: 15,
        padding: 8,
        position: "relative",
        margin: "8px 0",
        maxWidth: "85%",
        wordWrap: "break-word",
        '&:after': {
            position: "absolute",
            content: "''",
            width: 0,
            height: 0,
            borderStyle: "solid",
        },
        '&:focus': {
            outline: "none"
        }
    },
    send: {
        background: '#A8B3F0',
        borderRadius: "5px 0px 5px 5px",
        float: 'right',
        '&:after': {
            borderWidth: "0px 0 10px 10px",
            borderColor: "transparent transparent transparent #A8B3F0",
            top: 0,
            right: -10
        }
    },
    receive: {
        background: "#fff",
        borderRadius: "0px 5px 5px 5px",
        float: "left",
        '&:after': {
            borderWidth: "0px 10px 10px 0",
            borderColor: "transparent #fff transparent transparent",
            top: 0,
            left: -10
        }
    }
});

export class ChatSection extends Component {
    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.ref1).focus();
    }
    componentDidUpdate() {
        ReactDOM.findDOMNode(this.refs.ref1).focus();
    }
    render() {
        let { activeChat, classes, users, authedUser, friendChat } = this.props;
        if (!activeChat) {
            return (
                <div>No Chat Selected</div>
            );
        }
        let listOne = users[authedUser].friendList[friendChat];

        return (
            <div className={classes.root}>
                {
                    activeChat.map((chat, index) => {
                        let activeClass = "receive";
                        if (listOne.indexOf(chat.id) > -1) {
                            activeClass = "send";
                        }
                        let addRef = (activeChat.length === (index + 1)) ? true : false;
                        let time = getTime(chat.timestamp);
                        return (
                            <Paper className={`${classes.paper} ${classes.message} ${classes[activeClass]}`} key={chat.id} tabIndex={addRef ? "0" : ""} ref={addRef ? "ref1" : ""}>
                                <Grid container wrap="nowrap" spacing={16}>
                                    <Grid item xs>
                                        <Typography>{chat.text}</Typography>
                                        <Typography className={classes.date}>{time}</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        );
                    })
                }
            </div>
        );
    }
}

function mapStateToProps({ activeChat, users, authedUser, friendChat }) {

    return {
        activeChat,
        users,
        authedUser,
        friendChat
    }
}

export default connect(mapStateToProps)(withStyles(styles)(ChatSection))