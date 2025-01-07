/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import { Container } from "./styles"

type Props={
    children:JSX.Element
    title:string
}

export const Card=({children,title}:Props)=>(
    <Container>
        <h2>{title}</h2>
        {children}
    </Container>
)