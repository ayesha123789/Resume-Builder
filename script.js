function generateResume() {
    document.getElementById("r-name").innerText =
        document.getElementById("name").value;

    document.getElementById("r-email").innerText =
        document.getElementById("email").value;

    document.getElementById("r-skills").innerText =
        document.getElementById("skills").value;
        console.log("JS feature working");
}