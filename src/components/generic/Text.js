import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Text = styled.p`
  font-family: ${props => props.theme.font.family};
  font-size: 17px;
  line-height: 28px;
  margin-block-start: 16px;
  margin-block-end: 16px;
`

export const Title1 = styled.h1`
  font-family: ${props => props.theme.font.family};
  font-size: 28px;
  line-height: 36px;
  margin-block-start: 20px;
  margin-block-end: 20px;
`

export const Title2 = styled.h2`
  font-family: ${props => props.theme.font.family};
  font-size: 24px;
  line-height: 36px;
  margin-block-start: 20px;
  margin-block-end: 20px;
`  

export const Title3 = styled.h3`
  font-family: ${props => props.theme.font.family}
`

export const Title4 = styled.h4`
  font-family: ${props => props.theme.font.family}
`

export const Meta = styled.span`
  font-family: ${props => props.theme.font.family}
`

export const StyledLink = styled(Link)`
  font-family: ${props => props.theme.font.family};
  align-items: center;
  padding-right: 16px;
  padding-left: 16px;
  display: flex;
  text-decoration: none;
  font-weight: 600;
  color: white;
`

export const TextBlock = styled.div`
  padding: 24px 16px;
  margin: 0 auto;
`
