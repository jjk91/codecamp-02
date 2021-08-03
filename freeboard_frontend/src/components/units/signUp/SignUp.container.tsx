import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import SignUpUi from "./SignUp.presenter";
import { CREATE_USER } from "./SignUp.queries";
// import { createContext } from "react";

export const inputsInit = {
  email: "",
  password: "",
  name: "",
};

interface IContext {
  onClickSubmit?: () => Promise<void>;
  onChangeLoginInput?: (event: ChangeEvent<HTMLInputElement>) => void;
}
// export const SignUpcontext = createContext<IContext>({});

export default function SignUp() {
  // const value = {
  //   onClickSubmit: onClickSubmit,
  //   onChangeLoginInput: onChangeLoginInput,
  // };
  const [inputs, setInputs] = useState(inputsInit);
  const [inputsErrors, setInputsErrors] = useState(inputsInit);

  const [createUser] = useMutation(CREATE_USER);

  function onChangeLoginInput(event: ChangeEvent<HTMLInputElement>) {
    const newInputs = {
      ...inputs,
      [event.target.name]: event.target.value,
    };
    console.log(newInputs);
    setInputs(newInputs);
    console.log(inputs);
    setInputsErrors({ ...inputsErrors, [event.target.name]: "" });
  }

  async function onClickSubmit() {
    setInputsErrors({
      email: inputs.email ? "" : "이메일은 필수 입력입니다.",
      password: inputs.password ? "" : "비밀번호는 필수 입력입니다.",
      name: inputs.name ? "" : " 이름은 필수 입력입니다. ",
    });

    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            ...inputs,
          },
        },
      });
      console.log(result);
      alert("회원가입을 축하합니다!");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      {/* <SignUpcontext.Provider value={value}> */}
      <SignUpUi
        onClickSubmit={onClickSubmit}
        onChangeLoginInput={onChangeLoginInput}
      />
      {/* </SignUpcontext.Provider> */}
    </>
  );
}
