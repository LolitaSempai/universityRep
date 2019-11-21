(function() {
    const counterArea = document.querySelector('#counter');
    const buttons = document.querySelectorAll('.counterBtn');
    let counter = 0;

    buttons.forEach(button => {
        button.addEventListener('click', event => {
            let value = event.target;

            if(value.classList.contains('nextBtn')) {
                counter++;
            } else {
                counter--;
            }

            counterArea.textContent = counter;

            if(counter > 0) {
                counterArea.style.color = 'green';
            } else {
                counterArea.style.color = 'red';
            }
        });
    });

    
})();