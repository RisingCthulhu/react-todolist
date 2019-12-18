import React, { Component } from 'react';

export default class TodoItem extends Component {
	render() {
		const { item, deleteItem, editItem } = this.props; 
		return (
			<li className="list-group-item text-capitalize d-flex justify-content-between my-1">
				<h6 className="my-auto">{item.text}</h6>
				<div className="todo-icon">
					<button className="text-success btn" onClick={editItem}>
						<i className="fas fa-pen"></i>
					</button>
					<button className="text-danger btn" onClick={() => deleteItem(item.id)} >
						<i className="fas fa-trash"></i>
					</button>
				</div>
			</li>
		);
	}
}
