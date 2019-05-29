/**
 * *********************
 * 
 * @module Pagination
 * @author the3ddy
 * @date 5/28/2019
 * @description component that shows our pagination
 * 
 * *********************
 */

// dependencies
import React from 'react';
// components
import Person from '../person/Person';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPage: 0, // current page displayed
      peoplePage: 10 // number of people displayed per page
    }
    this.handleClick = this.handleClick.bind(this);
  }

  // handles the pagination button clicks
  handleClick(i) {
    this.setState(prevState => {
      return ({ currPage: i })
    })
  }

  render() {
    // destructuring
    const { currPage, peoplePage } = this.state;
    const { people } = this.props;

    // pagination:
    // calculates the selection of people to display
    const first = currPage * peoplePage;
    const last = first + peoplePage;
    let display = people.slice(first, last);
    display = display.map(ele => {
      const { _id, index, name, age, eyeColor } = ele;
      return (
        <Person 
          key={_id}
          index={index}
          firstName={name.first}
          lastName={name.last}
          age={age}
          eyeColor={eyeColor}
        />
      )
    });

    // pagination-buttons:
    // determines the buttons and attaches function
    const buttons = [];
    for (let i = 0; i < Math.ceil(people.length / peoplePage); i++) {
      buttons.push(
        <button 
          key={i}
          onClick={() => this.handleClick(i)}>
          {i}
        </button>
      );
    }

    /**
     * displays 10 persons
     * button for pagination
     */
    return (
      <div>
        {display}
        {buttons}
      </div>
    )
  }
}

export default Pagination;