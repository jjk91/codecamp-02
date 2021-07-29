import { UploadButton, UploadImage, UploadImageRef } from "./uploads01.styles";

export default function Uploads01Ui(props) {
  return (
    <>
      {props.file ? (
        <UploadImage src={props.file} onClick={props.onClickUpload} />
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
