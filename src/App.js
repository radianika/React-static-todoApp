import React from 'react';

import './App.css';
import Header from './Components/Header'
import ListOfTodoItems from './Components/ListOfTodoItems'
import Footer  from './Components/Footer'


class App extends React.Component {
  constructor(){
    super()
    this.state={
      toDoItems:[],
      displayedItemsIdentificator: 'all',
      count: 1,
    }
  }

  addNewTodo = (event) =>{
    if(event.key !== 'Enter' || !event.target.value) return;

    let newToDo = {
      id: this.state.count,
      title: event.target.value,
      isCompleted: false
    }
    event.target.value = null;

    this.setState( (preventState) => {
      return {
        toDoItems:[...preventState.toDoItems, newToDo],
        count: preventState.count + 1,
      }
    })
  }

  checkToDoItem = (todoId) => {
    this.setState(preventState => {
      const updatedTodos = preventState.toDoItems.map( todo => {
        if (todo.id === todoId){       
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })

      return {toDoItems: updatedTodos }
    })
  }

  changingItemInArray = (todoId, newTitle) =>{
    this.setState(preventState => {
      const updatedTodos = preventState.toDoItems.map( todo => {
        if (todo.id !== todoId){  
          return todo     
        } 
        return {...todo, title: newTitle}
      })
    
      return {toDoItems: updatedTodos }
    })
  }

  deleteToDoItem = (todoId) => {
    this.setState(preventState => {
      const updatedTodos = [...preventState.toDoItems].filter(todo => (todo.id !== todoId))
      return {toDoItems: updatedTodos }
    })
  }

  deleteCompletedItems = () =>{
    const onlyActiveTodos = [...this.state.toDoItems].filter(todo => (todo.isCompleted !== true));

    let identificator = (onlyActiveTodos.length === 0)
      ? 'all'
      : this.state.displayedItemsIdentificator;

    this.setState(
      {toDoItems: onlyActiveTodos,
      displayedItemsIdentificator: identificator}
    )
  }

  markAll = () =>{
    let mark = true;
    if(this.state.toDoItems.filter(todo => !todo.isCompleted).length === 0){
      mark = false
    }
    this.setState(preventState => {
    let markedItems = preventState.toDoItems.map(todo=> {return {...todo, isCompleted:mark}});

    return {
      toDoItems: markedItems
    }
    })
  }

  showCurrentItems = (identificator) => {
    this.setState({ displayedItemsIdentificator: identificator})
  }

  filtered = (identificator) => {
    let  displayedItems = [];

    switch (identificator || this.state.displayedItemsIdentificator){
      case "active":
        displayedItems = this.state.toDoItems.filter(todo => !todo.isCompleted);
      break;

      case "completed":
        displayedItems = this.state.toDoItems.filter(item => item.isCompleted);
      break;

      case "all":
      default:
        displayedItems = this.state.toDoItems
    }

    return displayedItems
  }


  render(){ 

    let rendered = this.filtered(); 
    let isShown  = this.state.toDoItems.length > 0;
    let isAllCompleted = (this.state.toDoItems.length === this.filtered('completed').length);

    return (
      <div className="app">
        <Header 
          addNewTodoItem={this.addNewTodo} 
          markAllTodoItems={this.markAll} 
          isArrowShown={isShown} 
          isAllCompleted={isAllCompleted}/>

        {(isShown) 
          ?<>
          <ListOfTodoItems
            todoItems={rendered} 
            checkTodoItem={this.checkToDoItem} 
            deleteTodoItem={this.deleteToDoItem} 
            editTodoItem={this.changingItemInArray}/>
          <Footer 
            numberOfActiveTasks={this.filtered('active').length} 
            showFilteredItems={this.showCurrentItems} 
            displayedItemsIdentificator={this.state.displayedItemsIdentificator} 
            deleteCompletedItems={this.deleteCompletedItems}/>
          </>   
          : null}
      </div>
    )
  }
}

export default App;
