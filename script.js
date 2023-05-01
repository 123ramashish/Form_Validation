const male = document.getElementById('male');
const female = document.getElementById("female");
const transgender = document.getElementById("transgender");
const applicant = document.getElementById("applicant-name");


function radiobox(){
if(male.checked == true){
    console.log("You are selected male gender");

}
else if(female.checked == true){
    console.log("You are selected female gender");
}
else if(transgender.checked == true){
    console.log("You are selected transgender gender");
}
}

function selectone(){
    var salutation = document.getElementById("salut").value;
    console.log("You are selected:",+salutation);
}

function inputtake(){
    var appli = document.getElementById("applicant").value
    if(isNaN(appli)){
    console.log("Applicant name is:",+appli);
    }
}
// applicant.addEventListener('onclick',
// function googletranslate(){
//     new google.translate.TranslateElement(
//         {pageLanguage:'hindi'},'applicant-name'
//     )
// }
// )

function mymobile(){
    var mobile = document.getElementById('mobile').value;
    if(mobile.length == 10){
    console.log("Your mobile number is:",+mobile);
    }else{
        alert("Please enter correct mobile number");
    }
}
