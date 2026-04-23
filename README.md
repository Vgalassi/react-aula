# Trilha React para Estagiários

Projeto de aula prática para ensinar fundamentos de React com foco em lógica, organização de componentes e uso de hooks.

## Objetivo

Capacitar estagiários a:

- construir interfaces com componentes React;
- manipular estado local e fluxo de eventos;
- trabalhar com listas, formulários, efeitos e requisições;
- aplicar boas práticas de código com TypeScript.

## Público-alvo

- Estagiários iniciando com React.

## Stack do projeto

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM

## Como rodar localmente

Pré-requisitos:

- Node.js 20+ (recomendado)
- pnpm

Instalação e execução:

```bash
pnpm install
pnpm dev
```

## Estrutura principal

```text
.
├─ exercicios/                  # Enunciados em Markdown
├─ src/
│  ├─ App.tsx                   # Landing + rotas dos exercícios
│  ├─ main.tsx                  # Entrada da aplicação
│  └─ exercicios/               # Componentes ExercicioUm...ExercicioDez
├─ .editorconfig                # Padrões de escrita/encoding
└─ .vscode/settings.json        # Configurações locais do VS Code
```

## Fluxo didático da aula

1. O estagiário entra na página inicial (`/`).
2. Escolhe um exercício na seção de navegação.
3. Abre a rota do exercício (`/exercicio-1` ... `/exercicio-10`).
4. Lê o enunciado correspondente em `exercicios/*.md`.
5. Implementa a solução no componente da rota.

## Mapa dos exercícios

| #   | Rota            | Componente        | Enunciado (.md)                               | Foco técnico                                  |
| --- | --------------- | ----------------- | --------------------------------------------- | --------------------------------------------- |
| 01  | `/exercicio-1`  | `ExercicioUm`     | `01-contador-com-limites.md`                  | `useState`, eventos, renderização condicional |
| 02  | `/exercicio-2`  | `ExercicioDois`   | `02-formulario-de-cadastro-simples.md`        | Formulário controlado, validação básica       |
| 03  | `/exercicio-3`  | `ExercicioTres`   | `03-calculadora-de-imc.md`                    | Lógica de cálculo e múltiplos estados         |
| 04  | `/exercicio-4`  | `ExercicioQuatro` | `04-lista-de-tarefas-basica.md`               | Listas com `map` e atualização imutável       |
| 05  | `/exercicio-5`  | `ExercicioCinco`  | `05-filtro-de-produtos.md`                    | Filtro de dados e estado derivado             |
| 06  | `/exercicio-6`  | `ExercicioSeis`   | `06-relogio-com-useeffect.md`                 | `useEffect`, `setInterval`, cleanup           |
| 07  | `/exercicio-7`  | `ExercicioSete`   | `07-busca-de-usuarios-com-api.md`             | Requisições assíncronas e feedback de UI      |
| 08  | `/exercicio-8`  | `ExercicioOito`   | `08-carrinho-componente-pai-filhos.md`        | `props`, lifting state up                     |
| 09  | `/exercicio-9`  | `ExercicioNove`   | `09-custom-hook-usecontador.md`               | Reuso de lógica com custom hooks              |
| 10  | `/exercicio-10` | `ExercicioDez`    | `10-gerenciador-de-tarefas-com-usereducer.md` | `useReducer` e ações previsíveis              |

## Referências oficiais do React

- https://react.dev/learn
- https://react.dev/reference/react
- https://react.dev/reference/react-dom
- https://react.dev/reference/rules
