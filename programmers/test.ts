const bouns = ['S','D','T']
const option = ['*', '#']

function solution(dartResult) {
    const scoreList = []
    let scoreStr=''
 for (let i = 0 ; i < dartResult.length; i ++){
     if(Number.isNaN(Number (dartResult[i])) === false){
         scoreStr += dartResult[i]
         
     } else if (bonus.includes(dartResult[i])===true){
         scoreList.push({
             'score' : Number(scoreStr),
             'bonus' : dartResult[i]
         })
         scoreStr= ''
     } else if (option.includes(dartResult[i]) === true) {
         scoreList[scoreList.length -1]['option'] = dartResult[i]
     }
 }
    const scoreResult = []
    for (let i = 0; i < scoreList.length; i++){
       let sum = 0

        if(scoreList[i].bonus === 'S' )sum += scoreList[i].score;
        if(scoreList[i].bonus === 'D' )sum += Math.pow(scoreList[i].score, 2);
        if(scoreList[i].bonus === 'T' )sum += Math.pow(scoreList[i].score, 3);
        
        if(scoreList[i].option){
            if(scoreList[i].option === '#') sum *= -1;
            if(scoreList[i].option === '*') {
                sum *= 2
                
                if( scoreResult.length > 0){
                    scoreResult[ scoreResult.length - 1 ] *= 2
                }
            }
        }
        
        scoreResult.push( sum )
       }
    return scoreResult.reduce ((el, cu) => el + cu)
}