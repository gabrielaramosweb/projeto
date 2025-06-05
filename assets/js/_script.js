function abrirJogo(url) {
    window.open(url, '_blank');
}

// A função playHihi() que é chamada no botão "Menu" também deve estar aqui.
// Se ela for para tocar um áudio, seria algo assim:
function playHihi() {
    var audio = document.getElementById('hihi-audio');
    if (audio) {
        audio.play();
    }
}

// A função searchGames() que é chamada no botão de pesquisa também deve estar aqui.
// Ela precisaria de mais lógica para realmente pesquisar os jogos.
function searchGames() {
    var searchTerm = document.getElementById('searchInput').value;
    alert('Você pesquisou por: ' + searchTerm + '. A funcionalidade de pesquisa completa precisaria ser implementada.');
    // Aqui você adicionaria a lógica para filtrar ou buscar os jogos com base no searchTerm
}