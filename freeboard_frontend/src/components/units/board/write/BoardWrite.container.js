import { useState } from "react"
import { useRouter } from "next/router"
import { useMutation } from "@apollo/client"
import BoardWriteUi from "./BoardWrite.presntet"
import { CREATE_BOARD } from "./BoardWrite.queries"

export default function BoardWrite(){


    const [writer,setWriter] = useState("")
    const [password,setPassword] = useState("")
    const [title,setTitle] = useState("")
    const [contents,setContents] = useState("")
    const [writerError,setWriterError] = useState("")
    const [passwordError,setPasswordError] = useState("")
    const [titleError,setTitleError]  = useState("")
    const [contentsError,setContentsError] = useState("")
    
    const [usersns,setUserSns] = useState("")
    const [userimage,setUserImage] = useState("");

    const [board] = useMutation(CREATE_BOARD)
    const router = useRouter();

    function onChangeWriter(event){
        setWriter(event.target.value)
        if(event.target.value === ""){
          setWriterError("이름이 입력되지 않았습니다.")
        } else {
          setWriterError("")
        }
      }
    
      function onChangePassword(event){
        setPassword(event.target.value)
        if (event.target.value === ""){
          setPasswordError("비밀번호가 입력되지 않았습니다.")
        } else {
          setPasswordError("")
        }
      }
    
      function onChangeTitle(event){
        setTitle(event.target.value)
        if (event.target.value === ""){
          setTitleError("제목이 입력되지 않았습니다.")
        } else {
          setTitleError("")
        }
      }
    
      function onChangeContents(event){
        setContents(event.target.value)
        if (event.target.value === ""){
          setContentsError("내용이 입력되지 않았습니다.")
        } else {
          setContentsError("") 
        }
      }
      
      async function onClickSubmit(){
        // if(writer === ""){
        //   setWriterError("이름이 입력되지 않았습니다.")
        // } else {
        //   setWriterError("")
        // }
    
        // if(password === ""){
        //   setPasswordError("비밀번호가 입력되지 않았습니다.")
        // } else if (password.length < 8 && password.length > 16){ 
        //   setPasswordError("비밀번호는 8~16자 입니다.")
        // } else {
        //   setPasswordError("")
        // }
    
        if(writer !== ""&& password !==""){
          try {
            const result = await board({
              variables : {
                createBoardInput : {
                  writer ,
                  password ,
                  title ,
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
      //     if(writer === ""){
      //       setWriterError("이름이 입력되지 않았습니다.")
      //     } else {
      //       setWriterError("")
      //     }
    
      //     if(password === ""){
      //       setPasswordError("비밀번호가 입력되지 않았습니다.")
      //     } else if (password.length < 8 || password.length > 16){ 
      //       setPasswordError("비밀번호는 8~16자 입니다.")
      //     } else {
      //       setPasswordError("") 
      //     }
    
      //     if(writer !== ""&& password !==""){
      //       try {
      //         const result = await board({
      //           variables : {
      //             createBoardInput : {
      //               writer,
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
          <BoardWriteUi
            writerError={writerError}
            passwordError={passwordError}
            titleError={titleError}
            contentsError={contentsError}
            writer={onChangeWriter}
            password={onChangePassword}
            title={onChangeTitle}
            contents={onChangeContents}
            click={onClickSubmit}
          />

      )


}

