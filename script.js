let result = document.getElementById("text");
let c= document.getElementById("c");


function display(num){
    result.value += num;
}

function calc(){
    try{
        result.value = eval(result.value);
    }
    catch(err){
        alert("Invalid");
    }
}
 
function del(){
    result.value = result.value.slice(0,-1);
}


c.onclick=function(){
    result.value="";
}



















btn.forEach((button) =>{
    button.addEventListener("click",() =>{
        result.textContent=button.value;
    })
})
