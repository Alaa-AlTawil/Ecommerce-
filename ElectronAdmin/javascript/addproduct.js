var title = document.getElementById("addtitle");
var image = document.getElementById("addimage");
var price = document.getElementById("price");
var category = document.getElementById("category");
var s;
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
    }
})
document.getElementById("addbtn").addEventListener("click",function(){
    let data=new FormData();
    data.append("catname",document.getElementById("categoryname").value)
    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/addcategory',
        data: data,
    })
    .then(function(response){
        return response
    })
})

document.getElementById("additembtn").addEventListener("click",function2);
function encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      s=reader.result;
    }
    reader.readAsDataURL(file);
  }
function function2(){ 

    if (title.value=="" ||image.value=="" ||price.value=="" ||cat.value==""){
        alert("fill all data please");
    }
    else{
        
        
        let data2=new FormData();
        data2.append("itemname",title.value);
        data2.append("itemprice",price.value);
        data2.append("cat_id",cat.value);
        data2.append("img",s);
        
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/additem',
            data: data2,
        })
        .then(function (response) {
            console.log(response.data)
           

        })

    }
}
