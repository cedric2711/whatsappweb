import React, {Component} from 'react';
import { connect } from 'react-redux';
import {logout} from '../actions/shared';
import {setFilter} from '../actions/filterUsers';

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
  return (
      <nav>
        <div>
          <span>user Name</span>
          <button onClick={(e)=>this.logout(e)}>logout</button>
        </div>
        <div>
          <input onChange={(e)=>this.updateSearch(e)} onKeyDown={(e)=> this.checkForEnter(e)} value={searchText}/>
        </div>
      </nav>
    )
  }
}

export default connect(null)(NavBar)