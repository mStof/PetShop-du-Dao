// Troca a imagem do "Corpo_Rolagens" Junto com o link

const arrowLeft = document.getElementsByClassName("arrow_Left");
const arrowRight = document.getElementsByClassName("arrow_Right");

var number = 0;

arrowLeft[0].addEventListener("click", () => {changeImage(-1);}, false);
arrowRight[0].addEventListener("click", () => {changeImage(1);}, false);

function changeImage(value) {
  if (value === 1) {
    number++;
  } else {
    number--;
  }
  if (number > 4 || number < -4) {
    number = 0;
  }
    switch (number) {
      case 0:
        corpo_Rolagens.style.backgroundImage = "url(Imagens/Cats.jpg)";
        corpo_Rolagens_texto.textContent = "Doações de Gatinhos";
        corpo_Rolagens_texto.href = " ";
        break;
      case 1:
      case -4:
        corpo_Rolagens.style.backgroundImage = "url(Imagens/Dogs.jpg)";
        corpo_Rolagens_texto.textContent = "Doações de Cachorros";
        corpo_Rolagens_texto.href = " ";
        break;
      case 2:
      case -3:
        corpo_Rolagens.style.backgroundImage = "url(Imagens/Fish.jpg)";
        corpo_Rolagens_texto.textContent = "Venda de Peixes";
        corpo_Rolagens_texto.href = " ";
        break;
      case 3:
      case -2:
        corpo_Rolagens.style.backgroundImage = "url(Imagens/Repteis.jpg)";
        corpo_Rolagens_texto.textContent = "Doações de Répteis";
        corpo_Rolagens_texto.href = " ";
        break;
      case 4:
      case -1:
        corpo_Rolagens.style.backgroundImage = "url(Imagens/bird.jpg)";
        corpo_Rolagens_texto.textContent = "Doações de Pássaros";
        corpo_Rolagens_texto.href = " ";
        break;
    }
  }
