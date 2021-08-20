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
  margin-bottom: 30px;
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

// ===================================================리엑트 슬릭==========================================

export const ItemInfoBodyTop = styled.div`
  width: 600px;
  height: 600px;
  margin: auto;
`;

export const SliderImg = styled(Slider)``;

export const ItemImgWrapper = styled.div``;

export const ItemImg = styled.img`
  width: 400px;
  height: 400px;
  margin: auto;
  margin-bottom: 110px;
`;
export const ItemImgPagingWrapper = styled.div``;

export const ItemImgPaging = styled.img`
  width: 100px;
  height: 100px;
`;
export const PagingUl = styled.ul`
  > li {
    width: 100px;
    height: 100px;
    margin: 10px;
  }
`;
// ===================================================리엑트 슬릭==========================================
export const ItemInfoBodyBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MapWrapper = styled.div``;

export const ItemContents = styled.div``;

export const ItemTags = styled.div`
  /* text-align: left; */
  padding-bottom: 40px;
  border-bottom: 1px solid yellow;
`;
export const ItemInfoFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding-top: 84px;
`;
