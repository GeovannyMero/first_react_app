import React, { Component } from 'react';

import './App.css';
import  task from './sample/task.json';
import Task from "./components/tasks"

console.log(task);
class App extends Component{

  state = {
    tasks: task
  }

  render(){
    return <div>
        <Task tasks={this.state.tasks}/>
    </div>
  }
}
export default App;
