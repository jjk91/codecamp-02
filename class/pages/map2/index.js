import styled from "@emotion/styled";
const fruits = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
  width: 130px;
`;
export const Num = styled.div`
  width: 30px;
  height: 25px;
  background-color: violet;
  font-weight: bold;
  color: blue;
`;

export const Title = styled.div`
  width: 100px;
  color: red;
  background-color: skyblue;
`;

export default function Map2Page() {
  return (
    <div>
      {fruits
        .filter((data) => data.number % 2 === 0)
        .map((data, index) => (
          <Wrapper key={index}>
            <Num>
              {data.number}
              {". "}
            </Num>
            <Title>{data.title}</Title>
          </Wrapper>
        ))}
    </div>
  );

  // return(
  //     <div>

  //         {fruits.map(data => (
  //             <Wrapper>
  //                 <Num>{data.number}{". "}</Num>
  //                 <Title>{data.title}</Title>
  //             </Wrapper>
  //         ))}
  //     </div>
  // )
}
