import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class SideBar extends Component{
    render(){
        return(
            <div className="sidebar" data-background-color="white" data-active-color="danger">
            <div>
    	        <div className="sidebar-wrapper">
                <div className="logo">
                    <a className="simple-text">
                      My App
                    </a>
                </div>

                <ul className="nav">
                    {/*className="active"*/}
                    <li>
                      <Link to="/Dashboard">
                           <i className="ti-panel"></i>
                           <p>Dashboard</p>
                      </Link>  
                    </li>
                    <li>
                      <Link to="/UserProfile">
                          <i className="ti-user"></i>
                          <p>User Profile</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/TableList">
                          <i className="ti-view-list-alt"></i>
                          <p>Table List</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Typography">
                          <i className="ti-text"></i>
                          <p>Typography</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Icons">
                          <i className="ti-pencil-alt2"></i>
                          <p>Icons</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Maps">
                          <i className="ti-map"></i>
                          <p>Maps</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Notifications">
                          <i className="ti-bell"></i>
                          <p>Notifications</p>
                      </Link>
                    </li>
                </ul>
    	    </div>
        </div>
    </div>
        )
    }
}

export default SideBar;