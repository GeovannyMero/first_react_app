import React, { Component } from 'react';

import './App.css';
import  task from './sample/task.json';

//Componentes
import Task from "./components/tasks"
import TaskForm from "./components/TaskForm";

console.log(task);
class App extends Component{

  state = {
    tasks: task
  }

  addTask = (title, description) => {
    console.log('adding task...');
    console.log(title, description);
  }

  render(){
    return <div>
        <TaskForm addTask={this.addTask}/>
        <Task tasks={this.state.tasks}/>
    </div>
  }
}
export default App;
