






/* Timeline and Animation Handel For start */

const repeting = { opacity: 0, y: -100, ease: "power2.out" }
let tlstart = gsap.timeline({ defaults: repeting });
let mapload = gsap.timeline({ defaults: {opacity: 0}});
let buttonHoverAnimation = gsap.timeline();
tlstart
    .from("#wel", {duration: 0.5})
    .from("#to", {duration: 0.75 })
    .from("#plane", {duration: 1 })
    .from("#buttoncover", { y: 0, scale: 0, onComplete() {addCoverButtonEventandAnimation();}})
    .pause();

mapload
    .to("#cover", {duration: 0.5, display: "none" })
    .from('.animatedMapElement', {yPercent: -100, duration: 2, ease: "elastic.out(2,0.75)"})
    .pause();

buttonHoverAnimation
    .to('#buttoncover', { scale: 0.75, duration: 0.2, cursor: "pointer", ease: "power2.in" })
    .pause();

const buttoncover = document.getElementById("buttoncover");

function addCoverButtonEventandAnimation() {

    buttoncover.addEventListener("mouseover", () => {
        buttonHoverAnimation.play();
    })

    buttoncover.addEventListener("mouseleave", () => {
        buttonHoverAnimation.reverse();
    })

    buttoncover.addEventListener("click", () => {
        mapload.play();
    })
}

function OnLoad() {
    tlstart.play();
}

/* Timeline and Animation Handle for city buttons */

const ids = {
    "Orcius": ["Orcius-page", gsap.timeline()],
    "OnxyText": ["Onxy-page", gsap.timeline()],
    "KahnRa": ["Khan-page", gsap.timeline()],
    "UulaDaal": ["Uula-page", gsap.timeline()]
};

for (let [button, page] of Object.entries(ids)) {

    button = document.getElementById(button);
    PageElement = document.getElementById(page[0]);
    shadowElement = PageElement.getElementsByClassName("shadow")[0]
    
    page[1]
        .to(`#${page[0]} .shadow`, { opacity: 1, duration: 1, display: 'block'}, "displaycovercity")
        .to(`#${page[0]} .discription`, { opacity: 1, duration: 1, x: 0, display: 'block' }, "displaycovercity")
        .pause();

    button.addEventListener("click", () => {
        page[1].play()
    });

    shadowElement.addEventListener("click", () => {
        page[1].reverse()
    });
};



