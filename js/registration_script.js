function validalas(){
  const username = document.getElementById("userName");
  const password = document.getElementById("userPassword");
  const emailaddress = document.getElementById("emailAddress");
    var usernameReg = /^[a-zA-Z0-9]+$/;
    var passwordReg = /^[a-zA-Z0-9]+$/;
    var emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  /*
    var emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; */
    
  
    if (emailaddress == "")
    {
        alert("Az email mező nem maradhat üresen!")
    }

    else if (username == ""){
      alert("A felhasználónév mező nem maradhat üresen!");
    }
  
    else if (password == "")
    {
      alert("A jelszó mező nem maradhat üresen!");
    }

    else if (!emailaddress.value.match(emailReg))
    {
      alert("Az emailcím nem felel meg a feltételeknek!");
    }

    else if(!username.value.match(usernameReg))
    {
      alert("A felhasználónév nem felel meg a feltételeknek!");
    }
    else if(!password.value.match(passwordReg))
    {
      alert("A jelszó nem felel meg a feltételeknek!");
    }
  
    else{
      window.sessionStorage.setItem('ssUsername',username.value);
      window.sessionStorage.setItem('ssPassword',password.value);
      window.sessionStorage.setItem('ssEmail',emailaddress.value);
      window.location.replace("../html/login_index.html");
      return false;
        
    }
  }
  
  