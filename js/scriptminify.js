"use strict";var form=document.querySelector(".modal-search-form"),button=document.querySelector(".search-button"),arrivalDate=document.querySelector("[name=check-in-date]"),departureDate=document.querySelector("[name=check-out-date]"),adults=document.querySelector("[name=adults]"),kids=document.querySelector("[name=kids]");form.classList.add("modal-hide"),button.addEventListener("click",function(a){a.preventDefault(),form.classList.add("modal-hide"),arrivalDate.focus(),form.classList.toggle("active"),form.classList.remove("error")}),form.addEventListener("submit",function(a){a.preventDefault(),arrivalDate.value&&departureDate.value&&adults.value&&kids.value||form.classList.add("error")});