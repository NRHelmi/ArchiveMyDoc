import React, { Component } from 'react';
import Uploader from './Uploader';

class App extends Component{
    render(){
        return(
            <div>
                <h1>Hello</h1>
                <Uploader parent={null}/>
            </div>
        )
    }
}

export default App;