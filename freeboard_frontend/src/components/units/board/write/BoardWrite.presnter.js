import {Wrapper, Box, HeadTitle, Head1, HeadText, Error, Head2
    , Body1, Body2, Body3, BodyWrapper, Body4, Text, Input
    , Input1, Input2, Input3, Click1, Footer1, Upload, Photo
    , Footer2, Input4, CheckBox, Footer3, Click2} from "./BoardWrite.style"

export default function BoardWriteUi(props){
    return(
        <Wrapper>
        <Box>
        <Head1>
            <HeadTitle>게시물 등록</HeadTitle>
        </Head1>

        <Head2>
            <HeadText>
            <Text>작성자*</Text>
            <Input type="text" placeholder="이름을 적어주세요." onChange={props.onChangeWriter}></Input>
            <Error>{props.writerError}</Error>
            </HeadText>
            <HeadText>
            <Text>비밀번호</Text>
            <Input type="password" placeholder="비밀번호를 입력해주세요." onChange={props.onChangePassword}></Input>
            <Error>{props.passwordError}</Error>
            </HeadText>
        </Head2>

        <Body1>
            <Text>제목</Text>
            <Input1 type="text" placeholder="제목을 작성해주세요." onChange={props.onChangeTitle}></Input1>
            <Error>{props.titleError}</Error>
        </Body1>

        <Body2>
            <Text>내용</Text>
            <Input2 type="textarea" placeholder="내용을 작성해주세요." onChange={props.onChangeContents}></Input2>
            <Error>{props.contentsError}</Error>
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
            <Photo onChange={props.setUserImage}>
                <div>+</div>
                <div>Upload</div>
            </Photo>
            <Photo onChange={props.setUserImage}>
                <div>+</div>
                <div>Upload</div>
            </Photo>
            <Photo onChange={props.setUserImage}>
                <div>+</div>
                <div>Upload</div>
            </Photo>
            </Upload>
        </Footer1>
        <Footer2>
            <Text>메인 설정</Text>
            <CheckBox>
            <Input4 type="radio" name="check" onChange={props.setUserSns}></Input4>
            <Text>유트브</Text>
            <Input4 type="radio" name="check"></Input4>
            <Text>사진</Text>
            </CheckBox>
        </Footer2>
        <Footer3>
            <Click2 disabled={props.click} type="button" onClick={props.onClickSubmit}>등록하기</Click2>
        </Footer3>
        </Box>
    </Wrapper>
    )
}