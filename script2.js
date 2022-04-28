function test() {
    var uid = document.getElementById("username").value;

    var sub = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("message").value;
    alert(uid + sub + email + msg);



    // store 

    var user = localStorage.setItem("uid", uid);
    var que = localStorage.setItem("sub", sub);
    var em = localStorage.setItem("email", email);
    var ms = localStorage.setItem("msg", msg);

    // reci

    var user = localStorage.getItem("uid", uid);
    var que = localStorage.getItem("sub", sub);
    var em = localStorage.getItem("email", email);
    var ms = localStorage.getItem("msg", msg);

    var a, b, c, d;
    a = "user";
    b = "que";
    c = "em@gmail.com";
    d = "em";

    if (true) {

        alert("your Query send");
    }
    else {
        alert("Sorry  try after some time");
    }
}