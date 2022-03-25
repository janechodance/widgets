import React from "react";
import { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework.'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among SEs.'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components.',
    }
]
const options =[
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'the color of green',
        value: 'green'
    },
    {
        label: 'the shade of blue',
        value: 'blue'
    }
]

function App(){
    const [selected, setSelected] = useState(options[0])
    
    return(
        <div>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <Dropdown
             selected={selected}
             onSelectedChange={setSelected}
             options={options} /> 
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
            
        </div>
    )
}

export default App;