import styled from "@emotion/styled";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import Input01 from "../../src/components/commons/inputs/Input01";
import Button01 from "../../src/components/commons/buttons/Button01";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const Wrapper = styled.div``;
const FetchBoards = styled.div`
  display: flex;
`;
const Board = styled.div`
  border: 1px gray solid;
  width: 100px;
  font-weight: bold;
`;

const CreateBoard = styled.div`
  display: flex;
  flex-direction: column;
`;
const Delete = styled.button``;

export default function QuizPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [createBoard] = useMutation(CREATE_BOARD);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { register, handleSubmit } = useForm();

  const onClickSubmit = async (data) => {
    try {
      await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchBoards: (prev) => {
                return [data.createBoard, ...prev];
              },
            },
          });
        },
        // refetchQueries를 사용할 경우 소규모에서는 사용해도 서버에 무리가 없지만, 규모가 커질 경우 서버에 부하가 온다
        // refetchQueries: [{ query: FETCH_BOARDS }],
      });
      // console.log(result.data?.createBoard._id);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickDelete = (boardId) => async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: boardId,
        },
        // refetchQueries: [{ query: FETCH_BOARDS }],
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchBoards: (prev) => {
                const deletePrev = prev.filter((deleteData) => {
                  return deleteData.__ref !== `Board:${data.deleteBoard}`;
                });
                return [...deletePrev];
              },
            },
          });
        },
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <Wrapper>
        {data?.fetchBoards.map((data) => (
          <FetchBoards key={data._id}>
            <Board>{data.writer}</Board>
            <Board>{data.title}</Board>
            <Board>{data.contents}</Board>
            <Delete type="button" onClick={onClickDelete(data._id)} />
          </FetchBoards>
        ))}
        <form onSubmit={handleSubmit(onClickSubmit)}>
          <CreateBoard>
            <Input01
              type="text"
              inputName="작성자"
              register={{ ...register("writer") }}
            ></Input01>
            <Input01
              type="password"
              inputName="비밀번호"
              register={{ ...register("password") }}
            ></Input01>
            <Input01
              type="text"
              inputName="제목"
              register={{ ...register("title") }}
            ></Input01>
            <Input01
              type="text"
              inputName="내용"
              register={{ ...register("contents") }}
            ></Input01>
            <Button01 type="submit" buttonName="게시물 등록"></Button01>
          </CreateBoard>
        </form>
      </Wrapper>
    </>
  );
}
