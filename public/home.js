const modalOverlay = document.querySelector(".modal-overlay")
const button = document.querySelector(".wrapper a")


button.addEventListener("click", function() {
    modalOverlay.classList.add('active')
})

const close = document.querySelector(".close-modal")

close.addEventListener("click", function() {
    modalOverlay.classList.remove('active')
})