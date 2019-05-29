/**
 * *********************
 * 
 * @module Person
 * @author the3ddy
 * @date 5/28/2019
 * @description individual person component
 * 
 * *********************
 */

// dependencies
import React from 'react';
// components

const Person = (props) => {
  // destructuring
  const { index, firstName, lastName, age, eyeColor } = props;

  return (
    <div>
      <h3>{index} I am {firstName} {lastName}</h3>
      <p>My age is {age} and my superhuman eyes are of color {eyeColor}</p>
    </div>
  )
}

export default Person;