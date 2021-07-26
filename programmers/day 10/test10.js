자연수 뒤집어 배열로 만들기
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로
리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// function solution(n) {
//   return n
//     .toString()
//     .split("")
//     .reverse()
//     .map((num) => Number(num));
// }

완주하지 못한 선수

수많은 마라톤 선수들이 마라톤에 참여하였습니다.
 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 
완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// function solution(participant, completion) {
//     var answer = '';

//     for (let i = 0;  i < completion.length; i++){
//         if(participant.includes(completion[i])=== true) {
//             participant.splice(participant.indexOf(completion[i]),1 );
//         }
//     }
//     console.log(participant)

//     return participant[0];
// }

// function solution(participant, completion) {
//   var answer = "";

//   participant = participant.sort();
//   completion = completion.sort();

//   for (let i = 0; i < participant.length; i++) {
//     console.log(participant[i], completion[i]);
//     if (participant[i] !== completion[i]) {
//       // answer = participant[i]
//       // break;
//       return participant[i];
//     }
//   }
//   return answer;
// }

// function solution(participant, completion) {
//   var answer = "";

//   participant = participant.sort();
//   completion = completion.sort();

//   // 합격자가 아닌 참가자의 이름이 최초로 들어갔는지를
//   //판단해주는 변수
//   let stop = false;
//   participant.forEach((name, i) => {
//     if (name !== completion[i] && stop === false) {
//       answer = name;
//       stop = true;
//     }
//   });
//   return answer;
}
