var content = document.querySelector(".content");

var xhttp = new XMLHttpRequest();

var printelement = () => {
    var respt = JSON.parse(xhttp.responseText);
    respt.user.forEach( user => {
        var item = document.createElement("div");   
        item.textContent = `${user.name} has email ${user.email}`;
        content.appendChild(item); 
    });
}

xhttp.onreadystatechange = function (){
    if(this.readyState == 4 && this.status == 200) printelement();
};

xhttp.open("GET", "alu.json", true);
xhttp.send();