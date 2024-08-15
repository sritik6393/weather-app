import { useState } from "react";

function LikeButton()
{
let [isLiked,setIsLiked]=useState(false);
let [clicks,setClicks]=useState(0);
let toggle=()=>{
    setIsLiked(!isLiked);
    setClicks(clicks+1);

// console.log("clicked");
}
let likeStyle={color:"red"}
// let likeStyle1={ border:"2px soild red"}
    return <>
    <p>clicks={clicks}</p>
<p onClick={toggle}>

{
      isLiked ? ( <i class="fa-regular fa-heart" ></i> ) :(<i class="fa-solid fa-heart" style={likeStyle}></i>)
      
}
</p>
    </>
}
export default LikeButton