document.addEventListener("DOMContentLoaded", function(){ //ensure that script is running only after html and css
    fetch("json/carousel.json") //getting array from json file
    .then(response => response.json())
    .then(data => { //assign the parsed json array to data variable
        let currentIndex = 0; //tracking the current image index

        const carouselContainer = document.getElementById('carousel'); //get element with id 'carousel-container'
        const pipsContainer = document.getElementById('pips-container'); //get element with id 'pips-container'
        const nextBtn = document.getElementById('next-btn'); //get element with id 'next-btn'
        const prevBtn = document.getElementById('prev-btn'); //get element with id 'prev-btn'

        function updateCarousel(){
            carouselContainer.innerHTML = ''; 
            pipsContainer.innerHTML = '';

            const carouselImage = document.createElement('img') //create element img to add photos
            carouselImage.src = data[currentIndex].src; //add src of the photo
            carouselImage.alt = data[currentIndex].alt; //add alt to the photo
            carouselImage.classList.add('carousel-img'); //add img element to 'carousel-img' class

            carouselContainer.appendChild(carouselImage); //add carouselImage as a child to carouselContainer

            data.forEach((_, index) => {
                const pip = document.createElement('div'); //add div element for pips
                pip.classList.add('pip'); //add them to 'pip' class                
                pip.dataset.index = index;

                if (index === currentIndex) pip.classList.add('active') //add element to class 'active' if index and currentindex are equal
                pipsContainer.appendChild(pip) //add pip as a child to pipsContainer

                pip.addEventListener('click', function(){ //function for pip clicking
                    currentIndex = index; 
                    updateCarousel(); //calling updateCarousel function
                });
            });
        }

        function nextImage(){ //function for next button
            currentIndex = (currentIndex + 1) % data.length;
            updateCarousel();
        }

        function prevImage() { //function for previous button
            currentIndex = (currentIndex - 1 + data.length) % data.length;
            updateCarousel();
        }

        nextBtn.addEventListener('click', nextImage); //action when button is clicked
        prevBtn.addEventListener('click', prevImage); //action when button is clicked

        let autoPlayInterval = setInterval(nextImage, 3000); //autochanging to next image after 3s

        updateCarousel();
    })
    .catch(error => console.error('Error loading images:', error));
});