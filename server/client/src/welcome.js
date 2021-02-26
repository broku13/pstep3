import React from 'react';
import {Link, NavLink, Switch, Route } from 'react-router-dom';


function Welcome(){
    return(
        <div>
            <Link to="/login">
                    <button type="button">
                        Log in
                    </button>
            </Link>
            <Link to="/createaccount">
                    <button type="button">
                        Create Account
                    </button>
            </Link>
        </div>
    );
}

export default Welcome