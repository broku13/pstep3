import React from 'react';
import Home from './home';
import Product from './products';
import Customer from './customers';
import Categories from './categories';
import {Link, NavLink, useRouteMatch, Route, Switch} from 'react-router-dom';
import Orders from './orders';

function Navbar(){
    const { url, path } = useRouteMatch();
    console.log('url:');
    console.log(url);
    console.log('path:');
    console.log(path);
    return (
        <div>
            <ul id="nav">
                <li><Link to={`${url}`} className='home'>Home</Link></li>
                <li><NavLink to={`${url}/products`}>Products</NavLink></li>
                <li><NavLink to={`${url}/orders`}>Orders</NavLink></li>
                <li><NavLink to={`${url}/customers`}>Customers</NavLink></li>
                <li><NavLink to={`${url}/productcategories`}>Categories</NavLink></li>
            </ul>
            <Switch>
                <Route exact path={`${path}`}>
                    <Home/>
                </Route>
                <Route path={`${path}/products`}>
                    <Product/>
                </Route>
                <Route path={`${path}/orders`}>
                    <Orders/>
                </Route>
                <Route path={`${path}/customers`}>
                    <Customer/>
                </Route>
                <Route path={`${path}/productcategories`}>
                    <Categories/>
                </Route>
            </Switch>
        </div>
    );
}

export default Navbar