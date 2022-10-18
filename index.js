// Add your code here
// const dogData = (
//     {
//     dogName: "Beau",
//     dogBreed: "Shepard",
//     },

//     {
//     dogName: "Kodi",
//     dogBreed: "Shiba-Inu"
//     },

//     {
//     dogName: "Cooper",
//     dogBreed: "Poodle"
//     }

//     )

// const configureObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(dogData)
// }
//Content Type is used to indicate what format the data being sent is in.
//Accept is telling the server what type of data format we accept in return.

// fetch("http://localhost:3000/dogs", configureObject)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(alert("bad things!"))

let message = "Unauthorized access"

const users = {
    name: "Steve",
    email: "steve@steve.com"
}

function submitData() {
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(users)
    })
    .then(response => response.json())
    .then(fetchedUser => addUser(fetchedUser))
    .catch(message => console.log(message))
}

function addUser(fetchedUser){
    fetchedUser.forEach(user => {
        const h1 = document.createElement('h1');
        const body = document.querySelectorAll('body');
        h1.textContent = user.name
        body.append(h1)
    }
    )
}



submitData();