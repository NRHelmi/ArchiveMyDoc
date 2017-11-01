import React, { Component } from 'react';

class NavBar extends Component{
  render(){
    return(
      <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar bar1"></span>
                        <span className="icon-bar bar2"></span>
                        <span className="icon-bar bar3"></span>
                    </button>
                    <a className="navbar-brand" >Archive My Doc</a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a  className="dropdown-toggle" data-toggle="dropdown">
                                <i className="ti-panel"></i>
								<p>Stats</p>
                            </a>
                        </li>
                        <li className="dropdown">
                              <a  className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="ti-bell"></i>
                                    <p className="notification">5</p>
									<p>Notifications</p>
									<b className="caret"></b>
                              </a>
                              <ul className="dropdown-menu">
                                <li><a >Notification 1</a></li>
                                <li><a >Notification 2</a></li>
                                <li><a >Notification 3</a></li>
                                <li><a >Notification 4</a></li>
                                <li><a >Another notification</a></li>
                              </ul>
                        </li>
						<li>
                            <a >
								<i className="ti-settings"></i>
								<p>Settings</p>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )
  }
}

export default NavBar;