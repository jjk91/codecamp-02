import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";
import InfiniteScroll from "react-infinite-scroller";

export const Contniner = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Wrapper = styled.div`
  margin: 80px 0;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  border: 1px solid #cfcff4;
`;
export const ItemsOfTheBest = styled.div`
  width: 1200px;
  height: 473px;
`;
export const ItemsOfTheBestTitle = styled.div`
  font-size: 36px;
  text-align: center;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`



export const ItemsList = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 2px solid #cfcff4;
  /* border-bottom: 2px solid red; */
  padding: 20px 0;
`;
export const ItemListLeft = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImgWrapper = styled.div`
  height: 160px;
  width: 160px;
`;
export const ItemImg = styled.img`
  max-width: 160px;
  min-width: 160px;
  height: 160px;
  width: 160px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
`;
export const ItemInfoTop = styled.div``;
export const ItemName = styled.div`
  font-size: 24px;
`;
export const ItemRemarks = styled.div`
  font-size: 16px;
`;
export const ItemTags = styled.div`
  font-size: 16px;
`;
export const ItemInfoBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
  height: 25px;
`;

export const SellerInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

export const SellerImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
export const SellerName = styled.div`
  font-size: 16px;
  line-height: 25px;
`;
export const ItemPickInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ItemPick = styled(HeartFilled)`
  color: #cfcff4;
`;
export const ItemCount = styled.div``;

export const ItemListRigth = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ItemPrice = styled.div`
  font-size: 24px;
`;

export const FooterWrapper = styled.div`
  border-top: 1px solid #cfcff4;
  padding: 10px 0;
`;
export const ItemsOfTheBestList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const BestItem = styled.div`
  padding: 20px;
  height: 391px;
  width: 24%;
  border: 1px solid #cfcff4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Img = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const BestItemImg = styled.img`
  width: 242px;
  height: 242px;
  display: flex;
`;
export const BestItemName = styled.div``;
export const BestItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
export const BestItemInfoLeft = styled.div``;
export const BestItemRemarks = styled.div``;
export const BestItemPrice = styled.div``;
export const BestItemInfoRight = styled.div``;
export const BestItemPick = styled(HeartFilled)`
  color: #cfcff4;
`;
export const BestItemCount = styled.div``;
