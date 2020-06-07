function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json() )
    .then(states => {

        for( const state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }

    })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then(res => res.json() )
    .then( cities => {
        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


const cards = document.querySelectorAll('.card')

const collectedItems = document.querySelector("input[name=items]")

let selectedItems =[]


for ( const card of cards) {
    card.addEventListener("click", function(){
        card.classList.toggle('active')

        const itemId = event.target.dataset.id

        const alreadySelect = selectedItems.findIndex( item => {
            const itemFound = item == itemId
            return itemFound
        })
        
        if (alreadySelect >= 0){
            const filteredItems = selectedItems.filter( item => {
                const itemIsDifferent = item != itemId
                return itemIsDifferent
            })
        
            selectedItems = filteredItems
        
        } else {
            selectedItems.push(itemId)
        }

        collectedItems.value = selectedItems
    })
}

