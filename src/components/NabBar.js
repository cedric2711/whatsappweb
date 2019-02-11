import React, {Component} from 'react';
import { connect } from 'react-redux';
import {logout} from '../actions/shared';
import {setFilter} from '../actions/filterUsers';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});


class NavBar extends Component{
  state ={
    searchText: ""
  }
  logout = (e) =>{
    this.props.dispatch(logout());
  };

  updateSearch =(e)=> (this.setState({searchText:e.target.value}));

  checkForEnter = (e) => {
      if(e.key === 'Enter'){
          this.updateFriendList();
      }
  }

  updateFriendList =(e) =>{
    this.props.dispatch(setFilter(this.state.searchText));
  }
  render() { 
  let {searchText} = this.state;
  let {classes, user} = this.props;
  return (
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Avatar alt={user.name} src={require(`../${user.avatarURL}`)} className={classes.bigAvatar} />
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {user.name}
          </Typography>
          <Button color="inherit" onClick={(e)=>this.logout(e)}>Logout</Button>
        </Toolbar>
      </AppBar>
      {/* <form className={classes.container} noValidate autoComplete="off"> */}
        <TextField
          id="filter-user"
          label="Search"
          className={classes.textField}
          value={searchText}
          onChange={(e)=>this.updateSearch(e)}
          onKeyDown={(e)=> this.checkForEnter(e)}
          margin="normal"
          variant="filled"
        />
      {/* </form> */}
        {/* <div>
          <input onChange={(e)=>this.updateSearch(e)} onKeyDown={(e)=> this.checkForEnter(e)} value={searchText}/>
        </div> */}
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    user: users[authedUser]
  }
}
export default connect(mapStateToProps)(withStyles(styles)(NavBar))