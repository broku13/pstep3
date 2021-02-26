import React from 'react';
import {Link, NavLink, Switch, Route } from 'react-router-dom';


function CreateAccount(){
    return(
        <div>
            <form>
                <label>
                    Username
                    <input
                    type="text"
                    />
                </label>
                <label>
                    Password
                    <input
                    type="text"
                    />
                </label>
                <label>
                    Re-Enter Password
                    <input
                    type="text"
                    />
                </label>
                <Link to="/login">
                    <button type="button">
                        Create Account
                    </button>
                </Link>
                {/* {this.state.error && <p>You need to have both a url and a caption</p>} */}
            </form>
        </div>
    );
}

export default CreateAccount;