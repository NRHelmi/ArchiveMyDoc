import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import SideBar   from './components/sidebar/sidebar'
import Dashboard from './components/dashboard/dashboard'
import NavBar    from './components/navbar/navbar'
import Footer    from './components/footer/footer'
import User      from './components/user/user'
import TableList from './components/tableList/tableList'
import Maps       from './components/maps/maps'


class App extends Component{
  render(){
    return(
    <div>
        <BrowserRouter>
        <div className="wrapper">
            <SideBar/>
            <div className="main-panel">
                <NavBar/>
                <div>
                    <Route path="/Dashboard"     component={Dashboard}/>
                    <Route path="/UserProfile"   component={User}/>
                    <Route path="/TableList"     component={TableList}/>
                    <Route path="/Typography"    component={List}/>
                    <Route path="/Icons"         component={List}/>
                    <Route path="/Maps"          component={Maps}/>
                    <Route path="/Notifications" component={List}/>
                </div>
                <Footer/>
            </div> 
        </div>
        </BrowserRouter>
    </div>
    )
  }
}

class List extends Component{
    render(){
        return(
            <div><h1>TODO</h1></div>
        )
    }
}

export default App;
