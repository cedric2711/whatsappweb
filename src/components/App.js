import React, { Component } from 'react';
import logo from '../images/icons/Paper-Plane.svg';
import './App.css';
import { connect } from 'react-redux';
import {handleInitialData} from '../actions/shared';
import ListInfo from './ListInfo';
import ChatWindow from './ChatWindow';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App" style={{display:"flex"}}>
        <ListInfo />
        <ChatWindow/>
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, activeChat, friendChat }) {
  return {
    loading: authedUser === null,
    authedUser,
    activeChat
  }
}

// export default App
export default connect(mapStateToProps)(App)
