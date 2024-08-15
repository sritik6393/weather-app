    import React, { useState } from 'react';
    import { data } from './Data'
    function Tabbing(){
        const [activeTabs,setActiveTabs]=useState(0);
        const [activeTabscontent,setActiveTabscontent]=useState(data[0]);
       let changedata=(index)=>{

setActiveTabs(index);
setActiveTabscontent(data[index])
       }
        return<div className='Tab'>
    <div className="outerdiv">
    <h1>HI how are you</h1>
    
    <ul>
    {
        data.map((Dataitems,index)=>{
            return(
                <li key={index}> <button className={activeTabs == index ? "Activebutton" : " " } onClick={()=>changedata(index)}>{Dataitems.Title}</button></li>
            )
        })
    }
   
    
    </ul>
    {activeTabscontent!==undefined ?   <p>{activeTabscontent.About}</p> : "" }
  
    </div>
        </div>
    }
    export default Tabbing