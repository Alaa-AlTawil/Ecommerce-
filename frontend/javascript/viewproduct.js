var userid
axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/getitems',
})
    .then(function (response) {
        console.log(response.data)
        for (var i = 0; i < response.data["items"].length; i++) {

            let base64img = response.data["items"][i]["Img"];
            let t = response.data["items"][i]["Name"];
            let d = response.data["items"][i]["Price"];
            let id=response.data["items"][i]["id"]
            const newDiv=document.createElement("div");
            newDiv.className="restor"
            newDiv.innerHTML=`<img src="${base64img}">
            <div>${t}</div>
            <div>${d} $</div>
            <i class="fa fa-heart" id="${id}"></i>
            </div>`
            
            document.getElementById('addrestaurant').appendChild(newDiv)
            document.getElementById(id).addEventListener("click",function2)
            async function function2(){
                const headers = {
                    'Authorization': "Bearer "+localStorage.getItem("token"),
                    'Accept': 'application/json'
                  }
                  console.log(headers)
                await axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/profile',
                    headers:headers
                })
                .then(function (response) {

                    userid=response.data["id"]
                    localStorage.setItem("idofuser",userid)
                    let data2=new FormData();
                    data2.append("uid",userid)
                    data2.append("itemid",id)


                    axios({
                        method: 'post',
                        url: 'http://127.0.0.1:8000/api/addfavorite',
                        data:data2,
                    })
                    .then(function (response){
                        if(response.data["status"]=="success"){
                            alert("favorite item added")
                        }
                    })
            })
        }
        }

    })