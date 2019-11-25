function Reset() { 
    var password = document.getElementById("newPassword").value; 
    var confirmPassword = document.getElementById("confirmNewPassword").value;

     if (password != confirmPassword) { 
     document.getElementById("confirmNewPasswordError").innerHTML = "Password not matched";
     document.getElementById("newPasswordError").innerHTML = "";
     document.getElementById("save").disabled= true;
    }  
    else if(password == confirmPassword){
        // document.getElementById("passwordError").innerHTML = "Password matched";
        document.getElementById("confirmNewPasswordError").innerHTML = "";
        document.getElementById("save").disabled= false;
     } 
    }