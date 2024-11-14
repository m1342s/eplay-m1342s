/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner=styled.div`
position:relative;
height:480px;
width:100%
display:block;
background-repeat:no-repeat;
background-position:center;
padding-top:16px;

&::after{
position:absolute;
background-color:#000;
width:100%;
height:100%;
top:0;
left:0;
content:'';
opacity:0.56;
}
${TagContainer}{
margin-right:8px;
}
.container{
z-index:1;
position:relative;
display:flex;
flex-direction:column;
height:100%;
justify-content:space-between;

}
`
export const Infos=styled.div`
padding:16px;
background-color: ${cores.preta};
max-width:290px;
font-weight:bold;
h2{
font-family: Roboto;
font-size: 32px;
font-weight: 700;
line-height: 37.5px;
text-align: left;
}
p{
font-family: Roboto;
font-size: 18px;
font-weight: 700;
line-height: 21.09px;
text-align: left;
margin:16px 0;

span{
display:block;
text-decoration:line-through;
}
}
`
