// 2021.07.07 코드캠프 과제 // http://example.codebootcamp.co.kr/graphql
// API 복습
// 1) 철수의 나이는 몇살인가요?(나이만 조회해 주세요.)

// - 실행

// query{
//     fetchProfile(name:"철수"){
//       age
//     }
//   }

// - 결과

// {
//     "data": {
//       "fetchProfile": {
//         "age": 20
//       }
//     }
//   }


// 2) 영희의 학교는 어디인가요?(학교만 조회해 주세요.)

// - 실행

// query{
//     fetchProfile(name:"영희"){
//       school
//     }
//   }

// - 결과

// {
//     "data": {
//       "fetchProfile": {
//         "school": "다람쥐초등학교"
//       }
//     }
//   }

// 3) 3번 게시글의 내용과 작성일이 무엇인가요?(내용과 작성일만 조회해 주세요.)

// - 실행

// query{
//     fetchBoard(number:3){
//       contents
//       createdAt
//     }
//   }

// - 결과

// {
//     "data": {
//       "fetchBoard": {
//         "contents": "냉무",
//         "createdAt": "2021-07-07T05:23:28.118Z"
//       }
//     }
//   }

// 4) 본인의 이름으로 프로필을 작성해 보세요.

// - 실행

// mutation{
//     createProfile(name:"junku", age:31, school:"낙성대"){
//       message
//     }
//   }

// - 결과

// {
//     "data": {
//       "createProfile": {
//         "message": "프로필이 정상적으로 등록되었습니다."
//       }
//     }
//   }

// 5) 본인의 이름으로 게시글을 작성해 보세요.

// - 실행

// mutation{
//     createBoard(writer:"junku"
//       ,password:"1234"
//       ,title:"코드캠프 과제"
//       ,contents:"API 잘모르겠다"){
//       message
//     }
//   }

// - 결과

// {
//     "data": {
//       "createBoard": {
//         "message": "게시물이 정상적으로 등록되었습니다."
//       }
//     }
//   }

// 6) 자신의 프로필을 조회해 보세요.

// - 실행

// query{
//     fetchProfile(name:"junku"){
//       number
//       name
//       age
//       school
//       __typename
//     }
//   }

// - 결과

// {
//     "data": {
//       "fetchProfile": {
//         "number": 66,
//         "name": "junku",
//         "age": 31,
//         "school": "낙성대",
//         "__typename": "ProfileReturn"
//       }
//     }
//   }

// 7) 자신의 게시글을 조회해 보세요.

// - 실행

// query{
//     fetchBoard(number:65){
//       number
//       writer
//       title
//       contents
//       like
//       createdAt
//     }
//   }

// - 결과

// {
//     "data": {
//       "fetchBoard": {
//         "number": 65,
//         "writer": "junku",
//         "title": "코드캠프 과제",
//         "contents": "API 잘모르겠다",
//         "like": 0,
//         "createdAt": "2021-07-07T08:20:58.329Z"
//       }
//     }
//   }

// 8) 본인의 프로필에서, 학교를 자신이 졸업한 초등학교로 바꿔보세요.

// - 실행

// mutation{
//     updateProfile(name:"junku", age:31 , school:"다람쥐초등학교"){
//       _id
//       number
//       message
//       __typename
//     }
//   }

// - 결과

// {
//     "data": {
//       "updateProfile": {
//         "_id": null,
//         "number": null,
//         "message": "프로필이 정상적으로 수정되었습니다.",
//         "__typename": "Return"
//       }
//     }
//   }

// 9) 본인의 게시글에서, 제목과 내용을 바꿔보세요.

// - 실행

// mutation{
//     updateBoard(number:65
//       , writer:"junku"
//       , title:"노가다"
//     ,contents:"코드도 잘 모르겠다."){
//       _id
//       number
//       message
//       __typename
//     }
//   }


// - 결과

// {
//     "data": {
//       "updateBoard": {
//         "_id": null,
//         "number": null,
//         "message": "게시물이 정상적으로 수정되었습니다.",
//         "__typename": "Return"
//       }
//     }
//   }

// 10) 자신이 좋아하는 만화 주인공으로 프로필을 작성해 보세요.

// - 실행

// mutation{
//     createProfile(name:"둘리",age:20000,school:"안나옴"){
//       _id
//       number
//       message
//       __typename
//     }
//   }

// - 결과

// {
//     "data": {
//       "createProfile": {
//         "_id": null,
//         "number": null,
//         "message": "프로필이 정상적으로 등록되었습니다.",
//         "__typename": "Return"
//       }
//     }
//   }

// 11) 위 10번에서 작성한 프로필을 삭제해 보세요.

// - 실행

// mutation{
//     deleteProfile(name:"둘리"){
//       _id
//       number
//       message
//       __typename
//     }
//   }

// - 결과

// {
//     "data": {
//       "deleteProfile": {
//         "_id": null,
//         "number": null,
//         "message": "프로필이 정상적으로 삭제되었습니다.",
//         "__typename": "Return"
//       }
//     }
//   }

// 12) 상품을 하나 만들어 보세요.

// - 실행

// mutation{
//     createProduct(seller:"jk",createProductInput:{
//       name:"마우스"
//       detail:"쓰레기 배출중"
//       price:1000
//     }){
//       _id
//       number
//       message
//       __typename
//     }
//   }

// - 결과

// {
//     "data": {
//       "createProduct": {
//         "_id": "08d6d2dd-4e1d-429a-9a11-5c131b48f480",
//         "number": null,
//         "message": "상품이 정상적으로 등록되었습니다.",
//         "__typename": "Return"
//       }
//     }
//   }

// 13) 위 12번에서 만들었던 상품의 가격을 500원 인상해 보세요.

