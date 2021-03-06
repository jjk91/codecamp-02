import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-right: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 120px;
`;

export const MypageTitle = styled.div`
  font-size: 24px;
  margin-bottom: 48px;
`;

export const UserWrapper = styled.div`
  text-align: center;
  margin-bottom: 69px;
  cursor: pointer;
`;

export const UserImg = styled.img`
  height: 80px;
  width: 80px;
  margin-bottom: 28px;
`;

export const UserName = styled.div`
  margin-bottom: 10px;
  font-size: 24px;
`;

export const UserAmountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const UserAmountImg = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

export const UserAmount = styled.div`
  font-size: 16px;
`;

export const MyPageList = styled.div``;

export const MyItemsWarpper = styled.div`
  display: flex;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${(props: any) => (props.isActive ? "midnightblue" : "#cfcff4")};
`;

export const MyItemImg = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

export const MyItems = styled.div``;

export const MyAmountWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${(props: any) => (props.isActive ? "midnightblue" : "#cfcff4")};
`;

export const MyAmountImg = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

export const MyAmount = styled.div``;

export const MyProfileWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${(props: any) => (props.isActive ? "midnightblue" : "#cfcff4")};
`;

export const MyProfileImg = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

export const MyProfile = styled.div``;
