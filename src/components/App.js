import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import ListInfo from './ListInfo';
import ChatWindow from './ChatWindow';
import { LoadingBar } from 'react-redux-loading';
import Login from './Login';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 10
  },
  paper: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "96%"
  },
  listinfo: {
    background: "gainsboro",
    minWidth: 330
  },
  chatwindow: {
    background: "#efe7dd url(https://cloud.githubusercontent.com/assets/398893/15136779/4e765036-1639-11e6-9201-67e728e86f39.jpg) repeat",
    minWidth: 660
  }
});

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    let { authedUser, classes } = this.props;

    return (

      <div className={classes.root}>
        <LoadingBar />
        <Grid container justify="center" spacing={24} style={{ minWidth: 990 }}>
          {
            !authedUser ?
              <Login /> :
              <Fragment>
                <Grid item xs={4}>
                  <Paper className={classNames(classes.paper, classes.listinfo)}>
                    <ListInfo />
                  </Paper>
                </Grid>
                <Grid item xs={8}>
                  <Paper className={classNames(classes.paper, classes.chatwindow)}>
                    <ChatWindow />
                  </Paper>
                </Grid>
              </Fragment>
          }
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, activeChat }) {
  return {
    loading: authedUser === null,
    authedUser,
    activeChat
  }
}

export default connect(mapStateToProps)(withStyles(styles)(App))
