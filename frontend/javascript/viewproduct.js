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
            
            document.getElementById('additemms').appendChild(newDiv)
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
    var cat =document.getElementById("categories")
            axios({
                method: 'get',
                url: "http://127.0.0.1:8000/api/getallcategory",
            })
            .then(function (response){
                console.log(response.data["category"]);
                for (var i=0; i < response.data["category"].length; i++){
                    // var opt = document.createElement('option');
                    // opt.setAttribute('id', response.data["category"][i]["id"]);
                    // opt.innerHTML = response.data["category"][i]["categoryname"];
                    // categories.appendChild(opt);
                    cat.innerHTML+=`<option value="${response.data["category"][i]["id"]}">
                    ${response.data["category"][i]["categoryname"]}
                    </option>`

                    



                    document.getElementById(response.data["category"][i]["id"]).addEventListener("click",items)
                    function items(){
                   

                    }
                    
                }
            })
            document.getElementById("choosecat").addEventListener("click",function(){
                document.getElementById("additemms").innerHTML=``
                catid=cat.value
                let data3=new FormData();
                data3.append("id",catid);
                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/getCategoryItems',
                    data:data3,
                }).then(function(response){
                    for (var i = 0; i < response.data["category"].length; i++) {

                        let base64img = response.data["category"][i]["Img"];
                        let t = response.data["category"][i]["Name"];
                        let d = response.data["category"][i]["Price"];
                        let id=response.data["category"][i]["id"]
                        const newDiv=document.createElement("div");
                        newDiv.className="restor"
                        newDiv.innerHTML=`<img src="${base64img}">
                        <div>${t}</div>
                        <div>${d} $</div>
                        <i class="fa fa-heart" id="${id}"></i>
                        </div>`
                        
                        document.getElementById('additemms').appendChild(newDiv)
                    

                    }
                })
            })

        
    