import React, { Component } from 'react';
import axios from 'axios';

class Uploader extends Component{
    constructor(props){
        super(props);
        this.state = {
            file: [],
            parent: this.props.parent
        }
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit     = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        let data = new FormData();

        data.append('file', this.state.file[0]);
        data.append('parent', this.state.parent);

        axios.post('http://localhost:8080/file', data)
        .then(response=>{
            console.log(response);
            this.setState({file: []});
        })
        .catch(error=>{
            console.log(error);
        })
    }

    handleFile(e){
        
        let content = this.state.file;
        content.push(e.target.files[0]);

        this.setState({file: content});

        console.log("state",this.state);
        
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="file" onChange={this.handleFile}/>
                <input type="submit"/>
            </form>
        )
    }
}

export default Uploader;