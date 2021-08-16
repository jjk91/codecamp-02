import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required(),
  remarks: yup.string().required(),
  // contents: yup.string().required(),
  price: yup.number().typeError("숫자를 입력해야합니다.").required(),
  tags: yup.string().required(),
});
