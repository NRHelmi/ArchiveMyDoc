import React, { Component } from 'react';
import service from '../../service';
import { connect } from 'react-redux';
import { setFolders } from '../../actions';

class FolderCreator extends Component{
    constructor(props){
        super(props);
        this.state = {
            folderName: '',
            parentId: this.props.parentId
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({folderName: event.target.value});
        console.log(this.state);
    }

    handleSubmit(event){
        //event.preventDefault();

        service.createFolder(this.state)
        .then(response =>{
            console.log(response);
            service.getFolders()
            .then(res => {this.props.setFolders(res.data)});
            event.target.value = '';
        })
        .catch(err =>{
            console.log(err);
        })
    }
    render(){
        return(
            <div>
                <h1>FolderCreator Component</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Folder Name</label>
                    <input type="text" onChange={this.handleChange}/>
                    <input type="submit" value="Create Folder"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {setFolders})(FolderCreator);