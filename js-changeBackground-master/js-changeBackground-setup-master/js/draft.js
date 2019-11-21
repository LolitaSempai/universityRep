(function() {
    const colors = ['red', 'green', 'blue'];
    const body = document.body;
    const btn = document.getElementById('btn');

    btn.addEventListener('click', function() {
        let random = Math.floor(Math.random() * colors.length);

        setInterval(function() {
            body.style.backgroundColor = colors[random];
        }, 20);
    });
    

    
})();


