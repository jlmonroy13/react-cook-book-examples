import React, { Component } from 'react';
import ls from 'local-storage';
import List from './List';
import uuidv4 from 'uuid/v4';
import './Todo.css';

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      task: '',
      items: []
    };
  }
  componentWillMount() {
    // Setting default tasks...
    const items = ls.get('todoList') || [];
    this.setState({
      items
    });
  }
  handleOnChange = e => {
    const {
      target: { value }
    } = e;
    // Updating our task state with the input value...
    this.setState({
      task: value
    });
  };
  handleOnSubmit = e => {
    // Prevent default to avoid the actual form submit...
    e.preventDefault();
    // Once is submited we reset the task value and we push // the new task to the items array.
    if (this.state.task.trim() !== '') {
      const items = [
        ...this.state.items,
        {
          id: uuidv4(),
          task: this.state.task,
          complete: false
        }
      ];
      this.setState({
        task: '',
        items
      });
      ls.set('todoList', items);
    }
  };
  markAsCompleted = id => {
    const items = this.state.items.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: true
        };
      }
      return task;
    });
    this.setState({
      items
    });
    ls.set('todoList', items);
  };
  removeTask = id => {
    const filteredTasks = this.state.items.filter(task => task.id !== id);
    this.setState({
      items: filteredTasks
    });
    ls.set('todoList', filteredTasks);
  };
  render() {
    return (
      <div className="Todo">
        <h1>New Task:</h1>
        <form onSubmit={this.handleOnSubmit}>
          <input value={this.state.task} onChange={this.handleOnChange} />
        </form>
        <List
          items={this.state.items}
          markAsCompleted={this.markAsCompleted}
          removeTask={this.removeTask}
        />{' '}
      </div>
    );
  }
}
export default Todo;
