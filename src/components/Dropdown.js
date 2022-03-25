import React, { useEffect } from "react";
import {useState, useRef} from 'react';
function Dropdown({options, selected, onSelectedChange, label}){
    useEffect(() => {
        const onBodyClick = (event) => {
          if (ref.current.contains(event.target)) {
            return;
          }
          setDropdown(false);
        };
        document.body.addEventListener("click", onBodyClick, { capture: true });
     
        return () => {
          document.body.removeEventListener("click", onBodyClick, {
            capture: true,
          });
        };
      }, []);
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
    const ref = useRef()
return(
    <div ref={ref} className="ui form">
      <div className="field">
          <label className="label">{label}</label>
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