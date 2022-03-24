import React from "react";

function Accordion({items}){
   const singleItem= items.map((item)=>{
        return <div key={item.title}>
            <div className="title active">
                <i className="dropdown icon"></i>
            {item.title}</div>
            <div className="content active">
                <p>{item.content}</p>
            </div>
            </div>
    })
    return(
        <div className="ui styled accordion">
            {singleItem}
        </div>
    );
};

export default Accordion