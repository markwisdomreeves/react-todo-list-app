import React, { Component } from 'react';

class TodoInput extends Component {
    render() {
        // WE ARE DECONSTRUCTING OUR ITEM AND METHOD HERE
        const {item, handleChange, handleSubmit, editItem} = this.props;
        return (
            // THIS IS THE TODO LIST INPUT COMPONENT THAT IS RESPONSIBLE FOR THE USER INPUT SECTION
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group"> 
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book" />
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalize" 
                         placeholder="add a todo item"
                         value={item}
                         onChange={handleChange}
                         />
                    </div>
                    {/* WE ARE USING A CONDITION ON THIS BUTTON THAT IF THE EDITITEM VARIABLE IS TRUE
                     THE BUTTON SHOULD CHANGE TO BLUE AND IT TEXT BUT IF IS FALSE, IT SHOULD REMAIN RED*/}
                    <button type="submit" className="text-capitalize"
                        className={
                            editItem
                            ? "btn btn-block btn-success text-capitalize mt-3"
                            : "btn btn-block btn-primary text-capitalize mt-3"
                        }
                        > 
                        {editItem ? "edit item" : "add item"}
                    </button>
                </form>
            </div>
        );
    }
}

export default TodoInput;