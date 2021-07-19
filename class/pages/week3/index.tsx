import styled from "@emotion/styled";
import { Rate , Alert, DatePicker } from "antd"
import { useState } from "react";
import ReactPlayer from "react-player";
const desc = ['1점', '2점', '3점', '4점', '5점'];

const YouTube = styled(ReactPlayer)`

`




export default function Week3Page(){
    const [score, setScore] = useState('')
    const [date, setDate] = useState('')

    function onHandleChange(value){
        console.log(value)
        // desc[value - 1]
        // alert(value)
        setScore(desc[value-1])
    }

    function onDateChange(date: moment.Moment | null){
        // console.log(dateString)
        console.log(date?.month())
        // setDate(dateString)
    }


    return (
        <>
            <DatePicker onChange={(date, dateString)=> {onDateChange(date, dateString)}} />
            <Rate tooltips={desc} onChange={(onHandleChange)}/>
            <div>{date.slice(5,7)}</div>       
            <div>{score}</div>
            {/* (<Alert message={score}/>) */}
            {score !== "" && (<Alert message={score} type="error" closable={true}/>)}
            <YouTube 
                url="https://www.youtube.com/watch?v=McHtMb6a0aI" 
                width = "800px"
                height = "600px"
                playing ={true}
                // muted 
                volume = {0}
                 />


        </>
    )
}



            