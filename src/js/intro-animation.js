import { gsap } from 'gsap';
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase)

const displayBox= document.getElementById("display-wrp");
const headingLines = document.getElementById("intro-heading").querySelectorAll('.line')
const subHeading = document.getElementById("intro-sub")
const chatCTA = document.getElementById("chat-cta")
const creditsArea = document.getElementById("credit-area")
const headerLogo = document.getElementById("header-logo")
const languageSitch = document.getElementById("lang-switch-wrp");

const intro_TL = gsap.timeline({});
const introEase = CustomEase.create("custom", "M0,0 C0.75,0 0.25,1 1,1");

// slow(0.1, 0.4, false)
intro_TL.pause()
intro_TL.addLabel('start')
intro_TL.from(displayBox, {scale: 3.65, duration: 2, ease: introEase})
intro_TL.from(languageSitch, {autoAlpha: 0, duration: 0.02, ease: "none.none"}, 1.95)
intro_TL.set('.progress-bar', {transitionDelay: 0, transitionDuration: 0})
intro_TL.to('.progress-bar', { duration: 0.4, ease: "none.none", opacity: 0}, '-=2')

intro_TL.from(headingLines[0], { x: '100%', duration: 1.5, ease: introEase}, 1.15)
intro_TL.from(headingLines[1], { x: '-100%', duration: 1.5, ease: introEase }, "<")
intro_TL.from(subHeading, { autoAlpha: 0, duration: 0.9 }, '-=0.4')
intro_TL.from(chatCTA, {x: "100%", duration: 1, ease: introEase}, 1.85)
intro_TL.from(headerLogo, {x: "-100%", duration: 0.9, ease: introEase}, 1.85)
intro_TL.from(creditsArea, {x: "-100%", duration: 0.9, ease: introEase}, 1.85)
intro_TL.set('.root__overflow-ctrl', {overflow: 'visible'});
intro_TL.add(()=>{
    document.getElementById("loader-display").remove()
})


export default intro_TL;
