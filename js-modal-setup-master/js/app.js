(function() {
    let imageList = [];
    let counter = 0;
    const container = document.querySelector('.lightbox-container');
    const item = document.querySelector('.lightbox-item');
    const btnLeft = document.querySelector('.btnLeft');
    const btnRight = document.querySelector('.btnRight');
    const closeIcon = document.querySelector('.lightbox-close');
    const images = document.querySelectorAll('.store-img');
    
    images.forEach(img => {
        imageList.push(img.src);
    });

    images.forEach(image => {
        image.addEventListener('click', function(e) {
            container.classList.add('show');
            let src = e.target.src;
            counter = imageList.indexOf(src);
            item.style.backgroundImage = `url(${src})`;
        });
    });
    
    closeIcon.addEventListener('click', function(e) {
        container.classList.remove('show');
    });

    btnLeft.addEventListener('click', function() {
        counter--;
        if(counter < 0) {
            counter = imageList.length -1;
        }
        
        item.style.backgroundImage = `url(${imageList[counter]})`;
    }); 

    btnRight.addEventListener('click', function() {
        counter++;

        if(counter > imageList.length-1) {
            counter = 0;
        }

        item.style.backgroundImage = `url(${imageList[counter]})`;
    });

})();


(function() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const value = e.target.dataset.filter;
            const items = document.querySelectorAll('.store-item');
            
            items.forEach(item => {
                if(value === 'all') {
                    item.style.display = 'block';
                } else if(item.classList.contains(value)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
})();


(function() {
    const search = document.getElementById('search-item');

    search.addEventListener('keyup', function() {
        let value = search.value.toLowerCase().trim();
        const items = document.querySelectorAll('.store-item');

        items.forEach(item => {
            const type = item.dataset.item;
            const len = value.length;
            let match = type.slice(0, len);

            if(value === match) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
})();





(function() {
    const cartInfo = document.querySelector('#cart-info');
    const cart = document.querySelector('.cart');
    cartInfo.addEventListener('click', function() {

    });
})();