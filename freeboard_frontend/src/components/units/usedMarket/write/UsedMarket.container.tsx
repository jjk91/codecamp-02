import { useMutation } from "@apollo/client";
import { useState } from "react";
import UsedMarketWriteUi from "./UsedMarket.presenter";
import { CREATE_USED_ITEM, UPLOAD_FILE } from "./UsedMarket.queries";
import { Modal } from "antd";

const InputInit = {
  name: "",
  remarks: "",
  contents: "",
  price: "",
  tags: "",
};

export default function UsedMarketWrite() {
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [inputs, setInputs] = useState(InputInit);
  const [inputsErrors, setInputsErrors] = useState(InputInit);
  const [files, setFiles] = useState("");

  function onChangeInputs(event) {
    const newInputs = {
      ...inputs,
      [event.target.name]: event.target.value,
    };
    console.log(event.target.value);
    setInputs(newInputs);
    setInputsErrors({ ...inputsErrors, [event.target.name]: "" });
  }

  async function onClickItemSubmit() {
    const newInputsErrors = {
      name: inputs.name ? "" : "이름을 입력해주세요",
      remarks: inputs.remarks ? "" : " 상품의 상태를 입력해주세요",
      contents: inputs.contents ? "" : "상품 내용을 입력해주세요.",
      price: inputs.price ? "" : "판매 가격을 입력해주세요.",
      tags: inputs.tags ? "" : "태그를 입력해주세요.",
    };
    setInputsErrors(newInputsErrors);

    if (Object.values(newInputsErrors).every((data) => !data)) {
      try {
        const resultFiles = await Promise.all(
          files.map((data) => uploadFile({ variables: { file: data } }))
        );

        const result = await createUseditem({
          variables: {
            createUseditemInput: {
              ...inputs,
              price: Number(inputs.price),
              images: resultFiles.map((el) => el.data.uploadFile.url),
            },
          },
        });
        alert("등록되었습니다.");
        console.log("ggggg");
        // Modal.success({
        //   title: "등록확인",
        //   content: "게시물이 등록 되었습니다.",
        // });
        // alert(result);
      } catch (error) {
        Modal.error(error);
      }
    }
  }

  function onChangeFile(file, index) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
    console.log(newFiles);
  }

  return (
    <>
      <UsedMarketWriteUi
        setInputsErrors={setInputsErrors}
        onChangeInputs={onChangeInputs}
        onChangeFile={onChangeFile}
        onClickItemSubmit={onClickItemSubmit}
      />
    </>
  );
}
