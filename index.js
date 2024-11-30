const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increasebtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}

decreasebtn.onclick = function(){
    if (count > 0) {  // i aint lettting yall count negatives nuh uh
        count--;
        countlabel.textContent = count;
    } else {
        // ISSLIKE a 404 error
        alert("404 Error: Cannot decrease count below 0.");
        // Optionally, log the error or throw a custom error
        throw new Error("404 Error: Cannot decrease count below 0.");
    }
}

resetbtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}








