import React from 'react'


const Footer = ({numberOfActiveTasks, showFilteredItems, displayedItemsIdentificator, deleteCompletedItems}) => {
  

  const casesForDeclination = [2, 0, 1, 1, 1, 2];
  const declinationOptions = ['дело', 'дела', 'дел'] 

  const word =  declinationOptions[ ( numberOfActiveTasks%100 > 4 && numberOfActiveTasks%100 < 20)
                  ? 2 
                  : casesForDeclination[ (numberOfActiveTasks%10 < 5)
                    ? numberOfActiveTasks%10
                    : 5 ] 
                  ];  
  
  return (
    <footer className="navigation">

      <p> {numberOfActiveTasks} {word} осталось</p>

      <div>
        <button 
          className = {"btn navigation__btn " + ((displayedItemsIdentificator==="all") ? ' active' : '')} 
          type = "button" 
          onClick = { () => showFilteredItems('all')}>
          Все
        </button>

        <button 
          className = {"btn navigation__btn" + ((displayedItemsIdentificator==="active") ? ' active' : '')} 
          type="button" 
          onClick={ () => showFilteredItems('active')}>
          Активные
        </button>

        <button 
          className = {"btn navigation__btn" + ((displayedItemsIdentificator==="completed") ? ' active' : '')}
          type="button"
          onClick={ () => showFilteredItems('completed')}>
          Завершённые
        </button>
      </div>

      <button 
        className="btn" 
        type="button" 
        onClick={deleteCompletedItems}>
        Очистить завершённые
      </button>

    </footer>
  )
}

export default Footer