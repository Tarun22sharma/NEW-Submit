// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("form").addEventListener("submit",homeFun)

function homeFun(){
    event.preventDefault();
    
    var objArr= JSON.parse(localStorage.getItem("schedule")) || [];

    var objData = {
        matchNum : masaiForm.matchNum.value,
        teamA : masaiForm.teamA.value,
        teamB : masaiForm.teamB.value,
        date : masaiForm.date.value,
        venue : masaiForm.venue.value,
    }

    objArr.push(objData);

    localStorage.setItem("schedule",JSON.stringify(objArr));


}

