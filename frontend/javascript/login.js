var mail = document.getElementById("loginemail");
var pass = document.getElementById("loginpassword");
document.getElementById("loginbtn").addEventListener("click", function1);
function function1(event) {
  event.preventDefault()
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
      localStorage.setItem("token",response.data["access_token"])
      if (response.data["error"] == "Unauthorized") {
        alert("incorrect email or password");
      }
       else {
        location.href = "../html/userview.html";
      }
    }).catch(function(error){
      alert("incorrect email or password")
    });
  }
}