import styled from "@emotion/styled"
import { IMyButtonStylesProps } from "./BoardWrite.types"



export const MyInput = styled.input`

`

export const MyButton = styled.button`
    background-color: ${(props: IMyButtonStylesProps) => props.active ? 'red' : 'blue'}
`

