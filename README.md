# Sorteador de Números

## Sorteio feito, agora o reiniciar foi apertado:
![Demonstração do Projeto](https://media.discordapp.net/attachments/1395861135739060334/1407583756998414346/image.png?ex=68a6a207&is=68a55087&hm=48a940b84ea9ae46c33ed6e2295123d6398cc6302d663f2ebde3657eaabb9659&=&format=webp&quality=lossless&width=1742&height=856)

## Com o jogo reiniciado:
![Demonstração do Projeto](https://media.discordapp.net/attachments/1395861135739060334/1407583879610630275/image.png?ex=68a6a224&is=68a550a4&hm=c30b54ca8fa394122574a88119261befd6affb0d6f4e9c0296d96132febb8c5e&=&format=webp&quality=lossless&width=1742&height=856)

## Resumo da Proposta
Durante o curso Lógica de Programação: Praticando com desafios, desenvolvi um projeto que sorteia números aleatórios dentro de um intervalo definido pelo usuário, garantindo que **não haja repetições**.

O usuário informa:
- Quantidade de números a sortear;
- Número inicial do intervalo;
- Número final do intervalo.  

A aplicação retorna os números sorteados, garantindo que **não haja repetições**, além de permitir reiniciar o sorteio com apenas um clique.

---

Neste projeto foi aonde tive o primeiro contato com HTML e CSS, e não posso esconder minha empolgação por eles! Mas gostaria de ressaltar que a Alura nos enviou o front já feito, para que focassemos na prática da lógica.

##  Ferramentas que tive contato
- **JavaScript** → lógica do sorteio
- **CSS3** → estilização da interface  
- **HTML5** → estrutura da página 

---

## Desafios Encontrados

Durante o desenvolvimento do sorteador de números, alguns desafios surgiram:

1. **Garantir números únicos**  
   Evitar repetições nos números sorteados.  
   **Solução:** usar `while(sorteados.includes(numero))` para refazer o sorteio caso o número já exista.

2. **Manipulação do DOM**  
   Pegar valores dos inputs e atualizar o resultado de forma dinâmica.  
   **Solução:** usar `document.getElementById()` e `innerHTML`.

3. **Validação de entradas**  
   Evitar entradas inválidas (texto, vazio, números fora do intervalo).  
   **Observação:** recomenda-se adicionar verificações para melhorar a experiência do usuário.

4. **Controle de estado do botão**  
   Habilitar/desabilitar o botão de reiniciar conforme necessário.  
   **Solução:** alternar classes CSS com `classList.add`, `classList.remove` e `classList.contains`.

5. **Escalabilidade**  
   Quantidade de números maior que o intervalo pode gerar loop infinito.  
   **Observação:** incluir verificação para impedir ou alertar o usuário.
