import React, { useContext } from 'react'
import Styles from './App.css';
import Main from './Components/RenderElements/Main';

function App() {

  return (
      <div className='application' style={Styles}>
        <Main/>
      </div>
   
  );
}

export default App;
