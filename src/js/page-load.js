import { gsap } from 'gsap';
import intro_timeline from './intro-animation.js'


let pageLoadComplete = false
const root = document.getElementById("root");
const rootInner = document.querySelector(".root__inner");
const progressBar = document.getElementById("progress-indicator");
const progressFilter = document.querySelector('.loader-filter');


progressFilter.style.transitionDuration = '2.5s'

window.addEventListener('load', () => {
    pageLoadComplete = true
})

const updateProgress = (percentage) => {
    progressFilter.style.backdropFilter = `grayscale(${100 - percentage}%)`;
    progressBar.style.width = percentage + "%";
}

const innitAnimation = () => {
    updateProgress(100)
    progressBar.parentElement.style.transitionDuration = '1.5s';
    progressBar.parentElement.style.transitionDelay = '1.5s';
    progressBar.parentElement.classList.add('finished')
    // gsap.to(progressBar.parentElement, {
    //     top: 48,
    //     duration: 1.5,
    //     delay: 1.5
    // })
    setTimeout(()=>{
        root.classList.remove('root--loading');
        rootInner.setAttribute('aria-hidden', 'false')
        intro_timeline.play()
    }, 2000)
}

updateProgress(20)


setTimeout(()=>{
    if(pageLoadComplete){
        innitAnimation();
        return;
    }     

    updateProgress(60);
    setTimeout(()=> {
        innitAnimation();
    }, 3000)
}, 2000)

