import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        // THAN WE ARE GETING ITEMS THAT WE PASS A PROPS IN THE
        // APP COMPONENT HERE AND DESTRUCTING IT HERE
        const { items, clearList, handleDelete, handleEdit } = this.props
        return (
            // THIS IS THE TODO LIST COMPONENT THAT SERVES AS OUR TODO LIST CONTAINER
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {/* AND WE ARE RENDING IT HERE IN THE TODOITEM COMPONENT AND 
                USING THE MAP METHOD TO LOOP THROUGH EACH AND EVERY ITEM OF THE USER INPUT ITEMS */}
                {items.map(item => {
                    return <TodoItem key={item.id} 
                                title={item.title} 
                                // NOTE THAT THE ABOVE WE ARE PASSING AS PROPS, BUT AS FOR
                                // THIS HANDLEDELETE METHOD, WE ARE ALSO PASSING IT AS PROPS
                                // TO THE TODOLIST ITEM COMPONENT, BECAUSE THEY ARE THE ONE
                                // WHO NEED IT TO WORK WITH IT ON THE INDIVIDUAL ITEM, 
                                // AND WE ARE PASSING IT WITH THE ITEM ID USING AN ARROW FUNCTION
                                handleDelete={()=> handleDelete(item.id)}
                                handleEdit={()=> handleEdit(item.id)}
                            />;
                    })}

                <button type="button" className="btn btn-danger 
                   btn-block text-capitalize mt-5" onClick={clearList}>
                   clear list
                </button>
            </ul>    
        );
    }
}

export default TodoList;
