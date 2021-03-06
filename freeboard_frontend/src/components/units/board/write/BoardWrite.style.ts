import styled from "@emotion/styled";
import { Button } from "antd";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  padding: 80px;
`;

export const Box = styled.div`
  // position:absolute
  /* height: 1847px; */
  max-width: 1200px;
  border: 1px solid black;
  padding: 80px 102px;
`;

export const Head1 = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 80px;
`;

export const HeadTitle = styled.div`
  font-size: 36px;
`;
export const Head2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 40px;
`;

export const HeadText = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Error = styled.div`
  color: red;
`;

export const Text = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
`;
export const Input = styled.input`
  height: 52px;
  width: 486px;
  padding-left: 16px;
`;
export const Body1 = styled.div`
  padding-bottom: 40px;
`;

export const ContentsTitle = styled.input`
  padding-left: 16px;
  height: 52px;
  width: 996px;
`;
export const Body2 = styled.div`
  padding-bottom: 40px;
`;
export const Body3 = styled.div`
  height: 228px;
  width: 996px;
  /* padding-bottom: 40px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const BodyWrapper = styled.div``;

export const Body4 = styled.div`
  height: 92px;
  width: 996px;
  margin: 40px 0px;
`;

export const YoutubeUrl = styled.input`
  height: 52px;
  width: 996px;
  padding-left: 16px;
`;

export const Address = styled.input`
  height: 52px;
  width: 996px;
  padding-left: 16px;
`;

export const AddressDetail = styled.input`
  height: 52px;
  width: 996px;
`;

export const Input2 = styled(ReactQuill)`
  height: 480px;
  width: 996px;
`;

export const PostInput = styled.input`
  height: 52px;
  width: 77px;
  font-size: 16px;
  margin-right: 16px;
  padding-left: 16px;
`;

export const PostSerch = styled(Button)`
  height: 52px;
  width: 124px;
  background-color: black;
  color: white;
`;

export const Footer1 = styled.div`
  height: 118px;
  width: 996px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
`;
export const UploadWrapper = styled.div`
  width: 282px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Upload = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PhotoWrapper = styled.div`
  background-color: #bdbdbd;
  height: 78px;
  width: 78px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;
export const PhotoInPut = styled.input`
  display: none;
`;

export const Photo = styled.img`
  height: 78px;
  width: 78px;
`;

export const Footer2 = styled.div`
  height: 64px;
  width: 159px;
  margin-bottom: 80px;
`;
export const Input4 = styled.input``;
export const CheckBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Footer3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div``;

export const Click2 = styled.button`
  height: 52px;
  width: 179px;
  background-color: #ffd600;
  color: black;
  margin-right: 12px;
  :disabled {
    background-color: gray;
  }
  /* border: 0px; */
`;

// export const Click3 = styled.button`
//     height: 52px;
//     width: 179px;
//     background-color: #ffd600;
//     color: black;
//     margin-left: 12px;
//     border: 0px;
// `

export const Submit = styled(Button)`
  width: 179px;
  height: 52px;
  background-color: #ffd600;
  :disabled {
    background-color: gray;
  }
`;
export const Cancel = styled(Button)`
  width: 179px;
  height: 52px;
`;

export const Edit = styled(Button)`
  width: 179px;
  height: 52px;
  background-color: #ffd600;
  :disabled {
    background-color: gray;
  }
`;
