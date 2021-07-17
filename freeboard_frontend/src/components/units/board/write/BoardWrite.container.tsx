import { useState } from "react"
import { useRouter } from "next/router"
import { useMutation , useQuery} from "@apollo/client"
import BoardWriteUi from "./BoardWrite.presnter"
import { CREATE_BOARD, UPDATE_BOARD, FETCH_BOARD } from "./BoardWrite.queries"
import { ChangeEvent } from "react"
import { IBoardWriteContainerProps, newInputsType,newInputsTypes } from "./BoardWrite.types"
import { IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types"

// import { FETCH_BOARD } from "../fetch/BoardsList.queries"


interface InputTypes {
  writer? : string | null,
  password : string;
  title? : string;
  contents? : string;
}

const InputInit:InputTypes = {
  writer:"",
  password:"",
  title:"",
  contents:""
}


export default function BoardWrite(props: IBoardWriteContainerProps){

  const router = useRouter()
  const [inputs, setInputs] = useState(InputInit)
  const [disabled, setdisabled] = useState(true)
  const [updateBoard] = useMutation(UPDATE_BOARD)
  const [board] = useMutation(CREATE_BOARD)


  const { data  } = useQuery<IQuery, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) }
  })
  

  function onChangeInputs(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){

    const newInputs :newInputsTypes= {
      ...inputs,
      [event.target.name] : event.target.value,
     
    }
    if(props.isEdit){
      newInputs.writer = data?.fetchBoard.writer
      console.log(data) 
    }

    setInputs(newInputs)
    if(newInputs.title || newInputs.contents) { 
      setdisabled(false)
    }

    // if(Object.values(newInputs).every(data => data)){
    //   setdisabled(false)
    // }

  }
    
  async function onClickSubmit() {
    if(Object.values(inputs).every(data => data)){ 
      try {
        const result = await board({
          variables : {
            createBoardInput : {...inputs }}
        })
        alert("등록되었습니다.")
        router.push(`/boards/${result.data.createBoard._id}`)

      } catch(error){
        
        alert(error.message)
      }
    }
  }



  async function onClickUpdate() {
    const newInputs  = {}
    if (inputs.title) newInputs.title = inputs.title
    if (inputs.contents) newInputs.contents = inputs.contents
    
    if (Object.values(newInputs).every(data => data)){
      try{
        const result = await updateBoard({
          variables:{
            boardId : router.query.boardId,    // router은 주소
            password : inputs.password,         // inputs에 입력된 password
            updateBoardInput : { ...newInputs }
          }
        })
        alert("해당 글을 수정합니다.")
        router.push(`/boards/${result.data.updateBoard._id}`)
      } catch (error){
          alert(error.message)
      }
    }
  }

  async function onClickList (){
    try{

      router.push(`/boards/${router.query.boardId}`)
    } catch (error){
      alert(error.meassage)
    }
  }

  
    return (
        <BoardWriteUi
          onClickUpdate={onClickUpdate}
          onClickList={onClickList}
          onChangeInputs={onChangeInputs}
          onClickSubmit={onClickSubmit}
          disabled={disabled}
          isEdit={props.isEdit}
          data={data}
        />
    )
}

