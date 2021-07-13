import {Wrapper, HeadWrapper, WriterInfo, WriterImg, WriterDate, Writer
    , WriterDay, WriterIcon, Connect, Location
    , BodyWrapper, Title, Contents, ContentsImg, ContentsText, ContentsUrl
    , FooterWrapper, Like1, Like2, Wrpper2, ButtonList, List, Update, Delete} from './BoardDetail.style'

export default function BoardDetailUi(props){

    return(
        <>
            <Wrapper>
                <HeadWrapper>

                    <WriterInfo>
                        <WriterImg></WriterImg>
                        <WriterDate>
                            
                            <Writer>{props.gql?.fetchBoard.writer}</Writer>

                            <WriterDay>{props.gql?.fetchBoard.createdAt}</WriterDay>

                        </WriterDate>

                    </WriterInfo>

                    <WriterIcon>
                        <Connect></Connect>
                        <Location></Location>
                    </WriterIcon>

                </HeadWrapper>

                <BodyWrapper>

                    <Title>{props.gql?.fetchBoard.title}</Title>
                    <Contents>
                        <ContentsImg></ContentsImg>
                        <ContentsText>{props.gql?.fetchBoard.contents}</ContentsText>
                        <ContentsUrl></ContentsUrl>
                    </Contents>

                </BodyWrapper>

                <FooterWrapper>
                    <Like1></Like1>
                    <Like2></Like2>
                </FooterWrapper>
            </Wrapper>
            <Wrpper2>
                <ButtonList>
                    <List>목록으로</List>    
                    <Update>수정하기</Update>
                    <Delete onClick={props.onClickDelete} >삭제하기</Delete>
                </ButtonList>
            </Wrpper2>   
        </>
    )
}