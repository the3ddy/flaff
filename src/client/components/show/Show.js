/**
 * *********************
 * 
 * @module Show
 * @author the3ddy
 * @date 5/28/2019
 * @description Show component
 * 
 * *********************
 */

// @flow
// dependencies
import React from 'react';
// components

const Show = (props: {
  arr: string[],
  str: string,
  obj: {
    key: string
  },
  int: number,
  boolean: boolean 
}) => {
  return (
    <div>
      {props.str}
      Show component
    </div>
  );
}

export default Show;