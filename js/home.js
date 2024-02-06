//add movies

var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var conpro = document.querySelector("#addpro");
var inputtext = document.querySelector("#inputtext");
var alrt = document.querySelector("#alrt");
var alrt2 = document.querySelector("#alrt2");

    data=[
        {id:1 , name: "Spider man" },
        {id:2 , name: "Avatar" },
        {id:3 , name: "Avengers" },
        {id:4 , name: "Black Adam" }
    ]

    function text(item){
        conpro.innerHTML = "";
        item.forEach(function (ele) {
            conpro.innerHTML += `<div onclick = delitem(${ele.id})> ${ele.name} </div>`
        });
    }
    window.onload = function (){
        text(data);
    }

    btn2.addEventListener("click", additem);

    function additem(){
        if (inputtext.value ==""){
            alrt.style.display ="block";
            alert ("Please enter the movie name..");
        }
        var lastid = data.length? data[data.length-1].id :0;
        data.push({id: ++lastid, name: inputtext.value});
        var added = data[data.length-1]
        conpro.innerHTML += `<div onclick = delitem(${added.id})> ${added.name} </div>`
        inputtext.value =""
    }
    btn3.addEventListener("click", saved)
    function saved(){
        alert ("Saved");
    }
function delitem(id) {
    var index = data.map(function(i){
        return i.id;
    }).indexOf(id);
    if (index !== -1){
        data.splice(index,1);
        text(data);
    }
}


// index.html
var allpr = document.querySelectorAll(".addname  .btn");
var content = document.querySelector("#div1-hidd");
var btnn = document.querySelector("#btn");
var praces = document.querySelector("#h3");
var totalprace = 0 ;

  allpr.forEach(function (item) {
    item.onclick = function (){
        totalprace += +(item.getAttribute("prace"))
        content.innerHTML += item.textContent + ` / `

        if (content.innerHTML != ""){
            btnn.style.display = "block"
            content.style.borderWidth = "2px"
        }
    }
  }
)

  btnn.onclick = function(){
    praces.innerHTML = totalprace +`-L.E`

    if(praces.innerHTML !=""){
        praces.style.borderColor = "green"
        praces.style.color = "green"
    }
}

  content.onclick = function (){
    content.innerHTML = ""
    content.style.borderWidth = "0px"
    praces.innerHTML = 0
}

