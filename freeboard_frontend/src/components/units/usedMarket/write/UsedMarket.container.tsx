import { useMutation } from "@apollo/client";
import { useState } from "react";
import UsedMarketWriteUi from "./UsedMarket.presenter";
import { CREATE_USED_ITEM, UPLOAD_FILE } from "./UsedMarket.queries";
import { Modal } from "antd";

import { useForm } from "react-hook-form";
import withAuth from "../../../commons/hoc/wirhAuth";
import { useRouter } from "next/router";
import { schema } from "./UsedMarket.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { usedMarketEditPageContext } from "../../../../../pages/usedMarket/[usedMarketId]/edit";

const UsedMarketWrite = () => {
  const { isEdit, data } = useContext(usedMarketEditPageContext);
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [files, setFiles] = useState("");

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onWriteSubmit = async (data) => {
    try {
      let resultFile = await Promise.all(
        files.map((data) => uploadFile({ variables: { file: data } }))
      );

      resultFile = resultFile.filter((url) => url);

      console.log(resultFile);

      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
            images: resultFile.map((el) => el.data.uploadFile.url),
          },
        },
      });
      console.log(result.data.createUseditem._id);
      Modal.success({ content: "상품이 등록되었습니다." });
      router.push(`/usedMarket/${result.data.createUseditem._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  function onChangeFile(file, index) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  return (
    <>
      <UsedMarketWriteUi
        register={register}
        handleSubmit={handleSubmit}
        onWriteSubmit={onWriteSubmit}
        onChangeFile={onChangeFile}
        isActive={formState.isValid}
        errors={formState.errors}
      />
    </>
  );
};
export default withAuth(UsedMarketWrite);
