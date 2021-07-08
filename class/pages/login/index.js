import {useState} from 'react'
import {Error} from './login.style'


export default function LoginPage() {

    const [id, setId] = useState('')
    const [password,setPassword] = useState('')
    const [idError,setIdError] = useState('')
    const [passwordError,setPasswordError] = useState('')

    function aaa(event){
        setId(event.target.value)
        if(id === ""){
            setIdError('아이디를 입력해주세요.')
        } else {
            setIdError('') 
        }
    }

 
    function bbb(event){
        setPassword(event.target.value)
        if (password === ""){
            setPasswordError('비밀번호를 입력해주세요')
        } else {
            setPasswordError('')
        }
    }

    function ccc() {
        if(id === ""){
            setIdError('아이디를 입력해주세요.')
        } else {
            setIdError('') 
        }

        if (password === ""){
            setPasswordError('비밀번호를 입력해주세요')
        } else {
            setPasswordError('') 
        }
        if(id !=="" && password !==""){
            alert('로그인 하시겠습니까?!')
        }
    }


    return(
        <div>
            <h1>로그인</h1>
            <div>아이디</div>
            <input type="text" onChange={aaa}/>
            <Error>
                <div>{idError}</div>
            </Error>
            <div>비밀번호</div>
            <input type="password" onChange={bbb}/>
            <Error>
                <div>{passwordError}</div>
            </Error>
            <button onClick={ccc}>로그인하기</button>
        </div>
    )
    
}