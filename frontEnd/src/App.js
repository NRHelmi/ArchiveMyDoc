import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component{
  render(){
    return(
    <div>
        <BrowserRouter>
            <div>
                    <Route path="/"       component={Home}/>
                    <Route path="/hello1"  component={HelloWorld}/>
                    <Route path="/hello2"  component={HelloWorld2}/>
            </div>
        </BrowserRouter>
    </div>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/hello1">First</a></li>
          <li><a href="/hello2">Second</a></li>
        </ul>
        <h1> Welcome to ArchiveMyDoc </h1>
      </div>
    );
  }
}

class HelloWorld extends Component{
  render(){
    return(
      <div>
        <h1> Welcome Again </h1>
      </div>
    )
  }
}

class HelloWorld2 extends Component{
  render(){
    return(
      <div>
        <h1> Welcome Another Time </h1>
      </div>
    )
  }
}


export default App;
