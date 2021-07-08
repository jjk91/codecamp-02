import {useState} from 'react'

export default function StatePage() {


    const [count, setCount] = useState(0)

    function aaa() {
        
        setCount(count + 1 )
        console.log(count)

    }

    const [text,setText02] = useState("안녕하세요")
    
    function click() {
        setText02("반갑습니다")
    }

    // 반복변경
    // function click() {
    //     if(text === "안녕하세요"){
    //         setText02("반갑습니다")
    //     } else {
    //         setText02("안녕하세요")
    //     }
    // }


          // 변수, 함수        명령어     기본값
    const [token, setToken] = useState("000000") // token 변경
    const [not, asd] = useState(false)  // 실행전 비활성화

    function tokenclick() {

        setToken(String(Math.floor(Math.random()*1000000)).padStart(6,0))
        asd(true)   // 활성화

    }
        
    return (
        <>
            <div>{count}</div>
            <button onClick={aaa}>+1</button>

            <div>{text}</div>
            <button onClick={click}>클릭</button>

            <div>{token}</div>
            <button onClick={tokenclick} disabled={not}>인증번호받기</button>

        </>
    )
}