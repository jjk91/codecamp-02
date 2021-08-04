import withAuth from "../../../../src/components/commons/example/hoc/wirhAuth";

const MainPage = () => {
  function onClickButton() {}
  return (
    <>
      <div>메인페이지</div>
      <button onClick={onClickButton}>버튼</button>
    </>
  );
};
export default withAuth(MainPage);
