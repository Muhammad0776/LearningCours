"use strict";

window.addEventListener("DOMContentLoaded", function () {
  var tabs = document.querySelectorAll("[data-tab-target]"),
      tabContents = document.querySelectorAll("[data-tab-content]"),
      modalBtn = document.querySelectorAll("#modal-btn"),
      modalBg = document.querySelector(".modal-bg"),
      modalClose = document.querySelector(".modal-close"); // Tabs

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = document.querySelector(tab.dataset.tabTarget);
      tabContents.forEach(function (tabContent) {
        tabContent.classList.remove("active");
      });
      tabs.forEach(function (tab) {
        tab.classList.remove("active");
      });
      tab.classList.add("active");
      target.classList.add("active");
    });
  }); // Modal

  modalBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      modalBg.classList.add("bg-active");
    });
  });
  modalClose.addEventListener("click", function () {
    modalBg.classList.remove("bg-active");
  });
});