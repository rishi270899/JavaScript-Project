const endDate = "27 FEB 2024 23:27";
document.getElementById("end-date").innerHTML = endDate;
const input = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    // console.log(diff);

    if(diff <= 0) return 0;
    // convert into days 
    input[0].value = Math.floor(diff / 3600 / 24);
    // calculate remaining time in hours  
    input[1].value = Math.floor(diff / 3600) % 24;
    // calculate remaining time in minutes 
    input[2].value = (Math.floor(diff / 60) % 60);
    // calculate remaining time in seconds
    input[3].value = (Math.floor(diff) % 60);
}


clock();

setInterval(
    () => {
        clock()
    }, 1000
)