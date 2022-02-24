
function fnameValidate() {
  let firstName = document.getElementById("fname").value;
  if (firstName == "") {
    displayMessage("First Name is manadatory", "fnameMsg", "red");
    return false;
  } else if (!firstName.match(/^([a-zA-Z])+$/)) {
    displayMessage("FirstName only contains aplhabets", "fnameMsg", "red");
    return false;
  } else if (firstName.length < 3) {
    displayMessage(
      "firstname must be more than 2 characters",
      "fnameMsg",
      "red"
    );
  } else {
    displayMessage("valid firstName", "fnameMsg", "green");
    return true;
  }
}

function lnameValidate() {
  let lastName = document.getElementById("lname").value;
  if (lastName == "") {
    displayMessage("last Name is manadatory", "lnameMsg", "red");
    return false;
  } else if (!lastName.match(/^([A-Z])+([a-z])+$/)) {
    displayMessage("lastName only contains aplhabets", "lnameMsg", "red");
    return false;
  } else if (lastName.length < 3) {
    displayMessage(
      "lastname must be more than 2 characters",
      "lnameMsg",
      "red"
    );
    return false;
  } else {
    displayMessage("valid lastName", "lnameMsg", "green");
    return true;
  }
}




function emailValidate() {
  let email = document.getElementById("email").value;
  if (email == "") {
    displayMessage("email is mandatory", "emailMsg", "red");
    return false;
  } else if (
    !email.match(/^([a-z0-9])[a-z0-9\_\-\.]+\@+(([a-z])+\.)+([a-z])/)
  ) {
    displayMessage("invalid email format", "emailMsg", "red");
    return false;
  } else {
    displayMessage("valid email", "emailMsg", "green");
    return true;
  }
}
function passwordValidate() {
  let password = document.getElementById("password").value;
  if (password == "") {
    displayMessage("password is mandatory", "passwordMsg ", "red");
    return false;
  }
  else if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$&.-_?!]).{8,}$/)){
    displayMessage('password must contain A@#er34 and min of 8 chracters','passwordMsg','red')
    return false
  }
   
   else {
    displayMessage("valid password", "passwordMsg", "green");
    return true;
  }
}
function displayMessage(Msg, id, colorValue) {
  document.getElementById(id).innerHTML=Msg 
  document.getElementById(id).style.color = colorValue;
}
function validForm(){
  if(fnameValidate() && lnameValidate()&& emailValidate()&& passwordValidate())
  {
    return true
} else {
  return false
}
}
