(function() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            let value = e.target.dataset.filter;
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
    const search = document.getElementById('search-item')
    
    search.addEventListener('keyup', function() {
        let value = search.value.toLowerCase().trim();
        
        const items = document.querySelectorAll('.store-item');

        items.forEach(item => {
            let type = item.dataset.item;
            let length = value.length;

            let match = type.slice(0, length);

            if(value === match) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }

        });

    });  
        
})();   


(function() {
    let counter = 0;
    let imageList = [];

    const container = document.querySelector('.lightbox-container');
    const item = document.querySelector('.lightbox-item');
    const closeIcon = document.querySelector('.lightbox-close');
    const leftBtn = document.querySelector('.btnLeft');
    const rightBtn = document.querySelector('.btnRight');
    const images = document.querySelectorAll('.store-img');

    images.forEach(image => {
        imageList.push(image.src);
        console.log(imageList);

    });

    images.forEach(img => {
        img.addEventListener('click', function(e) {
            container.classList.add('show');
            let src = e.target.src;
            console.log(src);
            counter = imageList.indexOf(src);
            
            item.style.backgroundImage = `url(${src})`;
        });
    });
    


    rightBtn.addEventListener('click', function() {
        counter++;

        if(counter > imageList.length -1) {
            counter = 0;
        }

        item.style.backgroundImage = `url(${imageList[counter]})`;
    });

    leftBtn.addEventListener('click', function() {
        counter --;

        if(counter < 0) {
            counter = imageList.length -1;
        }

        item.style.backgroundImage = `url(${imageList[counter]})`;
    });

    closeIcon.addEventListener('click', function() {
        container.classList.remove('show');
    });
})();
