var i = -1;
var arr= new Array();
var names = new Array();

function checkName() {
    var nam = document.getElementById("user").value;
    if (nam !== null && nam !== "") {

    } else {
        document.getElementById("noname").innerHTML = '<p class = "alert alert-warning">Fill the field!! </p>'
    }
}
function checkPassword() {
    var pd = document.getElementById("pass").value;
    if (pd !== null && pd !== "") {

    } else {
        document.getElementById("nopassword").innerHTML = '<p class = "alert alert-warning">Fill the field!! </p>'
    }
}
function validation() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var comm = document.getElementById("comment").value;
    // console.log(user);
    // console.log(pass);
    // console.log(comm);
    if (pass === "Swap" && user !== "" && user !== null && comm !== null && comm !== ""){
        document.getElementById("valid").innerHTML= '<p class = "alert alert-success">Success!! </p>'
        i++;
        // console.log(i)
        arr[i] =comm;
        names[i] = user;
        loader();
    } else {
        document.getElementById("valid").innerHTML= '<p class = "alert alert-warning">Invalid!! </p>'
    }
}
function loader() {
    var comments = "";
    document.getElementById("user").value = '';
    document.getElementById("pass").value = '';
    document.getElementById("comment").value = '';
    document.getElementById("valid").innerHTML = '';
    document.getElementById("noname").innerHTML = '';
    document.getElementById("nopassword").innerHTML = '';
    if (i >= 0) {
        for(var j = arr.length - 1; j >= 0; j--) {
            comments += '<br>' + '<div class = "container" style = "border:3px solid grey">' + '<h3>' + arr[j] + '</h3>' + '<p>' + names[j] + '</p>' + '</div>' + '<br>'; 
        }
        document.getElementById("allcomments").innerHTML = comments;
    }
}