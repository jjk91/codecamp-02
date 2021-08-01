import styled from "@emotion/styled";

interface IpageProps {
  isActive?: boolean;
}

export const Paginations = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
`;
export const PageMove = styled.div``;
export const Page = styled.div`
  cursor: ${(props: IpageProps) => (props.isActive ? "default" : "pointer")};
  margin: 0 10px;
  color: ${(props: IpageProps) => (props.isActive ? "green" : "black")};
  font-weight: ${(props: IpageProps) => (props.isActive ? "bold" : "normal")};
`;
