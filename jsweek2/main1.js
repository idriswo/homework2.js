let users = JSON.parse(localStorage.getItem("date")) || []

let addForm = document.querySelector(".addForm")
let box = document.querySelector(".box")
let submit = document.querySelector(".submit")
let idx = null

// users = [
//     {
//         id: 1,
//         name: "Idris",
//         phoneNumber: "+992 110 72 71 11",
//         job: "manager",
//         city: "Dushanbe",
//         email: "irgashevidris2.@gmail.com"
//     }
// ]


addForm.onsubmit = (event) => {
    event.preventDefault();
    let obj = {
        id: Date.now(),
        name: addForm["name"].value,
        job: addForm["job"].value,
        phoneNumber: addForm["phoneNumber"].value,
        city: addForm["city"].value,
        email: addForm["email"].value,
    }
    if(idx){
        users = users.map((e)=>{
            if(e.id == idx){
                e = obj
            }
            return e
        })
        submit.innerHTML = "Add User"
        idx = null
    }
    else{
        users.push(obj)
    }

    // users.push(obj)
    localStorage.setItem("date", JSON.stringify(users))
    addForm.reset()
    showUsers()
}



function deleteUser(id) {
    users = users.filter((e) => e.id != id)
    localStorage.setItem("date", JSON.stringify(users))
    showUsers()
}

function editUser(e){
    idx = e.id
    submit.innerHTML = "Edit User"
    addForm["name"].value = e.name
    addForm["phoneNumber"].value = e.phoneNumber
    addForm["job"].value = e.job
    addForm["city"].value = e.city
    addForm["email"].value = e.email

    showUsers()
}



function showUsers() {
    box.innerHTML = ""
    users.forEach((e) => {
        let tr = document.createElement("tr")
        let tdName = document.createElement("td")
        let tdPhoneNumber = document.createElement("td")
        let tdJOb = document.createElement("td")
        let tdCity = document.createElement("td")
        let tdEmail = document.createElement("td")
        let tdActions = document.createElement("td")
        let tdID = document.createElement("td")
        let btnDelete = document.createElement("button")
        let btnEdit = document.createElement("button")


        tdID.innerHTML = e.id
        tdName.innerHTML = e.name
        tdPhoneNumber.innerHTML = e.phoneNumber
        tdJOb.innerHTML = e.job
        tdCity.innerHTML = e.city
        tdEmail.innerHTML = e.email
        btnDelete.innerHTML = "🗑️"
        btnEdit.innerHTML = "✏️"
        btnDelete.classList.add = "btnDelete"
        btnEdit.classList.add = "btnEdit"

        btnDelete.onclick = () => {
            deleteUser(e.id)
        }
        btnEdit.onclick = () => {
            editUser(e)
        }

        tdActions.append(btnDelete, btnEdit)
        tr.append(tdName, tdPhoneNumber, tdJOb, tdCity, tdEmail, tdActions)
        box.append(tr)
    });

}


showUsers()
