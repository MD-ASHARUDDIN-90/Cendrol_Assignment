import React , {useState} from 'react';
import B from './B'

export default function Boolean() { //3rd question
  let x = true //initialize a variable x = true
  const [ show , setShow] = useState(x)  //using state
  const [ _color , set_Color] = useState("red") //initialize state of color

  function handleColor(){ //create function for changing the color
    if(show){  
      setShow(false)
      set_Color("blue")
    }else{
      setShow(true)
      set_Color("red")
    }
  }
  return (
    <>
    <p>Question 3</p>
    <button onClick={handleColor} style={{backgroundColor : _color , color : "white" , padding : "1rem" , borderRadius : "10%"}}>{show ? "True" : "False"}</button>
    </>
  );
}
