import React, { Component } from 'react';

export default class TodoInput extends Component {
	render() {
		const { input, onChange, onSubmit, isEditing } = this.props;
		return (
			<div className="card card-body my-3">
				<form onSubmit={e => onSubmit(e)}>
					<div className="input-group">
						<div className="input-group-prepend">
							<div className="input-group-text bg-primary text-white">
								<i className="fas fa-book" />
							</div>
						</div>
						<input type="text" className="form-control" placeholder="Add a todo item" 
							   value={input} onChange={e => onChange(e)} />
					</div>
					<button type="submit" className={isEditing ? "btn btn-block btn-success mt-3":
																 "btn btn-block btn-primary mt-3"}>
						{isEditing ? 'Edit Item' : 'Add Item'}
					</button>
				</form>
			</div>
		);
	}
}


