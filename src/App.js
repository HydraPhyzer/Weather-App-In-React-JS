import React from 'react'
import './App.css'
import Input from './Components/Input'
import TempDisplay  from './Components/TempDisplay'
import Info from './Components/Info'

const App = () => {
  return (
    <div className="Main">
      <div className="App">
          <Input/>

          <TempDisplay/>

          <Info/>
        
      </div>
    </div>
  )
}

export default App