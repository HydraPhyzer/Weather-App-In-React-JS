import React, { useState } from 'react'
import './Input.css'

const Input = (Props) => {
    let [Inp,setInp]=useState('');

    let HandleInp=()=>
    {
        if(Inp==='')
        alert("Input Field Can't be Blank !!");

        else
        {
            Props.Get(Inp)
        }
    }
    return (
        <div className='Inp'>
            <input type="text" placeholder='Enter Any City' onChange={(E)=>{setInp(E.target.value)}} value={Inp}/>
            <button onClick={()=>{HandleInp()}}>Search</button>
        </div>
    )
}

export default Input