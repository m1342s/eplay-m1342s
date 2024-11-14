/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */

import {Container,Title} from "./styles"

export type Props={
    title:string
    background:'black' | 'gray'
    children:JSX.Element

}

export const Section=({title,background,children}:Props)=>(
    <Container background={background}>
        <div className="container">
        <Title>{title}</Title>
        {children}
        </div>
    </Container>
)