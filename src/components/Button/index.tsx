/* eslint-disable prettier/prettier */
import {ButtonContainer,ButtonLink} from "./styles"


export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children:string
  variant?:'primary'|'secondary'
}
export const Button = ({type,title,children,to,onClick,variant='primary'}:Props) =>{
    if(type==='button'){
        return(
            <ButtonContainer variant={variant} type='button' title={title} onClick={onClick}>{children}</ButtonContainer>
        )
    }
    return(
        <ButtonLink  to={to as string} title={title}>{children}</ButtonLink>
    )
}