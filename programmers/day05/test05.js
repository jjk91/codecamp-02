
// 약수의 합
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
// 풀이 01 
// function solution(n) {
//     var answer = 0;
        
//     for (let i= 1 ; i <= n; i++) 
//         if (n%i === 0){
//             answer += i
//         }
//     return answer;
// }
// 풀이 02
// function solution(n) {
//     var answer = 0;
        //     for (let i= 1 ; i <= n; i++) {
//         if(Number.isInteger(n / i ) === true){
//             // isInteger가 true를 반환하면 해당 식은 정수 === 약수
//             answer = answer + i; 
//         }
//     }
//     return answer;
// }
//풀이 03
// function solution(n) {
//     var answer = 0;
//     new Array(n)
//         .fill(1)
//         .filter((num,idx) => {
//             n % (num + idx) === 0
//                 ? answer = answer + (num + idx)
//                 : null
//     })
    
//     return answer;
// }

// 자릿수 더하기

// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
//풀이 01
// function solution(n) {
//     var result = 0;
//     n = String(n);
//     for (let i = 0; i < n.length; i++){
//         result = result + Number(n[i])
//     }
//     return result;
// }
//풀이 02
// function solution(n) {
//     var result = 0;
//     String(n)
//         .split("")
//         .map(num => result = result + Number(num) )
    
//     return result;
// }