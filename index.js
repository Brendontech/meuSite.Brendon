function typeWrite(e) {
    const textoArray = e.innerHTML.split('');
    e.innerHTML = '';
    textoArray.forEach(function (letter, i) {
        setTimeout(function () {
            e.innerHTML += letter;
        }, 80 * i);
    });
}

const phrase = document.querySelector('.headline');
typeWrite(phrase);

function toggleDescription(descriptionId) {
    var descriptionContainer = document.getElementById(descriptionId);

    // Toggle a classe para mostrar ou ocultar o bloco de descrições
    descriptionContainer.classList.toggle('show-description');
}
function toggleNome(nameId) {
    var nameContainer = document.getElementById(nameId);
    des
}


document.querySelector('.back-to-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

