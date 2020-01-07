import React from 'react';
import { Link } from 'react-router-dom'
import {Box} from '../components/generic/Views'
import {Title1, StyledLink} from '../components/generic/Text'

function Navigation() {
  return (
    <Box row center middle height='60px'>
      <StyledLink to="/">home</StyledLink>
	  <StyledLink to="/example-page">example</StyledLink>
    </Box>
  );
}

export default Navigation;
