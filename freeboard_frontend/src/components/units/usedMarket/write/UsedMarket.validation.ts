import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required(),
  remarks: yup.string().required(),
  contents: yup.string().required(),
  price: yup
    .number()
    .transform((_value: string, originalValue: string) =>
      Number(originalValue.replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    )
    .typeError("숫자를 입력해야합니다.")
    .required(),
  tags: yup.string().required(),
});
