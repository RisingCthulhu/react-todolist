import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'

import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList' 


class App extends Component {
  state = {
    input: '',
    todoItems: [],
    isEditing: false,
    id: uuid(),
    index: 0
  }
  onChange = e => 
    this.setState({
      input: e.target.value
    })
  onSubmit = e => {
    e.preventDefault();
    const newItem = { id: this.state.id, text: this.state.input };
    console.log([...this.state.todoItems].splice(this.state.index, 0, newItem), newItem)
    this.setState({
      todoItems: this.state.isEditing ? this.insertItem(newItem) : [...this.state.todoItems, newItem],
      input: '',
      isEditing: false,
      id: uuid()
    })
  }
  clearList = () => {
    this.setState({
      todoItems: []
    })
  }
  deleteItem = id => {
    this.setState({
      todoItems: this.state.todoItems.filter((item) => item.id !== id)
    })
  }
  editItem = id => {
    const itemToEdit = this.state.todoItems.find((item, index) => {
      this.setState({
        index: index
      })
      return item.id === id
    })
    this.setState({
      todoItems: this.state.todoItems.filter((item) => item.id !== id),
      input: itemToEdit.text,
      isEditing: true,
      id: id
    })
  }
  insertItem = newItem => {
        let todoItems = [...this.state.todoItems];
        todoItems.splice(this.state.index, 0, newItem)  
        return todoItems
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput input={this.state.input} onChange={this.onChange} 
                       onSubmit={this.onSubmit} isEditing={this.state.isEditing} />
            <TodoList todoItems={this.state.todoItems} clearList={this.clearList} deleteItem={this.deleteItem} editItem={this.editItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
