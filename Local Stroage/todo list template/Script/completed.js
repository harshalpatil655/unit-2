var comp=JSON.parse(localStorage.getItem("completeditem"));
// var comple=JSON.parse(localStorage.getItem("finaldata") || [])
comp.map(function(ele){

    var tr=document.createElement("tr");

    var td1=document.createElement("td");
    td1.innerText=ele.name;
    var td2=document.createElement("td");
    td2.innerText=ele.quantity;
    var td3=document.createElement("td");
    td3.innerText=ele.Priority
    
    tr.append(td1,td2,td3);

    document.querySelector("#body").append(tr);

    // localStorage.setItem("finaldata",JSON.stringify(tr));
    
})