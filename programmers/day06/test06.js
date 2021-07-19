// 이상한 문자 만들기
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
//  각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
// 풀이 1
//  function solution(s) {
//     const answer = s.split(" ").map(a => {
//         return a.split ("").map( (b, i) => {
//             return i % 2 === 0
//                 ? b.toUpperCase()
//                 : b.toLowerCase()
//         }).join("")
//     }).join(" ")
//     return answer;
// }
// 풀이 2
// function solution(s) {
//     var answer = '';
//     //반복문이 실행될때 공백을 기준으로 인덱스 값을 저장하는 변수
//     let idx = 0;
//     for (let i = 0; i < s.length; i++){
//         if(s[i] === " "){
//             idx = 0;
//             answer = answer + " "
//         } else {
//             answer = answer + (idx % 2 === 0
//                               ? s[i].toUpperCase() // 짝수
//                               : s[i].toLowerCase() // 홀수
//             )
//             idx = idx + 1;
//         }
//     }

//     return answer;
// }

// 두 개 뽑아서 더하기
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는
// 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
// 풀이 1
// function solution(numbers) {
//     var answer = [];
//     // i : 첫번째 인덱스
//     for (let i = 0; i < numbers.length ; i++){
//     // j : 두번째 인덱스
//         for (let j = i+1; j < numbers.length ; j++ ){
//             // 첫번째 인덱스 값과 두번째 인덱스 값을 더해준 값을 저장하는 변수
//             let sum = numbers[i] + numbers[j];

//             if(answer.includes(sum) === false){
//                 answer.push(sum)
//             }
//         }
//     }
//     return answer.sort( function (a,b){
//         return a - b
//     });
// }
// 풀이 2
// function solution(numbers) {
//     var answer = [];
//     for (let i = 0; i < numbers.length ; i++){
//         for (let j = i+1 ; j < numbers.length ; j++ ){
//             const sum = numbers[i] + numbers[j]
//             if(answer.indexOf(sum) == -1 ){
//                 answer.push(sum)
//             }
//         }
//     }
//     answer.sort( (a , b) => a-b);
//     return answer;
// }
