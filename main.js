





const cover = document.getElementById("cover");
const buttoncover = document.getElementById("buttoncover");



/* Timeline and Animation Handel */

const repeting = { opacity: 0, y: -100, ease: "power2.out" }
let tlstart = gsap.timeline({ defaults: repeting });


tlstart.from("#wel", {duration: 0.5})
    .from("#to", {duration: 0.75 })
    .from("#plane", {duration: 1 })
    .from("#buttoncover", {y: 0, scale: 0, onComplete() {addCoverEventandAnimation();}})
    .pause();

function addCoverEventandAnimation() {
    buttoncover.classList.add('buttonLoaded')
    buttoncover.addEventListener("click", () => {
        buttoncover.classList.remove('buttonLoaded')
        gsap.to("#cover", { opacity: 0, duration: 0.5, onComplete() { 
                cover.style.display = "none" 
                gsap.to('.animatedMapElement', { 
                    yPercent: 100, duration: 2,
                    opacity: 1, ease: "elastic.out(2,0.75)"})
            }
        })
    });
}

function OnLoad() {
    tlstart.play();
}

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
    
    pagetimeline = 
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



