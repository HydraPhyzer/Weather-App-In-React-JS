import React, { useEffect, useState } from 'react'
import './App.css'
import Input from './Components/Input'
import TempDisplay  from './Components/TempDisplay'
import Info from './Components/Info'

const App = () => {
  let [Place , setPlace]=useState('Lahore');
  let [Weather , setWeather]=useState({});
  let [Infor , setInfor]=useState([{}]);

  
  let GetWeatherData=async()=>
  {
    await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e3e5a6e2101943eb83550323222106&q=${Place}&aqi=no`)
    .then((Res)=>
    {
      return Res.json();
    })
    .then((Data)=>
    {
      let {name , country} =Data.location;
      let {temp_c:temp , humidity,cloud,wind_kph,pressure_in}=Data.current;

      let NewObj=
      {
        name,
        country,
        temp
      }
      let Arr=
      [
        {
          Name:"Humidity",
          Value:humidity+' %',
          Icon:'./Icons/Humidity.png'
        },
        {
          Name:"Cloud",
          Value:cloud+' %',
          Icon:'./Icons/Cloud.png'
        },
        {
          Name:"Wind Speed",
          Value:wind_kph+' Kp/h',
          Icon:'./Icons/Wind.png'
        },
        {
          Name:"Pressure",
          Value:pressure_in+' In',
          Icon:'./Icons/Pressure.png'
        }
      ]
      setWeather(NewObj);
      setInfor(Arr);
    })
    .catch((Error)=>
    {
      alert("Error Occured !!");
    })
  }

  useEffect(() => {
    GetWeatherData();
  },[Place])
  
  return (
    <div className="Main">
      <div className="App">
          <Input Get={setPlace}/>

          
          <TempDisplay Weather={Weather}/>

          <Info Infor={Infor}/>
        
      </div>
    </div>
  )
}

export default App