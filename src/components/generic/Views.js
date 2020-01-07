import React from 'react'
import styled, {css} from 'styled-components'


export const Box = styled.div`
  // flex container behaviour
  display: flex;
  flex-direction: ${props => props.row ? 'row' : 'column'}; // column layout by default
  align-items: ${props => props.center ? !props.row ? 'center' : 'unset' : 'unset'}; // horizontal center align
  justify-content: ${props => props.middle ? props.row ? 'center' : 'unset' : 'unset'}; // vertical middle align
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'}; // no wrapping by default

  // flex item behaviour
  flex: 1 1 auto; // flexible layout by default
  position: relative;
  // width: 100%; // fill entire containing element
  // height: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch; // fix iOS scrolling

  min-height: ${props => props.minHeight || 'unset'};
  max-height: ${props => props.maxHeight || 'unset'};
  min-width: ${props => props.minWidth || '240px'};  // basic responsive layout
  max-width: ${props => props.maxWidth || '720px'};  // basic responsive layout
  
  ${props => (props.height) && css`
    min-height: ${props.height}; // fixed height if required
    max-height: ${props.height}; // fixed height if required
  `}
  ${props => (props.width) && css`
    min-width: ${props.width}; // fixed width if required
    max-width: ${props.width}; // fixed width if required
  `}
  ${props => (props.scrollX) && css`
    overflow-x: scroll;
  `}
  ${props => (props.scrollY) && css`
    overflow-y: scroll;
  `}
`

export const Section = styled.section`
  display: flex;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100); // fix for safari mobile browser, works with fixViewport() in jsUtils
  width: 100vw;
  flex-direction: column;
  align-items: center;
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  overflow:hidden;
  background:yellow;
  z-index: ${(props) => (props && props.z ? props.z.toString() : '3')}
`

export const SectionMain = styled(Section)`
  @media (min-width: 640px) {
    max-width: 640px;
    margin-left: calc(50% - 320px);
    margin-right: auto;
    box-shadow: 0 0 15px rgba(0,0,0,.3);
  }
`
