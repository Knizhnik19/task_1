'use strict';

// проверка полей формы
var LOGIN = 'calc@gmail.com';
var PASSWORD = 'Calc19';

function checkForm() {

    var emailCheck = document.getElementById('Email').value;
    var passwordCheck = document.getElementById('Password').value;

    var re_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var ch_email = re_email.test(String(emailCheck).toLowerCase());

    var re_pass = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
    var ch_pass = re_pass.test(String(passwordCheck).toLowerCase());

    if (ch_email === false) {
        event.preventDefault();
        document.getElementById('alertEmail').style.display = 'block';
        document.getElementById('Email').style.border = '2px solid red';
    }

    if ((ch_pass === false) || (passwordCheck.length < 6)) {
        event.preventDefault();
        document.getElementById('alertPass').style.display = 'block';
        document.getElementById('Password').style.border = '2px solid red';
    }

    if ((emailCheck === LOGIN) && (passwordCheck === PASSWORD)){
        window.location.href = "src/pages/Calculator.html";
    } else {
        event.preventDefault();
        document.getElementById('alertError').style.display = 'block';
    }
}

// переход на страницу после проверки
var el = document.getElementById("submit");
el.addEventListener("click", checkForm);

// калькулятор
function insert(num) {
    document.getElementById('panel').value =  document.getElementById('panel').value + num;
}

function results() {
    var expr = document.getElementById('panel').value;
    document.getElementById('panel').value = eval(expr);
}

function clean() {
    document.getElementById('panel').value = "";
}