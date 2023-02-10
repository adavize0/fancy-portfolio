import { gsap } from 'gsap';
import { CustomEase } from "gsap/CustomEase";

const intro_TL = gsap.timeline({
    delay: 1
});
const introEase = CustomEase.create("custom", "M0,0 C0.75,0 0.25,1 1,1");

const displayBox= document.getElementById("display-wrp");
const headingLines = document.getElementById("intro-heading").querySelectorAll('.line')
const subHeading = document.getElementById("intro-sub")
const chatCTA = document.getElementById("chat-cta")
const creditsArea = document.getElementById("credit-area")
const headerLogo = document.getElementById("header-logo")
// slow(0.1, 0.4, false)
intro_TL.addLabel('start')
intro_TL.from(displayBox, {scale: 5.2, duration: 1.35, ease: introEase})
intro_TL.from(headingLines[0], { x: '100%', duration: 1.75, ease: introEase}, "<45%")
intro_TL.from(headingLines[1], { x: '-100%', duration: 1.75, ease: introEase }, "<")
intro_TL.from(subHeading, { autoAlpha: 0, duration: 0.8 }, '-=0.5')
intro_TL.from(chatCTA, {x: "100%", duration: 1.25, ease: introEase}, 1.1)
intro_TL.from(headerLogo, {x: "-100%", duration: 1.25, ease: introEase}, 1.1)
intro_TL.from(creditsArea, {x: "-100%", duration: 1.25, ease: introEase}, 1.1)
intro_TL.set('.root__overflow-ctrl', {overflow: 'visible'})