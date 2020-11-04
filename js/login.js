const users = [];

const addUser = (name, address, username, password) => {
  const newUser = {
    name: name,
    address: address,
    username: username,
    password: password,
  };

  users.push(newUser);
};

const login = () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  for (let i = 0; i < users.length; i++) {
    if (
      (username === users[i].name ||
        username === users[i].address ||
        username === users[i].email) &&
      password === users[i].password
    ) {
      console.log(username);
    } else {
      console.log("username inorrect");
    }
  }
};

let loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", login);

window.onload = function () {
  addUser("Ademuyiwa Otubusin", "Nigeria", "aotubusin", "password");
  addUser("Ankit", "", "ankit", "password");
  addUser("Loris Cuntreri", "", "marelguy", "password");
};
