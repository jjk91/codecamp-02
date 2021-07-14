import { useRouter } from "next/router"
import { useState } from "react"
import { useMutation } from "@apollo/client"
import BoardWriteUi from "./BoardWrite.presenter"
import { CREATE_BOARD, UPDATE_BOARD }from "./BoardWrite.queries"
import { ChangeEvent } from "react"
import { IBoardWriteContainerProps } from "./BoardWrite.types"


const inputInit = {
    writer:"",
    password:"",
    title:"",
    contents:""
}

export default function BoardWrite(props: IBoardWriteContainerProps){
    
    const router = useRouter()
    const [active,setActive] = useState(false)
    const [inputs, setInputs] = useState(inputInit)
    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    
    function OnChangeInputs(event: ChangeEvent<HTMLInputElement>){
        const newInputs ={       // const newInputs 안에있는 event 를 사용하기 위에 function OnChangeInputs 안에 있어야 한다
            ...inputs,     // const[inputs, setInputs] = useState(inputInit) 에서 inputInit 값 기본값으로 가져온다
            [event.target.name] : event.target.value,   // [event.target.name] 은 presenter에 있는 name 변수값
        }
        setInputs(newInputs)
        if(Object.values(newInputs).every(data => data)){
            setActive(true)
        }
        // if (newInputs.writer && newInputs.password && newInputs.title && newInputs.contents){
        //     setActive(true)
        // }
    }

    async function onClickSubmit (){
        try{
            const result = await createBoard({
                variables:{
                    createBoardInput:{ ...inputs }}
            })
            alert(result.data.createBoard._id)
            router.push(`/detail/${result.data.createBoard._id}`)
        } catch(error){
            alert(error.message)
        }
    }

    async function onClickEdit(){
        try{
            const result = await updateBoard({
                variables:{
                    boardId : router.query.boardId,
                    password: inputs.password,
                    updateBoardInput:{
                        title: inputs.title,
                        contents: inputs.contents
                    }
                }
            })
            alert(result.data.updateBoard._id)
            router.push(`/detail/${result.data.updateBoard._id}`)
        } catch(error) {
           
            alert(error.message)

        }

    }

    return(
        <BoardWriteUi 
            OnChangeInputs={OnChangeInputs}
            onClickSubmit={onClickSubmit}
            onClickEdit={onClickEdit}
            active={active}
            isEdit={props.isEdit}
        />
    )
}
