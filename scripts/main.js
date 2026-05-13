document.onLoaded;

document.addEventListener("DOMContentLoaded", (event) => {
  // duplicate the marquee content to create a seamless scrolling effect
  const marquee = document.querySelector(".marquee");
  marquee.innerHTML += marquee.innerHTML;

  // copy it to the footer
  const footer = document.querySelector("footer");
  const marqueeContainer = document.querySelector(".marquee__container");
  footer.insertAdjacentElement("afterbegin", marqueeContainer.cloneNode(true));
});

function scrollToSection(section) {
  const element = document.getElementById(section);
  element.scrollIntoView({ behavior: "smooth" });
}
