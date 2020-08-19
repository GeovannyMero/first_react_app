import React from 'react';

import './App.css';

// function Helloworld(props){
//   return (
//     <div id="hello">Hello world, {props.text}</div>
//   )
// }

class Helloworld extends React.Component{
  state = {
    show: true
  }

  shown = () =>{
    this.setState({show: false})
  }
  render(){
    if(this.state.show){
      return(
        <div>
        <div id="hello">Hello world, {this.props.text}</div>
        <button onClick={() => this.setState({show: false})}>mostrar</button>
        </div>
        
      )
    }else{
      return (
        <h3>NO</h3>
      )
      
    }
    
  }
}

function App() {
  return (
    <div>
      this is my component: 
        <Helloworld text ="Geovanny Mero"/>
    </div>
  );
}

export default App;
