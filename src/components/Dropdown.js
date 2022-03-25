import React, { useEffect } from "react";
import {useState} from 'react';
function Dropdown({options, selected, onSelectedChange}){
    useEffect(()=>{
        document.body.addEventListener('click', ()=>{
            setDropdown(false)
        },{capture: true});
    },[])
    const renderedOptions = options.map((option)=>{
        if (option.value === selected.value){
            return null;
        }
        return(
            <div onClick={()=>onSelectedChange(option)}key={option.value} className="item">
                {option.label}
            </div>
        );
    })
    const [dropdown, setDropdown] = useState(false)
return(
    <div className="ui form">
      <div className="field">
          <label className="label">Select a Color</label>
          <div onClick={()=> setDropdown(!dropdown)}
          className={`ui selection dropdown ${dropdown? 'visible active' : ''}`}>
              <i className="dropdown icon"></i>
              <div className="text">{selected.label}</div>
              <div className={`menu  ${dropdown? 'visible transition' : ''}`}>
                  {renderedOptions}
              </div>
          </div>
      </div>
    </div>
)
};

export default Dropdown;