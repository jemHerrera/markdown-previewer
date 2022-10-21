import React from 'react';
import Editor from './Editor';
import Previewer from './Previewer';

class MarkDownPreviewer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render(){
    return (
      <div className="App">
        <Editor />
        <Previewer />
      </div>
    )
  }
}

export default MarkDownPreviewer;
