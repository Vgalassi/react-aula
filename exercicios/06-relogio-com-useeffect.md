# Exercício 06 - Relógio com useEffect

## 1) Objetivo de aprendizagem
Praticar efeitos colaterais no React, entendendo ciclo de montagem/desmontagem e limpeza de recursos.

## 2) Cenário do problema
Você precisa criar um relógio digital que atualiza automaticamente a cada segundo. Esse componente será usado em um dashboard interno.

## 3) Requisitos funcionais
1. Exibir a hora atual no formato `HH:MM:SS`.
2. Atualizar o horário automaticamente a cada segundo.
3. Iniciar atualização ao montar o componente.
4. Limpar o intervalo ao desmontar o componente.
5. Exibir um botão para mostrar/ocultar o relógio.
6. Garantir que não haja múltiplos intervalos ativos ao mesmo tempo.
7. Manter interface estável sem travamentos.

## 4) Ferramentas e hooks obrigatórios
- `useState`: armazena o horário atual exibido.
- `useEffect`: cria e limpa o `setInterval` no momento correto do ciclo de vida.
- Renderização condicional: permite mostrar ou ocultar o relógio via estado.

## 5) Passo a passo sugerido
1. Crie estado para horário e para controle de visibilidade.
2. Monte a lógica de atualização usando `setInterval`.
3. Coloque a lógica dentro de `useEffect`.
4. Retorne uma função de cleanup para limpar o intervalo.
5. Implemente o botão de mostrar/ocultar componente.

## 6) Critérios de conclusão
- O horário atualiza em tempo real sem atrasos perceptíveis.
- O cleanup é executado corretamente ao desmontar.
- Não há vazamento de intervalos no console/comportamento.
- O botão de visibilidade funciona como esperado.

## 7) Desafio extra (opcional)
Adicionar um seletor para trocar entre formato 24h e 12h.

## 8) Documentação oficial do React
- [useState](https://react.dev/reference/react/useState)
- [useEffect](https://react.dev/reference/react/useEffect)
- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)

