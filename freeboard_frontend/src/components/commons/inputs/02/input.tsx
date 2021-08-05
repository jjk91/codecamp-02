import styled from "@emotion/styled";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 996px;
  width: 100%;
`;

const Text = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
`;

const Input = styled.textarea`
  height: 320px;
  width: 100%;
  margin-bottom: 40px;
  border-radius: 5px;
  resize: none;
  padding-left: 16px;
  padding-top: 14px;
`;

export default function Input02(props) {
  return (
    <InputWrapper>
      <Text>{props.inputTitle}</Text>
      <Input
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChangeInputs}
      />
    </InputWrapper>
  );
}