// - 실행

// mutation{
//     updateProduct(productId:"08d6d2dd-4e1d-429a-9a11-5c131b48f480"
//       ,updateProductInput:{
//         price:1500
//       }){
//       _id
//       number
//       message
//       __typename
//     }
//   }

// - 결과

// {
//     "data": {
//       "updateProduct": {
//         "_id": null,
//         "number": null,
//         "message": "상품이 정상적으로 수정되었습니다.",
//         "__typename": "Return"
//       }
//     }
//   }

// 14) 위에서 만든 상품을 조회하되, 가격만 조회해 보세요.

// - 실행

// query{
//     fetchProduct(productId:"08d6d2dd-4e1d-429a-9a11-5c131b48f480"){
//       price
//     }
//   }

// - 결과

// {
//     "data": {
//       "fetchProduct": {
//         "price": 1500
//       }
//     }
//   }

// 15) 조회했던 상품을 삭제해 보세요.

// - 실행

// mutation{
//     deleteProduct(productId:"08d6d2dd-4e1d-429a-9a11-5c131b48f480"){
//       _id
//       number
//       message
//       __typename
//     }
//   }

// - 결과

// {
//     "data": {
//       "deleteProduct": {
//         "_id": null,
//         "number": null,
//         "message": "상품이 정상적으로 삭제되었습니다.",
//         "__typename": "Return"
//       }
//     }
//   }

// 16) 삭제한 상품이 정말로 삭제되었는지 다시 한번 조회해 보세요.

// - 실행

// query{
//     fetchProduct(productId:"08d6d2dd-4e1d-429a-9a11-5c131b48f480"){
//       _id
//       seller
//       name
//       detail
//       price
//       createdAt
//       __typename
//     }
//   }

// - 결과

// {
//     "data": {
//       "fetchProduct": null
//     }
//   }

// 17) 게시물 목록 중, 2페이지를 조회해 보세요.

// - 실행

// query{
//     fetchBoards(page:2){
//       number
//       writer
//       title
//       contents
//       createdAt    
//     }  
//   }

// - 결과

// {
//     "data": {
//       "fetchBoards": [
//         {
//           "number": 17,
//           "writer": "맹구",
//           "title": "가끔은 눈물을 참을 수 없는 내가 별루 다.",
//           "contents": "히히히힣히히",
//           "createdAt": "2021-07-07T05:30:15.828Z"
//         },
//         {
//           "number": 16,
//           "writer": "hard",
//           "title": "hard",
//           "contents": "hard하드",
//           "createdAt": "2021-07-07T05:29:39.328Z"
//         },
//         {
//           "number": 15,
//           "writer": "맹구",
//           "title": "API",
//           "contents": "API는 어렵다.",
//           "createdAt": "2021-07-07T05:27:08.071Z"
//         },
//         {
//           "number": 14,
//           "writer": "짱구",
//           "title": "나는 왜",
//           "contents": "졸린가,,,",
//           "createdAt": "2021-07-07T05:26:08.832Z"
//         },
//         {
//           "number": 13,
//           "writer": "Chungsik",
//           "title": "This is a title.",
//           "contents": "This is a content.",
//           "createdAt": "2021-07-07T05:25:26.369Z"
//         },
//         {
//           "number": 12,
//           "writer": "shong",
//           "title": "나는 왜",
//           "contents": "졸린가,,,",
//           "createdAt": "2021-07-07T05:25:15.336Z"
//         },
//         {
//           "number": 11,
//           "writer": "코캠",
//           "title": "코캠파이팅",
//           "contents": "하하",
//           "createdAt": "2021-07-07T05:25:04.329Z"
//         },
//         {
//           "number": 10,
//           "writer": "영은",
//           "title": "호두자두 사랑해",
//           "contents": "호두자두 일상글",
//           "createdAt": "2021-07-07T05:25:00.322Z"
//         },
//         {
//           "number": 9,
//           "writer": "스펀지밥",
//           "title": "행복합니다.",
//           "contents": "잉잉",
//           "createdAt": "2021-07-07T05:24:47.825Z"
//         },
//         {
//           "number": 8,
//           "writer": "스타벅스",
//           "title": "아메리카노",
//           "contents": "조아조아",
//           "createdAt": "2021-07-07T05:24:14.823Z"
//         }
//       ]
//     }
//   }

// 18) 게시물 목록을 조회할 때, page를 입력하지 않으면, 어떤 결과가 발생하나요?

// - 실행

// query{
//     fetchBoards(){
//       number
//       writer
//       title
//       contents
//       createdAt    
//     }  
//   }

// - 결과

// 반응 없다.

// 19) 프로필이 전체 몇 개가 있는지 확인해 보세요.

// - 실행

// query{
//     fetchProfiles(page:6){
//       number
//     }
//   }

// - 결과

// 총 65개 - 1페이지당 10개씩 
// {
//     "data": {
//       "fetchProfiles": [
//         {
//           "number": 54
//         },
//         {
//           "number": 8
//         },
//         {
//           "number": 41
//         },
//         {
//           "number": 36
//         },
//         {
//           "number": 46
//         }
//       ]
//     }
//   }


// 20) 게시물은 몇 개가 있나요?

// - 실행

// query{
//     fetchBoards(page:3){
//       number
//     }
//   }

// - 결과

// 게시물은 총 27개
// {
//     "data": {
//       "fetchBoards": [
//         {
//           "number": 7
//         },
//         {
//           "number": 6
//         },
//         {
//           "number": 5
//         },
//         {
//           "number": 4
//         },
//         {
//           "number": 3
//         },
//         {
//           "number": 2
//         },
//         {
//           "number": 1
//         }
//       ]
//     }
//   }
