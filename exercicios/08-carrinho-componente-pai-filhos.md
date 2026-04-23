# Exercício 08 - Carrinho com Componente Pai e Filhos

## 1) Objetivo de aprendizagem
Praticar compartilhamento de estado entre componentes usando `props` e levantamento de estado para o componente pai.

## 2) Cenário do problema
Você precisa criar uma tela simples de carrinho em que cada item tem controles próprios, mas o total geral deve ser calculado em um componente pai.

## 3) Requisitos funcionais
1. Criar uma lista inicial de produtos com nome e preço.
2. Exibir cada produto em um componente filho.
3. Permitir aumentar e diminuir quantidade por produto.
4. Não permitir quantidade negativa.
5. Exibir subtotal por item.
6. Exibir total geral no componente pai.
7. Atualizar total automaticamente a cada alteração de quantidade.

## 4) Ferramentas e hooks obrigatórios
- `useState`: mantém as quantidades e dados do carrinho no componente pai.
- `props`: envia dados e funções do pai para os componentes filhos.
- Levantamento de estado (lifting state up): centraliza a fonte de verdade para sincronizar subtotais e total.

## 5) Passo a passo sugerido
1. Defina o estado do carrinho no componente pai.
2. Crie componente filho para renderizar cada item.
3. Passe callbacks de incremento/decremento via `props`.
4. Calcule subtotal por item e total geral no pai.
5. Atualize a interface para refletir mudanças em tempo real.

## 6) Critérios de conclusão
- As quantidades são controladas corretamente.
- O total geral corresponde à soma dos subtotais.
- O estado está centralizado no componente pai.
- A comunicação pai/filho está clara e organizada.

## 7) Desafio extra (opcional)
Adicionar botão para remover um item inteiro do carrinho.

## 8) Documentação oficial do React
- [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
- [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)
- [useState](https://react.dev/reference/react/useState)

