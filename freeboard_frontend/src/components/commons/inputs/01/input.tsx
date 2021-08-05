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

const Input = styled.input`
  height: 52px;
  width: 100%;
  margin-bottom: 40px;
  border-radius: 5px;
  padding-left: 16px;
`;
const Error = styled.div`
  color: red;
  font-size: 16px;
`;

export default function Input01(props) {
  return (
    <InputWrapper>
      <Text>{props.inputTitle}</Text>
      <Input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChangeInputs}
      />
      <Error>{props.errorMessage}</Error>
    </InputWrapper>
  );
}
