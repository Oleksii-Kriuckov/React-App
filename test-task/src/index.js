import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pages from './Components/ContextData/Pages';
import UsersAll from './Components/ContextData/Users';


export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    pages: new Pages(),
    usersAll: new UsersAll()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
