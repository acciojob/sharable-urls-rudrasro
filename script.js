document.getElementById("button").addEventListener("click", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var year = document.getElementById("year").value;
    var url;
    if (name != "" && year != "") {
        url = "https://localhost:8080/?" + "name=" + name + "&year=" + year;
    } else if (name != "") {
        url = "https://localhost:8080/?" + "name=" + name;
    } else if (year != "") {
        url = "https://localhost:8080/?" + "year=" + year;
    } else {
        url = "https://localhost:8080/";
    }
    document.getElementById("url").innerHTML = url;
});