import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: `0 ${theme.spacing.unit * 3}px`,
    },
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing.unit}px auto`,
      padding: theme.spacing.unit * 2,
    },
  });

const ChatSection = function ({activeChat, classes, users, authedUser, friendChat}) {
    if(!activeChat){
        return (
            <div>No Chat Selected</div>
        );
    }
    let listOne = users[authedUser].friendList[friendChat];
    let listTwo = users[friendChat].friendList[authedUser];
    return (
        <div className={classes.root}>
            {
                activeChat.map((chat)=> {
                    let activeClass = "leftSide";
                    if(listOne.indexOf(chat.id)> -1){
                        activeClass="rightSide";
                    }

                    return (
                    <Paper className={`${classes.paper} ${activeClass}`} key={chat.id}>
                        <Grid container wrap="nowrap" spacing={16}>
                          <Grid item>
                            <Avatar>W</Avatar>
                          </Grid>
                          <Grid item xs>
                            <Typography>{chat.text}</Typography>
                          </Grid>
                        </Grid>
                    </Paper>
                    );
                })
            }
        </div>
    );
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