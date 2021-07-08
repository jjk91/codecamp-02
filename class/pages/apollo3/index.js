import {useState} from "react"
import {useMutation, gql} from "@apollo/client"
export default function Apollo3Page() {

    const [writer, setWriter] = useState()
    const [password, setPassword] = useState()
    const [title, setTitle] = useState()
    const [contents, setContents] = useState()

    const [board] = useMutation(
        gql`
            mutation zzz ($tempwriter: String, $temppassword: String
                , $temptitle: String, $tempcontents: String ){
                createBoard(writer:$tempwriter, password:$temppassword
                    , title:$temptitle, contents:$tempcontents){
                    message
                }
            }
        `
    )


    function onChangeWriter (event){
        setWriter(event.target.value)

    }

    function onChangePassword (event){
        setPassword(event.target.value)

    }

    function onChangeTitle (event){
        setTitle(event.target.value)

    }

    function onChangeContents (event){
        setContents(event.target.value)

    }

    async function onClickSubmit (){
        try{
            const result = await board({
                variables:{
                    tempwriter: writer,
                    temppassword: password,
                    temptitle: title,
                    tempcontents: contents
                }
            })
            alert(result.data.createBoard.message)
        } catch(error){
            alert(error.message)
        }
    }

    return (
        <>
            <div></div>
            작성자:<input type="text" onChange={onChangeWriter}/><br/>
            비밀번호:<input type="password" onChange={onChangePassword}/><br/>
            글제목:<input type="text" onChange={onChangeTitle}/><br/>
            글내용:<input type="text" onChange={onChangeContents}/><br/>
            <button onClick={onClickSubmit}>데이터 입력하기</button>
        </>
    )

}