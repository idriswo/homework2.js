
let users = [
    {
        id: 1,
        image: "./image1.png",
        company: "barcelona",
        name: "idris  Irgashev",
        job: "fotballler",
        status: true,
    },
    {
        id: 2,
        image: "./image1.png",
        company: "barcelona",
        name: "idris  Irgashev",
        job: "fotballer",
        status: true,
    },
    {
        id: 3,
        image: "./image1.png",
        company: "barcelona",
        name: "idris  Irgashev",
        job: "fotba ller",
        status: false,
    }
]


let box = document.querySelector(".box")
let addForm = document.querySelector(".addForm")
let btn1 = document.querySelector(".btn1")
let idx = null

addForm.onsubmit = (el) => {
    el.preventDefault();
    let newobj = {
        id: users.length + 1,
        image: addForm["image"].value,
        company: addForm["company"].value,
        name: addForm["name"].value,
        job: addForm["job"].value,
        status: true
    }

    if (btn1.innerHTML == "Edit") {
        users = users.map((el) => {
            if (el.id == idx) {
                console.log(newobj);
                newobj.id = idx
                return newobj
            }
            return el
        })
    } else {
        users.push(newobj)
    }
    ShowUser()
    addForm.reset()
}



function deleteUser(id) {
    users = users.filter((e) => e.id != id)
    ShowUser()
}


function checkuser(id) {
    users.map((user) => {
        if (user.id == id) {
            user.status = !user.status
        }

        return user
    })
    ShowUser()
}

function ShowUser() {
    box.innerHTML = ""
    users.forEach((e) => {
        let div = document.createElement("div")
        let divB = document.createElement("div")
        let image = document.createElement("img")
        let pt = document.createElement("p")
        let h1 = document.createElement("h1")
        let pb = document.createElement("p")
        let ps = document.createElement("p")
        let btn = document.createElement("button")
        let btnEdit = document.createElement("button")
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = e.status

        image.src = e.image
        image.alt = "img is not defined"
        pt.innerHTML = e.company
        h1.innerHTML = e.name
        ps.innerHTML = e.status ? "active" : "Inactive"
        pb.innerHTML = e.job
        btnEdit.innerHTML = "Edit"
        btn.innerHTML = "🗑️"
        btn.onclick = () => {
            deleteUser(e.id)
        }
        ps.onclick = () => {
            checkuser(e.id)
        }
        checkbox.onchange = () => {
            checkuser(e.id)
        }

        btnEdit.onclick = () => {
            btn1.innerHTML = "Edit"
            idx = e.id
            addForm["image"].value = e.image
            addForm["company"].value = e.company
            addForm["name"].value = e.name
            addForm["job"].value = e.job
        }


        btn.classList.add("btn")
        div.classList.add("div1")
        divB.classList.add("div2")
        image.classList.add("image1")
        divB.append(pt, h1, pb, ps, checkbox, btn, btnEdit)
        div.append(image, divB)
        box.append(div)
    });

}
ShowUser()
