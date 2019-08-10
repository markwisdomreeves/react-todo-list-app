import React, { Component } from 'react';


class TodoItem extends Component {
    render() {
        // AGAIN WE ARE GETTING THE TITLE VARIABLE THAT WE PASSED
        // AS A PROPS IN THE TODOLIST COMPONENT, AND LASTLY
        // WE ARE DECONSTRUCTING IT AND RENDERING IT TO THE PAGE
        const { title, handleDelete, handleEdit } = this.props;
        return (
        // THIS IS THE TODO LIST ITEMS COMPONENT
        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
            <h6>{title}</h6>
            <div className="todo-icon">
                <span className="mx-2 text-success" 
                      onClick={handleEdit}>
                   <i className="fas fa-pen" 
                    title="Edit Item"/>
                </span>
                {/* AND LASTLY, WE ARE USING IT HERE */}
                <span className="mx-2 text-danger" 
                           onClick={handleDelete}>
                    <i className="fas fa-trash" 
                    title="Delete Item"/>
                </span>
            </div>
        </li>
            
        );
    }
}

export default TodoItem;
