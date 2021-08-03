import { InputText, Input } from "./inputs.style";

export default function InputUnitsUi(props) {
  return (
    <>
      <InputText>입력창</InputText>
      <Input onChange={props.onChangeInputs} name={props.name} />
    </>
  );
}
