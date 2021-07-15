import { ChangeEvent, MouseEvent } from "react"

export interface IBoardWritePresenterProps {
    // onChangeInputs?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    // onClickSubmit?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void
    // onClickList?:(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void
    gql?: any
    isEdit?: boolean
    disabled?: boolean
}

export interface IBoardWriteContainerProps{
    
    isEdit?: boolean
}