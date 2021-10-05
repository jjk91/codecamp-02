import styled from "@emotion/styled";
import withAuth from "../../src/components/commons/hoc/wirhAuth";
// import MyItemPage from "../../src/components/units/mypage/myMarket/myItem.container";
import MyPageData from "../../src/components/units/mypage/userData/userData.container";

const Wrapper = styled.div`
  display: flex;
`;

const Mypage = () => {
  return (
    <>
      <Wrapper>
        <MyPageData />
      </Wrapper>
    </>
  );
};
export default withAuth(Mypage);
