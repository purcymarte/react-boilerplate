import React, {useEffect} from 'react';
import {Main, MainContent, Sidebar, Box} from '../components/generic/Views'
import { Title1, Title2, Text } from '../components/generic/Text'

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and"


function Example(props) {
  const onClick = () => {
  	props.onClick() // let container handle the click
  }

  return (
    <Main>
      <MainContent column style={{background: 'floralwhite'}}>
        <Title1>Example</Title1>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
      </MainContent>
      <Sidebar style={{background:'#778beb'}}>
        <Title2>Sidebar</Title2>
        <Text><button onClick={onClick}>Click</button> for redux action</Text>
      </Sidebar>
    </Main>
  );

}

export default Example;




