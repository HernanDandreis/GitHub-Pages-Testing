const observator = new IntersectionObserver(
    entries => { // entries siempre sera un array
        entries.forEach(entry => {
        if(entry.isIntersecting) { // isIntersecting = "esta interseptado" / aparece en la pantalla
            entry.target.classList.remove('hide')
        } else {
            entry.target.classList.add('hide')
        }
    }), {threshold: 0.5} // Medida del elemento en pantalla para que este aparezca (0.0 a 1.0 )
})

const galeriaLatam = document.querySelectorAll("#galeria-rol-latam .image-container .image img")

galeriaLatam.forEach(e => {
    observator.observe(e)
})

const changeImageAndTextHernan = (element, newText, newImageSrc) => {
    element.src = newImageSrc;
    document.getElementById('textToChangeHerni').innerHTML = newText;
}

const changeImageAndTextCesar = (element, newText, newImageSrc) => {
    element.src = newImageSrc;
    document.getElementById('textToChangeCesarito').innerHTML = newText;
}

const changeImageAndTextAleph = (element, newText, newImageSrc) => {
    element.src = newImageSrc;
    document.getElementById('textToChangeHernanDandreis').innerHTML = newText;
}