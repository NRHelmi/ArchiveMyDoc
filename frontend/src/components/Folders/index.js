import React, { Component } from 'react';
import service from '../../service';

import { connect } from 'react-redux';
import { setFolders } from '../../actions';

import List from '../List';

class Folders extends Component {
    handleFolderDelete(folderId){
        console.log('deleting folders');
        service.deleteFolder(folderId)
        .then(res =>{
            service.getFolders()
            .then(res => {this.props.setFolders(res.data);})
            console.log(res);
        })
        .catch(err =>{console.log(err)});
    }

    componentDidMount(){
        console.log('component list is now mounted');
        
        service.getFoldersByParentId(this.props.parentId)
        .then(res =>{
            //console.log(res.data);
            this.props.setFolders(res.data);
        })
        .catch(err =>{console.log(err);})

        service.getFiles()
        .then(res =>{
            console.log(res.data);
            this.props.setFiles(res.data);   
        })
        .catch(err =>{console.log(err);})
    }
    render(){
        return(
            <div>
                <h1>Folders</h1>
                <table>
                    <thead>
                    </thead>
                    <tbody>
                    {
                    this.props.folders.map((folder, index)=>{
                        return(
                            <tr key={ index }>
                                <td onClick={()=>{
                                    console.log('Click');
                                    return <List parent={folder.id} />}}>{ folder.folderName }</td>
                                <td><input type='button' 
                                            value='Delete'
                                            onClick={() => this.handleFolderDelete(folder.id)}/>
                                </td>
                            </tr>
                            )
                                
                        })
                    } 
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}


export default connect(mapStateToProps, { setFolders } )(Folders);