# Exercício 09 - Custom Hook useContador

## 1) Objetivo de aprendizagem
Praticar reutilização de lógica no React criando um custom hook para reduzir repetição de código.

## 2) Cenário do problema
Você tem dois blocos diferentes da interface que precisam de comportamento de contador. Para evitar duplicação, sua tarefa é extrair a lógica para um hook reutilizável.

## 3) Requisitos funcionais
1. Criar um hook `useContador` com valor inicial configurável.
2. Expor no hook: `valor`, `incrementar`, `decrementar` e `resetar`.
3. Usar o hook em pelo menos dois componentes diferentes.
4. Garantir que cada componente tenha estado independente.
5. Exibir os dois contadores na mesma tela.
6. Permitir configuração de passo de incremento/decremento.
7. Manter código reutilizável e legível.

## 4) Ferramentas e hooks obrigatórios
- Custom hook: encapsula e reutiliza lógica de estado entre componentes.
- `useState`: controla o estado interno do hook.
- Composição de componentes: aplica o mesmo hook em múltiplos lugares sem acoplamento.

## 5) Passo a passo sugerido
1. Crie o arquivo do hook com a função `useContador`.
2. Implemente estado inicial e funções de atualização.
3. Retorne API do hook com dados e ações.
4. Consuma o hook em dois componentes de contador.
5. Valide visualmente que os estados não se misturam.

## 6) Critérios de conclusão
- O hook pode ser reutilizado sem duplicar lógica.
- Cada componente mantém seu próprio estado.
- A API do hook está clara e fácil de usar.
- O código segue organização de responsabilidades.

## 7) Desafio extra (opcional)
Adicionar limites mínimo/máximo como parâmetros opcionais do hook.

## 8) Documentação oficial do React
- [Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [useState](https://react.dev/reference/react/useState)
- [Your First Component](https://react.dev/learn/your-first-component)

