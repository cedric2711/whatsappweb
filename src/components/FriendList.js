import React from 'react';
import { connect } from 'react-redux';
import FriendListInfo from './FriendListInfo';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      height: 516
    },
  });

const FriendList = function ({ userInfo, filterUsers, classes }) {
    if (!userInfo) {
        return (<div>No List</div>);
    }
    let { friendList } = userInfo;
    let friedIDs = Object.keys(friendList);
    if (filterUsers) {
        friedIDs = friedIDs.filter((frnd) => {
            if (frnd.indexOf(filterUsers) > -1) {
                return true;
            }
            return false;
        })
    }
    
    return (
        <List className={classes.root}>
            {friedIDs.map((frd) => (<FriendListInfo key={frd} friendID={frd} />))}
        </List>
    );
}

function mapStateToProps({ authedUser, users, filterUsers }) {
    let userInfo = (authedUser && users && users[authedUser]) ? users[authedUser] : null;

    return {
        userInfo,
        users,
        filterUsers
    }
}

export default connect(mapStateToProps)(withStyles(styles)(FriendList))