const counters = document.querySelectorAll(".hn-box h1 span");
const counterSection = document.querySelector(".hn-boxover");

let activated = false;

window.addEventListener("scroll", () => {

    const sectionTop = counterSection.getBoundingClientRect().top;

    if (sectionTop <= window.innerHeight - 4 && !activated) {

        activated = true;

        counters.forEach(counter => {

            const target = parseFloat(counter.dataset.count);
            let current = 0;

            const increment = target / 100;

            const updateCounter = () => {

                current += increment;

                if (current < target) {
                    counter.textContent =
                        target % 1 !== 0
                            ? current.toFixed(1)
                            : Math.floor(current);

                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        });
    }
});

///video playing
const video = document.querySelector("#myvideo");
const button = document.querySelector("#v-playbt");
const p5content=document.querySelector("#p5-content")
button.addEventListener("click",()=>
{
    video.play();
    video.style.filter="blur(0)";
    button.style.display="none";
    p5content.style.display="none";
})
