import React from 'react';
import { connect } from 'react-redux';
import FriendListInfo from './FriendListInfo';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import classNames from 'classnames';

const styles = theme => ({
    root: {
        width: '100%',
        minWidth: 325,
        height: 516
    },
    noContact: {
        marginTop: 15
    }
});

const FriendList = function ({ userInfo, filterUsers, classes, users }) {
    if (!userInfo) {
        return (<div>Users info not Available.</div>);
    }
    let { friendList } = userInfo;
    let friedIDs = Object.keys(friendList);
    if (filterUsers) {
        friedIDs = friedIDs.filter((frnd) => {
            let lowerCaseFiter = filterUsers.toLowerCase();
            if (frnd.toLowerCase().indexOf(lowerCaseFiter) > -1 || users[frnd].name.toLowerCase().indexOf(lowerCaseFiter) > -1) {
                return true;
            }
            return false;
        })
    }
    if (friedIDs.length === 0) {
        return (<div className={classNames(classes.root, classes.noContact)}>No Contact to display</div>);
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