 import { useState } from "react"
import {Wrapper, Head, Headgroup, Headnotice, Headicon
    , Icon, Shadow, Body, Bodygroup, Email, Error, Hr1
    , Hr2, Password, Login, Find, Space, Idfind, Passwordfind
    , Join, Kakao} from "../../styles/02-login.style"

 export default function Home() {
    const [email1,setEmail1] = useState('')
    const [password,setPassword] = useState('')
    const [emailError,setemailError] = useState('')
    const [passwordError,setPasswordError] = useState('')

    function emailcheck(event) {
        setEmail1(event.target.value);
        if(event.target.value === ""){
            setemailError ("이메일 주소가 입력되지 않았습니다.")
        } else {
            setemailError ("")
        }
    }

    function passwordcheck(event) {
        setPassword(event.target.value)
        if(event.target.value ===""){
            setPasswordError("비밀번호가 입력되지 않았습니다.")
        } else {
            setPasswordError("")
        }
    }


    function check() {
        if(email1 === ""){
            setemailError ("이메일 주소가 입력되지 않았습니다.")
        } else if(email1.indexOf("@") === -1 || email1.indexOf(".") === -1){
            setemailError ("이메일 주소를 확인해주세요.")
        } else {
            setemailError ("")
        }

        if(password === ""){
            setPasswordError("비밀번호가 입력되지 않았습니다.")
        } else if(password.length < 8 || password.length > 16 ){
            setPasswordError("8~16자의 영문, 숫자, 특수문자만 사용 가능합니다.")
        } else {
            setPasswordError("")
        }
    }

    return (
        <Wrapper>
            <Head>
                <Headgroup>
                    <Headicon>
                        <Icon src="/images/ic-58-main-location-unselected@2x.png"/>
                        <Shadow></Shadow>
                    </Headicon>
                    <Headnotice>잇츠로드</Headnotice>
                </Headgroup>
            </Head>

            <Body>
                <Bodygroup>
                    <Email type="text" placeholder="이메일을 입력해주세요." onChange={emailcheck} />
                    <Hr1 />
                    <Error> {emailError} </Error>
                    <Password type="password" placeholder="비밀번호를 확인해주세요." onChange={passwordcheck}></Password>
                    <Hr2/>
                    <Error>{passwordError}</Error>
                    <Login onClick={check}>로그인</Login>
                </Bodygroup>
                <Find>
                    <Idfind>이메일 찾기</Idfind>
                    <Space></Space>
                    <Passwordfind>비밀번호 찾기</Passwordfind>
                    <Space></Space>
                    <Join>회원가입</Join>
                </Find>

                <Kakao onClick={check}>카카오톡으로 로그인</Kakao>
            </Body>
        </Wrapper>
    )
 }