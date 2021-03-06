import styled from "@emotion/styled";
import { breakPoints } from "../../src/commons/styles/media";

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: red;

  @media ${breakPoints.tablet} {
    width: 500px;
    height: 500px;
    background-color: blue;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
    background-color: gray;
  }
`;

export default function MediaPage() {
  return <Wrapper></Wrapper>;
}
