import React from "react";
import axios from "axios";
import {useState, useEffect} from 'react'
function Search(){
    const [searchTerm, setSearchTerm] = useState('pasta')
    const [results, setResults] = useState([])
    useEffect(()=>{
        const search = async () =>{
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: searchTerm
                }
            });
            setResults(data.query.search)
        };
        if (searchTerm && !results.length){
            search();
        }else {
            const timeoutId = setTimeout(()=>{
                if (searchTerm){
                    search();
                }
            },500);
            return ()=> {
                clearTimeout(timeoutId)
            };
        };
       
        
    }, [searchTerm])
    const renderedResults = results.map((result)=>{
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button"
                       href={`http://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                        </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                    
                </div>
            </div>
        )
    })
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
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}
export default Search;