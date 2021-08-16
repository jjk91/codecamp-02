import { useMutation } from "@apollo/client";
import { useState } from "react";
import UsedMarketWriteUi from "./UsedMarket.presenter";
import {
  CREATE_USED_ITEM,
  UPLOAD_FILE,
  UPDATE_USED_ITEM,
} from "./UsedMarket.queries";
import { Modal } from "antd";

import { useForm } from "react-hook-form";
import withAuth from "../../../commons/hoc/wirhAuth";
import { useRouter } from "next/router";
import { schema } from "./UsedMarket.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { usedMarketEditPageContext } from "../../../../../pages/usedMarket/[usedMarketId]/edit";
import { useEffect } from "react";

const UsedMarketWrite = () => {
  const { data } = useContext(usedMarketEditPageContext);
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [files, setFiles] = useState("");
  const [address, setAddress] = useState();
  const [addressDetail, setAddressDetail] = useState();

  const { register, handleSubmit, formState, setValue, trigger, watch } =
    useForm({
      mode: "onChange",
      resolver: yupResolver(schema),
    });

  useEffect(() => {
    if (!data) return;
    // _id
    // name
    // remarks
    // contents
    // price
    // tags
    // images
    // createdAt

    ["name", "remarks", "contents", "price"].forEach((key) => {
      setValue(key, String(data?.fetchUseditem[key]));
    });
    // ;
  }, [data]);

  const onChangeContents = (value) => {
    const isBlank = "<p><br></p>";

    setValue("contents", value === isBlank ? "" : value);
    trigger("contents");
  };

  const onWriteUpdate = async (data) => {
    try {
      const result = await updateUseditem({
        variables: {
          useditemId: router.query.usedMarketId,
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: String(data.contents),
            price: Number(data.price),
            tags: data.tags,
            useditemAddress: {
              address,
              addressDetail,
            },
          },
        },
      });
      console.log(result.data.createUseditem._id);
      Modal.success({ content: "상품이 등록되었습니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

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
            contents: watch("contents"),
            price: Number(data.price),
            tags: data.tags,
            images: resultFile.map((el) => el.data.uploadFile.url),
            useditemAddress: {
              address,
              addressDetail,
            },
          },
        },
      });
      console.log(result.data.createUseditem._id);
      Modal.success({ content: "상품이 등록되었습니다." });
      console.log(result.data.createUseditem.useditemAddress, "등록하기 주소");

      // router.push(`/usedMarket/${result.data.createUseditem._id}`);
      router.push(`/usedMarket/list`);
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
        onWriteUpdate={onWriteUpdate}
        onChangeFile={onChangeFile}
        isActive={formState.isValid}
        errors={formState.errors}
        setAddress={setAddress}
        setAddressDetail={setAddressDetail}
        onChangeContents={onChangeContents}
      />
    </>
  );
};
export default withAuth(UsedMarketWrite);
