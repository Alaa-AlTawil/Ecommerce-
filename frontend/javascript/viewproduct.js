axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/getitems',
})
    .then(function (response) {
        console.log(response.data["items"])
        for (var i = 0; i < response.data["items"].length; i++) {

            let base64img = response.data["items"][i]["Img"];
            let t = response.data["items"][i]["Name"];
            let d = response.data["items"][i]["Price"];
            let i_d = response.data["items"][i]["id"];
            const newDiv=document.createElement("div");
            newDiv.className="restor"
            newDiv.innerHTML=`<img src="${base64img}">
            <div>${t}</div>
            <div>${d} $</div>
            </div>`
            document.getElementById('addrestaurant').appendChild(newDiv)
        }

    })