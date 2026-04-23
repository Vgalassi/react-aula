# Exercício 07 - Busca de Usuários com API

## 1) Objetivo de aprendizagem
Praticar busca de dados assíncrona no React com tratamento de carregamento, sucesso e erro.

## 2) Cenário do problema
Você precisa montar uma tela que consulta usuários em uma API pública e exibe os resultados para o time de operações.

## 3) Requisitos funcionais
1. Criar um campo para pesquisar usuários por nome.
2. Fazer requisição HTTP ao clicar no botão de buscar.
3. Exibir estado de carregamento durante a requisição.
4. Exibir lista de usuários quando houver sucesso.
5. Exibir mensagem de erro quando a requisição falhar.
6. Exibir mensagem de vazio quando não houver resultados.
7. Permitir nova busca sem recarregar a página.

## 4) Ferramentas e hooks obrigatórios
- `useState`: armazena termo de busca, lista de usuários, loading e erro.
- `useEffect` (ou evento de busca com função assíncrona): organiza o fluxo de requisição e atualização de estado.
- Renderização condicional: alterna entre estados de loading, erro, vazio e sucesso.

## 5) Passo a passo sugerido
1. Defina os estados principais da tela.
2. Implemente a função assíncrona de busca com `fetch`.
3. Atualize loading/erro antes e depois da requisição.
4. Renderize os diferentes estados da interface.
5. Garanta que novas buscas substituam os resultados anteriores.

## 6) Critérios de conclusão
- A requisição é executada corretamente.
- O usuário recebe feedback visual em todas as etapas.
- Erros de rede são tratados sem quebrar a aplicação.
- A lista final é atualizada conforme o termo pesquisado.

## 7) Desafio extra (opcional)
Adicionar debounce de 500ms para buscar automaticamente enquanto o usuário digita.

## 8) Documentação oficial do React
- [useState](https://react.dev/reference/react/useState)
- [useEffect](https://react.dev/reference/react/useEffect)
- [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)

