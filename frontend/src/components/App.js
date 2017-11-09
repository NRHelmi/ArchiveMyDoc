import React, { Component } from 'react';
import Uploader from './Uploader';
import Folder from './Folder';

class App extends Component{
    render(){
        return(
            <div>
                <h1>Hello</h1>
                <Uploader parentId={null}/>
                <Folder parentId={null}/>
            </div>
        )
    }
}

export default App;