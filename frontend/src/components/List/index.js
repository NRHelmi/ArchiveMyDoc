import React, { Component } from 'react';
import Folders from '../Folders';
import Files from '../Files';

class List extends Component{
    constructor(props){
        super(props);
        this.state ={ parentId: this.props.parentId };
    }

    render(){
        return(
            <div>
                <h1>List Component</h1>
                <Folders parentId={'none'} />
                <Files parentId={'none'} />
            </div>
        )
    }
}


export default List;