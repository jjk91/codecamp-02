[1차] 비밀지도
네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다. 그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다. 다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.

지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
"지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.

// 풀이 1
function solution(n, arr1, arr2) {
  arr1 = arr1.map((num) => num.toString(2).padStart(n, "0"));
  arr2 = arr2.map((num) => num.toString(2).padStart(n, "0"));

  return arr1.map((el, i) => {
    return arr2
      .map((cu, l) => {
        return el[l] === "1" || arr2[i][l] == "1" ? "#" : " ";
      })
      .join("");
  });
}

// 풀이 2
function solution(n, arr1, arr2) {
  var answer = [];
  
  arr1 = arr1.map(num => num.toString(2).padStart(n,"0"))
  arr2 = arr2.map(num => num.toString(2).padStart(n,"0"))
  
  for(let i = 0 ; i< arr1.length ; i ++){
      // 공백과 지도를 저장해주는 변수
      let str= '';
      for(let l = 0 ; l<arr1.length ; l ++){
          if(arr1[i][l] === '1' || arr2[i][l]==='1'){
              str += '#'
          }else {
              str +=  ' '
          }
      }   
      answer.push(str) 
  }
      
  
  return answer;
}