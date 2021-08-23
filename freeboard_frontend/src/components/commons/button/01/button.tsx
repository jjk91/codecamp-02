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
  border-radius: 10px;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  background-color: ${(props: any) =>
    props.isActive ? "midnightblue" : " #cfcff4"};
  color: white;
`;

export default function Button01(props: any) {
  return (
    <ButtonWrapper>
      <Button
        type={props.type}
        // @ts-ignore
        isActive={props.isActive}
        onClick={props.onClick}
      >
        {props.buttonText}
      </Button>
    </ButtonWrapper>
  );
}
