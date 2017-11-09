import React, { Component } from 'react';
import axios from 'axios';

class Folder extends Component{
    constructor(props){
        super(props);
        this.state = {
            folderName: '',
            parentId: this.props.parent
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({folderName: event.target.value});
        console.log(this.state);
    }
    handleSubmit(event){
        event.preventDefault();

        let data = new FormData();

        data.append('folderName', this.state.folderName);
        data.append('parentId', this.state.parentId);

        axios.post("http://localhost:8080/folder", this.state)
        .then(response=>{
            console.log(response);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render(){
        return(
            <div>
                <h1>Folder Component</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Folder Name</label>
                    <input type="text" onChange={this.handleChange}/>
                    <input type="submit" value="Create Folder"/>
                </form>
            </div>
        )
    }
}

export default Folder;