
let allUsers;
let savedUsers = localStorage.getItem("allUsers")
if (savedUsers) {
    allUsers = JSON.parse(savedUsers)
} else {
    allUsers = []
}


function localStr() {
    var name = document.getElementById("inputName")
    var number = document.getElementById("inputNumber")
    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword")

    var emailc = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var userc = /^[a-z0-9_-]{3,16}$/;
    var numc = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
    var passc = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    let user = {
        name: name.value,
        number: number.value,
        email: email.value,
        password: password.value
    }
    if (userc.test(name.value)) {
        if (numc.test(number.value)) {
            if (emailc.test(email.value)) {
                if (passc.test(password.value)) {
                    var flag= false;
                   
                    for (i = 0; i < allUsers.length; i++) {
                        if (allUsers[i].email === email.value) {
                            flag = true       
                        }
                    }

                    if (flag) {
                        alert("This email is already registered")
                    } else {
                        allUsers.push(user)
                        localStorage.setItem("allUsers", JSON.stringify(allUsers))
                        alert('Your account has been created');
                        window.location.href = "login.html"
                        console.log(allUsers[0].email)
                 }
                } 
                else{
                    alert("pass check")
                }
            }
            else {
                alert('check email')
            }
        }
        else {
            alert('check number')
        }
    }
    else {
        alert(' username check')

    }
}










