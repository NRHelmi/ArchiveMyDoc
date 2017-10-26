import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {getFilesList, getHelloMsg} from '../services/services'


class App extends Component{
  render(){
    return(
    <div className="container-fluid">
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
      <nav className="navbar navbar-default">
        <div className="">
          <ul className="nar navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/Upload">Upload</a></li>
            <li><a href="/ListFiles">ListFiles</a></li>
            <li><a href="/restTest">RestTest</a></li>
          </ul>
        </div>
        </nav>
        <div>
          <h1> Welcome to ArchiveMyDoc </h1>
        </div>
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

   getFilesList().then(response=>{
    this.setState({ data: response.data })
   })
   .catch(error=>{
     console.log(error)
   })
      
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

    getHelloMsg().then(response=>{
      this.setState({ message: response.data })
    })
    .catch(error=>{
      console.log(error)
    })
      
  }
  render(){
    return(
      <h1>Test {this.state.message}</h1>
    )}
}

export default App;
