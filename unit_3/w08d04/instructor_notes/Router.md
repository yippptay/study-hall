# React Router

React Router allows you to create the appearance of routes and urls from the front-end in a react application.

# Getting Started

`npm i react-router-dom`

# Example Code

```javascript
import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import Category from './Category';

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <nav className="navbar navbar-light">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/">Homes</Link>
                        </li>
                        <li>
                            <Link to="/category">Category</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/category" component={Category} />
                    <Route path="/products" component={Products} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}
```
