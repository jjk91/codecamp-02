import { IBoardWritePresenterProps } from "./BoardWrite.types";
import { MyButton, MyInput } from "./BoardWrite.styles";

export default function BoardWriteUi(props: IBoardWritePresenterProps) {
  return (
    <>
      작성자:
      <MyInput type="text" name="writer" onChange={props.OnChangeInputs} />
      <br />
      비밀번호:
      <MyInput
        type="password"
        name="password"
        onChange={props.OnChangeInputs}
      />
      <br />
      글제목:
      <MyInput type="text" name="title" onChange={props.OnChangeInputs} />
      <br />
      글내용:
      <MyInput type="text" name="contents" onChange={props.OnChangeInputs} />
      <br />
      {/* <MyButton onClick={props.onClickSubmit} active={props.active}>데이터 {props.isEdit? "수정하기" : "입력하기"} </MyButton> */}
      {!props.isEdit && (
        <MyButton onClick={props.onClickSubmit} active={props.active}>
          데이터 입력하기{" "}
        </MyButton>
      )}
      {props.isEdit && (
        <MyButton onClick={props.onClickSubmit} active={props.active}>
          데이터 수정하기{" "}
        </MyButton>
      )}
    </>
  );
}
