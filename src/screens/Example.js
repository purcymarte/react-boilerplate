import React, {useEffect} from 'react';
import {Section, Row, Column, Box} from '../components/generic/Views'
import { Title1, Text } from '../components/generic/Text'


function Card(props) {
  return  <Box middle center minWidth='240px' maxWidth='360px'><Text>{props.children}</Text></Box>
}

function Example(props) {
  const onClick = () => {
  	props.onClick() // let container handle the click
  }

  return (
    <Box scrollY>
      <Box height='140px' middle center><Title1>Example</Title1></Box>
      <Box row wrap minHeight='50px' center scrollY>
        <Card onClick={onClick}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and</Card>
        <Card onClick={onClick}>Example 3</Card>
        <Box middle center  width='40px' style={{background:'blue'}}><Text>..4..</Text></Box>
      </Box>
    </Box>
  );

}

export default Example;




