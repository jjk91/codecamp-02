소수 찾기
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)


// 풀이 1
function solution(n) {
  var answer = 0;
  //2부터 n 까지의 숫자들을 담아주는 배열
  const numbers = [];
  for (let i = 2; i <= n; i++) {
    //numbers.push(i);
    numbers[i - 2] = i;
  }
  console.log(numbers);
  for (let i = 2; i * i <= n; i++) {
    for (let l = i * i; l <= n; l = l + i) {
      numbers[l - 2] = false;
    }
  }
  answer = numbers.filter((data) => data !== false);
  console.log(answer.length);
  return answer.length;
}


//풀이 2
function solution(n) {
  var answer = 0;
  //2부터 n 까지의 숫자들을 담아주는 배열
  const numbers= [];
  for(let i = 2; i <=n; i ++){
      //numbers.push(i);
      numbers[ i - 2 ] = i
  }
  console.log(numbers)
  for(let i = 2; i * i <= n ; i++ ) {
      if(numbers[ i - 2 ] === false){
          continue
      }
      for(let l = i * i; l <= n; l = l + i) {
          numbers[ l - 2 ] = false
      }
  }
  answer = numbers.filter(data => data !== false)
  console.log(answer.length)
  return answer.length;
}