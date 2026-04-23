# Exercício 04 - Lista de Tarefas Básica

## 1) Objetivo de aprendizagem
Praticar atualização de listas no estado, renderização com `map` e remoção de itens de forma imutável.

## 2) Cenário do problema
Você precisa criar uma mini lista de tarefas para organizar atividades do dia. O usuário deve conseguir adicionar e remover tarefas rapidamente.

## 3) Requisitos funcionais
1. Criar um campo para digitar uma nova tarefa.
2. Adicionar a tarefa em uma lista ao clicar no botão.
3. Não permitir adicionar tarefa vazia.
4. Exibir todas as tarefas em uma lista visual.
5. Permitir remover uma tarefa individualmente.
6. Mostrar a quantidade total de tarefas cadastradas.
7. Limpar o campo após adicionar.

## 4) Ferramentas e hooks obrigatórios
- `useState`: armazena o valor do input e o array de tarefas.
- Renderização de listas (`map` e `key`): exibe cada tarefa de forma performática e previsível.
- Atualização imutável de estado: adiciona e remove itens sem mutar o array original.

## 5) Passo a passo sugerido
1. Crie estado para o input e para o array de tarefas.
2. Implemente a função de adicionar com validação de texto vazio.
3. Renderize a lista usando `map` com uma `key` estável.
4. Implemente a função de remoção por identificador.
5. Exiba contador total e mantenha o input limpo após inclusão.

## 6) Critérios de conclusão
- A lista adiciona e remove itens corretamente.
- Não é possível inserir itens vazios.
- A contagem de tarefas reflete o estado real da lista.
- O código usa atualização imutável no estado.

## 7) Desafio extra (opcional)
Permitir marcar uma tarefa como concluída com um estilo visual diferente.

## 8) Documentação oficial do React
- [useState](https://react.dev/reference/react/useState)
- [Rendering Lists](https://react.dev/learn/rendering-lists)
- [Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state)

