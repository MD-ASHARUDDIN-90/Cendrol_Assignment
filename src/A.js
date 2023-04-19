import React , {useState} from 'react';
import B from './B'
// question 2
export default function A() { //parent component A
  const [ cendrol , setCendrol] = useState(2)  //initialize state which is internal data of Component A
  return (
    <>
    <p>Question 2</p> 
    {/* passing cendrol state as a prop to child component B */}
    <B cendrol={cendrol} setCendrol={setCendrol}/>
    </>
  );
}
