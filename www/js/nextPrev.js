var imageHistory = (function () {
    'use strict';
    var prevButton = document.getElementById('prev-button'),
        nextButton = document.getElementById('next-button'),
        image = document.getElementById('camImage'),
        images = [],
        currentImage = 0;

    function disable(button) {
        button.style.pointerEvents = "none";
        button.style.color = "#777";
    }

    function enable(button) {
        button.style.pointerEvents = "auto";
        button.style.color = "floralwhite";
    }
    disable(prevButton);
    disable(nextButton);

    function prev() {
        if (currentImage > 0) {
            currentImage -= 1;
            style.changeImgSrc(images[currentImage]);
            enable(nextButton);
        }
        if (currentImage === 0) {
            disable(prevButton);
        }
    }

    function next() {
        if (currentImage < images.length - 1) {
            currentImage += 1;
            style.changeImgSrc(images[currentImage]);
            enable(prevButton);
        }
        if (currentImage === images.length - 1) {
            disable(nextButton);
        }
    }

    function imageExist(src) {
        if (images.indexOf(src) === -1) {
            return false;
        } else {
            return true;
        }
    }

    function addImage(src) {
        if (!imageExist(src)) {
            images.push(src);
            if (images.length > 1) {
                currentImage = images.indexOf(src);
                enable(prevButton);
                disable(nextButton);
            }
        } else {
            currentImage = images.indexOf(src);
            if (currentImage > 0) {
                enable(nextButton);
            }
            if (currentImage === 0) {
                disable(prevButton);
                enable(nextButton);
            }
            if (currentImage < images.length - 1) {
                enable(prevButton);
            }
            if (currentImage === images.length - 1) {
                disable(nextButton);
                enable(prevButton);
            }
            image.src = images[currentImage];
        }
    }

    prevButton.onclick = prev;
    nextButton.onclick = next;
    addImage(image.src);
    return {
        addImage: addImage
    };
}());