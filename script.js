// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const p = document.querySelector('p');
const botao = document.getElementById('prox-piada');

botao.addEventListener('click', puxarPiada);

function puxarPiada () {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(resposta => resposta.json())
    .then(resposta => {
        const valorPiada = resposta.value;
        p.innerText = valorPiada;
    })
}

puxarPiada();
