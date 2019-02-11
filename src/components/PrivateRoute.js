import React from 'react';
import {Redirect, Route} from "react-router-dom";

export const PrivateRoute = ({ component: Component, isLoggedIn, ownProps,  ...rest}) => (
    <Route {...rest} render={(props) => (
        isLoggedIn === true
            ?   <Component {...props} ownProps={ownProps}/>
            :   <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }}/>
    )} />
);
