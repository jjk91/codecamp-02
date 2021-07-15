import { MouseEvent } from 'react'
import {Wrapper, HeadWrapper, WriterInfo, WriterImg, WriterDate, Writer
    , WriterDay, WriterIcon, Connect, Location
    , BodyWrapper, Title, Contents, ContentsImg, ContentsText, ContentsUrl
    , FooterWrapper, Like1, Like2, Wrapper2, Wrapper2ButtonList
    , List, Update, Delete, Wrapper2Comment} from './BoardDetail.style'
import BoardDetailComment from '../../boardComment/write/BoardDetailComment.container'

interface IBoardDetailUIPresenterProps {
    onClickDelete: () => void
    onClickUpdate: () => void
    gql: boolean
}

export default function BoardDetailUi(props: IBoardDetailUIPresenterProps){

    return(
        <>
            <Wrapper>
                <HeadWrapper>

                    <WriterInfo>
                        <WriterImg src="/images/ic_profile-96px.png" />
                        <WriterDate>
                            
                            <Writer>{props.gql?.fetchBoard.writer}</Writer>

                            <WriterDay>{props.gql?.fetchBoard.createdAt}</WriterDay>

                        </WriterDate>

                    </WriterInfo>

                    <WriterIcon>
                        <Connect src="/images/ic_link-32px.png" />
                        <Location src="/images/ic_location_on-32px.png" />
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
                    <Like1 src="/images/ic_thumb_up_off_alt-24px.png"/>
                    <Like2 src="/images/ic_thumb_down-24px.png"/>
                </FooterWrapper>
            </Wrapper>
            <Wrapper2>
                <Wrapper2ButtonList>
                    <List onClick={props.onClickList}>목록으로</List>    
                    <Update onClick={props.onClickUpdate} >수정하기</Update>
                    <Delete onClick={props.onClickDelete} >삭제하기</Delete>
                </Wrapper2ButtonList>
            </Wrapper2>   
            <BoardDetailComment />
        </>
    )
}