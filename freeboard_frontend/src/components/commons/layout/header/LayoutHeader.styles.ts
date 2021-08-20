import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: midnightblue;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  /* background-color: skyblue; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const InnerLogo = styled.img``;
export const InnerText = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;
export const InnerButton = styled.span`
  margin: 10px;
  color: white;

  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
`;

export const UserWrapper = styled.div`
  background-color: red;
  height: 100%;
  width: 200px;
`;

export const UserImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

export const UserInfo = styled.span`
  font-size: 16px;
  color: white;
  margin-right: 20px;
`;

export const PaymentWarpper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 30px;
`;
export const UserPoint = styled.div`
  width: 50px;
  background-color: yellow;
  line-height: 3px;
`;
