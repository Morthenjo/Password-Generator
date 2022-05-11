let password = document.getElementsByClassName("rng");

function generatepwd(passwordLength) {
  if (passwordLength >= 1 && passwordLength <= 18) {
    let chars =
      "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password;
  } else return "Input a number";
}

function render() {
  document.getElementById("password").textContent = generatepwd(readinput());
  document.getElementById("password2").textContent = generatepwd(readinput());
  document.getElementById("password3").textContent = generatepwd(readinput());
  document.getElementById("password4").textContent = generatepwd(readinput());
}

function readinput() {
  return document.getElementById("number").value;
}

function copy(clicked_id) {
  let copyText = document.getElementById(clicked_id);
  navigator.clipboard.writeText(copyText.textContent);
}
