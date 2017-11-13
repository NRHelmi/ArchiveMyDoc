import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setFiles } from '../../actions';

import service from '../../service';

class FileUploader extends Component{
    constructor(props){
        super(props);
        this.state = {
            file: [],
            parentId: this.props.parentId
        }
        this.handleFile   = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        let data = new FormData();

        data.append('file', this.state.file[0]);
        data.append('parentId', this.state.parentId);

        service.uploadFile(data)
        .then(res => {
            this.setState({file: []});
            service.getFiles()
            .then(res => {
                this.props.setFiles(res.data);
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    handleFile(e){
        
        let content = this.state.file;
        content.push(e.target.files[0]);

        this.setState({file: content});

        console.log("state",this.state);
        //console.log(service.hello())
    }

    render(){
        return(
            <div>
                <h1>File Uploader Component</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="file" onChange={this.handleFile}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null , { setFiles } )(FileUploader);