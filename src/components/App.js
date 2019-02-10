import React, { Component } from 'react';
import logo from '../images/icons/Paper-Plane.svg';
import './App.css';


let NavBar = function() {
  return (
    <div>
      <div>user Info</div>
      <div>Search bar</div>
    </div>
  )
}

let frndList = ["user 1", "user 2", "user 3"];

let FriendList = function(){
  return (
    <div>
      {frndList.map((frd) => (<div key={frd}>{frd}</div>))}
    </div>
  );
}

let ListInfo = function() {
  return (
    <div>
      <NavBar />
      <FriendList />
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App" style={{display:"flex"}}>
        <ListInfo />
        <div>Chat window</div>
      </div>
    );
  }
}

export default App;