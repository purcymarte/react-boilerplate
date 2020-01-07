import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Text = styled.p`
  font-family: ${props => props.theme.font.family}
`

export const Title1 = styled.h1`
  font-family: ${props => props.theme.font.family}
`

export const Title2 = styled.h2`
  font-family: ${props => props.theme.font.family}
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
  padding: 8px;
`
