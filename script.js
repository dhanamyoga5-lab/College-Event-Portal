function reg(e) {
    e.preventDefault();
    let n = document.getElementById("name").value;
    document.getElementById("msg").innerHTML =
        "Registered successfully, " + n + "!";
}