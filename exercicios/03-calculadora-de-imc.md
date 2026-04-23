# Exercício 03 - Calculadora de IMC

## 1) Objetivo de aprendizagem
Praticar manipulação de múltiplos estados e lógica de negócio para cálculos derivados no React.

## 2) Cenário do problema
Você precisa criar uma calculadora de IMC para uso em uma tela de triagem. O usuário informa peso e altura, e a aplicação retorna o resultado com a classificação correspondente.

## 3) Requisitos funcionais
1. Criar campo de peso (kg).
2. Criar campo de altura (m).
3. Calcular IMC usando a fórmula `peso / (altura * altura)`.
4. Mostrar o valor do IMC com 2 casas decimais.
5. Exibir a classificação do IMC (abaixo do peso, normal, sobrepeso, obesidade).
6. Bloquear cálculo com valores vazios, zero ou negativos.
7. Incluir botão para limpar os campos.

## 4) Ferramentas e hooks obrigatórios
- `useState`: controla os valores de entrada e o resultado exibido.
- Eventos (`onChange` e `onClick`): atualizam os campos e executam ações de calcular/limpar.
- Renderização condicional: mostra mensagens de validação e o resultado apenas quando válido.

## 5) Passo a passo sugerido
1. Crie estados para peso, altura e resultado.
2. Implemente a função de cálculo com validação dos dados.
3. Crie a função para classificar o IMC por faixa.
4. Renderize campos, botões e resultado na interface.
5. Implemente o botão de limpar para resetar o formulário.

## 6) Critérios de conclusão
- O cálculo segue a fórmula correta.
- A classificação muda corretamente de acordo com o resultado.
- Entradas inválidas são tratadas sem quebrar a interface.
- O usuário consegue reiniciar o fluxo com o botão de limpar.

## 7) Desafio extra (opcional)
Exibir a classificação com cores diferentes para cada faixa de IMC.

## 8) Documentação oficial do React
- [useState](https://react.dev/reference/react/useState)
- [Responding to Events](https://react.dev/learn/responding-to-events)
- [Conditional Rendering](https://react.dev/learn/conditional-rendering)

