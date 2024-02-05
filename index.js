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

    // Verifica se o bloco de descrição está visível
    var isVisible = descriptionContainer.classList.contains('show-description');

    // Fecha todos os blocos de descrição
    var allDescriptionContainers = document.querySelectorAll('.description-container');
    allDescriptionContainers.forEach(function (container) {
        container.classList.remove('show-description');
    });

    // Se o bloco clicado não estava visível, abre-o
    if (!isVisible) {
        descriptionContainer.classList.add('show-description');

        // Garante que a altura do #Conhecimentos não ultrapasse 100vh
        var conhecimentosContainer = document.getElementById('Conhecimentos');
        var windowHeight = window.innerHeight;
        var conhecimentosHeight = conhecimentosContainer.offsetHeight;
        if (conhecimentosHeight > windowHeight) {
            conhecimentosContainer.style.height = '100vh';
            conhecimentosContainer.style.overflowY = 'auto';
            conhecimentosContainer.style.scrollbarColor = '#1D1D30 #ffffff';
        }

        // Garante que a altura do .conhecimentos não ultrapasse 100vh
        var conhecimentosInnerContainer = document.querySelector('.conhecimentos');
        var conhecimentosInnerHeight = conhecimentosInnerContainer.offsetHeight;
        if (conhecimentosInnerHeight > windowHeight) {
            conhecimentosInnerContainer.style.height = '100vh';
            conhecimentosInnerContainer.style.overflowY = 'auto';
            conhecimentosInnerContainer.style.scrollbarColor = ' #a5f767 #1D1D30';
        }
    } else {
        // Se o bloco clicado estava visível, fecha todos
        allDescriptionContainers.forEach(function (container) {
            container.style.height = ''; // Limpa a altura para voltar ao normal
            container.style.overflowY = ''; // Limpa o overflowY
            container.style.scrollbarColor = ''; // Limpa a cor da barra de rolagem
        });

        // Restaura a altura do #Conhecimentos
        document.getElementById('Conhecimentos').style.height = '';
        document.getElementById('Conhecimentos').style.overflowY = '';

        // Restaura a altura do .conhecimentos
        document.querySelector('.conhecimentos').style.height = '';
        document.querySelector('.conhecimentos').style.overflowY = '';
    }
}


document.querySelector('.back-to-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

