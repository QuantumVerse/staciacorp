window.addEventListener("load", () => {
  // innovating for you
  const heroSecTitle = document.getElementsByClassName("hero-sec-title")[0];

  const constructText = () => {
    gsap.to(".cmn_cml_txt", {
      text: { value: "Innovating For You" },
      duration: 0.5,
      ease: "in",
    });
  };

  const destructText = () => {
    gsap.to(".cmn_cml_txt", {
      text: { value: "" },
      duration: 0.5,
      ease: "out",
    });
  };

  ScrollTrigger.create({
    trigger: heroSecTitle,
    scrub: 1,
    onEnter: function () {
      constructText(heroSecTitle);
    },
    onEnterBack: function () {
      constructText(heroSecTitle);
    },
    onLeave: function () {
      destructText(heroSecTitle);
    },
  });
});
