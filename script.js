function changeMessage() {

   document.getElementById("message").innerHTML =
    "Computers can process a large amount of data in a very short time.";

    let info = document.getElementById("more-info");

    if (info.style.display === "block") {
        info.style.display = "none";
    } else {
        info.style.display = "block";
    }
}


function toggleBenefits() {

    let benefits = document.getElementById("benefits");

    if (benefits.style.display === "none") {
        benefits.style.display = "flex";
    } else {
        benefits.style.display = "none";
    }
}   
