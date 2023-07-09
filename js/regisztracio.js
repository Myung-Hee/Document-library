/*-----------------------------EMAIL---------------------------------------*/

const email = document.getElementById('emailAddress');
const username = document.getElementById('userName');
const password = document.getElementById('userPassword');

const bool = false;

var emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var usernameReg = /^[a-zA-Z0-9]+$/;
var passwordReg = /^[a-zA-Z0-9]+$/;

document.getElementById('login').addEventListener('click', function(){
    if(email.value.length>0 && username.value.length>0 && password.value.length>0){
        if(email.value.match(emailReg) && username.value.match(usernameReg) && password.value.match(passwordReg)){
            window.sessionStorage.setItem('ssEmail', email.value);
            window.sessionStorage.setItem('ssUsername', username.value);
            window.sessionStorage.setItem('ssPassword', password.value);
            bool = true;
        } else { alert("Valamit helytelenül adott meg!");}
    } else { alert("Kötelező minden mezőt kitölteni!"); }
})

function regisztracio(){
    if(bool){
        window.location.href='login_index.html';
        return false;
    }
}
