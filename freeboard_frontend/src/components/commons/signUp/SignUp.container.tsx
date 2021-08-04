import { useMutation } from "@apollo/client";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import SignUpUi from "./SignUp.presenter";
import { CREATE_USER } from "./SignUp.queries";
import { createContext } from "react";
import { useRouter } from "next/router";

export const inputsInit = {
  email: "",
  password: "",
  name: "",
};

interface IContext {
  onClickSubmit?: () => Promise<void>;
  onChangeLoginInput?: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const SignUpcontext = createContext<IContext>({});

export default function SignUp() {
  const router = useRouter(); // 더 안전함
  const [inputs, setInputs] = useState(inputsInit);
  const [inputsErrors, setInputsErrors] = useState(inputsInit);
  const [createUser] = useMutation(CREATE_USER);

  const value = {
    inputsErrors: inputsErrors,
    setInputsErrors: setInputsErrors,
    onClickSubmit: onClickSubmit,
    onChangeLoginInput: onChangeLoginInput,
  };

  function onChangeLoginInput(event: ChangeEvent<HTMLInputElement>) {
    const newInputs = {
      ...inputs,
      [event.target.name]: event.target.value,
    };
    // console.log(newInputs);
    setInputs(newInputs);
    // console.log(inputs);
    setInputsErrors({ ...inputsErrors, [event.target.name]: "" });
  }

  async function onClickSubmit() {
    const newInputsErrors = {
      email: /\w+@\w+\.\w+/.test(inputs.email) ? "" : "이메일을 확인해주세요",
      password:
        // /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/.test(
        inputs.password
          ? // )
            ""
          : "비밀번호를 확인해주세요",
      name: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(inputs.name)
        ? ""
        : "이름을 확인해주세요",
    };
    setInputsErrors(newInputsErrors);

    if (Object.values(newInputsErrors).every((data) => !data)) {
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
        router.push("/boards/login");
      } catch (error) {
        alert(error.message);
      }
    }
  }

  return (
    <>
      <SignUpcontext.Provider value={value}>
        <SignUpUi
        // onClickSubmit={onClickSubmit}
        // onChangeLoginInput={onChangeLoginInput}
        />
      </SignUpcontext.Provider>
    </>
  );
}
