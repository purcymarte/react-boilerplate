import React, {useEffect} from 'react';
import {Section, Row, Column, Box} from '../components/generic/Views'
import { Title1, Text, TextBlock } from '../components/generic/Text'

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and"

function Main(props) {
  return(
   <Box middle center minWidth='240px' maxWidth='360px'>
    <TextBlock><Text>{props.children}</Text></TextBlock>
   </Box>
  )
}

function Example(props) {
  const onClick = () => {
  	props.onClick() // let container handle the click
  }

  return (
    <Box scrollY>
      <Box height='80px' center middle >
        <Title1>Example</Title1>
      </Box>
      <Box row wrap center middle scrollY>
        <Box middle center minWidth='240px' maxWidth='360px'>  
          <TextBlock>
            <Text>{text}</Text>
          </TextBlock>
        </Box>
        <Box middle center width='240px' fitContent style={{background:'aquamarine'}}>
          <TextBlock>
            <Text>Sidebar</Text>
            <Text onClick={onClick}>Click for redux action</Text>
          </TextBlock>
        </Box>
      </Box>
    </Box>
  );

}

export default Example;




