import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import { Button } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  padding: 20px 102px 80px 102px;
  border: 1px solid black;
  /* margin: 100px 100px; */
  margin: auto;
`;

export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  border-bottom: 1px solid gray;
`;

export const WriterInfo = styled.div`
  height: 140px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const WriterImg = styled.img`
  width: 47px;
  height: 47px;
  /* background-color: gray; */
`;
export const WriterDate = styled.div``;
export const Writer = styled.div`
  font-size: 24px;
`;

export const WriterDay = styled.div`
  font-size: 16px;
`;
export const WriterIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 34px;
`;
export const Connect = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 20px;
`;
export const Location = styled.img`
  width: 32px;
  height: 32px;
`;
export const BodyWrapper = styled.div``;

export const Title = styled.div`
  font-size: 36px;
  padding-top: 80px;
  padding-bottom: 40px;
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContentsImg = styled.div`
  width: 996px;
  height: 520px;
  padding-bottom: 40px;
`;
export const Img = styled.img`
  width: 50%;
  height: 50%;
  padding-bottom: 40px;
`;
export const ContentsText = styled.div`
  width: 100%;
  height: 256px;
  font-size: 16px;
  /* background-color: pink; */
  padding-bottom: 120px;
  padding-top: 40px;
`;
export const ContentsUrl = styled(ReactPlayer)`
  width: 486px;
  height: 240px;
  /* background-color: gray; */
  margin-bottom: 160px;
`;

export const FooterWrapper = styled.div`
  /* width: 120px;
    height: 51px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: flex-end; */
  /* margin-right: 40px; */
  font-weight: bold;
`;
export const LikeGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;

export const Like = styled(LikeOutlined)`
  font-size: 51px;
  color: midnightblue;
`;
export const LikeCount = styled.div`
  font-size: 18px;
  color: midnightblue;
  text-align: center;
`;

export const DislikeGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Dislike = styled(DislikeOutlined)`
  font-size: 51px;
  color: midnightblue;
`;

export const DislikeCount = styled.div`
  font-size: 18px;
  text-align: center;
  color: midnightblue;
`;

export const Wrapper2 = styled.div`
  width: 1200px;
  padding: 80px 298px 87px 298px;
  margin: auto;
`;

export const Wrapper2ButtonList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-color: #ffffff;
  background-color: white;
`;

export const List = styled(Button)`
  height: 45px;
  width: 179px;
  border-radius: 10px;
`;

export const Update = styled(Button)`
  height: 45px;
  width: 179px;
  border-radius: 10px;
`;

export const Delete = styled(Button)`
  height: 45px;
  width: 179px;
  border-radius: 10px;
`;

export const Wrapper2Comment = styled.div``;
