

var todoitems=JSON.parse(localStorage.getItem("todoData"));
var completed=JSON.parse(localStorage.getItem("completeditem")) || [];
todoitems.map(function(ele){

    var tr=document.createElement("tr");

    var td1=document.createElement("td");
    td1.innerText=ele.name;
    var td2=document.createElement("td");
    td2.innerText=ele.quantity;
    var td3=document.createElement("td");
    td3.innerText=ele.Priority;
    var td4=document.createElement("td");
    td4.innerText="Mark Completed";
    td4.addEventListener("click",function(){
        markcomplete(ele);
    });
   
    tr.append(td1,td2,td3,td4);

    document.querySelector("tbody").append(tr);
});

function markcomplete(ele){
    completed.push(ele);

    localStorage.setItem("completeditem",JSON.stringify(completed));
}
