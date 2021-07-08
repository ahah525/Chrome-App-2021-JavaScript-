const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

/* 사용자가 입력한 값이 h1에 보여지고 form은 숨기기 */
function onLoginSubmit(event) {
  //어떤 event의 브라우저 기본 동작(새로고침) 막기
  event.preventDefault();     
  // form hidden 설정(loginForm의 classList에 className 추가하기)
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const username = loginInput.value;    // loginInput의 value = 내가 입력한 값

  /*h1에 text 값 넣기(방법 2가지)*/
  //greeting.innerText = "Hello " + username;   // +로 연결
  greeting.innerText = `Hello ${username}`;     // 백틱 기호, ${변수명}

  // greeting hidden 해제(greeting classList에 className 삭제하기)
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// submit event 발생시, onLoginSubmit(event) 호출됨
// event: js가 현재 발생한 일에 대한 정보를 줌
loginForm.addEventListener("submit", onLoginSubmit);
