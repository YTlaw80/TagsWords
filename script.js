// $의 의미는 태그 변수 -> 문법 X, 그냥 구별용
const $button = document.querySelector("button"); //const는 상수로 값 변경 X
const $input = document.querySelector("input");
const number = Number(prompt("몇 명이 참가하나요?")); //참가인원 저장
const $word = document.querySelector("#word"); // 제시어 태그
const $order = document.querySelector("#order"); //?번재 참가자 태그
let word; //제시어
let newWord; // 현재 입력된 단어(input창)

function onClickButton() {   //입력버튼 누르면 실행되는 함수
    // console.log("button clicked");
    if (word === undefined) {    //제시어가 비었다면
        word = newWord;
        $word.innerText = word;
        // 여기에 order 코드
        let order = Number($order.innerText);
        if (order + 1 > number) {
            $order.innerText = 1;
        }
        else {
            $order.innerText = order + 1;    
        }
        // 여기에 입력값 비우기 코드 추가
        $input.value = ""; // input 창 비우기
        $input.focus();  // 커서 input창에 두는 명령어
    }

    else {  //제시어가 비어있지 않다면
        if (word[word.length - 1] === newWord[0]) { // 끝음절 == 첫음절
                if (word==newWord){
                    alert("제시어와 같은 낱말은 안 됩니다.");
                }
                else {
                    word = newWord;
                    $word.innerText = word;
                    let order = Number($order.innerText);
                    if (order + 1 > number) {
                        $order.innerText = 1;
                    }

                    else {
                        $order.innerText = order + 1;    
                    }
                }   
            // 여기에 입력값 비우기 코드 추가
            $input.value = ""; // input 창 비우기
            $input.focus();  // 커서 input창에 두는 명령어
        } else {  // 끝음절 != 첫음절
            alert("올바르지 않은 단어입니다.");
            // 여기에 입력값 비우기 코드 추가
            $input.value = ""; // input 창 비우기
            $input.focus();  // 커서 input창에 두는 명령어
        }        
    }
}

function oninput(event) {   //입력값이 있으면 실행되는 함수
    // console.log("text inputed", event.target.value);12
    newWord = event.target.value;
}

$button.addEventListener("click", onClickButton); // (동작, 실행할 힘수)
$input.addEventListener("input", oninput);