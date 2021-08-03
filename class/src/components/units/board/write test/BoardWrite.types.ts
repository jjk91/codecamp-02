import { ChangeEvent } from "react";

export interface IBoardWritePresenterProps {
  OnChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickEdit: () => void;
  active: boolean;
  isEdit?: boolean;
}

export interface IBoardWriteContainerProps {
  isEdit?: boolean;
}

export interface IMyButtonStylesProps {
  active: boolean;
}
