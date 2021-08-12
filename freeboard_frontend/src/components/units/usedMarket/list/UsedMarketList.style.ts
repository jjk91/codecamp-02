import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";

export const Contniner = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Wrapper = styled.div`
  margin: 80px 0;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;
export const ItemsOfTheBest = styled.div`
  background-color: royalblue;
  width: 1200px;
  height: 473px;
`;
export const ItemsOfTheBestTitle = styled.div`
  font-size: 36px;
  text-align: center;
`;

export const ItemsList = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: pink;
  border-top: 2px solid red;
  border-bottom: 2px solid red;
  padding: 20px 0;
`;
export const ItemListLeft = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImgWrapper = styled.div`
  background-color: yellow;
  height: 160px;
  width: 160px;
`;
export const ItemImg = styled.img`
  max-width: 160px;
  min-width: 160px;
  height: 160px;
  width: 160px;
  background-color: red;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
`;
export const ItemInfoTop = styled.div`
  background-color: coral;
`;
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
  background-color: yellow;
  width: 145px;
`;

export const SellerInfo = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
`;

export const SellerImg = styled.img``;
export const SellerName = styled.div``;
export const ItemPick = styled.div`
  font-size: 16px;
`;
export const ItemPickInfo = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ItemCount = styled.div``;

export const ItemListRigth = styled.div`
  background-color: blue;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ItemPrice = styled.div`
  font-size: 24px;
`;

export const FooterWrapper = styled.div``;
export const ItemsOfTheBestList = styled.div`
  background-color: gold;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const BestItem = styled.div`
  padding: 20px;
  height: 391px;
  width: 24%;
  border: 1px solid yellowgreen;
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
  background-color: green;
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
  color: red;
`;
export const BestItemCount = styled.div``;
