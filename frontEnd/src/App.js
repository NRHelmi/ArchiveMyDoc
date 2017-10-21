import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component{
  render(){
    return(
    <div>
        <BrowserRouter>
            <div>
                    <Route path="/"        component={Home}/>
                    <Route path="/Upload"  component={Uploader}/>
                    <Route path="/hello2"  component={HelloWorld2}/>
                    <Route path="/restTest"component={RestCall}/>
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
          <li><a href="/Upload">Upload</a></li>
          <li><a href="/hello2">Second</a></li>
          <li><a href="/restTest">RestTest</a></li>
        </ul>
        <h1> Welcome to ArchiveMyDoc </h1>
      </div>
    );
  }
}

class Uploader extends Component{
  render(){
    return(
      <div>
        <form action="http://localhost:8080/uploadFile" method="POST" enctype="multipart/form-data">
          Select File to upload:
          <input type="file" name="file"/>
          <input type="submit" value="Upload File" name="submit"/>
        </form>
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

class RestCall extends Component{
  constructor(props){
      super(props);

      this.state = {
          message: ''
      }
  }
  componentDidMount() {
    axios.get('http://localhost:8080/')
    .then(response => {
      console.log(response)
      this.setState({ message: response.data })
    })
    .catch(err => console.log(err))
  }
  render(){
    return(
      <h1>{this.state.message}</h1>
    )}
}

export default App;
