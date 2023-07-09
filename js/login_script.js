function validalas(){
  var username = document.getElementById("userName").value;
  var password = document.getElementById("userPassword").value;
  var usernameReg = /^[a-zA-Z0-9]+$/;
  var passwordReg = /^[a-zA-Z0-9]+$/;
  

  if (username == ""){
    alert("A felhasználónév mező nem maradhat üresen!");
  }

  else if (password == "")
  {
    alert("A jelszó mező nem maradhat üresen!");
  }
   /* 
  else if(!usernameReg.test(username))
  {
    alert("A felhasználónév nem felel meg a feltételeknek!");
  }
  else if(!passwordReg.test(password))
  {
    alert("A jelszó nem felel meg a feltételeknek!");
  }
  */
  else if(username == window.sessionStorage.getItem('ssUsername') && password == window.sessionStorage.getItem('ssPassword')){
    window.location.replace("../html/index.html");
    return false;
    } 
  
}
