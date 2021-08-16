import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 996px;
  width: 100%;
  margin-bottom: 80px;
`;

const Text = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
`;

const Input = styled(ReactQuill)`
  height: 320px;
  width: 996px;
  border-radius: 5px;
  resize: none;
`;
const Error = styled.div`
  color: red;
  font-size: 16px;
`;

export default function Input02(props) {
  return (
    <InputWrapper>
      <Text>{props.inputTitle}</Text>
      <Input
        placeholder={props.placeholder}
        // name={props.name}
        // defaultValue={props.defaultValue}
        onChange={props.onChange}
        // {...props.register}
      />
      <Error>{props.errorMessage}</Error>
    </InputWrapper>
  );
}
