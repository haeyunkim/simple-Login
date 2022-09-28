const loginID = document.querySelector("#login-id");
const password = document.querySelector("#login-password");
const loginButton = document.querySelector(".login-button");

loginID.focus();
loginButton.addEventListener("keyup", function (event) {
  if (event.keycode == "13") {
    handleLogin();
  }
});

const handleLogin = () => {
  let idValue = loginID.value;
  let passwordValue = password.value;

  if (idValue === "instagram") {
    if (passwordValue === "in") {
      alert("로그인되었습니다");
    } else {
      alert("아이디와 비밀번호를 다시 확인해주세요!");
    }
  } else {
    alert("존재하지 않은 계정입니다");
  }
};
loginButton.addEventListener("click", handleLogin);
