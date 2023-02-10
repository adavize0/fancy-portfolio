import { gsap } from 'gsap';
import { CustomEase } from "gsap/CustomEase";

const intro_TL = gsap.timeline({
    delay: 3
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
intro_TL.from(displayBox, {scale: 4, duration: 2.4, ease: "expo.out"})
intro_TL.from(headingLines[0], { x: '100%', duration: 1.75, ease: introEase}, "<25%")
intro_TL.from(headingLines[1], { x: '-100%', duration: 1.75, ease: introEase }, "<")
intro_TL.from(subHeading, { autoAlpha: 0, duration: 0.9 }, '-=0.4')
intro_TL.from(chatCTA, {x: "100%", duration: 1.25, ease: introEase}, 1.25)
intro_TL.from(headerLogo, {x: "-100%", duration: 1.25, ease: introEase}, 1.25)
intro_TL.from(creditsArea, {x: "-100%", duration: 1.25, ease: introEase}, 1.25)
intro_TL.set('.root__overflow-ctrl', {overflow: 'visible'})