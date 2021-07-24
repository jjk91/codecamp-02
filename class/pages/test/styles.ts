import styled from "@emotion/styled";

export const Body = styled.div`
  padding: 0;
  margin: 0;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Wrapper = styled.h1`
  color: #484848;
  font-size: 50px;
  font-weight: bold;
  font-family: monospace;
  letter-spacing: 7px;
  cursor: pointer span {
    transition: 0.5s linear;
  }
  :hover span:nth-of-type(1) {
    margin-right: 5px;
  }
  :hover span:nth-of-type(1):after {
    content: "'";
  }
  :hover span:nth-of-type(2) {
    margin-left: 30px;
  }
  :hover span {
    color: #fff;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff;
  }
`;
