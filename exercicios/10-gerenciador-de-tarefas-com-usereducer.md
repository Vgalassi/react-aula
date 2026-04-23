# Exercício 10 - Gerenciador de Tarefas com useReducer

## 1) Objetivo de aprendizagem
Praticar gerenciamento de estado com transições previsíveis usando reducer, actions e dispatch.

## 2) Cenário do problema
Você precisa evoluir uma lista de tarefas para um fluxo mais robusto, com múltiplas ações de estado: adicionar, concluir e remover.

## 3) Requisitos funcionais
1. Permitir adicionar uma nova tarefa.
2. Permitir marcar tarefa como concluída.
3. Permitir remover tarefa da lista.
4. Não permitir adicionar tarefa vazia.
5. Exibir quantidade total de tarefas.
6. Exibir quantidade de tarefas concluídas.
7. Organizar regras de atualização dentro de um reducer.

## 4) Ferramentas e hooks obrigatórios
- `useReducer`: centraliza a lógica de mudanças de estado em um reducer.
- `dispatch` e `actions`: descrevem o que aconteceu de forma explícita e previsível.
- Renderização de listas (`map` e `key`): exibe tarefas com controles individuais.

## 5) Passo a passo sugerido
1. Defina estado inicial e tipos de action.
2. Implemente função `reducer` com `switch` para cada ação.
3. Conecte eventos de UI ao `dispatch`.
4. Renderize a lista com botões de concluir/remover.
5. Exiba os contadores de totais e concluídas.

## 6) Critérios de conclusão
- Todas as ações funcionam corretamente via reducer.
- O estado muda de forma previsível e rastreável.
- A interface reflete o estado após cada ação.
- O código evita lógica de atualização espalhada.

## 7) Desafio extra (opcional)
Adicionar filtro de visualização: todas, pendentes e concluídas.

## 8) Documentação oficial do React
- [useReducer](https://react.dev/reference/react/useReducer)
- [Extracting State Logic into a Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer)
- [Rendering Lists](https://react.dev/learn/rendering-lists)

