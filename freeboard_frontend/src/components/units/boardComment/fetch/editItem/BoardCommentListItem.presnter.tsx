import {
  Wrapper,
  CommentHead,
  CommentInfo,
  CommentImg,
  CommentDate,
  CommentWriter,
  Rating,
  CommentContents,
  CommentCreateAt,
  CommentIcon,
  Update,
  Delet,
  CommentMain,
} from "../BoardCommentList.style";
import { getDate } from "../../../../../commons/libraries/utils";

import BoardCommentWrite from "../../write/BoardCommentWrite.container";

export default function CommentListItemUi(props) {
  // isEdit ===>  false

  return (
    <>
      {!props.isEdit && (
        <Wrapper>
          <CommentInfo>
            <CommentImg src="/images/ic_profile-96px.png" />
          </CommentInfo>
          <CommentMain>
            <CommentHead>
              <CommentDate>
                <CommentWriter>{props.data.writer}</CommentWriter>
                <Rating value={props.data.rating} disabled></Rating>
              </CommentDate>

              <CommentIcon>
                <Update
                  id={props.data._id}
                  onClick={props.onClickEdit}
                  src="/images/mode-24px.png"
                />
                <Delet
                  id={props.data._id}
                  onClick={props.onClickDelete}
                  src="/images/clear-24px 2.png"
                />
              </CommentIcon>
            </CommentHead>

            <CommentContents>{props.data.contents}</CommentContents>

            <CommentCreateAt>{getDate(props.data.createdAt)}</CommentCreateAt>
          </CommentMain>
        </Wrapper>
      )}
      {props.isEdit && <BoardCommentWrite isEdit={true} data={props.data} />}
    </>
  );
}
