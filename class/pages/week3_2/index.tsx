import DaumPostcode from "react-daum-postcode";
import { React, useState } from "react";
import { Button, Modal } from "antd";

export default function Week3_2Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");

  function onComplete(data) {
    setAddress(data.address);
    setIsOpen(false);
  }

  //   function onClickSuccess() {
  //     Modal.success({
  //       title: "게시글 등록",
  //       content: " 게시글이 등록 되었습니다. ",
  //     });
  //   }

  function onClickOpenModal() {
    setIsOpen(true);
  }

  function onClickCancel() {
    setIsOpen(false);
  }

  return (
    <>
      {/* <DaumPostcode onComplete={onComplete} autoClose />
      <Button onClick={onClickSuccess}>모달열기</Button> */}
      {isOpen && (
        <Modal title="주소 검색" visible={true} onCancel={onClickCancel}>
          <DaumPostcode onComplete={onComplete} />
        </Modal>
      )}
      <button onClick={onClickOpenModal}>모달열기</button>
      <span>{address}</span>
    </>
  );
}
