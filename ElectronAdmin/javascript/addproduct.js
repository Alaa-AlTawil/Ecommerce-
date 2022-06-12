var title = document.getElementById("addtitle");
var image = document.getElementById("addimage");
var price = document.getElementById("price");
var category = document.getElementById("category");
var s;
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

    if (title.value=="" ||image.value=="" ||price.value=="" ||category.value==""){
        alert("fill all data please");
    }
    else{
        
        
        let data2=new FormData();
        data2.append("itemname",title.value);
        data2.append("itemprice",price.value);
        data2.append("cat_id",category.value);
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
