최대공약수와 최소공배수
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수
, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

function solution(n, m) {
  var answer = [];

  //gcd = 최대공약수
  const gcdArr = [];
  //lcm = 최소공배수
  let [gcd, lcm] = [1, 1];
  const lcmArr = [];

  for (let i = 0; i < 2; i++) {
    //n과 m의 값을 차례로 담아주기 위해서
    const number = i === 0 ? n : m;
    // n과 m의 곱한 값을 너어주는 상수데이터
    const sum = n * m;

    //최대공약수를 구하는 식
    for (let l = 2; l <= number; l++) {
      if (number % l === 0) {
        if (gcdArr.includes(l) === false) {
          // 약수
          gcdArr.push(l);
        } else {
          if (l > gcd) {
            gcd = l;
          }
        }
      }
    }
    for (let l = number; l <= sum; l += number) {
      if (lcmArr.includes(l) === false) {
        lcmArr.push(l);
      } else {
        lcm = l;
        break;
      }
    }
  }
  console.log(lcm);
  return [gcd, lcm];
}

function solution(n, m) {
  //유클리드 호재법
  //작은수 % 큰 수 === 0 ? : 작은 수가 최대 공약수
  // : 작은수 % 나머지 === 0? : 나머지가 최대공약수

  function recursion(a, b) {
    if (b === 0) {
      return a;
    }

    return recursion(b, a % b);
  }
  const gcd = recursion(n, m);
  const lcm = (n * m) / gcd;

  return [gcd, lcm];
}
