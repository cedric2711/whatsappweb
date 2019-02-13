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
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Cancel from '@material-ui/icons/Cancel';
import Search from '@material-ui/icons/Search';
import ArrowBack from '@material-ui/icons/ArrowBack';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  withoutBorder:{
    '&:before':{
      borderBottom: 0
    },
    '&:after':{
      borderBottom: 0
    },
    '&:hover':{
      borderBottom: 0
    }
  },
  withoutLabel: {
    borderRadius: 24,
    marginTop: 11,
    background: "white"
  },
});


export class NavBar extends Component{
  state ={
    searchText: ""
  }
  logout = (e) =>{
    this.props.dispatch(logout());
  };

  updateSearch =(e)=> (this.setState({searchText:e.target.value}));

  resetSearch = (e) =>{
    let {searchText} = this.state;
    if(searchText){
      this.setState({searchText:""})
      this.props.dispatch(setFilter(null));
    }
  };

  checkForEnter = (e) => {
      if(e.key === "Enter"){
          this.updateFriendList();
      }
      
      if(e.key==="Backspace" && e.target.value.length===1) {
        this.resetSearch(e);
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
        <FormControl
          className={classNames(classes.withoutLabel)}
          fullWidth
          variant="filled"
        >
          <Input
            id="adornment-weight"
            value={searchText}
            className={classes.withoutBorder}
            onChange={(e)=>this.updateSearch(e)}
            onKeyDown={(e)=> this.checkForEnter(e)}
            aria-describedby="weight-helper-text"
            startAdornment={
              <InputAdornment position="end">
                <IconButton
                aria-label="Toggle password visibility"
                onClick={this.resetSearch}
                >
                {searchText?<ArrowBack/>:<Search/>}
              </IconButton>
              </InputAdornment>
            }
            endAdornment={<InputAdornment position="end">
            <IconButton
            aria-label="Toggle password visibility"
            onClick={this.resetSearch}
            >
            {searchText?<Cancel/>:""}
          </IconButton>
          </InputAdornment>}
            inputProps={{
              'aria-label': 'Weight',
            }}
          />
        </FormControl>
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