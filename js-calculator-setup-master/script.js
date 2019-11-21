(function() {
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.btn');
    const equalBtn = document.querySelector('.btn-equal');
    const clearBtn = document.querySelector('.btn-clear')
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            let number = btn.getAttribute('data-num');
            screen.value += number;
            
        });
    });

    equalBtn.addEventListener('click', function() {
        if(screen.value === '') {
            screen.value = 'enter something';
        } else {
            let result = eval(screen.value);
            screen.value = result;
        }

        setTimeout(function() {
            screen.value = '';
        }, 1000);
    });

    clearBtn.addEventListener('click', function() {
        screen.value = '';
    });
})();