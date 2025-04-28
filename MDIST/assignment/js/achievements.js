document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('achievements');
    const fullViewContainer = document.createElement('div');
    fullViewContainer.classList.add('full-view-container')
    document.body.appendChild(fullViewContainer);

    const fullViewImage = document.createElement('img');
    fullViewImage.classList.add('full-view-image')
    fullViewContainer.appendChild(fullViewImage);

    fullViewContainer.addEventListener('click', function() {
        fullViewContainer.style.display = 'none';
    });

    document.querySelectorAll('.achievement img').forEach(img => {
        img.addEventListener('click', function() {
            fullViewImage.src = img.src;
            fullViewContainer.style.display = 'flex';
        });
    });
});
