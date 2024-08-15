import { useState } from "react";

function Lifting() {
    const [inputvalue, setInputvalue] = useState("");
  return (
    <>
      <Inputcomponent inputvalue={inputvalue}    setInputvalue={setInputvalue}></Inputcomponent>
      <Displaycomponent inputvalue={inputvalue} ></Displaycomponent>
      <h1>{inputvalue} </h1>
    </>
  );
}
export default Lifting;
let Inputcomponent = ( {inputvalue,setInputvalue}) => {
//   const [inputvalue, setInputvalue] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="enter name"
        value={inputvalue}
        onChange={(e) => {
        {setInputvalue( e.target.value)}
        }}
      ></input>
    </>
  );
};
let Displaycomponent = ({ inputvalue,setInputvalue}) => {
  return (
    <>
    <p> dispLAY VALUE IS : {inputvalue}
    </p>

    </>
  );
};
