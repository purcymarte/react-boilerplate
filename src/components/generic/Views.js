import React from 'react'
import styled, {css, keyframes} from 'styled-components'

import * as Animation from './Animation'
import { getShadow } from '../../utils/styleUtils'


export const Box = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? "column" : "unset"};
  align-items: ${props => props.alignItems || 'unset'};
  justify-content: ${props => props.justifyContent || 'unset'};
  width: ${props => props.width || "unset"};
  minWidth: ${props => props.minWidth || "unset"};
  maxWidth: ${props => props.maxWidth || "unset"};
  height: ${props => props.height || "unset"};
  minHeight: ${props => props.minHeight || "unset"};
  maxHeight: ${props => props.maxHeight || "unset"};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'unset'};
  animation-name: ${props => props.animation ? Animation[props.animation] : null};
  animation-duration: ${props => props.duration || '.2s'};;
  animation-timing-function: ${props => props.timing || 'ease'};
  background: ${props => props.background ? props.theme.color[props.background] || props.background : null};
  margin: ${props => props.margin || "unset"};
  box-shadow: ${props => props.elevation ? getShadow(props.elevation) : null};
  z-index: ${props => props.elevation || 'unset'};
`

export const Section = styled.section`
  display: flex;
  min-height: 100%;
  width:100%;
  flex-direction: column;
  align-items: center;
  overflow:hidden;
  z-index: ${props => props.elevation || 'unset'};
`

export const Main = styled(Box)`
  width: 100%;
  max-width: 1024px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  overflow:hidden;
  flex-grow: 1; //pushes footer to the bottom
`
export const NavBar = styled(Main)`
  height: 60px;
  justify-content: center;
  width:100%;
  max-width:unset;
  flex-grow: 0;
`
export const Footer = styled(Main)`
  min-height: 140px;
  max-width:unset;
  flex-basis: 140px;
  flex-grow: 0;
  width:100%;
`

export const MainContent = styled(Box)`
  flex-basis: 480px;
  max-width: 1024px;
  padding:48px;
  flex-grow: 1;
`
export const NavContent = styled(MainContent)`
  flex-basis: 480px;
  max-width: 1024px;
  padding: unset;
  flex-grow: 1;
  justify-content: space-between;
`

export const Sidebar = styled(MainContent)`
  flex-basis: 200px;
  min-width:200px;
  max-width: 1024px;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
  flex-wrap:wrap;
`


export const FooterContent = styled(MainContent)`
  // max-width:1024px;
  // justify-content: space-between;
  // padding: 24px 0px;
`

export const ContentBlock = styled(Box)`
  padding: 32px;
`

export const Spacing = styled.div`
  height: ${props => props.height || '16px'};
`