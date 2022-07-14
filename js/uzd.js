'use strict'

const formEl = document.getElementById('formId')
formEl.addEventListener('submit', handleForm)

function handleForm(event) {
    event.preventDefault()
        //    console.log(event)
        // const r = document.getElementById("raudona").checked ? document.getElementById("raudona").value : ''
        // const g = document.getElementById("zalia").checked ? document.getElementById("zalia").value : ''
        // const b = document.getElementById("melyna").checked ? document.getElementById("melyna").value : ''
        //console.log(`${r} ${g} ${b}`)

    const colorEl = document.querySelectorAll(".spalva")
    let color = ''
    colorEl.forEach(function(e) {
        color += e.checked ? `${e.value} ` : '';
    });

    const lytis = document.getElementsByName("gender");
    const formData = {
        email: event.target.children.email.value,
        password: event.target.children.pass.value,
        //gender: document.getElementById("vyras").checked ? 'vyras' : 'moteris',
        gender: lytis[0].checked ? lytis[0].value : lytis[1].value,
        color: color,
        town: event.target.children.miestas.value
    }
    formDataToHtml(formData)
    formEl.reset()
}

function formDataToHtml(objData) {
    const fCard = document.getElementById('right')
    const pEl = document.createElement('p')
    pEl.style.whiteSpace = 'pre'
    pEl.textContent = `Formos duomenys:\nEl. pastas - ${objData.email}\nSlaptazodis - ${objData.password}\nLytis - ${objData.gender}\nMegstama spalva - ${objData.color}\nKokiame mieste gyvena - ${objData.town}`
    fCard.append(pEl)
    console.log('objForm ===', objData);
}