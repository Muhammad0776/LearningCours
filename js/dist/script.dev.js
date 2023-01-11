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
      return modalBg.classList.add("bg-active");
    });
  });
  modalClose.addEventListener("click", function () {
    return modalBg.classList.remove("bg-active");
  });
}); // Sign In password input

var vaildPass = document.querySelector("#vaild-pass"),
    pass = document.querySelector("#pass"),
    showImg = document.querySelector("#showimg");

function formvalid() {
  var vaildpass = pass.value;

  if (vaildpass.length <= 8 || vaildpass.length >= 20) {
    vaildPass.innerHTML = "Minimum 8 characters";
    return false;
  } else {
    vaildPass.innerHTML = "";
    return true;
  }
}

function show() {
  var x = pass;

  if (x.type === "password") {
    x.type = "text";
    showImg.src = "https://static.thenounproject.com/png/777494-200.png";
  } else {
    x.type = "password";
    showImg.src = "https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png";
  }
}