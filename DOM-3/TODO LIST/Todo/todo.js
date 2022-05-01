


document.querySelector("form").addEventListener("submit",todolist);

function todolist(){
  event.preventDefault();

  var itemName=document.querySelector("#name").value;
  var itemqty=document.querySelector("#qty").value;
  var itempriority=document.querySelector("#priority").value;

  var tr=document.createElement("tr");

  var td1=document.createElement("td");
  td1.innerText=itemName;
  var td2=document.createElement("td");
  td2.innerText=itemqty;
  var td3=document.createElement("td");
  td3.innerText=itempriority;

  tr.append(td1,td2,td3);
  document.querySelector("tbody").append(tr);
}   