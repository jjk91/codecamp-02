import { getDate } from '../../../../commons/libraries/utils'
import {Wrapper
    , WrapperTitleList
    , TitleNumber
    , TitleTitle
    , TitleWriter
    , TitleDate
    , WrapperList
    , ListNumber
    , ListTitle
    , ListWriter
    , ListDate ,NewBoradWiter } from './BoardsList.style'


export default function BoardDetailUi (props){

    return (
        <Wrapper>
            <WrapperTitleList>
                <TitleNumber>번호</TitleNumber>
                <TitleTitle>제목</TitleTitle>
                <TitleWriter>작성자</TitleWriter>
                <TitleDate>날짜</TitleDate>
            </WrapperTitleList>
            {props.gql?.fetchBoards.map((data, index) =>(
                <WrapperList>
                    <ListNumber>{(10-index)}</ListNumber>
                    <ListTitle id={data._id} onClick={props.onClickSubmit}>{data.title}</ListTitle>
                    <ListWriter>{data.writer}</ListWriter>
                    <ListDate>{getDate(data.createdAt)}</ListDate>
                </WrapperList>
             ))} 
             <NewBoradWiter onClick={props.onClickCreate} >등록하기</NewBoradWiter>
        </Wrapper>
    )
}