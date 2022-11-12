
// Login&Register

var login_form = document.getElementById('login');
var register_form = document.getElementById('register');
var btn = document.getElementById('btn');

function register(){
    login_form.style.left = "-400px";
    register_form.style.left = "50px";
    btn.style.left = "110px";
}

function login(){
    login_form.style.left = "50px";
    register_form.style.left = "450px";
    btn.style.left = "0"
}

function redirect(){
    window.location.href = "./index.html";
}