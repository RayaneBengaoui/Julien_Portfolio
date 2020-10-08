// const cplus = document.querySelector("#cplus");
// const matlab = document.querySelector("#matlab");

const skillDivs = document.querySelectorAll(".skill");

const skillImgList = [cplus, matlab];

const cplusDetail = document.querySelector(".cplus-detail");
const tl = gsap.timeline({
  defaults: { ease: "power1.out" },
});

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro-animation", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".splash", { opacity: 0 }, { opacity: 1, duration: 1 });

const tl_skill = gsap.timeline({
  scrollTrigger: { trigger: ".skills-board" },
  defaults: { ease: "power1.out" },
});

tl_skill.from(".skills-first", { x: 300, opacity: 0, duration: 1.5 });
tl_skill.from(".skills-second", { x: -300, opacity: 0, duration: 1.5 }, "-=1");
tl_skill.from(".skills-third", { y: 300, opacity: 0, duration: 1 }, "-=2");

// cplus.addEventListener("click", () => {
//   if (cplusDetail.classList.contains("activation")) {
//     cplusDetail.classList.remove("activation");
//     cplusDetail.classList.add("desactivation");
//   } else {
//     cplusDetail.classList.remove("desactivation");
//     cplusDetail.classList.add("activation");
//   }
// });

function activateSkillImages() {
  skillDivs.forEach((div) => {
    let positionImage = 0;
    let positionText = 1;
    if (div.children[0] instanceof HTMLImageElement) {
      positionImage = 0;
      positionText = 1;
    } else {
      positionImage = 1;
      positionText = 0;
    }

    div.children[positionImage].addEventListener("click", () => {
      if (div.children[positionText].classList.contains("activation")) {
        div.children[positionText].classList.remove("activation");
        div.children[positionText].classList.add("desactivation");
      } else {
        div.children[positionText].classList.remove("desactivation");
        div.children[positionText].classList.add("activation");
      }
    });
  });
}

activateSkillImages();
