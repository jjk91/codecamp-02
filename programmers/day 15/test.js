// 행렬의 덧셈
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행,
// 같은 열의 값을 서로 더한 결과가 됩니다.
// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수,
//  solution을 완성해주세요.

//풀이 1
function solution(arr1, arr2) {
  var answer = [[]];

  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (let l = 0; l < arr1[i].length; l++) {
      // arr1 의 숫자 값과 arr2의 숫자 값을 더해서 지정하는 상수
      const sum = arr1[i][l] + arr2[i][l];

      answer[i].push(sum);
    }
  }

  return answer;
}

//풀이 2
function solution(arr1, arr2) {
  const answer = arr1.map((num1, i) => {
    return num1.map((num2, l) => {
      return num2 + arr2[i][l];
    });
  });
  return answer;
}
