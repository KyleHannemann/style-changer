import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
constructor(props){
  super(props);
  this.state = {
    fontColor: 'black',
    fontSize: 12,
    fontFamily: 'monospace',
    allowEdit: true,
  }
  this.updateColor = this.updateColor.bind(this)
  this.updateSize = this.updateSize.bind(this)
  this.updateFamily = this.updateFamily.bind(this)
  this.updateEditStatus = this.updateEditStatus.bind(this)
}

  // updateColor
updateColor(val){
    this.setState({
      fontColor: val
    })
}
  // updateSize
updateSize(val){
  this.setState({
    fontSize: val
  })
}
  // updateFamily
updateFamily(val){
  this.setState({
    fontFamily: val
  })
  console.log(this.state.allowEdit)
}
  // updateEditStatus
updateEditStatus(val){
  this.setState({allowEdit: val})

  
}
  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={this.updateEditStatus}/>
          <ColorChanger allowEdit={this.state.allowEdit} update={this.updateColor}/>
          <FamilyChanger allowEdit={this.state.allowEdit} update={this.updateFamily}/>
          <SizeChanger allowEdit={this.state.allowEdit} update={this.updateSize}/>
        </div>
        <div className="textArea"><TextContainer fontColor={this.state.fontColor} fontSize={this.state.fontSize} fontFamily={this.state.fontFamily}/></div>
      </div>
    );
  }
}

export default App;
