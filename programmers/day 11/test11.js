나누어 떨어지는 숫자 배열
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// function solution(arr, divisor) {
//     const answer = arr.filter(number => {
//         return number % divisor === 0 
//     }).sort((a,b) => a - b)
    
    
//     return answer.length === 0 ? [-1] : answer;
// }



// function solution(arr, divisor) {
//   var answer = [];

//   for (let i =0 ; i < arr.length ; i ++)
//      if(arr[i] % divisor === 0 )
//          answer.push(arr[i])
  
//   if(answer.length === 0 ){
//       answer.psuh(-1)
//   } else {
//      answer.sort((a,b) => a - b) 
//   }
//   return answer
// }


///////////////////////////////
자연수 뒤집어 배열로 만들기
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.


// function solution(n) {
//     var answer = [];
    
//     n = String(n);
//     for (let i = 0 ; i < n.length; i ++){
//         answer.push(Number(n[i]))
//     }
//     answer.reverse()
    
//     return answer;
// }

function solution(n) {
  var answer = [];
  
  n = String(n);
  for(let i = n.length - 1; i >= 0 ; i = i - 1 ){
      answer.push(Number(n[i]))
  }
  
  return answer;
}