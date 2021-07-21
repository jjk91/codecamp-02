하샤드 수
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
  자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

//풀이1
  // function solution(x) {
//    const answer = x.toString().split('').reduce((a,b) =>{
//        return Number(a) + Number (b)
//    });
//     return  x % answer === 0;
// }

//풀이 2
// function solution(x) {
//     var answer = true;
    
//     x = x.toString();
//     let sum = 0; // 총 합을 담아주는 변수
//     for (let i = 0; i< x.length; i++){
//         sum = sum + Number(x[i])
//     }
//     if(x % sum === 0 ) {
//         answer = true
//     } else if (x % sum !== 0) {
//         answer = false 
//     }
//     return answer;
// }


//풀이 3
// function solution(x) {
//     var answer = true;
    
//     x = x.toString();
//     let sum = 0; // 총 합을 담아주는 변수
//     for (let i = 0; i< x.length; i++){
//         sum = sum + Number(x[i])
//     }
//     const answer = x % sum === 0 ? true : false
//     return answer;
// }


//풀이 4
// function solution(x) {
//     var answer = 0
//     let sum = x.toString().split('');
//         for (let i = 0; i < sum.length; i++){
//             answer = answer + Number(sum[i])
//         }
//     return ( x % answer === 0 ? true : false)
// }

폰켓몬
당신은 폰켓몬을 잡기 위한 오랜 여행 끝에, 홍 박사님의 연구실에 도착했습니다.
 홍 박사님은 당신에게 자신의 연구실에 있는 총 N 마리의 폰켓몬 중에서 N/2마리를 가져가도 좋다고 했습니다.
홍 박사님 연구실의 폰켓몬은 종류에 따라 번호를 붙여 구분합니다.
따라서 같은 종류의 폰켓몬은 같은 번호를 가지고 있습니다.
 예를 들어 연구실에 총 4마리의 폰켓몬이 있고, 각 폰켓몬의 종류 번호가 [3번, 1번, 2번, 3번]이라면
  이는 3번 폰켓몬 두 마리, 1번 폰켓몬 한 마리, 2번 폰켓몬 한 마리가 있음을 나타냅니다. 이때,
   4마리의 폰켓몬 중 2마리를 고르는 방법은 다음과 같이 6가지가 있습니다.

첫 번째(3번), 두 번째(1번) 폰켓몬을 선택
첫 번째(3번), 세 번째(2번) 폰켓몬을 선택
첫 번째(3번), 네 번째(3번) 폰켓몬을 선택
두 번째(1번), 세 번째(2번) 폰켓몬을 선택
두 번째(1번), 네 번째(3번) 폰켓몬을 선택
세 번째(2번), 네 번째(3번) 폰켓몬을 선택
이때, 첫 번째(3번) 폰켓몬과 네 번째(3번) 폰켓몬을 선택하는 방법은 한 종류(3번 폰켓몬 두 마리)의 폰켓몬만 가질 수 있지만,
 다른 방법들은 모두 두 종류의 폰켓몬을 가질 수 있습니다. 
 따라서 위 예시에서 가질 수 있는 폰켓몬 종류 수의 최댓값은 2가 됩니다.
당신은 최대한 다양한 종류의 폰켓몬을 가지길 원하기 때문에, 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택하려 합니다.
N마리 폰켓몬의 종류 번호가 담긴 배열 nums가 매개변수로 주어질 때, N/2마리의 폰켓몬을 선택하는 방법 중, 
가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아,
그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성해주세요.

//풀이 1
// function solution(nums) {
//     var answer = 0;
    
//     let pocket = [];
//     nums.filter((monster =>{
//         return pocket.includes(monster) === false 
//         && pocket.length < nums.length / 2 
//             ? pocket.push(monster) 
//             : null
//     }))
//      return pocket.length;
// }


//풀이 2
// function solution(nums) {
   
//     let pocket = [];
//     for (let i = 0; i < nums.length; i++){
//        if(pocket.includes(nums[i]) === false && pocket.length < nums.length / 2){
//             pocket.push(nums[i])           
//        }
//     }
    
//     return pocket.length;
// }