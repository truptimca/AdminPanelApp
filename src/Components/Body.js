import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
//import UserList from '..\Components/UserList';
//import UserProfile from '.\Components\UserProfile.js';
import UserList from './UserList';
import UserProfile from './UserProfile';


const Body = () => {
    return (
        <BrowserRouter>

           <div className="div1">
                <div class="jumbotron">
                    <h1>Admin Panel</h1>
                </div>
          <div>    
        <ul class="nav nav-tabs">
        <li class="nav-item font-weight-bold">
            <Link to="/UserList">UserList</Link>
        </li>
        <li class="nav-item font-weight-bold ">
            <Link to="/UserProfile">UserProfile</Link>
        </li>      
      </ul>
      <Route path="/UserList" exact component={UserList}></Route>
      <Route path="/UserProfile" exact component={UserProfile}></Route>
        </div>
        </div>
            
        </BrowserRouter>
    )
}

export default Body;