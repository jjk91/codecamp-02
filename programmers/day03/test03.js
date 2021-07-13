// 서울에서 김서방 찾기
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "
// 김서방은 x에 있다"는 String을 반환하는 함수, 
// solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 
// 잘못된 값이 입력되는 경우는 없습니다.

// 풀이 1        
// function solution(seoul) {
//         var answer = '';
        
//             answer = "김서방은 " +seoul.indexOf('Kim') + "에 있다"
        
//         return answer;
//풀이 2
// function solution(seoul) {
//         let x = 0;
//         for (let i = 0; i < seoul.length ; i ++){
//             if (seoul[i] === 'Kim'){
//                 x = i;
//             }
//         }
//         return "김서방은 " + x + "에 있다";
//     }

// 가운데 글자 가져오기
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

//풀이 1
// function solution(s) {
//     const result = s.length % 2 === 1 
//         ? s[Math.floor(s.length/2)]
//         : s[Math.floor(s.length/2-1)]+s[Math.floor(s.length/2)]
 
//     return answer;
// }

// 풀이 2
//     var answer = '';
    
//     if( s.length%2 === 0){
//         answer = s[Math.floor(s.length/2-1)]+s[Math.floor(s.length/2)]
//     } else if(s.length%2 !== 0){
//         answer = s[Math.floor(s.length/2)]
//     }
    
    
//     return answer;
// }

// 두 정수 사이의 합
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을
//  리턴하는 함수, solution을 완성하세요. 예를 들어 a = 3, b = 5인 
//  경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

//풀이 1
// function solution(a, b) {
//     var answer = 0;
//     if (a === b) {
//         return a;
//     } else {
//         let start  = a > b ? b : a;
        
//         let end = a > b ? a : b;
//             for(let i = start; i <= end; i = i+1){
//                 answer = answer + i
//          }
//     }
 
//     return answer;
// }
//풀이 2
// function solution(a, b) {
    // if(a <= b){
    //     for (let i = a ; i<=b ; i = i + 1)
    //         answer = answer + i ;
    // } else if (a>b){
    //     for (let i = b; i <= a; i = i + 1 )
    //         answer = answer + i ;
    // }
// }