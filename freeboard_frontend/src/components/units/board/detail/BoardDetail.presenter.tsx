import {
  Wrapper,
  HeadWrapper,
  WriterInfo,
  WriterImg,
  WriterDate,
  Writer,
  WriterDay,
  WriterIcon,
  Connect,
  Location,
  BodyWrapper,
  Title,
  Img,
  Contents,
  ContentsImg,
  ContentsText,
  ContentsUrl,
  FooterWrapper,
  LikeGroup,
  Like,
  LikeCount,
  DislikeGroup,
  Dislike,
  DislikeCount,
  Wrapper2,
  Wrapper2ButtonList,
  List,
  Update,
  Delete,
} from "./BoardDetail.style";
import { getDate } from "../../../../commons/libraries/utils";
import { Tooltip } from "antd";

interface IBoardDetailUIPresenterProps {
  onClickDelete: () => void;
  onClickUpdate: () => void;
  onClickList: () => void;
  onClickLikeCount: () => void;
  onClickDislikeCount: () => void;
  gql: any;
  data: string;
  fetchBoard: any;
}

export default function BoardDetailUi(props: IBoardDetailUIPresenterProps) {
  return (
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
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <Location src="/images/ic_location_on-32px.png" />
            </Tooltip>
          </WriterIcon>
        </HeadWrapper>

        <BodyWrapper>
          <Title>{props.data?.fetchBoard.title}</Title>
          <Contents>
            <ContentsImg>
              {props.data?.fetchBoard.images?.map((data) => (
                <Img
                  src={`https://storage.googleapis.com/${data}`}
                  key={data}
                />
              ))}
            </ContentsImg>
            <ContentsText>{props.data?.fetchBoard.contents}</ContentsText>
            <ContentsUrl
              url={props.data?.fetchBoard.youtubeUrl}
              width="480px"
              height="240px"
              playing={true}
              muted={true}
              volume={0}
              controls={true}
            />
          </Contents>
        </BodyWrapper>

        <FooterWrapper>
          <LikeGroup>
            <Like onClick={props.onClickLikeCount} />
            <LikeCount>{props.data?.fetchBoard.likeCount}</LikeCount>
          </LikeGroup>
          <DislikeGroup>
            <Dislike onClick={props.onClickDislikeCount} />
            <DislikeCount>{props.data?.fetchBoard.dislikeCount}</DislikeCount>
          </DislikeGroup>
        </FooterWrapper>
      </Wrapper>
      <Wrapper2>
        <Wrapper2ButtonList>
          <List onClick={props.onClickList}>목록으로</List>
          <Update onClick={props.onClickUpdate}>수정하기</Update>
          <Delete onClick={props.onClickDelete}>삭제하기</Delete>
        </Wrapper2ButtonList>
      </Wrapper2>
    </>
  );
}
