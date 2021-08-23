import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-left: 20px;
  margin-top: 80px;
  width: 240px;
  top: 0;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
`;
export const TestWrapper = styled.div`
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: midnightblue;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #cfcff4;
  }
`;

export const TodayItems = styled.div`
  font-size: 18px;
  padding: 20px 0 20px 0;
  text-align: center;
`;
export const ItemsWrapper = styled.div`
  border: 1px solid #bdbdbd;
  height: 200px;
  width: 156px;
  padding: 10px;
  border-radius: 10px;
`;
export const ItemPickInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;
export const ItemPick = styled.div``;
export const ItemCoutn = styled.div``;
export const ItemPhoto = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;
export const Photo = styled.img`
  width: 60px;
  height: 60px;
`;
export const ItemInfo = styled.div`
  width: 100%;
  display: block;
`;
export const ItemName = styled.div`
  height: 18px;
  font-size: 12px;
`;
export const ItemRemarks = styled.div`
  height: 18px;
  font-size: 12px;
`;
export const ItemPrice = styled.div`
  height: 24px;
  font-size: 16px;
`;
export const ItemTags = styled.div`
  height: 15px;
  font-size: 10px;
  color: #bdbdbd;
`;
