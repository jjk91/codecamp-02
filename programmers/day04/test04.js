// 문자열 다루기 기본
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고
// , 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
// 예를 들어 s가 "a234"이면 False를 리턴하고 
// "1234"라면 True를 리턴하면 됩니다.
// 풀이 1
// function solution(s) {
//     var answer = true;
//     if(s.length !== 4 && s.length !==6){
//         answer = false 
//         return answer
//     }
//     for(let i= 0; i < s.length; i=i+1){
      
//         if(Number.isNaN(Number(s[i]))){
//                 answer = false      
//         } 
//     }
//     return answer;
// }
// 풀이 2
//     function solution(s) {
//     var answer =true;
//     if(s.length !== 4 && s.length !== 6 ){
//         return false;
//     } else {
//         answer =
//         s.split("")
//          .filter( (str)=> isNaN(str) === true ) 
//          .length === 0 
        
//         for (let i = 0; i < s.length; i++){
//             if ( isNaN( s[i] ) === true ){
//                 answer = false;
//             }
//         }

//     }
//         return answer;
// }


// 2016년

// 2016년 1월 1일은 금요일입니다. 
// 2016년 a월 b일은 무슨 요일일까요? 
// 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 
// 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 
// 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다. 
// 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 
// 문자열 "TUE"를 반환하세요.

//풀이 1
// const month = {
//     1 : 31,
//     2 : 29,
//     3 : 31,
//     4 : 30,
//     5 : 31, 
//     6 : 30,
//     7 : 31,
//     8 : 31, 
//     9 : 30,
//     10: 31,
//     11: 30,
//     12: 31
// }
// const week = {
//     0 : "FRI",
//     1 : "SAT",
//     2 : "SUN",
//     3 : "MON",
//     4 : "TUE",
//     5 : "WED",
//     6 : "THU"
// }
// function solution(a, b) {
//     var answer = '';

//     let fullDays = 0;
//     for (let i = 1; i < a; i++){
//         fullDays = fullDays + month[i];
//     }
//     fullDays = fullDays + (b - 1);
    
//     answer = week[fullDays % 7];
    
//     return answer;
// }
//풀이 2
// function solution(a, b) {
//     var answer = '';
//     const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//     const days = new Date(2016, a - 1, b).getDay();
    
//     answer = week[days];
    
//     return answer;
// }