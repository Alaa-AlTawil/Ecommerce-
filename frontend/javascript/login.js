var mail = document.getElementById("loginemail");
var pass = document.getElementById("loginpassword");
document.getElementById("loginbtn").addEventListener("click", function1);
function function1() {
  if (mail.value == "" || pass.value == "") {
    alert("fill all  boxes");
  } else {
    let data1 = new FormData();
    data1.append("email", mail.value);
    data1.append("password", pass.value);

    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/login",
      data: data1,
    }).then(function (response) {
      if (response.data["error"] == "Unauthorized") {
        alert("incorrect email or password");
      }
       else {
        location.href = "http://127.0.0.1:5500/html/userview.html";
      }
    });
  }
}