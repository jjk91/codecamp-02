// 정수 제곱근 판별

// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면
// -1을 리턴하는 함수를 완성하세요.

//풀이 1
function solution(n) {
  //초기 제곱근 값
  let sqrt = 1;

  while (sqrt * sqrt < n) {
    sqrt++;

    if (sqrt * sqrt > n) {
      return -1;
    }
  }
  sqrt++;
  return sqrt * sqrt;
}

//풀이 2
function solution(n) {
  let sqrt = Math.sqrt(n);
  if (Number.isInteger(sqrt) === true) {
    sqrt++;
    return sqrt * sqrt;
  } else {
    return -1;
  }
}
