import { useMutation } from "@apollo/client";
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
import { useContext, useEffect, useState } from "react";
import { usedMarketEditPageContext } from "../../../../../pages/usedMarket/[usedMarketId]/edit";

const UsedMarketWrite = () => {
  // @ts-ignore
  const { data: fetchData } = useContext(usedMarketEditPageContext);
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [files, setFiles] = useState([]);
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (!fetchData) return;
    ["name", "remarks", "contents", "price", "tags"].forEach((key) => {
      setValue(key, String(fetchData?.fetchUseditem[key]));
    });
    setFiles(fetchData?.fetchUseditem?.images);
    setAddress(fetchData?.fetchUseditem.useditemAddress?.address || "");
    setAddressDetail(
      fetchData?.fetchUseditem.useditemAddress?.addressDetail || ""
    );
    setLat(fetchData?.fetchUseditem.useditemAddress?.lat);
    setLng(fetchData?.fetchUseditem.useditemAddress?.lng);
  }, [fetchData]);

  const onWriteSubmit = async (data: any) => {
    try {
      let resultFile = await Promise.all(
        // @ts-ignore
        files.map((data: any) => uploadFile({ variables: { file: data } }))
      );
      // @ts-ignore
      resultFile = resultFile.filter((url) => url);

      await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
            images: resultFile.map((el: any) => el.data.uploadFile.url),
            useditemAddress: {
              address: address,
              addressDetail: addressDetail,
              lat: lat,
              lng: lng,
            },
          },
        },
      });
      Modal.success({ content: "상품이 등록되었습니다." });
      router.push(`/usedMarket/list`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onChangeContents = (value: any) => {
    const isBlank = "<p><br></p>";

    setValue("contents", value === isBlank ? "" : value);
    trigger("contents");
  };

  const onWriteUpdate = async (data: any) => {
    try {
      const result = await Promise.all(
        // @ts-ignore
        files.map((ele) =>
          typeof ele !== "string"
            ? uploadFile({ variables: { file: ele } })
            : ele
        )
      );

      const uploadData = result
        .filter((cur) => cur)
        .map((el) => (el.data?.uploadFile.url ? el.data?.uploadFile.url : el));

      await updateUseditem({
        variables: {
          useditemId: router.query.usedMarketId,
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
            images: uploadData, // ['', '', '']
            useditemAddress: {
              address: address,
              addressDetail: addressDetail,
              // fetchData?.fetchUseditem.useditemAddress?.addressDetail,
              lat: lat,
              lng: lng,
            },
          },
        },
      });
      Modal.success({ content: "상품이 수정되었습니다." });
      router.push(`/usedMarket/list`);
    } catch (error) {
      Modal.error({ content: error });
    }
  };

  function onChangeFile(file: string, index: number) {
    const newFiles = [...files];
    // @ts-ignore
    newFiles[index] = file;
    setFiles(newFiles);
  }

  const onClickCancle = () => {
    router.push(`/usedMarket/list`);
  };

  return (
    <>
      <UsedMarketWriteUi
        data={fetchData}
        lat={lat}
        lng={lng}
        setLat={setLat}
        setLng={setLng}
        register={register}
        handleSubmit={handleSubmit}
        onWriteSubmit={onWriteSubmit}
        onWriteUpdate={onWriteUpdate}
        onChangeFile={onChangeFile}
        isActive={formState.isValid}
        errors={formState.errors}
        address={address}
        setAddress={setAddress}
        addresssDetail={addressDetail}
        setAddressDetail={setAddressDetail}
        onChangeContents={onChangeContents}
        onClickCancle={onClickCancle}
      />
    </>
  );
};
export default withAuth(UsedMarketWrite);
