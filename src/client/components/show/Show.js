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

type Props = {
  arr: string[],
  str: string,
  obj: {
    key: string
  },
  int: number,
  boolean: boolean 
}

type State = {
  message: string
}

class Show extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      message: 'hey'
    }
  }

  render() {
    return (
      <div>
        <h3 className="showing">Show me something</h3>
        <p>{this.state.message}</p>
      </div>
    )
  }
}

export default Show;