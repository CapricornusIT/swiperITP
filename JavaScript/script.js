// class Parallax{
//     constructor(obj){
//         this.parallax = document.querySelector(obj.parallax);
//         window.addEventListener("scroll", () => this.moveElements());
//     }
//     moveElements(){
//         this.parallax.style.objectPosition = `0 ${scrollY / 10}%`;
//     }
// }

// const parallax = new Parallax('.parallax_animation')

// Parallax
new Swiper('.parallax_content', {
    parallax: true,
    speed: 1000,
    keyboard:{
        enable: true,
        onlyInViewport: true
    }
})

// Coverflow
new Swiper('.slides_content', {
    effect: 'coverflow',
    grubCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        depth: 100,
        slideShadows: true,
    },

    grabCursor: true,
    slideToClickedSlide: true,

    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    keyboard:{
        enable: true,
        onlyInViewport: true
    },

    mousewheel:{
        sensitivity: 1,
    },
    // breakpoints: {
    //     320: {
    //         effect: 'cards',
    //         cardsEffect:{
    //             perSlideRotate: 10,
    //             slideShadows: true
    //         }
    //     }
    // }
})  

// Cube
new Swiper('.cube_content', {
    effect: 'cube',
    loop: true,
    grubCursor: true,
    cubeEffect: {
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
        slideShadows: true
    },
    keyboard:{
        enable: true,
        onlyInViewport: true
    },
    grabCursor: true,
    mousewheel:{
        sensitivity: 1,
    },
    autoplay:{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    }
})