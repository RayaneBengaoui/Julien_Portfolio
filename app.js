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
