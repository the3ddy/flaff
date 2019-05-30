/**
 * *********************
 * 
 * @module InfiniteScroll
 * @author the3ddy
 * @date 5/28/2019
 * @description component that renders infinite scroll
 * 
 * *********************
 */

// dependencies
import React from 'react';
// components
import Person from '../person/Person';

class InfiniteScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: [],
      currPage: 0,
      items: 10
    };
    this.onScroll = this.onScroll.bind(this);
    this.addingPeople = this.addingPeople.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
    this.addingPeople();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if (
      (window.innerHeight + window.scrollY) >=
      (document.body.offsetHeight) &&
      this.props.people.length
    ) {
      this.addingPeople();
    }
  }

  addingPeople() {
    // destructuring
    const { people } = this.props;
    const { items, currPage } = this.state;
    const first = currPage * items;
    const last = first + items;
    const addPeople = people.slice(first, last);
    this.setState(prevState => {
      return ({ 
        display: [...prevState.display, ...addPeople],
        currPage: prevState.currPage + 1 
      });
    })
  }

  render() {
    // destructuring
    let { display } = this.state;

    // creates array of person tags
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

    /**
     * displays the elements
     */
    return (
      <div>
        {display}
      </div>
    );
  }
}

export default InfiniteScroll;