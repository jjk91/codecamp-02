import styled from "@emotion/styled";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 588px;
  width: 100%;
`;

const Text = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  height: 52px;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 5px;
  padding-left: 16px;
`;

export default function Input03(props) {
  return (
    <InputWrapper>
      <Text>{props.inputTitle}</Text>
      <Input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
    </InputWrapper>
  );
}
