function gotohome() {


    var userName = document.getElementById('inputEmail').value;
    var userPass = document.getElementById('inputPassword').value;
    let usersData = JSON.parse(localStorage.getItem('allUsers'))

    let flag = false
if(usersData){
    for (let a = 0; a < usersData.length; a++) {
        if (userName == usersData[a].email && userPass == usersData[a].password) {
            flag = true
        }
    }
}
else{
    alert("no Data found")
}

    if (flag) {
        alert('You are logged in.');
        window.location.href = "home.html"
    } else {
        alert("Please Create an account or check your email again")
    }
}