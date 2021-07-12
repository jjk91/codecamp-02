import { useRouter } from "next/router"
import { useState } from "react"
import { useMutation } from "@apollo/client"
import BoardWriteUi from "./BoardWrite.presenter"
import {CREATE_BOARD}from "./BoardWrite.queries"

export default function BoardWrite(){

    const router = useRouter()

    const [active,setActive] = useState(false)
    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [createBoard] = useMutation(CREATE_BOARD)

 
    function onChangeWriter (event){
        setWriter(event.target.value)
        if (event.target.value&& password&& title &contents){
            setActive(true)
        }
    }

    function onChangePassword (event){
        setPassword(event.target.value)
        if (writer&&event.target.value&&title&&contents){
            setActive(true)
        }
    }

    function onChangeTitle (event){
        setTitle(event.target.value)
        if (writer&&password&&event.target.value&&contents){
            setActive(true)
        }

    }

    function onChangeContents (event){
        setContents(event.target.value)
        if (writer&&password&&title&&event.target.value){
            setActive(true)
        }

    }

    async function onClickSubmit (){
        try{
            const result = await createBoard({
                variables:{
                    createBoardInput:{
                        writer,
                        password,
                        title,
                        contents
                    }
                }
            })
            alert(result.data.createBoard._id)
            router.push(`/detail/${result.data.createBoard._id}`)
        } catch(error){
            alert(error.message)
        }
    }

    return(
        <BoardWriteUi 
            aaa={onChangeWriter}
            bbb={onChangePassword}
            ccc={onChangeTitle}
            ddd={onChangeContents}
            eee={onClickSubmit}
            active={active}
        />
    )
}

