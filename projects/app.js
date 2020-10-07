function initComparisons() {
  var x, i;
  /* Find all elements with an "overlay" class: */
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    /* Once for each "overlay" element:
      pass the "overlay" element as a parameter when executing the compareImages function: */
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider,
      img,
      clicked = 0,
      w,
      h;
    /* Get the width and height of the img element */
    w = img.offsetWidth;
    h = img.offsetHeight;
    /* Set the width of the img element to 50%: */
    img.style.width = w / 2 + "px";
    /* Create slider: */
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /* Insert slider */
    img.parentElement.insertBefore(slider, img);
    /* Position the slider in the middle: */
    slider.style.top = h / 2 - slider.offsetHeight / 2 + "px";
    slider.style.left = w / 2 - slider.offsetWidth / 2 + "px";
    /* Execute a function when the mouse button is pressed: */
    slider.addEventListener("mousedown", slideReady);
    /* And another function when the mouse button is released: */
    window.addEventListener("mouseup", slideFinish);
    /* Or touched (for touch screens: */
    slider.addEventListener("touchstart", slideReady);
    /* And released (for touch screens: */
    window.addEventListener("touchend", slideFinish);
    function slideReady(e) {
      /* Prevent any other actions that may occur when moving over the image: */
      e.preventDefault();
      /* The slider is now clicked and ready to move: */
      clicked = 1;
      /* Execute a function when the slider is moved: */
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /* The slider is no longer clicked: */
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /* If the slider is no longer clicked, exit this function: */
      if (clicked == 0) return false;
      /* Get the cursor's x position: */
      pos = getCursorPos(e);
      /* Prevent the slider from being positioned outside the image: */
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /* Execute a function that will resize the overlay image according to the cursor: */
      slide(pos);
    }
    function getCursorPos(e) {
      var a,
        x = 0;
      e = e || window.event;
      /* Get the x positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x coordinate, relative to the image: */
      x = e.pageX - a.left;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /* Resize the image: */
      img.style.width = x + "px";
      /* Position the slider: */
      slider.style.left = img.offsetWidth - slider.offsetWidth / 2 + "px";
    }
  }
}

const tl = gsap.timeline({
  scrollTrigger: { trigger: ".project" },
  defaults: { ease: "power1.out" },
});

tl.from("#info_1", { x: -300, opacity: 0, duration: 1 });
tl.from("#demo_1", { y: 300, opacity: 0, duration: 1 }, "-=1");
tl.from("#h2_1", { x: -300, opacity: 0, duration: 0.5 });
tl.from("#h3_1", { opacity: 0, duration: 0.5 }, "-=0.3");
tl.from("#h4_1", { opacity: 0, duration: 0.5 }, "-=0.3");
tl.from(".compare img", { y: 300, opacity: 0, duration: 1 });
tl.from("#p_1", { opacity: 0, duration: 1 }), "-=0.5";
tl.from(".img-comp-container", { x: 300, opacity: 0, duration: 1 }, "-=1");
tl.to("#h2_1", { color: "#D8BFD8", duration: 0.5 });
tl.to("#h4_1", { color: "#D8BFD8", duration: 0.5 }, "-=0.5");
tl.to("#sticky-nav", { background: "#D8BFD8", duration: 0.5 }, "-=0.5");

const tl2 = gsap.timeline({
  scrollTrigger: { trigger: "#project_2" },
  defaults: { ease: "power1.out" },
});

tl2.from("#info_2", { x: 300, opacity: 0, duration: 1.5 });
tl2.from("#demo_2", { y: 300, opacity: 0, duration: 1.5 }, "-=1");
tl2.from("#h2_2", { x: 300, opacity: 0, duration: 0.5 });
tl2.from("#h3_2", { opacity: 0, duration: 0.5 }, "-=0.3");
tl2.from("#h4_2", { opacity: 0, duration: 0.5 }, "-=0.3");
tl2.from(".exemple", { y: 300, opacity: 0, duration: 1 });
tl2.from(".tracing_gif", { x: -300, opacity: 0, duration: 1.5 });
tl2.to("#h2_2", { color: "#9ca6d9", duration: 0.5 }, "-=0.5");
tl2.to("#sticky-nav", { background: "#9ca6d9", duration: 0.5 }, "-=0.5");

initComparisons();
