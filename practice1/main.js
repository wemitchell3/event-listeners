let input = document.getElementById("message");


input.addEventListener("keyup",  ()=>{
    // console.log(event.target.value)
    let box1 = document.getElementById("box1")
    let box2 = document.getElementById("box2")
    box1.textContent = input.value;
    box2.textContent = input.value;
})

