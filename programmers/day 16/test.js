제일 작은 수 제거하기
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, 
solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.


 function solution(arr) {
  var answer = [];
  
  let min = arr[0]
  
  for (let i = 1 ; i < arr.length; i ++){
      if(min > arr[i]){
          min = arr[i]
          
      }
      
  }
  arr.splice( arr.indexOf(min), 1 )
  if(arr.length === 0){
      return[-1]
  }
  return arr;
}

function solution(arr) {
  var answer = [];
  
  const min =Math.min.apply(null,arr)
  arr.splice(arr.indexOf(min),1)
  
  return arr.length === 0 ? [-1] : arr;
}



function solution(arr) {
  const min = Math.min(...arr)
  const result = arr.filter(num =>
      num > min
  )
  return result.length === 0 ? [-1] : result
}