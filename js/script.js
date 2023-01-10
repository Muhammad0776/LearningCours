"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("[data-tab-target]"),
    tabContents = document.querySelectorAll("[data-tab-content]"),
    modalBtn = document.querySelectorAll("#modal-btn"),
    modalBg = document.querySelector(".modal-bg"),
    modalClose = document.querySelector(".modal-close");

  // Tabs
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("active");
      });
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");
      target.classList.add("active");
    });
  });

  // Modal
  modalBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalBg.classList.add("bg-active");
    });
  });

  modalClose.addEventListener("click", () => {
    modalBg.classList.remove("bg-active");
  });
});
