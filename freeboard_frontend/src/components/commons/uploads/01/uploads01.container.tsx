import Uploads01Ui from "./uploads01.presenter";
import { useRef, useState } from "react";
// import { useMutation } from "@apollo/client";
// import { UPLOAD_FILE } from "./uploads01.querise";

export default function Uploads01(props: any) {
  const fileRef = useRef<HTMLInputElement>(null);

  // const [uploadFile] = useMutation(UPLOAD_FILE);
  const [file, setFile] = useState("");

  async function onChangeFile(event: any) {
    const file = event.target.files?.[0];

    // if (CheckValidationFile(file)) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      // @ts-ignore
      setFile(data.target?.result);
      props.onChangeFile(file, props.index);
    };

    // try {
    //   const result = await uploadFile({ variables: { file } });
    //   props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    // } catch (error) {
    //   alert(error.message);
    // }
  }

  function onClickUpload() {
    fileRef.current?.click();
  }
  return (
    <>
      <Uploads01Ui
        file={file}
        fileRef={fileRef}
        onClickUpload={onClickUpload}
        onChangeFile={onChangeFile}
        thumb={props.thumb}
      />
    </>
  );
}
