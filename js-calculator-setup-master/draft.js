(function() {
    const screen = document.querySelector('.screen');
    const buttons = [...document.querySelectorAll('.btn')];
    const equalBtn = document.querySelector('.btn-equal');
    const clearBtn = document.querySelector('.btn-clear');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            let number = button.getAttribute('data-num');
            screen.value += number;
        });
    });


    equalBtn.addEventListener('click', function() {
        if(screen.value === '') {
            screen.value = 'enter something';
        } else {
            let value = eval(screen.value);
            screen.value = value;
        }
    });

    clearBtn.addEventListener('click', function() {
        screen.value = '';
    });
})();   