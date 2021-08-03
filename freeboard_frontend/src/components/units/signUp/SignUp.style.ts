import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-image: url("/images/11.jpg");
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px;
`;
export const WrapperSignUp = styled.div``;
export const SignUpTitle = styled.div`
  font-size: 28px;
  color: white;
`;
export const SignUpText = styled.div`
  font-size: 16px;
  color: white;
  margin: 20px 0 12px 0;
`;
export const SignUpInput = styled.input`
  height: 64px;
  width: 384px;
  border-radius: 10px;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid white;
  padding-left: 16px;
  color: white;
`;

export const SignUpSubmit = styled.button`
  height: 64px;
  width: 384px;
  border-radius: 10px;
  margin-top: 60px;
  background-color: midnightblue;
  color: white;
`;
export const Error = styled.div`
  color: red;
`;
