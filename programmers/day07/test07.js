// 콜라츠 추측

// 937년 Collatz란 사람에 의해 제기된 이 추측은
// , 주어진 수가 1이 될때까지 다음 작업을 반복하면
// , 모든 수를 1로 만들 수 있다는 추측입니다.
//  작업은 다음과 같습니다.

//풀이 1
//  function solution(num) {
//     var count = 0;
//     //괄호 안은 조건문 === true 일때만 실행
//     while ( num !== 1 ){
//         if(num % 2 === 0 ) {
//             //짝수
//             num = num / 2

//         } else if (num % 2 === 1) {
//             //홀수
//             num = ( num * 3 ) + 1

//         }
//         count++
//         //반복되는 코드
//     }

//     if(count >= 500) {
//         return -1;
//     } else {
//         return count;
//     }

//     return count;
// }

// 풀이 2
// function solution(num) {
//     var answer = 0;
//     let temp = 0;
//     for (let i = 0 ; i < 500 ; i++ ){
//         if (num !== 1){
//             num = ( num % 2 === 0 ) ? num / 2 : num * 3 + 1
//         } else {
//             return answer = i
//         }
//     }
//     return answer = -1;
// }

// 문자열 내 p와 y의 개수
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True,
// 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
// 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

//풀이 1
// function solution(s){
//     var answer = true;
//     s = s.toLowerCase();

//     const check ={
//         p : 0,
//         y : 0
//     }
//      for (let i = 0; i < s.length ; i++){
//          check[s[i]]= check[s[i]] + 1;
//      }

//     return check ["p"] === check["y"];
// }

//풀이 2
// function solution(s){
//     var answer = true;
//     //p와 y의 개수를 담아주는 변수
//     let [ p , y] = [ 0 , 0 ];
//     for (let i = 0; i < s.length ; i++){
//         if(s[i] === 'p' || s[i] === 'P'){
//             p = p + 1;
//         } else if (s[i] === 'y' || s[i] === 'Y'){
//             y = y +1;
//         }

//     }
//     if(p === y ){
//         answer = true
//     } else {
//         answer = false
//     }
//     return answer;
// }
