import React from 'react'
import './Info.css'

const Info = (Props) => {
  return (
    <div className='Info'>
        {
            Props.Infor.map((Elem)=>
            {
                return(
                    <div className="A">
                        <div className="Icon-P">
                            <p>{Elem.Name}</p>
                            <img src={Elem.Icon} alt="" />
                        </div>
                        <span>{Elem.Value}</span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Info