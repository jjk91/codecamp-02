import {gql, useQuery} from '@apollo/client'
import {useRouter} from 'next/router'

import {Wrapper, HeadWrapper, WriterInfo, WriterImg, WriterDate, Writer
    , WriterDay, WriterIcon, Connect, Location
    , BodyWrapper, Title, Contents, ContentsImg, ContentsText, ContentsUrl
    , FooterWrapper, Like1, Like2} from '../../../styles/Detail.styles'


const FETCH_BOARD = gql`
    query fetchBoard($boardId : ID!) {
        fetchBoard(boardId : $boardId) {
            writer
            title
            contents
            createdAt
        }
    }
`


export default function DetailPage(){
    const router = useRouter();

    const { data } = useQuery(
        FETCH_BOARD,
        {variables: { boardId: router.query.boardId }}
    )


    return (
        <Wrapper>
            <HeadWrapper>

                <WriterInfo>
                    <WriterImg></WriterImg>
                    <WriterDate>
                        
                        <Writer>{data?.fetchBoard.writer}</Writer>

                        <WriterDay>{data?.fetchBoard.createdAt}</WriterDay>

                    </WriterDate>

                </WriterInfo>

                <WriterIcon>
                    <Connect></Connect>
                    <Location></Location>
                </WriterIcon>

            </HeadWrapper>

            <BodyWrapper>

                <Title>{data?.fetchBoard.title}</Title>
                <Contents>
                    <ContentsImg></ContentsImg>
                    <ContentsText>{data?.fetchBoard.contents}</ContentsText>
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