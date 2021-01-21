import {keyframes} from 'styled-components'

export const fadeIn = keyframes`
 0% { opacity:0; }
 100% { opacity:1; }
`

export const fadeInUp = keyframes`
 0% { 
 	opacity:0;
 	transform: translateY(16px);
 }
 100% { 
 	opacity:1;
 	transform: translateY(0);
 }
`

export const fadeInDown = keyframes`
 0% { 
 	opacity:0;
 	transform: translateY(-16px);
 }
 100% { 
 	opacity:1;
 	transform: translateY(0);
 }
`
