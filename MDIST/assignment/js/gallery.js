document.addEventListener('DOMContentLoaded', function() {
    fetch('json/gallery.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('gallery');
            const fullViewContainer = document.createElement('div');
            fullViewContainer.classList.add('full-view-container')
            document.body.appendChild(fullViewContainer);

            const fullViewImage = document.createElement('img');
            fullViewImage.classList.add('full-view-image')
            fullViewContainer.appendChild(fullViewImage);

            fullViewContainer.addEventListener('click', function() {
                fullViewContainer.style.display = 'none';
            });

            data.forEach(item => {
                const galleryItem = document.createElement('div');
                galleryItem.classList.add('gallery-cont');
                const galleryPhoto = document.createElement('div');
                galleryPhoto.classList.add('gallery-photo');
                const photo = document.createElement('img');
                photo.src = item.src;
                photo.alt = item.alt;
                const description = document.createElement('div');
                description.classList.add('description');
                description.textContent = item.description;
                galleryPhoto.appendChild(photo);
                galleryItem.appendChild(galleryPhoto);
                galleryItem.appendChild(description);
                container.appendChild(galleryItem);

                photo.addEventListener('click', function() {
                    fullViewImage.src = item.src;
                    fullViewContainer.style.display = 'flex';
                });
            });
        });
});
