3진법 뒤집기

자연수 n이 매개변수로 주어집니다.
 n을 3진법 상에서 앞뒤로 뒤집은 후, 
 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

 function solution(n) {
    
  // 3진법으로 변환
  n = n.toString(3).split("").reverse().join("")
  // 문자열을 해당되는 진수로 바꿔주는 기능
  return parseInt(n, 3)
console.log(n)
  
}