import React from 'react'

const Header = ({addNewTodoItem, isArrowShown, isAllCompleted, markAllTodoItems}) =>{

  let arrowStyle =""
    if(isAllCompleted){
      arrowStyle = "arrow--dark"
    }

  return (
    <header>
      <h1 className="title">
        todos
      </h1>
      <div className="input-wrapper ">
        {(isArrowShown)
          ? 
          <button
            className={"btn arrow " + arrowStyle}
            type="button"
            onClick={markAllTodoItems}>
            {String.fromCharCode(10095)}
          </button>
            : null
        }
        
        <input 
          onKeyDown={addNewTodoItem} 
          type="text" 
          className="input" 
          placeholder="Что надо сделать?"/>
      </div>
  </header>
  )   
}



export default Header