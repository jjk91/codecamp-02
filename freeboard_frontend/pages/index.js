import styled from "@emotion/styled";
import router from "next/router";
import { useEffect } from "react";

const Wrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  color: white;
`;
const TitleText = styled.div`
  padding: 5%;
  font-size: 75px;
  text-shadow: 7px 7px 10px #bdbdbd;
`;
const Text = styled.div`
  font-size: 65px;
  padding: 2%;
  cursor: pointer;
`;
export default function Home(props) {
  useEffect(() => {
    if (props.layout !== false) {
      props.setLayout(false);
    }
  }, []);

  const onClickResume = () => {
    router.push(
      "https://thirsty-feeling-c13.notion.site/517d717b469740d0aa51a14153210ba4"
    );
  };

  const onClickGit = () => {
    router.push("https://github.com/jjk91");
  };
  const onClickProject = () => {
    props.setLayout(true);
    router.push("/boards/login");
  };
  return (
    <Wrapper>
      <TextWrapper>
        <TitleText>{"Front-end devloper Ji junku"}</TitleText>
        <Text onClick={onClickResume}>{"Resume"}</Text>
        <Text onClick={onClickGit}>{"Git"}</Text>
        <Text onClick={onClickProject}>{"Project_moyeo(Web)"}</Text>
      </TextWrapper>
    </Wrapper>
  );
}
