// script.js

// Função para abrir o jogo em uma nova aba
function abrirJogo(url) {
    window.open(url, '_blank');
}

// Função para tocar o áudio do Michael Jackson
function playHihi() {
  const audio = document.getElementById("hihi-audio");
  if (audio) {
    // Verifica se o elemento de áudio existe
    audio.play();
    // Não é necessário o alert, o áudio já indica a ação.
    // alert('Michael Jackson: Hihi!');
  }
}

// Função para pesquisar jogos
function searchGames() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const games = document.querySelectorAll(".jogo"); // Seleciona todos os divs de jogo

  let foundGames = 0; // Contador para verificar se algum jogo foi encontrado

  games.forEach((game) => {
    // Pega o nome do jogo do atributo data-game-name
    const gameName = game.dataset.gameName
      ? game.dataset.gameName.toLowerCase()
      : "";

    if (gameName.includes(searchTerm)) {
      game.style.display = "flex"; // Mostra o jogo se corresponder
      foundGames++;
    } else {
      game.style.display = "none"; // Esconde o jogo se não corresponder
    }
  });

  // Opcional: Adicione um feedback se nenhum jogo for encontrado
  const jogosContainer = document.querySelector(".jogos");
  let noGamesFoundMessage = document.getElementById("no-games-found");

  if (foundGames === 0 && searchTerm !== "") {
    // Se não encontrou jogos e a pesquisa não está vazia
    if (!noGamesFoundMessage) {
      // Se a mensagem ainda não existe, cria ela
      noGamesFoundMessage = document.createElement("p");
      noGamesFoundMessage.id = "no-games-found";
      noGamesFoundMessage.textContent = `Nenhum jogo encontrado para "${searchTerm}".`;
      noGamesFoundMessage.style.textAlign = "center";
      noGamesFoundMessage.style.marginTop = "20px";
      noGamesFoundMessage.style.fontSize = "1.2em";
      noGamesFoundMessage.style.color = "#FF4500"; // Cor para destaque
      jogosContainer.parentNode.insertBefore(
        noGamesFoundMessage,
        jogosContainer.nextSibling
      ); // Insere após o container de jogos
    } else {
      noGamesFoundMessage.textContent = `Nenhum jogo encontrado para "${searchTerm}".`; // Atualiza a mensagem
    }
  } else {
    if (noGamesFoundMessage) {
      // Remove a mensagem se jogos foram encontrados ou a pesquisa está vazia
      noGamesFoundMessage.remove();
    }
  }
}
