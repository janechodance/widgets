import React from "react";
import axios from "axios";
import {useState, useEffect} from 'react'
function Search(){
    const [searchTerm, setSearchTerm] = useState('')
    useEffect(()=>{
        const search = async () =>{
            await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: searchTerm
                }
            })
        };
        search()
    }, [searchTerm])
    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" 
                    value={searchTerm} 
                    onChange={(e)=>setSearchTerm(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}
export default Search;