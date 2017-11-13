import React, { Component } from 'react';

import FileUploader from './FileUploader';
import FolderCreator from './FolderCreator';
import List from './List';

class App extends Component{
    render(){
        return(
            <div>
                <h1>Hello</h1>
                <FileUploader parentId={'none'}/>
                <FolderCreator parentId={'none'}/>
                <List parentId={'none'}/>
            </div>
        )
    }
}

export default App;