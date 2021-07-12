// 수박수박수박수박수박수?
// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

function solution(n) {
    var answer = '';
    
    for(let i = 0; i < n ; i = i + 1 ){
        answer = answer +  (i % 2 === 0 ? '수' : '박');
    }
    return answer;
}
// 다른풀이
//      for(let i = 0; i < n ; i = i + 1 ){
//          if( i %2 === 0 ){
//              answer = answer + "수"
            
//          } else {
//            answer = answer + "박"
//         }
//      }
    
//     return answer;
// }

// 평균 구하기
// 문제 설명
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

function solution(arr) {
    var answer = 0;
    
    for(let i = 0; i < arr.length; i = i + 1){
        answer = answer + arr[i];
    }
    return answer / arr.length
}

// 짝수와 홀수
// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

function solution(num) {
    var answer = '';
    answer = num%2 === 0 ? 'Even' : 'Odd'
    return answer;
}
// 다른풀이    
    // if (num%2 ===0 ){
    //     answer = "Even"
    // } else {
    //     answer = "Odd"
    // }
//     return answer;
// }