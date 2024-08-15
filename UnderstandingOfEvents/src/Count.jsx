import { useState } from "react";

function  Count()
{ 
    let [count,setCount]= useState(0);

    let inCount = ()=>{
        setCount(count+1);
        // console.log(count);
    }
   
    return <>
  <h1> count is ={count}</h1>
  <button onClick={inCount} >Count =</button>
    </>
}
export default Count