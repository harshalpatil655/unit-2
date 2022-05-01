
document.querySelector("form").addEventListener("submit",hulk);

function hulk(){
   event.preventDefault();

    var cat=document.querySelector("#category").value;
    var tit=document.querySelector("#name").value;
    var pri=document.querySelector("#price").value;

    var tr=document.createElement("tr");

    var td1=document.createElement("td");
    td1.innerText=cat;
    var td2=document.createElement("td");
    td2.innerText=tit;
    var td3=document.createElement("td");
    td3.innerText=pri;

    tr.append(td1,td2,td3);

    document.querySelector("tbody").append(tr);
}