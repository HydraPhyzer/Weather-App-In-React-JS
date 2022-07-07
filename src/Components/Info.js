import React from 'react'
import './Info.css'

const Info = (Props) => {
  return (
    <div className='Info'>
        {
            Props.Infor.map((Elem , Ind)=>
            {
                return(
                    <div className="A" key={Ind}>
                        <div className="Icon-P">
                            <p>
                                <img src={Elem.Icon} alt="" />
                                {Elem.Name}
                            </p>
                            
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