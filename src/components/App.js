import React, { Component, Fragment } from 'react';
import logo from '../images/icons/Paper-Plane.svg';
import './App.css';
import { connect } from 'react-redux';
import {handleInitialData} from '../actions/shared';
import ListInfo from './ListInfo';
import ChatWindow from './ChatWindow';
import {LoadingBar} from 'react-redux-loading';
import Login from './Login';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    let {authedUser, loading} = this.props;

    return (
      <div className="App" style={{display:"flex"}}>
        <LoadingBar style={{backgroundColor: "blue", position: "relative", top:"-80px"}}/>
        {
          !authedUser?
          <Login />:
          <Fragment>
            <ListInfo />
            <ChatWindow/>
          </Fragment>
        }
        
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
