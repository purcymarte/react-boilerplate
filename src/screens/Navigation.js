import React from 'react';
import { Link } from 'react-router-dom'
import {NavBar, NavContent} from '../components/generic/Views'
import {Title1, StyledLink} from '../components/generic/Text'

function Navigation() {
  return (
    <NavBar background='#cf6a87'>
        <NavContent>
          <StyledLink to="/">home</StyledLink>
	      <StyledLink to="/example-page">item</StyledLink>
	      <StyledLink to="/example-page">item</StyledLink>
	      <StyledLink to="/example-page">item</StyledLink>
	      <StyledLink to="/example-page">item</StyledLink>
	    </NavContent>
    </NavBar>
  );
}

export default Navigation;
