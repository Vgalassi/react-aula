# Exercício 05 - Filtro de Produtos

## 1) Objetivo de aprendizagem
Praticar estado para filtros, lógica com `filter` e renderização condicional de resultados.

## 2) Cenário do problema
Você recebeu uma lista fixa de produtos e precisa montar uma tela para filtrar por nome e por categoria, simulando um catálogo simples.

## 3) Requisitos funcionais
1. Utilizar uma lista fixa de produtos (nome, categoria e preço).
2. Criar um campo de busca por nome.
3. Criar um seletor de categoria (todas, eletrônicos, livros, etc.).
4. Mostrar somente os produtos que combinam com os filtros ativos.
5. Exibir mensagem quando nenhum produto for encontrado.
6. Mostrar quantidade de resultados filtrados.
7. Permitir limpar os filtros e voltar ao estado inicial.

## 4) Ferramentas e hooks obrigatórios
- `useState`: controla o termo de busca e a categoria selecionada.
- Métodos de array (`filter`): aplica regras de filtro sem alterar a lista original.
- Renderização condicional: exibe lista filtrada ou mensagem de vazio.

## 5) Passo a passo sugerido
1. Crie a lista fixa de produtos em uma constante.
2. Crie estados para busca e categoria.
3. Gere uma lista derivada aplicando os filtros ativos.
4. Renderize a lista resultante e a contagem de itens.
5. Adicione botão para limpar os filtros.

## 6) Critérios de conclusão
- A busca por texto funciona corretamente.
- O filtro por categoria funciona corretamente.
- A combinação dos dois filtros produz o resultado esperado.
- O estado inicial é restaurado ao limpar filtros.

## 7) Desafio extra (opcional)
Adicionar ordenação por preço (crescente e decrescente).

## 8) Documentação oficial do React
- [useState](https://react.dev/reference/react/useState)
- [Conditional Rendering](https://react.dev/learn/conditional-rendering)
- [Rendering Lists](https://react.dev/learn/rendering-lists)

