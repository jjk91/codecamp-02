import {Wrapper, HeadWrapper, WriterInfo, WriterImg, WriterDate, Writer
    , WriterDay, WriterIcon, Connect, Location
    , BodyWrapper, Title, Contents, ContentsImg, ContentsText, ContentsUrl
    , FooterWrapper, Like1, Like2} from './BoardDetail.style'

export default function BoardDetailUi(props){

    return(
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
    )
}