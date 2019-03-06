let fieldEl = document.getElementById("message");


fieldEl.addEventListener("keyup",  ()=>{
    // console.log(event.target.value)
    let box1 = document.getElementById("box1")
    let box2 = document.getElementById("box2")
    box1.textContent = fieldEl.value;
    box2.textContent = fieldEl.value;
})

