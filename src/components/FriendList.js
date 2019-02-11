import React from 'react';
import { connect } from 'react-redux';
import FriendListInfo from './FriendListInfo';

const FriendList = function ({ userInfo, filterUsers }) {
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
        <div>
            {friedIDs.map((frd) => (<FriendListInfo key={frd} friendID={frd} />))}
        </div>
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

export default connect(mapStateToProps)(FriendList)