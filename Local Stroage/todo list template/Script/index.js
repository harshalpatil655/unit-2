

document.querySelector("#form").addEventListener("submit",hulk);

var todoarr=JSON.parse(localStorage.getItem("todoData")) || [];
function hulk(){
    event.preventDefault();

    var nam=document.querySelector("#name").value;
    var qty=document.querySelector("#qty").value;
    var pri=document.querySelector("#priority").value;

    var todoObj={
        name:nam,
        quantity:qty,
        Priority:pri,
    }

    todoarr.push(todoObj);
    
    localStorage.setItem("todoData",JSON.stringify(todoarr));
    

}