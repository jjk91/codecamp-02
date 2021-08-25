import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWritePresenterProps {
  addressDetail: string | number | readonly string[] | undefined;
  onChangeInputs?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickList: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onOk: () => void;
  onChangAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onComplete: (data: any) => void;
  onClickModal: () => void;
  onChangeContents: () => void;
  onChangeFile: () => void;
  readOnly?: any;
  data?: IQuery;
  isEdit?: boolean;
  isOpen?: boolean;
  disabled?: boolean;
  address?: string;
  zipcode?: string;
}

export interface INewInputs {
  title?: string;
  contents?: string;
}

export interface IBoardWriteContainerProps {
  isEdit?: boolean;
  data?: IQuery;
}

export interface dataType {
  data?: IQuery;
}

export interface newInputsType {
  title?: string;
  contents?: string;
}

export interface newInputsTypes {
  writer?: string | null;
  password: string;
  title?: string;
  contents?: string;
}
