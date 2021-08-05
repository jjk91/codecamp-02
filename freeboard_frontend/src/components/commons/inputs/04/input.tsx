import styled from "@emotion/styled";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 16px;
  margin-right: 20px;
`;

const Input = styled.input`
  margin-right: 10px;
`;

export default function Input04(props) {
  return (
    <InputWrapper>
      <Input
        type={props.type}
        name={props.name}
        onChange={props.onChangeInputs}
      />
      <Text>{props.inputTitle}</Text>
    </InputWrapper>
  );
}
