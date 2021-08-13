import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

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
  /* width: 50px;
  height: 27px; */
  background-color: beige;
  font-size: 18px;
  color: #bdbdbd;
`;
export const ItemName = styled.div`
  /* width: 100px;
  height: 36px; */
  background-color: green;
  font-size: 24px;
`;

export const ItemPrice = styled.div`
  /* width: 200px;
  height: 53px; */
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
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

export const ItemImgWrapper = styled.div``;
export const ItemImg = styled.img`
  width: 482px;
  height: 504px;
  background-color: gray;
  .slick-slider {
    .slick-dots {
    }
  }
`;
export const settings = {
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export const ItemContents = styled.div``;
export const ItemTags = styled.div`
  text-align: left;
  padding-bottom: 40px;
  border-bottom: 1px solid yellow;
`;
export const ItemInfoFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 84px;
`;
