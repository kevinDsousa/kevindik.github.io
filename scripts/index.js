function selecteCarouselItem(selectedButtonElement) {
    const carousel = document.querySelector('carousel-slide');
    let idx = 0;
    if(idx > carousel) {
        idx = 0;
    }
    const transform = carrousel.style.transform;
    
    transform = `translateX(${-idx * 500}px)`;
}

setInterval(selecteCarouselItem, 1800);