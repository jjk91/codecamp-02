import styled from "@emotion/styled";
import MyItemPage from "../../src/components/units/mypage/myItem/myItem.container";
import MyPageData from "../../src/components/units/mypage/userData/userData.container";

const Wrapper = styled.div`
  display: flex;
`;

export default function Mypage() {
  return (
    <>
      <Wrapper>
        <MyPageData />
        <MyItemPage />
      </Wrapper>
    </>
  );
}
