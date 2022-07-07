import React from 'react'
import './App.css'
import Input from './Components/Input'
import TempDisplay  from './Components/TempDisplay'

const App = () => {
  return (
    <div className="Main">
      <div className="App">
          <Input/>

          <TempDisplay/>
        
      </div>
    </div>
  )
}

export default App