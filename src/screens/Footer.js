import React from 'react';

import {Box, FooterContent, Footer} from '../components/generic/Views'
import {Title2} from '../components/generic/Text'


function FooterComponent() {
  return (
    <Footer style={{background:'#ecf0f1'}}>
      <FooterContent>
        <Box column style={{flexGrow:1}}>column 1</Box>
        <Box column style={{flexGrow:1}}>column 2</Box>
        <Box column style={{flexGrow:1}}>column 3</Box>
      </FooterContent>
    </Footer>
  );
}

export default FooterComponent;
