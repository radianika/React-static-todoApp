import React from 'react'


class ListItem extends React.Component{

  constructor(props){
    super(props)
    this.state ={
      isEditable: false,
    }
  }

  editTodo = (event) =>{
    let newTitle = event.target.value;
    this.props.editTodoItem(this.props.todo.id, newTitle)
  }

  stopEditing = (event) =>{
    event.preventDefault();
    if(!this.props.todo.title){
        this.props.deleteTodoItem(this.props.todo.id)
    }

    this.setState({
      isEditable: false
    })
  } 

  render(){

  let {isCompleted, title, id} = this.props.todo;

    return(
      <li 
        className={isCompleted ? "list__item done" : "list__item"}
        onClick={()=>this.props.checkTodoItem(id)}
        onDoubleClick={()=>this.setState({isEditable: true})}>
        { this.state.isEditable
          ? <form 
              onSubmit={this.stopEditing}>
                <input 
                  type="text" 
                  className='list__item--editing'
                  value={title} 
                  onChange={this.editTodo}/>
          </form>
          : <>
            <label>
              <input 
                className="checkbox"
                type="checkbox" 
                defaultChecked={isCompleted}/>
              {title}
            </label> 
                    
            <button 
              className="btn delete-btn" 
              type="button" 
              onClick={()=>this.props.deleteTodoItem(id)}>
              {String.fromCharCode(10005)}
            </button>
          </>
        }
      </li>
    )
  }
}



export default ListItem