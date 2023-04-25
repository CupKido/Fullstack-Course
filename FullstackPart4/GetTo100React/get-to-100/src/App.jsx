import React, { Component } from 'react';
import GetTo100 from './components/GetTo100/getTo100';
import TextEditor from './components/TextEditor/TextEditor';
class App extends Component {
    render() { 
        return (<div>
                <GetTo100 />
                <TextEditor />
            </div>);
    }
}
 
export default App;


