//GALLERRY
function gallery() {
	let imageBox = document.querySelectorAll('.img-box'),
		bigImg = document.querySelectorAll('.big-img'),
		overlayDiv = document.createElement('div'),
    	image = document.createElement('img');

    overlay.appendChild(overlayDiv);
    overlayDiv.appendChild(image);
    overlayDiv.className = 'box';
    image.className = 'image-box';

    bigImg.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            overlay.style.display = 'block';
            overlayDiv.style.display = 'block';
			overlayDiv.classList.add('animated');
			overlayDiv.classList.add('zoomIn');
            image.style.display = 'block';
            image.src = this.href;
            document.body.style.overflow = 'hidden';   
        });
    });

    overlay.addEventListener('click', function(event){
        if(event.target.className != 'image-box' || event.target.className != 'box') {
            this.style.display = 'none';
            overlayDiv.style.display = 'none';
            //image.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}
export {gallery};