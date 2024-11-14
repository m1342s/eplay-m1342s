/* eslint-disable prettier/prettier */
import styled from "styled-components";
import { cores } from "../../styles";

export const HeaderBar=styled.header`
background-color:${cores.cinza};
padding: 24px;
margin-top:80px;
margin-bottom:80px;
border-radius:16px;
color:${cores.branca};
display:flex;
align-items:center;
justify-content:space-between;
a {
color:${cores.branca};
text-decoration:none;
font-weight:bold;
}
div {
display:flex;
align-items:center;
}
}
`
export const Links=styled.ul`
display:flex;
margin-left:40px;
`;

export const LinksItens=styled.li`
margin-right:16px;
`
export const LinkCart=styled.a`
display:flex;
img {
margin-left:16px;
}
`;