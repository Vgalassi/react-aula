# Exercício 02 - Formulário de Cadastro Simples

## 1) Objetivo de aprendizagem
Praticar componentes controlados e validação básica, entendendo como o estado de inputs é gerenciado no React.

## 2) Cenário do problema
Você precisa construir um formulário simples para cadastro de estagiários com os campos nome e e-mail. O botão de envio só deve ficar habilitado quando os dados mínimos estiverem válidos.

## 3) Requisitos funcionais
1. Criar campos para nome e e-mail.
2. Exibir os valores digitados em tempo real na tela.
3. Validar se nome tem pelo menos 3 caracteres.
4. Validar se e-mail contém `@`.
5. Desabilitar o botão de enviar enquanto o formulário for inválido.
6. Mostrar mensagem de sucesso após envio válido.
7. Limpar o formulário após envio.

## 4) Ferramentas e hooks obrigatórios
- `useState`: armazena os valores dos campos e o estado de envio.
- Eventos de formulário (`onChange` e `onSubmit`): atualizam estado e tratam o envio sem recarregar a página.
- Renderização condicional: exibe mensagens de erro e de sucesso conforme o estado.

## 5) Passo a passo sugerido
1. Crie estados para nome, e-mail e mensagem de feedback.
2. Conecte cada input ao estado com `value` e `onChange`.
3. Crie uma validação derivada para liberar ou bloquear o botão.
4. Implemente `onSubmit` com `event.preventDefault()`.
5. Exiba mensagens de erro/sucesso e limpe os campos no envio válido.

## 6) Critérios de conclusão
- Os inputs funcionam como componentes controlados.
- O botão respeita as validações definidas.
- O formulário não recarrega a página no envio.
- O fluxo de sucesso e limpeza funciona corretamente.

## 7) Desafio extra (opcional)
Adicionar um terceiro campo de senha com validação de no mínimo 6 caracteres.

## 8) Documentação oficial do React
- [useState](https://react.dev/reference/react/useState)
- [\<input> (React DOM)](https://react.dev/reference/react-dom/components/input)
- [Conditional Rendering](https://react.dev/learn/conditional-rendering)

