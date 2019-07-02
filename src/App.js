import React from 'react';

import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1 className="title">todos</h1>
        <input type="text" className="input" placeholder="What needs to be done?"/>
      </header>
      <main>
        <ul className="list">
          <li className="list__item"><label><input className="checkbox" type="checkbox" />First</label> <button className="btn delete-btn" type="button">{String.fromCharCode(10005)}</button></li>
          <li className="list__item"><label><input className="checkbox" type="checkbox" />Second</label><button className="btn delete-btn" type="button">{String.fromCharCode(10005)}</button></li>
          <li className="list__item"><label><input className="checkbox" type="checkbox" />Third</label><button className="btn delete-btn" type="button">{String.fromCharCode(10005)}</button></li>
        </ul>
      </main>
      <footer className="nav">
        <p> 3 items left</p>
        <div>
          <button className="btn nav__btn" type="button">All</button>
          <button className="btn nav__btn" type="button">Active</button>
          <button className="btn nav__btn" type="button">Complited</button>
        </div>
        <button className="btn" type="button">Clear complited</button>
      </footer>
    </div>
  );
}

export default App;
