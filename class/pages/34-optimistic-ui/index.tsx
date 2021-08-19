import { useQuery, gql, useMutation } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const [likeBoard] = useMutation(LIKE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "611dc2b52d1aa300298e6e1f" },
  });

  // ("611dc2b52d1aa300298e6e1f");

  const onClickLike = (likeCount) => () => {
    likeBoard({
      variables: { boardId: "611dc2b52d1aa300298e6e1f" },
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "611dc2b52d1aa300298e6e1f" },
      //   },
      // ],
      optimisticResponse: {
        likeBoard: likeCount + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "611dc2b52d1aa300298e6e1f" },
          data: {
            fetchBoard: {
              _id: "611dc2b52d1aa300298e6e1f",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>좋아요: {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike(data?.fetchBoard.likeCount)}>
        좋아요 +1
      </button>
    </>
  );
}
