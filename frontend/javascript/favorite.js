
let data1=new FormData()
data1.append("id",localStorage.getItem("idofuser"))
axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/getalluseritemfav',
    data:data1
}).then(function (response){
    for(var i=0;i<response.data.length;i++){
    itemid=response.data[i]["item_id"]
    let data2=new FormData();
    data2.append("id",itemid)
    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/getitembyid',
        data:data2
    }).then(function(response){
        let base64img = response.data["item"]["Img"];
        let t = response.data["item"]["Name"];
        let d = response.data["item"]["Price"];
        const newDiv=document.createElement("div");
            newDiv.className="restor"
            newDiv.innerHTML=`<img src="${base64img}">
            <div>${t}</div>
            <div>${d} $</div>`
            document.getElementById('favorites').appendChild(newDiv)
        
    })
}})