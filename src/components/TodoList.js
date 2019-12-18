import React, { Component } from 'react';

import TodoItem from './TodoItem'

export default class TodoList extends Component {
	render() {
		const { todoItems, clearList, deleteItem, editItem } = this.props;
		return (
			<ul className="list-group my-5">
				<h3 className="text-center">Todo List</h3>
				{ todoItems.map((item) => <TodoItem key={item.id} item={item} deleteItem={deleteItem} editItem={() => editItem(item.id)} />)}
				<button type="button" className="btn btn-danger btn-block mt-5" onClick={clearList} >
					Clear List
				</button>
			</ul>
		);
	}
}
