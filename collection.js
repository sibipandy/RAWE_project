var productcontainer = document.getElementById("product")
var search = document.getElementById("search")
var element = productcontainer.querySelectorAll("div")
function sibi(event){
    var entered=event.target.value.toUpperCase()
    for(i=0;i<element.length;i++){ 
    if(element[i].textContent.toUpperCase().indexOf(entered)<0)
        {
            element[i].style.display="none"
        }
        else{
            element[i].style.display="block"
        }
    }
    }
    
var side_navbar=document.querySelector(".side-navbar")
function show(){
    side_navbar.style.left="0"
}
function closes(){
    side_navbar.style.left="-38%"
}