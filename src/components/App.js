import React, { Component, Fragment } from 'react';
import logo from '../images/icons/Paper-Plane.svg';
import './App.css';
import { connect } from 'react-redux';
import {handleInitialData} from '../actions/shared';
import ListInfo from './ListInfo';
import ChatWindow from './ChatWindow';
import {LoadingBar} from 'react-redux-loading';
import Login from './Login';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    let {authedUser, loading, classes} = this.props;

    return (
      
      <div className={classes.root}>
        <LoadingBar />
        <Grid container justify="center" spacing={24}>
        
        {
          !authedUser?
          <Login />:
          <Fragment>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <ListInfo />
            </Paper>
          </Grid>
          <Grid item xs={8}>
          <Paper className={classes.paper}>
             <ChatWindow/>
          </Paper>
          </Grid>
          </Fragment>
        }
        </Grid>
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
export default connect(mapStateToProps)(withStyles(styles)(App))
