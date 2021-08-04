시저 암호
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서
다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다.
"z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, 
solution을 완성해 보세요.

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function solution(s, n) {
    var answer = '';
    
    for(let i = 0; i <s.length; i++){
        if(s[i] ===  " ") {
            answer += " "
        } else {
            let index = alphabet.indexOf(s[i])
            // 현재 알파벳이 소문자인지 대문자인지를 판별, 저장
            const upper = index >= 26 ? true : false
            index += n
            // index = index + n 
                if(upper === true) {
                   index = index >= 52 ? index - (alphabet.length / 2) : index;
                } else {
                  index = index >= 26 ? index - (alphabet.length / 2) : index;
                } 
            answer += alphabet[index]
        }
    }
    return answer;
}


const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
function solution(s, n) {
    var answer = '';
    
    for(let i = 0; i < s.length; i++){
        if(s[i] ===  " ") {
            answer += " "
        } else { 
            const text = lower.includes(s[i]) === true ? lower : upper;
            let index = text.indexOf(s[i]) + n;
            if(index >= text.length){
                index = index - text.length
            }
            answer += text[index]

        }
    }
    
    return answer;
}

const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
function solution(s, n) {
   const result = s.split("").map(str => {
       if (str === " ") {
           return " "
       }
       const text = lower.includes(str) === true ? lower : upper
       let index = text.indexOf(str) + n
       if(index >= text.length) {
           index = index - text.length
       }
       return text [index]
   })
   return result.join("")       
   
}