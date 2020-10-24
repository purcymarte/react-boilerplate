import React from 'react';
import {Box, Main, MainContent, Sidebar, Footer, ContentBlock, Spacing} from '../components/generic/Views'
import {Title1, Title2, Text} from '../components/generic/Text'

function Home() {
  return (
    <Main>
      <MainContent column background='floralwhite'>
        <Title2>Main</Title2>
        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        <Box elevation={1} animation='fadeInUp' margin='0 0 32px 0' height='96px' background='floralwhite' />
        <Box elevation={2} animation='fadeInUp' margin='0 0 32px 0' height='96px' background='floralwhite' />
        <Box elevation={3} animation='fadeInUp' margin='0 0 32px 0' height='96px' background='floralwhite' />
        <Box elevation={4} animation='fadeInUp' margin='0 0 32px 0' height='96px' background='floralwhite' />
        <Box elevation={6} animation='fadeInUp' margin='0 0 32px 0' height='96px' background='floralwhite' />
        <Box elevation={8} animation='fadeInUp' margin='0 0 32px 0' height='96px' background='floralwhite' />
        <Box elevation={9} animation='fadeInUp' margin='0 0 32px 0' height='96px' background='floralwhite' />
        <Box elevation={12} animation='fadeInUp' margin='0 0 32px 0' height='96px' background='floralwhite' />
        <Box elevation={16} animation='fadeInUp' margin='0 0 32px 0' height='96px' background='floralwhite' />
        <Box elevation={24} animation='fadeInUp' margin='0 0 32px 0' height='96px' background='floralwhite' />
      </MainContent>
    </Main>
  );
}

export default Home;
