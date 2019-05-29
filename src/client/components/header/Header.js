/**
 * *********************
 * 
 * @module Header
 * @author the3ddy
 * @date 5/28/2019
 * @description navigation head
 * 
 * *********************
 */

// dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <div>
      <NavLink to="/" activeClassName="is-active" exact>pagination</NavLink>
      <NavLink to="/infinitescroll" activeClassName="is-active" exact>infinite scroll</NavLink>
      <NavLink to="/filter" activeClassName="is-active" exact>filter</NavLink>
    </div>
  )
}

export default Header;