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
  TitleSeller,
  TitleSold,
  TitleCreatedAt,
  MyItemListWrapper,
  ListNumber,
  ListName,
  ListSold,
  ListPrice,
  ListSeller,
  ListCreatedAt,
  PaginationsWrapper,
} from "./myItem.style";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../commons/libraries/utils";
import Paginations01 from "../../../commons/paginations/01/paginations01.container";

export default function MyItemPageUi(props: any) {
  return (
    <>
      <Wrapper>
        <PageWrapper>
          <MyItem
            onClick={props.onClickMyItemPage}
            // @ts-ignore
            isActive={props.isActive}
          >
            {"나의상품"}
          </MyItem>
          |
          <MyPick
            onClick={props.onClickMyPick}
            // @ts-ignore
            isActive={props.isActive}
          >
            {"마이찜"}
          </MyPick>
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
            {props.data?.fetchUseditemsISold.map((data: any, index: number) => (
              <MyItemListWrapper key={uuidv4()}>
                <ListNumber>{index + 1}</ListNumber>
                <ListName>{data.name}</ListName>
                <ListSold>{data.buyer?._id ? "판매완료" : ""}</ListSold>
                <ListPrice>{data.price}</ListPrice>
                <ListCreatedAt>{getDate(data.createdAt)}</ListCreatedAt>
              </MyItemListWrapper>
            ))}
            <PaginationsWrapper>
              <Paginations01
                refetch={props.refetch}
                startPage={props.page}
                setStartPage={props.setPage}
                dataCount={props.dataCountSold?.fetchUseditemsCountISold}
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
              <TitleSeller>{"판매자"}</TitleSeller>
              <TitleCreatedAt>{"날짜"}</TitleCreatedAt>
            </MyItemsTitleWrapper>
            {props.PickData?.fetchUseditemsIPicked.map(
              (data: any, index: number) => (
                <MyItemListWrapper key={uuidv4()}>
                  <ListNumber>{index + 1}</ListNumber>
                  <ListName>{data.name}</ListName>
                  <ListSold>{data.buyer?._id ? "판매완료" : ""}</ListSold>
                  <ListPrice>{data.price}</ListPrice>
                  <ListSeller>{data.buyer?.name}</ListSeller>
                  <ListCreatedAt>{getDate(data.createdAt)}</ListCreatedAt>
                </MyItemListWrapper>
              )
            )}
            <PaginationsWrapper>
              <Paginations01
                refetch={props.PickRefetch}
                startPage={props.page}
                setStartPage={props.setPage}
                dataCount={props.dataCountPick?.fetchUseditemsCountIPicked}
              />
            </PaginationsWrapper>
          </MyItemWapper>
        )}
      </Wrapper>
    </>
  );
}
