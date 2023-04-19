import React, { useState } from 'react';
import Style from './App.module.css';
import A from './A';
import Boolean from './Boolean';

export default function App() {
  //initialize the counter to 1 using useState
  const [count, setCount] = useState(1);

  //function to increase the count
  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <>
      {/* question 1 */}
      <p>Question 1</p>
      <div className={Style.wrapper}>
        <div className={Style.main}>
          <div
            onClick={handleIncrement}
            className={Style.content}
            style={
              // on the basis of condition of count changing the background color
              count === 1
                ? { backgroundColor: 'yellow' }
                : { backgroundColor: 'rgba(46,223,192,255)' }
            }
          >
            {/* reading the cakue of count */}
            <h1>{count}</h1>
            <p>Click to increase counter</p>
          </div>
        </div>
        {/* button to change the color */}
        <button
          style={{ backgroundColor: 'rgba(46,223,192,255)' }}
          className={Style.btn}
          onClick={handleIncrement}
        >
          Change Color
        </button>
      </div>
      {/* question 2 */}
      <A />
      {/* question 3 */}
      <Boolean />
    </>
  );
}
