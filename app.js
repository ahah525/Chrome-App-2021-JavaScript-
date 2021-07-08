const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string 반복 사용할 경우 변수로 고정(오타 위험)
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/* 사용자가 입력한 값이 h1에 보여지고 form은 숨기기 */
function onLoginSubmit(event) {
  //어떤 event의 브라우저 기본 동작(새로고침) 막기
  event.preventDefault();     
  // form hidden 설정(loginForm의 classList에 className 추가하기)
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const username = loginInput.value;    // loginInput의 value = 내가 입력한 값

  // localStorage에 username 저장하기
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings();
}

// greeting에 text 넣고, 보여줌
function paintGreetings() {
  // localStorage에 key에 해당하는 value값 추출
  const username = localStorage.getItem(USERNAME_KEY);

  greeting.innerText = `Hello ${username}`;  
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // localStorage에 username없으면 form 보여줌
  loginForm.classList.remove(HIDDEN_CLASSNAME);

  // submit event 발생시, onLoginSubmit(event) 호출됨
  // event: js가 현재 발생한 일에 대한 정보를 줌
  loginForm.addEventListener("submit", onLoginSubmit);

} else {
  // localStorage에 username있으면 greeting text 넣고 보여줌 
  paintGreetings();
}
