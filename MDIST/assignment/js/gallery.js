document.addEventListener('DOMContentLoaded', function() { //ensure that script is running only after html and css
    fetch('json/gallery.json') //getting array from json file
    .then(response => response.json())
    .then(data => { //assign the parsed json array to data variable
        const container = document.querySelector('.gallery'); //assign element with 'gallery' class to a variab;e 'container'
        
        data.forEach(item => { //getting each element from data variable (array)
            const galleryItem = document.createElement('div'); //creating div element and assign it to a galleryItem variable
            galleryItem.classList.add('gallery-image'); //add this element to 'gallery-image' class

            const photoURL = document.createElement('a'); //creating 'a' element
            photoURL.href = item.src; //assigning href attribute to the src attribute of the photo
            photoURL.target = '_blank'; //open image in a new tab
 
            const photo = document.createElement('img'); //creating an img element
            photo.src = item.src; //adding src and alt attributes to it
            photo.alt = item.alt;

            const description = document.createElement('div'); //add new element div
            description.classList.add('description'); //assign it to 'description' class
            description.textContent = item.description; //create a text inside this div elements

            photoURL.appendChild(photo); //add photo to photoURL
            galleryItem.appendChild(photoURL); //add photoURL to galleryItem
            galleryItem.appendChild(description); //add description element to galleryItem
            container.appendChild(galleryItem); //add galleryItem variable's content to container as a child
        });
    })

});