import React from 'react';
import { Link } from 'react-router-dom'
import {Box, NavBar} from '../components/generic/Views'
import {Title1, StyledLink} from '../components/generic/Text'

function Navigation() {
  return (
    <NavBar row height='60px'>
      <StyledLink to="/">home</StyledLink>
	  <StyledLink to="/example-page">example</StyledLink>
	  <Box width='60px' style={{background: 'grey'}}></Box>
    </NavBar>
  );
}

export default Navigation;
