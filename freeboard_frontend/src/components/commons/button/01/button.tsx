import styled from "@emotion/styled";

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  height: 52px;
  width: 179px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "midnightblue" : "")};
`;

export default function Button01(props) {
  return (
    <ButtonWrapper>
      <Button type={props.type} isActive={props.isActive}>
        {props.buttonText}
      </Button>
    </ButtonWrapper>
  );
}
