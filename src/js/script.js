const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    prevEl: ".swiper-button-left",
    nextEl: ".swiper-button-right",
  },
});

const tabs = document.querySelectorAll(".catalogue__btn");
const tabsContent = document.querySelectorAll(".swiper");

function hideTabs() {
  tabs.forEach((tab, index) => {
    tab.classList.remove("catalogue__btn--active");
  });
}
hideTabs();

function hideTabsContent() {
  tabsContent.forEach((slider, index) => {
    slider.classList.remove("slider--active");
  });
}
hideTabsContent();

tabsContent[2].classList.add("slider--active");

tabs[2].classList.add("catalogue__btn--active");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    hideTabs();
    hideTabsContent();
    tab.classList.toggle("catalogue__btn--active");
    tabsContent[index].classList.toggle("slider--active");
  });
});
