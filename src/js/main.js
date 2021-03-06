'use strict';

// проверка полей формы
const LOGIN = 'calc@gmail.com';
const PASSWORD = 'Calc19';

function checkForm() {

    let emailCheck = document.getElementById('Email').value;
    let passwordCheck = document.getElementById('Password').value;

    let re_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let ch_email = re_email.test(String(emailCheck).toLowerCase());

    let re_pass = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
    let ch_pass = re_pass.test(String(passwordCheck).toLowerCase());

    if (ch_email === false) {
        event.preventDefault();
        document.getElementById('alertEmail').style.display = 'block';
        document.getElementById('Email').classList.add('red');
    }

    if ((ch_pass === false) || (passwordCheck.length < 6)) {
        event.preventDefault();
        document.getElementById('alertPass').style.display = 'block';
        document.getElementById('Password').classList.add('red');
    }

    if ((emailCheck === LOGIN) && (passwordCheck === PASSWORD)){
        window.location.href = "src/pages/Calculator.html";
    } else {
        event.preventDefault();
        document.getElementById('alertError').style.display = 'block';
    }
}

function change() {
    if (document.getElementById('Email').value===''||document.getElementById('Password').value===''){
        document.getElementById('alertPass').style.display = 'none';
        document.getElementById('alertEmail').style.display = 'none';
        document.getElementById('alertError').style.display = 'none';
        document.getElementById('Email').classList.remove('red');
        document.getElementById('Password').classList.remove('red');
    }
}

// переход на страницу после проверки
let el = document.getElementById("submit");
el.addEventListener("click", checkForm);

// калькулятор

let oper1 = new String();
let oper2 = new String();
let operand = new String();
let place = new String();
let res = new Number();

function insert(num) {
    let expr = document.getElementById('panel').value;
    if (num !== '+' && num !== '-' && num !== '*' && num !== '/') {
        expr = document.getElementById('panel').value + num;
        document.getElementById('panel').value = document.getElementById('panel').value + num;
    }
    if (num === '+' || num === '-' || num === '*' || num === '/' || num === '=') {
        expr = document.getElementById('panel').value;
        if (expr.indexOf('+') === -1 && expr.indexOf('-') === -1 && expr.indexOf('*') === -1 && expr.indexOf('/') === -1) {
            document.getElementById('panel').value = document.getElementById('panel').value + num;
        } else {
            for (let i = 0; i <= expr.length; i++) {
                if (expr[i] === '+' || expr[i] === '-' || expr[i] === '*' || expr[i] === '/') {
                    operand = expr[i];
                    place = expr.indexOf(operand);
                }
            }

            oper1 = parseFloat(expr.slice(0, place));
            oper2 = parseFloat(expr.slice(place+1));

            switch (operand) {
                case '+':
                    res = oper1 + oper2;
                    break;
                case '-':
                    res = oper1 - oper2;
                    break;
                case '*':
                    res = oper1 * oper2;
                    break;
                case '/':
                    if (oper2 === 0) {
                        alert('Деление на 0!');
                    } else {
                        res = oper1 / oper2;
                    }
                    break;
                default:
                    break;
            }
            document.getElementById('panel').value = "";

            if (num !== '=') {
                document.getElementById('panel').value = document.getElementById('panel').value + res.toString() + num;
            } else {
                document.getElementById('panel').value = document.getElementById('panel').value + res.toString()
            }
        }
    }
}

function clean() {
    document.getElementById('panel').value = "";
}