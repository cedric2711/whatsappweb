import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setAuthedUser} from '../actions/authedUser';

class Login extends Component {
    selectUser = (e) =>{
        debugger;
        this.props.dispatch(setAuthedUser(e.target.value));
    }
    render () {
        let {usersID} = this.props;
        
        return (
            <div>
                <h4>Welcome - Login</h4>
                <select onChange= {(e)=> this.selectUser(e)}>
                    <option value="" disabled={true} selected={true} defaultValue={true}>Select Users</option>
                    {
                        usersID.map((id) =>(<option key={id} value={id}>{id}</option>))
                    }
                </select>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users,
        usersID: Object.keys(users)
    }
}

export default connect(mapStateToProps)(Login)