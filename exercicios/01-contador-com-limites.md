# Exercicio 01 - Contador com Limites

## 1) Objetivo de aprendizagem
Praticar `useState` e eventos no React, atualizando a tela a cada clique.

## 2) Cenario do problema
Voce precisa criar um contador simples para controlar tentativas.
O usuario pode aumentar, diminuir e resetar o valor.
O contador deve respeitar limites minimo e maximo.

## 3) Requisitos funcionais
1. Exibir o valor inicial `0`.
2. Ter um botao para incrementar em `+1`.
3. Ter um botao para decrementar em `-1`.
4. Ter um botao para resetar para `0`.
5. Nao permitir valores menores que `0`.
6. Nao permitir valores maiores que `10`.
7. Exibir mensagem quando atingir limite minimo ou maximo.

## 4) Ferramentas e hooks obrigatorios
- `useState`: guarda o valor do contador.
- `onClick`: captura clique dos botoes.
- `if/else`: decide qual mensagem mostrar para os limites.

## 5) Passo a passo sugerido
1. Crie o estado `contador` com valor inicial `0`.
2. Implemente `incrementar`, `decrementar` e `resetar`.
3. Dentro das funcoes, use `if` para validar os limites.
4. Renderize o valor atual e os tres botoes.
5. Mostre uma mensagem diferente para minimo, maximo e faixa normal.

## 6) Criterios de conclusao
- O contador atualiza corretamente em todos os botoes.
- Os limites minimo e maximo sao respeitados.
- A mensagem muda corretamente quando chega nos limites.
- O codigo esta claro e facil de explicar.

## 7) Documentacao oficial do React
- [useState](https://react.dev/reference/react/useState)
- [Responding to Events](https://react.dev/learn/responding-to-events)
- [Conditional Rendering](https://react.dev/learn/conditional-rendering)
