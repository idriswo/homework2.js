
let box = document.querySelector(".box")
box.classList.add(".box")

let inputbtn = document.querySelector("#inputbtn")

let btn = document.querySelector(".btn")

// inputbtn.append(btn)

btn.onclick = (()=>{
    let el = +inputbtn.value
    // console.log(el);
    
    if(isNaN(el)){
        alert("Пожалуйста, введите число!")
    }
    else{
        let a= el*el
        alert(a)
    }
})