// [카카오 인턴] 키패드 누르기
// 스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.
// 이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
// 맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

// 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
// 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
// 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
// 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서
// 더 가까운 엄지손가락을 사용합니다.
// 4-1. 만약 두 엄지손가락의 거리가 같다면,
// 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
// 순서대로 누를 번호가 담긴 배열 numbers,
// 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때,
//  각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열
//  형태로 return 하도록 solution 함수를 완성해주세요.

const [leftNumbers, rightNumbers, middleNumbers] = [
  [1, 4, 7],
  [3, 6, 9],
  [2, 5, 8, 0],
];

function solution(numbers, hand) {
  var answer = "";
  // 현재 왼손가락, 오른손가락의 위치를 나타내는 객체
  const current = {
    left: 10,
    right: 12,
  };

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if (leftNumbers.includes(number)) {
      // 왼쪽 키패드를 눌렀을 경우
      answer += "L";
      current["left"] = number;
    } else if (rightNumbers.includes(number)) {
      // 오른쪽 키패드를 눌렀을 경우
      answer += "R";
      current["right"] = number;
    } else if (middleNumbers.includes(number)) {
      //가운데 키패드를 눌렀을 경우
      const locationObj = { ...current };

      for (let key in locationObj) {
        number = number === 0 ? 11 : number;
        let location = Math.abs(number - locationObj[key]);

        if (location > 2) {
          location = Math.trunc(location / 3) + (location % 3);
        }
        locationObj[key] = location;
      }
      // 가까운 손가락 찾기
      // 같은 경우
      if (locationObj["left"] === locationObj["right"]) {
        answer += hand === "left" ? "L" : "R";
        current[hand] = number;
      } else {
        if (locationObj["left"] > locationObj["right"]) {
          answer += "R";
          current["right"] = number;
        } else {
          answer += "L";
          current["left"] = number;
        }
      }
    }
  }
  return answer;
}
