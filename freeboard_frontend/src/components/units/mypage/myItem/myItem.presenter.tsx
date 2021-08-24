import {
  Wrapper,
  ListMoveWrapper,
  MyItmePage,
  MyPickPage,
  MyItemsTitleWrapper,
  TitleNumber,
  TitleName,
  TitlePrice,
  TitleCreatedAt,
  MyItemListWrapper,
  ListNumber,
  ListName,
  ListPrice,
  ListCreatedAt,
} from "./myItem.style";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../commons/libraries/utils";
import Paginations01 from "../../../commons/paginations/01/paginations01.container";

export default function MyItemPageUi(props) {
  return (
    <>
      <Wrapper>
        {/* <ListMoveWrapper>
          <MyItmePage onClick={props.onClickMyItmeList}>
            {"나의상품"}
          </MyItmePage>
          <MyPickPage onClick={props.onClickMyPickList}>{"마이찜"}</MyPickPage>
        </ListMoveWrapper> */}
        <MyItemsTitleWrapper>
          <TitleNumber>{"번호"}</TitleNumber>
          <TitleName>{"제목"}</TitleName>
          <TitlePrice>{"가격"}</TitlePrice>
          <TitleCreatedAt>{"날짜"}</TitleCreatedAt>
        </MyItemsTitleWrapper>
        {props.data?.fetchUseditemsISold.map((data: any, index: number) => (
          <MyItemListWrapper key={uuidv4()}>
            <ListNumber>{index + 1}</ListNumber>
            <ListName>{data.name}</ListName>
            <ListPrice>{data.price}</ListPrice>
            <ListCreatedAt>{getDate(data.createdAt)}</ListCreatedAt>
          </MyItemListWrapper>
        ))}
        <Paginations01 />
      </Wrapper>
    </>
  );
}
