const inputbox=document.getElementById("inputbox");
const listContainer=document.getElementById("list");
function addTask(){
    if(inputbox.value==''){
        alert('you enter something');
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value='';
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);
function savedata(){
    localStorage.setItem("data",listContainer.innerHTML)
}