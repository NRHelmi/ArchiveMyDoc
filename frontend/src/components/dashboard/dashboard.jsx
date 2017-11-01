import React, { Component } from 'react'

import Capacity     from './childs/capacity'
import Revenue      from './childs/revenue' 
import Errors       from './childs/errors' 
import Followers    from './childs/followers'
import UserBehavior from './childs/userBehavior' 
import EmailStatics from './childs/emailStatics'
import Sales        from './childs/sales'

class Dashboard extends Component{
  render(){
    return(
          <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <Capacity/>
                    <Revenue/>
                    <Errors/>
                    <Followers/>
                </div>
                <div className="row">
                    <UserBehavior/>
                </div>
                <div className="row">
                    <EmailStatics/>
                    <Sales/>
                </div>
            </div>
        </div>
    )
  }
}

export default Dashboard;