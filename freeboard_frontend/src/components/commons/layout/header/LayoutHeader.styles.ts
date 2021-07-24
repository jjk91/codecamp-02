import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: midnightblue;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  /* background-color: skyblue; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;
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
