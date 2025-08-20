// Sorteando número aleatório
function sorteandoNumeros(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}

// Tudo que está relacionado com o botão sortear fica dentro dessa função
function sortear() {

    // Pegando os valores dos inputs
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Criando array para guardar resultados
    let sorteados = [];

    // Sorteando os números
    for (let i = 0; i < quantidade; i++) {
        let numero = sorteandoNumeros(de, ate);

        // Garantindo que não repete (se já tiver no array, sorteia de novo)
        while (sorteados.includes(numero)) {
            numero = sorteandoNumeros(de, ate);
        }

        // Adicionando o número no final da lista
        sorteados.push(numero);
    }

    // Alterando texto para mostrar os números sorteados na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao(); // habilita o botão de reiniciar
}

// Função que troca o estado do botão reiniciar (habilitado/desabilitado)
function alterarStatusBotao() {
  let botao = document.getElementById('btn-reiniciar');
  if (botao.classList.contains('container__botao-desabilitado')) {
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
  } else {
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
  }   
}

// Função que limpa os campos do usuário e reseta o resultado
function reiniciar() {
    
    // Limpa os inputs
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    // Volta o texto do resultado para o padrão
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    // Chama a função para desabilitar o botão novamente
    alterarStatusBotao();
}
