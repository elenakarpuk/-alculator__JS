const calc = function () {
    let screen = document.querySelector('.calc__screen span');
    let ac = document.querySelector(`[data-ac="ac"]`);
    let numbers = document.querySelectorAll(`[data-num]`); //коллекция цифр
    let operations = document.querySelectorAll(`[data-id]`); //коллекция операций
    let result = document.querySelector(`[data-equal]`);
    let percent = document.querySelector(`[data-pr="percent"]`);
    console.log(percent)

    let a = '';
    let b = '';
    let c = '';
    let oper = '';
    let finish = false;
    let pr = false;

    numbers.forEach(function (elem) {
        elem.addEventListener('click', function (event) {
            if (event.target.textContent) {
                if (b === '' && oper === '') {
                    a += event.target.textContent;
                    screen.innerText = a;
                }
                else if (a !== '' && b !== '' && finish) {
                    b = event.target.textContent;
                    finish = false;
                    screen.innerText = b;

                } else {
                    b += event.target.textContent;
                    screen.innerText = b;
                }
            }
        });
    });


    operations.forEach(function (elem) {
        elem.addEventListener('click', function (event) {
            if (event.target.textContent) {
                oper = event.target.textContent;
            }
        })

    })

    ac.addEventListener('click', function () {
        a = '';
        b = '';
        c = '';
        oper = '';
        finish = false;
        pr = false;
        screen.textContent = 0;
    });

    result.addEventListener('click', function (event) {
        if (event.target.textContent === '=' && !pr) {
            switch (oper) {
                case '+': a = (+a) + (+b);
                    break;

                case '-': a = (+a) - (+b);
                    break;

                case 'x': a = (+a) * (+b);
                    break;

                case '/':
                    if (b === '0') {
                        screen.textContent = 'Ошибка';
                        a = '';
                        b = '';
                        oper = '';
                        return
                    } else {
                        a = (+a) / (+b);
                    }
                    break;
                case '+/-': a = (+a) * (-1);
                    break;
            }
            finish = true;
            screen.textContent = a;

        } else if (event.target.textContent === '=' && pr) {
            switch (oper) {
                case '+': a = (+a) + c;
                    break;

                case '-': a = (+a) - c;
                    break;

                case 'x': a = (+a) * c;
                    break;

                case '/':
                    if (b === '0') {
                        screen.textContent = 'Ошибка';
                        a = '';
                        b = '';
                        oper = '';
                        return
                    } else {
                        a = (+a) / c;
                    }
                    break;
                case '+/-':
                    if (b === '') {
                        a = c * (-1);
                    } else {
                        a = a * (-1);
                    }
                    break;
            }
            if (!oper) {
                screen.textContent = c;
            } else {
                screen.textContent = a;
            }
        }
    })

    percent.addEventListener('click', function () {
        if (b === '') {
            c = (+a) / 100;
        } else {
            c = (+a) * (+b) / 100;
        }
        pr = true;
        screen.textContent = c;
        return;
    });



}