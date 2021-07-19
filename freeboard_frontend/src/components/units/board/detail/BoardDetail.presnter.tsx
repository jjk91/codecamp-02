import {Wrapper, HeadWrapper, WriterInfo, WriterImg, WriterDate, Writer
    , WriterDay, WriterIcon, Connect, Location
    , BodyWrapper, Title, Contents, ContentsImg, ContentsText, ContentsUrl
    , FooterWrapper, Like1, Like2, Wrapper2, Wrapper2ButtonList
    , List, Update, Delete} from './BoardDetail.style'
import { getDate } from '../../../../commons/libraries/utils'


interface IBoardDetailUIPresenterProps {
    onClickDelete: () => void
    onClickUpdate: () => void
    onClickList: () => void
    gql: any
}

export default function BoardDetailUi(props: IBoardDetailUIPresenterProps){

    return(
        <>
            <Wrapper>
                <HeadWrapper>

                    <WriterInfo>
                        <WriterImg src="/images/ic_profile-96px.png" />
                        <WriterDate>
                            
                            <Writer>{props.data?.fetchBoard.writer}</Writer>

                            <WriterDay>{getDate(props.data?.fetchBoard.createdAt)}</WriterDay>

                        </WriterDate>

                    </WriterInfo>

                    <WriterIcon>
                        <Connect src="/images/ic_link-32px.png" />
                        <Location src="/images/ic_location_on-32px.png" />
                    </WriterIcon>

                </HeadWrapper>

                <BodyWrapper>

                    <Title>{props.data?.fetchBoard.title}</Title>
                    <Contents>
                        <ContentsImg></ContentsImg>
                        <ContentsText>{props.data?.fetchBoard.contents}</ContentsText>
                        <ContentsUrl
                            url={props.data?.fetchBoard.youtubeUrl}
                            width = "480px"
                            height = "240px"
                            playing = {true}
                            muted ={true} 
                            volume ={0}
                            controls = {true}/>
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
            
        </>
    )
}