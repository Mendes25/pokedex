// passo 1 - pegar no JS o elemento HTML correspondente ao botão de trocar tema
const botaoAlterarTema = document.getElementById('botao-alterar-tema')

//passo 2 -  dar um jeito de pegar no JS o elemento HTML correspondente ao body
const body = document.querySelector('body')

const imagemBotaoTocaDeTema =
  document.querySelector('.imagem-botao')

//passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener('click', () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");
  const cartaoPokemonGrama = document.getElementsByClassName('cartao-pokemon-grama');
  cartaoPokemonGrama.classList.toggle('cartao-pokemon-grama-modo-escuro');

  if (modoEscuroEstaAtivo) {

    //passo 8 - trocar a imagem do  botão de alterar tema pra sol
    imagemBotaoTocaDeTema.setAttribute('src', './src/imagens/sun.png')
  } else {

    // passo 5- trocar a imagem do botão de alterar tema pra lua
    imagemBotaoTocaDeTema.setAttribute('src', './src/imagens/moon.png')
  }
})

const cartoes = document.querySelectorAll('.cartao-pokemon');

cartoes.forEach(cartao => {
  cartao.addEventListener('mouseover', () => {
    cartoes.forEach(outroCartao => {
      if (outroCartao !== cartao) {
        outroCartao.style.filter = 'blur(0.094rem)';
      }
    });
  });

  cartao.addEventListener('mouseout', () => {
    cartoes.forEach(outroCartao => {
      outroCartao.style.filter = '';
    });
  });
});





