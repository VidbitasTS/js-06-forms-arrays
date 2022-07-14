'use strict'
// nusitaikymas i forma
const formEl = document.getElementById('formId')

// sukuriamas pasiklausymas submit buttonui
formEl.addEventListener('submit', handleForm)

// submit buttono funkcija
function handleForm(event) {
    //perimamas formos valdymas ir sustabdomas issiuntimas
    event.preventDefault()

    // spalvu'os apibrezimas
    const colorEl = document.querySelectorAll(".spalva")
    let color = ''
    colorEl.forEach(function(e) {
        color += e.checked ? `${e.value} ` : '';
    });

    // lyties apibrezimas
    const lytis = document.getElementsByName("gender");

    // objekto kurimas is formos duomenu 
    const formData = {
        email: event.target.children.email.value,
        password: event.target.children.pass.value,
        gender: lytis[0].checked ? lytis[0].value : lytis[1].value,
        color: color,
        town: event.target.children.miestas.value
    }

    // kreipimasis i funkcija del objekto isvedimo i html'a ir i concol.log
    formDataToHtml(formData)

    //formos refreshas
    formEl.reset()
}

// objekto duomenu isvedimas i html'a 
function formDataToHtml(objData) {
    const fCard = document.getElementById('right')
    const pEl = document.createElement('p')
    pEl.style.whiteSpace = 'pre'
    pEl.textContent = `Formos duomenys:\nEl. pastas - ${objData.email}\nSlaptazodis - ${objData.password}\nLytis - ${objData.gender}\nMegstama spalva - ${objData.color}\nKokiame mieste gyvena - ${objData.town}`
    fCard.append(pEl)
    console.log('objForm ===', objData);
}