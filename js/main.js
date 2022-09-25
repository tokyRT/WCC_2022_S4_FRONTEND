(function () {
  // overlay loader
  var overlay = document.querySelector("body>.overlay");

  window.addEventListener("load", function () {
    overlay.classList.add("loaded");
  });

  const toggleBtn = document.querySelector("nav .menu-icon");
  const nav = document.querySelector("nav");
  toggleBtn.addEventListener("click", function () {
    nav.classList.add("show");
    document.body.style.overflowY = "hidden";
    console.log("dsdsdsd");
  });

  const closeNavBtn = document.querySelector("nav .close-icon");
  closeNavBtn.addEventListener("click", function () {
    nav.classList.remove("show");
    document.body.style.overflowY = "scroll";
  });


  let mouseX, mouseY;
  const floatings = document.querySelectorAll(".floating-element");
  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // console.log(mouseX, mouseY);
    for (let i = 0; i < floatings.length; i++) {
      const el = floatings[i];
      const elTop = el.getBoundingClientRect().top;
      const elLeft = el.getBoundingClientRect().left;
      // let factorX = mouseX / 230;
      // let factorY = mouseY / 210;
      let factorX = mouseX / 100;
      let factorY = mouseY / 40;
      el.style.transform = `translate(${Math.pow(-1, i) * factorX}px, ${
        Math.pow(-1, i) * factorY
      }px)`;
    }
    // console.log(floatings[0].getBoundingClientRect().left);
  });
})();
