





const cover = document.getElementById("cover");
const buttoncover = document.getElementById("buttoncover");

let tlstart = gsap.timeline();



function mergDict(dic1, dic2) {
    return Object.assign({}, dic1, dic2)
}

function OnLoad() {
    tlstart.play();
}


/* Timeline and Animation Handel */
const repeting = { opacity: 1, y: 0, ease: "power2.out" }

tlstart.to("#wel", mergDict(repeting, { duration: 0.5 }))
    .to("#to", mergDict(repeting, { duration: 0.75 }))
    .to("#plane", mergDict(repeting, { duration: 1 }))
    .to("#buttoncover", mergDict(repeting, {scale: 1,
        onComplete() {addCoverEventandAnimation();}}))
    .pause();

function addCoverEventandAnimation() {
    buttoncover.style.cursor = "pointer";
    buttoncover.style.transition = "0.5s";
    buttoncover.addEventListener("click", () => {
        buttoncover.style.cursor = "default";
        gsap.to("#cover", {
            opacity: 0, duration: 0.5,
            onComplete() { 
                cover.style.display = "none" 
                gsap.to('.animatedMapElement', { 
                    yPercent: 100, duration: 2,
                    opacity: 1, ease: "elastic.out(2,0.75)"})
            }
        })
    });
}

const ids = {
    "Orcius": "Orcius-page",
    "OnxyText": "Onxy-page",
    "KahnRa": "Khan-page",
    "UulaDaal": "Uula-page"
};

for (let [button, page] of Object.entries(ids)) {

    button = document.getElementById(button);
    page = document.getElementById(page);

    button.addEventListener("click", () => {
        page.style.display = "flex"
    });

    page.getElementsByClassName("shadow")[0].
        addEventListener("click", () => {
            page.style.display = "none"
        });
};