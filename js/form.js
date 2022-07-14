'use strict'

const userFormEl = document.getElementById('userForm')

console.log('userFormEl ===', userFormEl);
const userEl = document.getElementById('user')
const ageEl = document.getElementById('age')

userFormEl.addEventListener('submit', handleForm)

function handleFormSubmit(event) {
    event.preventDefault()
    console.log('Submit js is in control', event.target.children.user.value);

    // const uName = userFormEl.elements.user.value
    // const uAge = userFormEl.elements.age.value
    // console.log('uName ===', uName);
    // console.log('uAge ===', uAge);
    // console.log(userEl, ageEl)
    const formAgeValue = ageEl.value
    const formUserValue = userEl.value
    console.log(ageEl.value)
    console.log(userEl.value)
    const objForm = {
            user: userEl.value,
            age: ageEl.value
        }
        // console.log('objForm ===', objForm);
        // const uInForm = document.createElement('p')
        // const aInForm = document.createElement('p')
        // uInForm.innerHTML = userEl.value
        // aInForm.innerHTML = ageEl.value

    // const fCard = document.getElementById('card')

    // fCard.append(uInForm)
    // fCard.append(aInForm)

}


function handleForm(event) {
    event.preventDefault()
    const objForm = {
        user: userEl.value,
        age: ageEl.value
    }
    userDataToHtml(objForm)
}


function userDataToHtml(userData) {
    if (userData.user == '' || userData.age < 1) {
        alert('Neivedet vardo ar amziaus')
        return
    }
    const fCard = document.getElementById('card')
    const pEl = document.createElement('p')
    pEl.textContent = `Vartotojas: ${userData.user}  Amzius: ${userData.age}`
    fCard.append(pEl)
    console.log('objForm ===', userData);
    userFormEl.reset()
}