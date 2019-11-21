(function() {
    document.querySelector('#message-form')
        .addEventListener('submit', function(e) {
            e.preventDefault();

            const message = document.querySelector('#message');
            let value = message.value;

            if(value === '') {
                const feedback = document.querySelector('.feedback');
                feedback.classList.add('show');

                setTimeout(function() {
                    feedback.classList.remove('show');
                }, 2000); 
            } else {
                document.querySelector('.message-content').textContent = value;
                message.value = '';
            }
        });
}) ();