import styled from "@emotion/styled";

const Wrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
`;
const TitleText = styled.div`
  font-size: 65px;
  text-shadow: 7px 7px 10px #bdbdbd;
`;
const Text = styled.div`
  font-size: 50px;
`;
export default function Home() {
  return (
    <Wrapper>
      <TextWrapper>
        <TitleText>{"Front-end devloper Ji junku"}</TitleText>
        <Text>{"Resume"}</Text>
        <Text>{"Git"}</Text>
        <Text>{"Project_moyeo(Web)"}</Text>
      </TextWrapper>
    </Wrapper>
  );
}
