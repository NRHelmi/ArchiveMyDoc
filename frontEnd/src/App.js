import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component{
  render(){
    return(
    <div>
        <BrowserRouter>
            <div>
                    <Route path="/"           component={Home}/>
                    <Route path="/Upload"     component={Uploader}/>
                    <Route path="/ListFiles"  component={ListFiles}/>
                    <Route path="/restTest"   component={RestCall}/>
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
          <li><a href="/ListFiles">ListFiles</a></li>
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
        <form action="http://localhost:8080/uploadFile" method="POST" encType="multipart/form-data">
          Select File to upload:
          <input type="file" name="file"/>
          <input type="submit" value="Upload File" name="submit"/>
        </form>
      </div>
    )
  }
}

class ListFiles extends Component{
    constructor(props){
      super(props);

      this.state = {
          data: []
      }
  }
  componentDidMount() {
    axios.get('http://localhost:8080/getAllFiles')
    .then(response => {
      console.log(response)
      this.setState({ data: response.data })
    })
    .catch(err => console.log(err))
  }
  render(){
    return(
      <table>
      <tbody>{this.state.data.map(function(item, key) {
               return (
                  <tr key = {key}>
                      <td>{item.filename}</td>
                      <td>{item.uploadDate.$date}</td>
                      <td><button>Download</button></td>
                  </tr>
                )
             })}</tbody>
       </table>
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
      <h1>Test {this.state.message}</h1>
    )}
}

export default App;
