import{useState} from "react"
import{useMutation, gql} from "@apollo/client"
import { useRouter } from "next/router"

import {Wrapper, Box, HeadTitle, Head1, HeadText, Error, Head2
  , Body1, Body2, Body3, BodyWrapper, Body4, Text, Input
  , Input1, Input2, Input3, Click1, Footer1, Upload, Photo
  , Footer2, Input4, CheckBox, Footer3, Click2, Click3} from "../../../styles/Home.styles"


export default function Home() {
  // const allDate = {user, password, title, c}
  const [user,setUser] = useState("")
  const [password,setPassword] = useState("")
  // const [error,setError] = useState("")
  const [title,setTitle] = useState("")
  const [contents,setContents] = useState("")
  // const [allDate,setAllDate] = useState("")
  const [userError,setUserError] = useState("")
  const [passwordError,setPasswordError] = useState("")
  const [titleError,setTitleError]  = useState("")
  const [contentsError,setContentsError] = useState("")

  const [usersns,setUserSns] = useState("")
  const [userimage,setUserImage] = useState("");

  const router = useRouter();

  const [board] = useMutation(gql`
    mutation createBoard($createBoardInput : CreateBoardInput!) {
      createBoard(createBoardInput : $createBoardInput) {
        _id
      }
    }
    `
  )


  function alluser(event){
    setUser(event.target.value)
    if(event.target.value === ""){
      setUserError("이름이 입력되지 않았습니다.")
    } else {
      setUserError("")
    }
  }

  function allpassword(event){
    setPassword(event.target.value)
    if (event.target.value === ""){
      setPasswordError("비밀번호가 입력되지 않았습니다.")
    } else {
      setPasswordError("")
    }
  }

  function alltitle(event){
    setTitle(event.target.value)
    if (event.target.value === ""){
      setTitleError("제목이 입력되지 않았습니다.")
    } else {
      setContesetTitleErrorntsError("")
    }
  }

  function allcontents(event){
    setContents(event.target.value)
    if (event.target.value === ""){
      setContentsError("내용이 입력되지 않았습니다.")
    } else {
      setContentsError("")
    }
  }
  
  async function Check(){
    // if(user === ""){
    //   setUserError("이름이 입력되지 않았습니다.")
    // } else {
    //   setUserError("")
    // }

    // if(password === ""){
    //   setPasswordError("비밀번호가 입력되지 않았습니다.")
    // } else if (password.length < 8 && password.length > 16){ 
    //   setPasswordError("비밀번호는 8~16자 입니다.")
    // } else {
    //   setPasswordError("")
    // }

    if(user !== ""&& password !==""){
      try {
        const result = await board({
          variables : {
            createBoardInput : {
              writer : user,
              password,
              title,
              contents
            }
          }
        })
        alert("등록되었습니다.")
        router.push(`/detail/${result?.data?.createBoard?._id}`)
      } catch(error){
        alert(error.message)
      }
    } else {
      alert("입력창이 비어있습니다.")
    }
  }

// ---- backup
  // async function Check(){
  //     if(user === ""){
  //       setUserError("이름이 입력되지 않았습니다.")
  //     } else {
  //       setUserError("")
  //     }

  //     if(password === ""){
  //       setPasswordError("비밀번호가 입력되지 않았습니다.")
  //     } else if (password.length < 8 || password.length > 16){ 
  //       setPasswordError("비밀번호는 8~16자 입니다.")
  //     } else {
  //       setPasswordError("")
  //     }

  //     if(user !== ""&& password !==""){
  //       try {
  //         const result = await board({
  //           variables : {
  //             createBoardInput : {
  //               writer : user,
  //               password,
  //               title,
  //               contents
  //             }
  //           }
  //         })
  //         alert("등록되었습니다.")
  //         router.push(`/detail/${result?.data?.createBoard?._id}`)
  //       } catch(error){
  //         alert(error.message)
  //       }
  //     } else {
  //       alert("입력창이 비어있습니다.")
  //     }
  //   }



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
          <Input1 type="text" placeholder="제목을 작성해주세요." onChange={alltitle}></Input1>
          <Error>{titleError}</Error>
        </Body1>

        <Body2>
          <Text>내용</Text>
          <Input2 type="textarea" placeholder="내용을 작성해주세요." onChange={allcontents}></Input2>
          <Error>{contentsError}</Error>
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
            <Photo onChange={setUserImage}>
              <div>+</div>
              <div>Upload</div>
            </Photo>
            <Photo onChange={setUserImage}>
              <div>+</div>
              <div>Upload</div>
            </Photo>
            <Photo onChange={setUserImage}>
              <div>+</div>
              <div>Upload</div>
            </Photo>
          </Upload>
        </Footer1>
        <Footer2>
          <Text>메인 설정</Text>
          <CheckBox>
            <Input4 type="radio" name="check" onChange={setUserSns}></Input4>
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
 