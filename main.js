






/* Timeline and Animation Handel For start */

const repeting = { opacity: 0, y: -100, ease: "power1.out" }
let tlstart = gsap.timeline({ defaults: repeting });
let mapload = gsap.timeline({ defaults: {opacity: 0}});

let buttonHoverAnimation = gsap.timeline();
let TooltipHoverAnimation = gsap.timeline();

tlstart
    .from("#wel", {duration: 0.5})
    .from("#to", {duration: 0.6 })
    .from("#plane", {duration: 0.7 })
    .from("#buttoncover", { y: 0, scale: 0})
    .eventCallback("onComplete", addCoverButtonEventandAnimation)
    .pause();

mapload
    .to("#cover", {duration: 0.5, display: "none" })
    .from('.city-button', { yPercent: -100, duration: 1.5, ease: "power3.out" })
    .from('.animatedMapElement', { yPercent: -100, duration: 1, ease: "elastic.out(2,0.75)"}, '<')
    .eventCallback("onComplete", addAnimationOnHoverToTooltipsAndCitybuttons)
    .pause();

buttonHoverAnimation
    .to('#buttoncover', { scale: 0.75, duration: 0.2, cursor: "pointer", ease: "power2.in" })
    .pause();



function addCoverButtonEventandAnimation() {

    const buttoncover = document.getElementById("buttoncover");

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

function addAnimationOnHoverToTooltipsAndCitybuttons() {

    const tooltopis = document.getElementsByClassName("tooltip");
    const cityies = document.getElementsByClassName("city-button")

    for (tooltip of tooltopis){
        let id = tooltip.id;
        tooltip.addEventListener("mouseover", () => {
            gsap.to(`#${id}`, { duration: 0.5, y: -10 })
        })

        tooltip.addEventListener("mouseleave", () => {
            gsap.to(`#${id}`, { duration: 0.5, y: 0 })
        })
    }

    for (city of cityies) {
        let id = city.id;
        city.addEventListener("mouseover", () => {
            gsap.to(`#${id} .city-icon`, { duration: 0.5, y: -10, fill: "#9c1513"})
        })

        city.addEventListener("mouseleave", () => {
            gsap.to(`#${id} .city-icon`, { duration: 0.5, y: 0, color: "white", fill: "#373737" })
        })
    }
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

    buttonElement = document.getElementById(button);
    PageElement = document.getElementById(page[0]);
    
    page[1]
        .to(`#${page[0]}`, { display: 'flex' })
        .from(`#${page[0]}`, { opacity: 0, duration: .5 }, '<')
        .from(`#${page[0]} .discription`, { duration: .8, opacity: 0, xPercent: 100 }, '<')
        .from(`#${page[0]} .discription .stagger`, { duration: .4, opacity: 0, xPercent: 100, stagger: .1 }, '<.4')
        .pause();

    buttonElement.addEventListener("click", () => {
        page[1].play()
    });

    PageElement.addEventListener("click", (elementClicked) => {
        if (elementClicked.srcElement.classList != "overlay"){
            return;
        }
        page[1].reverse()
    });
};



