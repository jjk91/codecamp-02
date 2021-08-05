import styled from "@emotion/styled";

const Input = styled.input`
  border-color: midnightblue;
  background-color: green;
`;

const ErrorMessage = styled.div`
  color: blue;
  font-size: 11px;
`;
export default function Input01(props) {
  return (
    <>
      {props.inputName}:
      <Input type={props.type} {...props.register} />
      <ErrorMessage>{props.errorMessage}</ErrorMessage>
    </>
  );
}
