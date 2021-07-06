
// 20210706
//  문자열을 정수로 바꾸기

function solution(s) {
    
    return Number(s);
}

// 같은 숫자는 싫어

function solution(arr)
{
    var answer = [];
    
    for (let i= 0; i < arr.length ; i = i + 1){
        if(arr[i] !== arr[i+1]){
            answer.push(arr[i]);
        }
    }
    
    return answer;
}

// 핸드폰 번호 가리기

function solution(phone_number) {
    let result = '';
    
    let password = '';
    let answer = '';
    
    for(let i = 0; i < phone_number.length; i = i+1) {
        if(i < phone_number.length - 4){
            password = password + '*';
        } else {
            answer = answer + phone_number[i];
        }
    }
    return password + answer;
}