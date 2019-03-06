// let outputEl = document.getElementById("output-target")
// console.log(outputEl)

// function handleClick(taco) {
//     console.log("Output target was clicked.", taco)
// }

// outputEl.addEventListener("mouseover", handleClick)

// // OR

// outputEl.addEventListener("click", () => handleClick("Billy"))

// // OR

// outputEl.addEventListener("mouseover", handleClick)

// let articleEl = document.getElementsByClassName("article-section")

// console.log(articleEl)

// function handleSectionClick (event) {
//     console.log(event)
// }

// for (let i = 0; i < articleEl.length; i++) {
//     articleEl.item(i).addEventListener("click", handleSectionClick)
// }

// let fieldEl = document.getElementById("keypress-input")

// fieldEl.addEventListener("keyup", function (event) {
//     if (event.keyCode === 13) {
//         console.log("Enter Key Pressed")
//     } else {
//         console.log("Other key pressed")
//     }
//     console.log(event.target.value)
//     outputEl.innerHTML = event.target.value
// })

let guineaPig = document.getElementById("guinea-pig")

function toggleClass (newClass) {
  guineaPig.classList.toggle(newClass)
  console.log("guineaPig.classList", guineaPig.classList)
}

document.getElementById("add-color").addEventListener("click", function() {
    toggleClass("blue")
})

document.getElementById("make-large").addEventListener("click", function() {
    toggleClass("large")
})

document.getElementById("add-border").addEventListener("click", function() {
    toggleClass("bordered")
})

document.getElementById("add-rounding").addEventListener("click", function() {
    toggleClass("rounded")
})

let associatedIdClass = {
    "add-color": "blue",
    "make-large": "large",
    "add-border": "bordered",
    "add-rounding": "rounded"
}

let yellowButton = document.createElement("button")
let buttonId = "color-yellow"
yellowButton.textContent = "Add sunshine"
yellowButton.id = buttonId

document.querySelector("#effect-buttons").appendChild(yellowButton)
associatedIdClass[buttonId] = "yellowfy"

for (let elementId in associatedIdClass) {
    document.getElementById(elementId).addEventListener("click", function() {
    })
    toggleClass(associatedIdClass[elementId]);
}

   // console.log(elementId)
    // console.log(associatedIdClass[elementId])

// let tortilla = {a:1. b:2, c:3};

// for (let taco in tortilla) {
//     console.log(taco)
//     console.log(tortilla[taco])
// }
