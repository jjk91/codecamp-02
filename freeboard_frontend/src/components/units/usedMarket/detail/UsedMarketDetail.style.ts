import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrapper = styled.div`
  margin: 80px 0;
  max-width: 792px;
  width: 100%;
  height: 100%;
  padding: 80px 0 80px 0;
  border: 1px solid black;
  background-color: skyblue;
`;

export const WrapperHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid yellow;
`;
export const SellerInfoLeft = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SellerImg = styled.img`
  width: 40px;
  height: 40px;
`;
export const SellerData = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SellerName = styled.div`
  height: 24px;
  width: 100px;
  background-color: burlywood;
`;
export const WriterDate = styled.div`
  background-color: greenyellow;
`;
export const SellerInfoRigth = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SellerConnect = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
export const Location = styled.img`
  width: 24px;
  height: 24px;
`;

export const WrapperBody = styled.div`
  padding-top: 20px;
`;
export const ItemsInfo = styled.div``;
export const ItemInfoHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ItemInfoHeadLeft = styled.div``;
export const ItemRemarks = styled.div`
  background-color: beige;
  font-size: 18px;
  color: #bdbdbd;
`;
export const ItemName = styled.div`
  background-color: green;
  font-size: 24px;
`;

export const ItemPrice = styled.div`
  background-color: firebrick;
  font-size: 36px;
`;
export const ItemInfoHeadRigth = styled.div`
  width: 36px;
  height: 63px;
  background-color: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ItemLike = styled(HeartFilled)``;

export const ItemLikeCount = styled.div`
  font-size: 16px;
  background-color: green;
`;
export const ItemInfoBody = styled.div``;

export const ItemInfoBodyTop = styled.div`
  /* padding-bottom: 40px; */
  width: 100%;

  padding: 50px 150px;
`;

export const SliderImg = styled(Slider)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px;
`;

export const ItemImgWrapper = styled.div``;

export const ItemImg = styled.img`
  width: 300px;
  height: 300px;
`;

export const ItemImgPagingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemImgPaging = styled.img`
  width: 78px;
  height: 78px;
`;

export const ItemInfoBodyBottom = styled.div``;

export const UseditemAddress = styled.div`
  border-bottom: 1px solid yellow;
  padding: 80px 0;
`;
export const ItemMap = styled.div`
  width: 792px;
  height: 360px;
  background-color: hotpink;
`;

export const ItemContents = styled.div``;

export const ItemTags = styled.div`
  /* text-align: left; */
  padding-bottom: 40px;
  border-bottom: 1px solid yellow;
`;
export const ItemInfoFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 84px;
`;
