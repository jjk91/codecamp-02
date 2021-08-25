import {
  Wrapper,
  PageWrapper,
  MyItemWapper,
  MyItem,
  MyPick,
  MyItemsTitleWrapper,
  TitleNumber,
  TitleName,
  TitlePrice,
  TitleSold,
  TitleCreatedAt,
  MyItemListWrapper,
  ListNumber,
  ListName,
  ListSold,
  ListPrice,
  ListCreatedAt,
  PaginationsWrapper,
} from "./myItem.style";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../commons/libraries/utils";
import Paginations02 from "../../../commons/paginations/02/paginations02.container";

export default function MyItemPageUi(props: any) {
  return (
    <>
      <Wrapper>
        <PageWrapper>
          <MyItem onClick={props.onClickMyItemPage}>{"나의상품"}</MyItem>|
          <MyPick onClick={props.onClickMyPick}>{"마이찜"}</MyPick>
        </PageWrapper>
        {props.isActive ? (
          <MyItemWapper>
            <MyItemsTitleWrapper>
              <TitleNumber>{"번호"}</TitleNumber>
              <TitleName>{"제목"}</TitleName>
              <TitleSold>{""}</TitleSold>
              <TitlePrice>{"판매가격"}</TitlePrice>
              <TitleCreatedAt>{"날짜"}</TitleCreatedAt>
            </MyItemsTitleWrapper>
            {props.data?.fetchUseditemsISold
              .slice(
                props.page === 1 ? 0 : (props.page - 1) * 10,
                props.page * 10
              )
              .map((data: any, index: number) => (
                <MyItemListWrapper key={uuidv4()}>
                  <ListNumber>{index + 1}</ListNumber>
                  <ListName>{data.name}</ListName>
                  <ListSold>{data.buyer?._id ? "판매완료" : ""}</ListSold>
                  <ListPrice>{data.price}</ListPrice>
                  <ListCreatedAt>{getDate(data.createdAt)}</ListCreatedAt>
                </MyItemListWrapper>
              ))}
            <PaginationsWrapper>
              <Paginations02
                refetch={props.refetch}
                startPage={props.page}
                setStartPage={props.setPage}
                dataCount={props.dataCount}
              />
            </PaginationsWrapper>
          </MyItemWapper>
        ) : (
          <MyItemWapper>
            <MyItemsTitleWrapper>
              <TitleNumber>{"번호"}</TitleNumber>
              <TitleName>{"제목"}</TitleName>
              <TitleSold>{""}</TitleSold>
              <TitlePrice>{"판매가격"}</TitlePrice>
              {/* <TitleSeller></TitleSeller> */}
              <TitleCreatedAt>{"날짜"}</TitleCreatedAt>
            </MyItemsTitleWrapper>
            {props.PickData?.fetchUseditemsIPicked
              .slice(
                props.page === 1 ? 0 : (props.page - 1) * 10,
                props.page * 10
              )
              .map((data: any, index: number) => (
                <MyItemListWrapper key={uuidv4()}>
                  <ListNumber>{index + 1}</ListNumber>
                  <ListName>{data.name}</ListName>
                  <ListPrice>{data.price}</ListPrice>
                  <ListCreatedAt>{getDate(data.createdAt)}</ListCreatedAt>
                </MyItemListWrapper>
              ))}
            <PaginationsWrapper>
              <Paginations02
                refetch={props.PickRefetch}
            
                startPage={props.page}
                setStartPage={props.setPage}
                dataCount={props.dataCount}
              />
            </PaginationsWrapper>
          </MyItemWapper>
        )}
      </Wrapper>
    </>
  );
}
