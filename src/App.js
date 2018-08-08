import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { tasks } from './Task.json';
import TaskForm from './components/TaskForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks
    }
    this.handleAddTask= this.handleAddTask.bind(this);
  }

  handleAddTask(task){
    this.setState({
     tasks: [...this.state.tasks,task]
    })
  }

  removeTodo(index){
    if (window.confirm('are you sure to delete its?')){
      this.setState({
        tasks:this.state.tasks.filter((e, i) => {
          return i !== index
        } )
      })
    }
  }

  render() {
    const tasks = this.state.tasks.map((task, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h4>{task.title}</h4>
              <span className="badge badge-pill badge-danger ml-2">
                {task.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{task.description}</p>
              <p><mark>{task.resposible}</mark></p>
            </div>
            <div className="card-footer">
                <button className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}
                >Delete</button>
            </div>
          </div>
        </div>
      )
    });

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            Task
            <span className="badge badge-pill badge-light ml-2">
              {this.state.tasks.length}
            </span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <img src={logo} className="App-logo" alt="logo" />
              <TaskForm onAddTask={this.handleAddTask}/>
            </div>
            <div className="col-md-9">
              <div className="row">
                {tasks}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
