# Sorteador de Números

.

## Resumo da Proposta
Durante o curso Lógica de Programação: Praticando com desafios, desenvolvi um projeto que sorteia números aleatórios dentro de um intervalo definido pelo usuário, garantindo que **não haja repetições**.

O usuário informa:
- Quantidade de números a sortear;
- Número inicial do intervalo;
- Número final do intervalo.  

A aplicação retorna os números sorteados, garantindo que **não haja repetições**, além de permitir reiniciar o sorteio com apenas um clique.

---

Neste projeto foi aonde tive o primeiro contato com HTML e CSS, e não posso esconder minha empolgação por eles! Mas gostaria de ressaltar que a Alura nos enviou o front já feito, para que focassemos na prática da lógica.

## 🛠️ Ferramentas Utilizadas
- **JavaScript** → lógica do sorteio

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
