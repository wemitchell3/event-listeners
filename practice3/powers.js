let flightSection = document.querySelector("#flight");
let mindreadingSection = document.querySelector("#mindreading");
let xraySection = document.querySelector("#xray");
let allSections = document.querySelectorAll(".power");

document.querySelector("#activate-flight").addEventListener("click",
function flightHandlerFunction() {
    flightSection.classList.add("enabled")
    flightSection.classList.remove("disabled")
    console.log(flight.classList)
    })


document.querySelector("#activate-mindreading").addEventListener("click",
function mindreadingHandlerFunction() {
    mindreadingSection.classList.add("enabled");
    mindreadingSection.classList.remove("disabled");
})

document.querySelector("#activate-xray").addEventListener("click",
function exrayHandlerFunction() {
    xraySection.classList.add("enabled");
    xraySection.classList.remove("disabled");
})

document.querySelector("#activate-all").addEventListener("click", 
function enableAll(){   
    allSections.forEach((section)=>{
      section.classList.remove("disabled")
      section.classList.add("enabled")
    })
  })

document.querySelector("#deactivate-all").addEventListener("click",
function enableAll(){
    allSections.forEach((section)=>{
    section.classList.add("disabled")
    section.classList.remove("enabled")
    })
})
