/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */

import { TagContainer } from "./styles"

export type Props={
    size?:'small'|'big';
    children: string
}

export const Tag=({children,size="small"}:Props)=><TagContainer size={size}>{children}</TagContainer>
