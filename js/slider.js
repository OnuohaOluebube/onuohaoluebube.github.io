const glide1 = document.getElementById("glide1");

if (glide1)
  new Glide(glide1, {
    type: "carousel",
    startAt: 0,
    perView: 3,
    hoverpause: true,
    gap: 30,
    // autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: "linear",
    breakpoints: {
      996: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();
