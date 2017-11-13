import React, {Component} from 'react';
import service from '../../service';

import { connect } from 'react-redux';
import { setFiles } from '../../actions';

class Files extends Component{
    handleFileDelete(fileId){
        console.log('deleting folders');
        service.deleteFile(fileId.$oid)
        .then(res =>{
            service.getFiles()
            .then(res => {this.props.setFiles(res.data);})
            console.log(res);
        })
        .catch(err =>{console.log(err)});
    }

    componentDidMount(){
        console.log('component files is now mounted');
        
        service.getFilesByParentId(this.props.parentId)
        .then(res =>{
            console.log('files:',res.data);
            this.props.setFiles(res.data);
        })
        .catch(err =>{console.log(err);})
    }
    render(){
        return(
            <div>
                <h1>Files</h1>
                <table>
                    <thead>
                    </thead>
                    <tbody>
                    {
                    this.props.files.map((file, index)=>{
                        return(
                            <tr key={ index }>
                                <td>{ file.filename }</td>
                                <td><input type='button' 
                                            value='Delete'
                                            onClick={() => this.handleFileDelete(file._id)}/>
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


export default connect(mapStateToProps, { setFiles } )(Files);