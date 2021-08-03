import InputUnitsUi from "./inputs.presenter";

export default function InputUnits(props) {
  return (
    <>
      <InputUnitsUi name={props.name} onChangeInputs={props.onChangeInputs} />
    </>
  );
}
