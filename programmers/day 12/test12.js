모의고사;

수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.



const answer1 = [1, 2, 3, 4, 5]
const answer2 = [2, 1, 2, 3, 2, 4, 2, 5]
const answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

function solution(answers) {
    // 수포자들에 대한 각자의 점수를 저장하는 배열
    const score = [0, 0, 0]
    
    for(let i= 0; i < answers.length; i++){
        if( answers[i] === answer1[i % 5]) //수포자 1번
            score[0]++
        if( answers[i] === answer2[i % 8]) //수포자 2번
            score[1]++
        if( answers[i] === answer2[i % 10]) //수포자 3번
            score[2]++
    }
    // const max = Math.max.apply(null, score)    
    const max = Math.max(...score)   // 스프레드
    const result = []
    for (let i = 0; i< score.length; i ++){
       if(score[i] === max) {
           result.push(i+1)
       }
    }

    return result ;
}

const answerList =[
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
]

function solution(answers) {
  // 수포자들에 대한 각자의 점수를 저장하는 배열
  const score = [0, 0, 0]
  
  answers.forEach((el, i) => {
      answerList.forEach((cu,l) => {
          if(cu[i % cu.length] === el){
              score[l]++
          }
      })
  })
  
  // for(let i= 0; i < answers.length; i++){
  //    for(let l=0; l< answerList.length; l++){
  //        if(answerList[i][i % answerList[l].length ]=== answers[i]){
  //            score[i]++
  //        }
  //    }
  // }
  // const max = Math.max.apply(null, score)    
  // const max = Math.max(...score)   // 스프레드
  // const result = []
  // for (let i = 0; i< score.length; i ++){
  //    if(score[i] === max) {
  //        result.push(i+1)
  //    }
  // }

  return answers ;
}