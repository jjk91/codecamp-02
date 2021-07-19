import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWritePresenterProps {
  onChangeInputs?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => void;
  onClickSubmit: (
    event: MouseEvent<HTMLButtonElement>
    ) => void;
  onClickList:(
    event: MouseEvent<HTMLButtonElement>
    ) => void
  onClickUpdate:(
    event: MouseEvent<HTMLButtonElement>
    ) => void

  readOnly?: any;
  data?: IQuery;
  isEdit?: boolean;
  disabled?: boolean
}

export interface IBoardWriteContainerProps {
  isEdit?: boolean;
  data?: 
}

export interface dataType {
  data?: IQuery;
}

export interface newInputsType {
  title?: string;
  contents?: string;
}

export interface newInputsTypes {
  writer?: string | null
  password:string;
  title?: string;
  contents?: string;

}