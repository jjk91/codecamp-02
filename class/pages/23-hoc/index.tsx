import withAuth from "../../src/components/commons/layout/hocs/withAuth";

function ExamplePage() {
  return <div>접근에 성공했습니다.</div>;
}

export default withAuth(ExamplePage);
