import React , {useState} from 'react';

//child component of A
export default function B({cendrol , setCendrol}) { //destructure the prop which is coming from Parent component A
  return (
    <>
    {/* read the value of prop */}
    <h1>{cendrol}</h1>  
    {/* added on onClick event and from that using setter function which is also cominf from prop */}
    <button style={{backgroundColor : "green" , color : "white"}} onClick={()=>setCendrol(cendrol+10)}>Increase</button>
    </>
  );
}
// Conclusion Prop drilling done