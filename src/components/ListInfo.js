import React, { Fragment } from 'react';
import NavBar from "./NavBar";
import FriendList from './FriendList';

const ListInfo = function () {
  return (
    <Fragment>
      <NavBar />
      <FriendList />
    </Fragment>
  );
}

export default ListInfo;