import React from 'react'

import ListItem from './ListItem'

const ListOfTodoItems = ({todoItems, checkTodoItem, deleteTodoItem, editTodoItem}) => {
  return (
    <main>
      <ul className="list">
        {todoItems.map( (todo) => (
          <ListItem 
            todo={todo} 
            key={todo.id} 
            checkTodoItem={checkTodoItem} 
            deleteTodoItem={deleteTodoItem} 
            editTodoItem={editTodoItem}/>
            ))}
      </ul>
    </main>
  )
}

export default ListOfTodoItems