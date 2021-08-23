import { UploadButton, UploadImage, UploadImageRef } from "./uploads01.styles";

export default function Uploads01Ui(props: any) {
  return (
    <>
      {props.file || props.thumb ? (
        <UploadImage
          src={props.file || `https://storage.googleapis.com/${props.thumb} `}
          onClick={props.onClickUpload}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <div>+</div>
          <div>upload</div>
        </UploadButton>
      )}
      <UploadImageRef
        ref={props.fileRef}
        type="file"
        onChange={props.onChangeFile}
      />
    </>
  );
}
