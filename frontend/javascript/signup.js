var fname = document.getElementById("signupname");
var email = document.getElementById("signupemail");
var password = document.getElementById("signuppassword");
var confpass = document.getElementById("confpassword");
document.getElementById("signupbtn").addEventListener("click", function2);

function function2() {
  if (
    fname.value == "" ||
    email.value == "" ||
    password.value == "" ||
    confpass.value == ""
  ) {
    alert("fill all data please");
  } else if (password.value != confpass.value) {
    alert("confirm password should be the same");
  } else {
    let data2 = new FormData();
    data2.append("name", fname.value);
    data2.append("email", email.value);
    data2.append("password", password.value);
    data2.append("password_confirmation", confpass.value);

    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/register",
      data: data2,
    }).then(function (response) {
      console.log(response.data["email"][0]);
    });
  }
}