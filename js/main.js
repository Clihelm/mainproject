// СЛАЙДЕР №1

const slides = document.querySelectorAll('.slider-1-slide-1'),
      dots = document.querySelectorAll('.slider-circle-btn');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurentSlide = ind => {
    activeSlide(index);
    activeDot(index);
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurentSlide(index);
    })
})

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurentSlide(index);
    } else {
        index++;
        prepareCurentSlide(index);
    }
    
}

setInterval(nextSlide, 5000)

// СЛАЙДЕР №2

const prevTwo = document.getElementById('btn-prev'),
      nextTwo = document.getElementById('btn-next'),
      slidesTwo = document.querySelectorAll('.slider-2-main-conent'),
      dotsTwo = document.querySelectorAll('.slider-circle-btn-2');

let indexTwo = 0;

const activeSlideTwo = n => {
    for(slide of slidesTwo) {
        slide.classList.remove('active');
    }
    slidesTwo[n].classList.add('active');
}

const activeDotTwo = n => {
    for(dot of dotsTwo) {
        dot.classList.remove('active');
    }
    dotsTwo[n].classList.add('active');
}

const prepareCurentSlideTwo = ind => {
    activeSlideTwo(indexTwo);
    activeDotTwo(indexTwo);
}

const nextSlideTwo = () => {
    if(indexTwo == slidesTwo.length - 1) {
        indexTwo = 0;
        prepareCurentSlideTwo(indexTwo);
    } else {
        indexTwo++;
        prepareCurentSlideTwo(indexTwo);
    }
    
}

const prevSlideTwo = () => {
    if(indexTwo == 0) {
        indexTwo = slidesTwo.length - 1;
        activeSlideTwo(indexTwo);
        activeDotTwo(indexTwo);
    } else {
        indexTwo--;
        activeSlideTwo(indexTwo);
        activeDotTwo(indexTwo);
    }
}

dotsTwo.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        indexTwo = indexDot;
        prepareCurentSlideTwo(indexTwo);
    })
})

nextTwo.addEventListener('click', nextSlideTwo);
prevTwo.addEventListener('click', prevSlideTwo);

setInterval(nextSlideTwo, 5000)