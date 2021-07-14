function gotohome() {
    var email1 = document.getElementById("inputEmail")
    var password1 = document.getElementById("inputPassword")

    var a = localStorage.getItem('userDetail')
    
    if (email1.value === "" || password1.value === "") {
       
        alert("fill both fields")
    }
    else if (email1.value === JSON.parse(a).email && password1.value === JSON.parse(a).password){
        location.href = "home.html"
    }
     else {
        alert("wrong email or password")
    }
}