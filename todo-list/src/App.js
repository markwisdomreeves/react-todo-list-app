import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


// BECAUSE WE ARE USING BOOTSTRAP IN OUR PROJECT, WE AE IMPORTING THE THE FILE HERE
import "bootstrap/dist/css/bootstrap.min.css";
// WE ARE IMPORTING THE UUID FOR A UNIQUE USER ID
import uuid from "uuid";
// NOTE THAT WE ARE PUTTING THE FONT-AWESOME FILE IN THE PUBLIC FOLDER, IN THE INDEX.HTML FILE AND NOT HERE

class App extends Component {
  // OUR FIRST STEP IS TO CREATE A STATE TO STORE THE USER DATA OR ITEMS
  state = {
    items: [],
    id: uuid(),   // WE ARE USING THE UUID FOR A UNIQUE USER ID HERE
    item: "",
    editItem: false
  }

  // THIS HANDLECHANGE METHOD WILL KEEP THE USER INPUT VALUE IN THE 
  // ITEM VARIABLE THAT IS IN THE STATE
  handleChange = (event) => {
    // WE ARE USING THE SETSTATE KEYWORD TO DO THAT
    this.setState({
      item: event.target.value
    });
  };

  // WE ARE CREATING A HANDLESUBMIT METHOD TO HANDLE THE SUBMIT ACTION OF THE OUR FORM
  handleSubmit = event => {
    event.preventDefault();

    // ATER THAT, WE ARE HANDLING THE USER INPUT DATA AND PLACING IT A NEW OBJECT VARIABLE
    // THAN LATER, WE USE THE SPREAD OPERATOR TO ADD IT TO OUR OLD ITEMS ARRAY THAT WE CREATED BEFORE.
    // WE ARE USING THE SPREAD OPERATOR BECAUSE THAT DATA CAN NOT CHANGE OR MUTITED
    const newItem = {
      id: this.state.id,
      title: this.state.item
    } 
    // console.log(newItem);

    // THEN, HERE WE ARE USING THE SPREAD OPARATOR TO PLACE OUR NEW ITEMS OBJECT INPUT DATA
    // AND OUR OLD ITEMS ARRAY DATA VARIABLE TOGETHER IN ONE ARRAY THAT IS CALLED UPDATEDITEMS
    const uppdatedItems = [...this.state.items, newItem];
    //THEN AFTER THAT, WE ARE SETING BOTH OBJECT THAT IS IN UPDATEDITEMS TO THE ITEMS VARIABLE
    // IN A SETSTATE METHOD AND THEN WE CLEAR THE INPUT
    this.setState({
      items: uppdatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  };

  // THIS METHOD WILL THE ALL THE ITEMS BY SETTING THE ITEMS ARRAY TO AN ENPTY ARRAY
  clearList = ()=> {
    this.setState({
      items: []
    });
  };

  // WE CREATE A METHOD TO HANDLE THE PROCESS OF DELETING
  // A SINGLE ITEM AS WE PLEASED
  handleDelete = (id) => {
    // BECAUSE THE ARRAY FILTER METHOD ALWAYS RETURN A NEW ITEM OR ARRAY, SO
    // WE ARE USING IT FILTER THE ITEMS ARRAY AND RETURN ONLY THE ID THAT DO NOT MATCH THE ID WE PASSED IN
    const filteredItems = this.state.items.filter(item => item.id !==id);
    // than, we are changing or clearing the item from the item array
    this.setState({
      items: filteredItems
    });    
  };

  // WE CREATE A METHOD TO HANDLE THE PROCESS OF EDIT AND WE ARE DOING THE SAME AS A FILTER ARRAY FUNCTION
  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !==id);

    // AND THEN, WE ARE USING THE FIND METHOD ON IT TO CHECK IF OUR
    // CURRENT ITEM ID MATCH IT, THEN WE WILL GET IT
    const selectedItem = this.state.items.find(item => item.id === id);
    // console.log(selectedItem);

    // WE ARE SETTING THE FILTLEREDITEM BACK TO OUR ITEM ARRAY AGAIN
    // MAINING WE ARE CLEARING THE ARRAY
    this.setState({
      items: filteredItems,
      // AND HERE, WE ARE SETTING THE SELECTEDITEM TO THE THE SINGLE ITEM TITLE
      item: selectedItem.title,
      // AND NOW WE ARE SETTING THE EDITITEM FROM OUR STATE METHOD TO TRUE
      // AND SETTING THE THAT ID AS THE ITEM ID
      editItem: true,
      id:id
    });
  };


  render() {
    return (
      <div className="container">
      <u><h5 className="text-center text-uppercase font-weight-bold mt-3"
       >todo list app built with react.js and bootstrap</h5></u>
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
              {/* WE ARE PASSING INTO INPUT BOTH THE THIS.STATE.ITEM AND THE HANDLECHANGE METHOD */}
              <TodoInput 
                item={this.state.item} 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              {/* BECAUSE WE WANT TO DO SOMETHING TO THE USER INPUT,
              SO, WE ARE PASSING THE DATA WE GET BACK FROM THE USER AS A PROPS HERE IN THE TODOLIST COMPONENT */}
              <TodoList 
               items={this.state.items}
               clearList={this.clearList}
               handleDelete={this.handleDelete}
               handleEdit={this.handleEdit}
              />
          </div>
        </div>
      </div>  
    );
   };
};
  

export default App;
