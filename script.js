// alert("loading")
function addNewWefield(){
    // console.log("Adding new field");

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("Placeholder","Enter here");
    

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAqField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    // newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);
}

// generate CV

function generateCV(){
    // console.log("generating Cv");

    let nameField=document.getElementById("nameField").value;
    let nameTemplate=document.getElementById("nameTemplate");

    nameTemplate.innerHTML = nameField;

    document.getElementById("nameTemplate2").innerHTML=nameField;

    document.getElementById("contactTemplate").innerHTML=document.getElementById("contactField").value;

    document.getElementById("emailTemplate").innerHTML=document.getElementById("emailField").value;

    document.getElementById("addressTemplate").innerHTML=document.getElementById("addressField").value;

    document.getElementById("fbTemplate").innerHTML=document.getElementById("fbField").value;

    document.getElementById("linkedTemplate").innerHTML=document.getElementById("LinkedField").value;

    
    document.getElementById("objTemplate").innerHTML=document.getElementById("objectiveField").value;

    // work experiences

    let wes=document.getElementsByClassName("weField");

    let str=""

    for(let e of wes){
        str = str + `<li> ${e.value}</li>`;
    }

    document.getElementById("weTemplate").innerHTML= str;

    // academic qualification

    let aqs=document.getElementsByClassName("aqField");

    let str1="";

    for(let e of aqs)
    {
        str1 = str1 + `<li> ${e.value}</li>`;
    }

    document.getElementById("aqTemplate").innerHTML = str1;
    

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";



}

function printCV(){
    window.print();
}