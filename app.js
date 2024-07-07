"use strict";
const acc=document.querySelectorAll(".acc")
 acc.forEach((accE)=>{
    const btn=accE.querySelector(".btn")
    const ans=accE.querySelector(".answer")
     btn.addEventListener("click",()=>{
        
        ans.classList.toggle("hidden")
        const icon = btn.querySelector('i');
                icon.classList.toggle('fa-arrow-down');
                icon.classList.toggle('fa-arrow-up');
     })


 })