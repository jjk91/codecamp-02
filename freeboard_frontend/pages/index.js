import{useState} from "react"

import {Wrapper, Box, HeadTitle, Head1, HeadText, Error, Head2
  , Body1, Body2, Body3, BodyWrapper, Body4, Text, Input
  , Input1, Input2, Input3, Click1, Footer1, Upload, Photo
  , Footer2, Input4, CheckBox, Footer3, Click2, Click3} from "../styles/Home.styles"


export default function Home() {

  // const[변수,함수] = useState("")
  const[user,setUser] = useState("")
  const[password,setPassword] = useState("")
  const[userError,setUserError] = useState("")
  const[passwordError,setPasswordError] = useState("")

  function alluser(event){
    setUser(event.target.value)
    if(user === ""){
      setUserError("이름이 입력되지 않았습니다.")
    } else {
      setUserError("")
    }
  }

  function allpassword(event){
    setPassword(event.target.value)
    if(password === ""){
      setPasswordError("비밀번호가 입력되지 않았습니다.")
    } else {
      setPasswordError("")
    }
  }
  function Check(){
    if(user === ""){
      setUserError("이름이 입력되지 않았습니다.")
    } else {
      setUserError("")
    }

    if(password === ""){
      setPasswordError("비밀번호가 입력되지 않았습니다.")
    } else {
      setPasswordError("")
    }
  }

  return (
    <Wrapper>
      <Box>
        <Head1>
          <HeadTitle>게시물 등록</HeadTitle>
        </Head1>

        <Head2>
          <HeadText>
            <Text>작성자*</Text>
            <Input type="text" placeholder="이름을 적어주세요." onChange={alluser}></Input>
            <Error>{userError}</Error>
          </HeadText>
          <HeadText>
            <Text>비밀번호</Text>
            <Input type="password" placeholder="비밀번호를 입력해주세요." onChange={allpassword}></Input>
            <Error>{passwordError}</Error>
          </HeadText>
        </Head2>

        <Body1>
          <Text>제목</Text>
          <Input1 type="text" placeholder="제목을 작성해주세요."></Input1>
        </Body1>

        <Body2>
          <Text>내용</Text>
          <Input2 type="textarea" placeholder="내용을 작성해주세요."></Input2>
        </Body2>

        <Body3>
          <Text>주소</Text>

          <BodyWrapper>
            <Input3 type="text" placeholder="07250"></Input3>
            <Click1 type="button">우편번호 검색 </Click1>
          </BodyWrapper>

          <Input1 type="text" placeholder=""></Input1>
          <Input1 type="text" placeholder=""></Input1>
        </Body3>

        <Body4>
          <Text>유튜브</Text>
          <Input1 type="text" placeholder="링크를 복사해주세요."></Input1>
        </Body4>

        <Footer1>
          <Text>사진 첨부</Text>
          <Upload>
            <Photo>
              <div>+</div>
              <div>Upload</div>
            </Photo>
            <Photo>
              <div>+</div>
              <div>Upload</div>
            </Photo>
            <Photo>
              <div>+</div>
              <div>Upload</div>
            </Photo>
          </Upload>
        </Footer1>
        <Footer2>
          <Text>메인 설정</Text>
          <CheckBox>
            <Input4 type="radio" name="check"></Input4>
            <Text>유트브</Text>
            <Input4 type="radio" name="check"></Input4>
            <Text>사진</Text>
          </CheckBox>
        </Footer2>
        <Footer3>
          <Click2 type="button" onClick={Check}>등록하기</Click2>
        </Footer3>
      </Box>
    </Wrapper>
  )
}
 