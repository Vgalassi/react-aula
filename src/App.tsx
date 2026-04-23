import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import ExercicioCinco from "./exercicios/ExercicioCinco";
import ExercicioDez from "./exercicios/ExercicioDez";
import ExercicioDois from "./exercicios/ExercicioDois";
import ExercicioNove from "./exercicios/ExercicioNove";
import ExercicioOito from "./exercicios/ExercicioOito";
import ExercicioQuatro from "./exercicios/ExercicioQuatro";
import ExercicioSeis from "./exercicios/ExercicioSeis";
import ExercicioSete from "./exercicios/ExercicioSete";
import ExercicioTres from "./exercicios/ExercicioTres";
import ExercicioUm from "./exercicios/ExercicioUm";

type ExerciseLink = {
  id: number;
  nome: string;
  caminho: string;
  arquivo: string;
  foco: string;
};

const exerciseLinks: ExerciseLink[] = [
  {
    id: 1,
    nome: "ExercicioUm",
    caminho: "/exercicio-1",
    arquivo: "01-contador-com-limites.md",
    foco: "useState, eventos e renderização condicional",
  },
  {
    id: 2,
    nome: "ExercicioDois",
    caminho: "/exercicio-2",
    arquivo: "02-formulario-de-cadastro-simples.md",
    foco: "componentes controlados e validação básica",
  },
  {
    id: 3,
    nome: "ExercicioTres",
    caminho: "/exercicio-3",
    arquivo: "03-calculadora-de-imc.md",
    foco: "lógica de cálculo e múltiplos estados",
  },
  {
    id: 4,
    nome: "ExercicioQuatro",
    caminho: "/exercicio-4",
    arquivo: "04-lista-de-tarefas-basica.md",
    foco: "listas com map e atualização imutável",
  },
  {
    id: 5,
    nome: "ExercicioCinco",
    caminho: "/exercicio-5",
    arquivo: "05-filtro-de-produtos.md",
    foco: "filtro de dados e renderização de resultados",
  },
  {
    id: 6,
    nome: "ExercicioSeis",
    caminho: "/exercicio-6",
    arquivo: "06-relogio-com-useeffect.md",
    foco: "efeitos, ciclos e limpeza de intervalo",
  },
  {
    id: 7,
    nome: "ExercicioSete",
    caminho: "/exercicio-7",
    arquivo: "07-busca-de-usuarios-com-api.md",
    foco: "requisições assíncronas e estados de interface",
  },
  {
    id: 8,
    nome: "ExercicioOito",
    caminho: "/exercicio-8",
    arquivo: "08-carrinho-componente-pai-filhos.md",
    foco: "props, lifting state up e composição",
  },
  {
    id: 9,
    nome: "ExercicioNove",
    caminho: "/exercicio-9",
    arquivo: "09-custom-hook-usecontador.md",
    foco: "reuso de lógica com custom hooks",
  },
  {
    id: 10,
    nome: "ExercicioDez",
    caminho: "/exercicio-10",
    arquivo: "10-gerenciador-de-tarefas-com-usereducer.md",
    foco: "estado previsível com useReducer",
  },
];

const referencias = [
  {
    label: "Learn React",
    href: "https://react.dev/learn",
    descricao: "Trilha oficial para aprender React por fundamentos.",
  },
  {
    label: "React API Reference",
    href: "https://react.dev/reference/react",
    descricao: "Documentação de hooks, componentes e APIs centrais.",
  },
  {
    label: "React DOM APIs",
    href: "https://react.dev/reference/react-dom",
    descricao: "APIs para renderização e integração com o DOM.",
  },
  {
    label: "Rules of React",
    href: "https://react.dev/reference/rules",
    descricao: "Boas práticas obrigatórias para componentes e hooks.",
  },
];

const curiosidades = [
  "React foi inicialmente criado no Facebook e apresentado publicamente em 2013.",
  "A ideia de UI declarativa reduziu bastante bugs causados por manipulação manual do DOM.",
  "Hooks chegaram oficialmente no React 16.8 e mudaram a forma de organizar lógica.",
  "Composição de componentes é um dos pilares mais fortes do ecossistema React.",
];

function HomePage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-black px-4 py-10 text-zinc-100 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute -left-16 top-16 h-56 w-56 rounded-full bg-red-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-64 w-64 rounded-full bg-red-600/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black via-zinc-950 to-red-950/70 p-6 shadow-2xl shadow-black/60 sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(127,29,29,0.26),transparent_45%)]" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.35fr_1fr]">
            <div className="space-y-5">
              <p className="inline-flex rounded-full border border-red-400/45 bg-red-500/15 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-red-100 uppercase">
                Trilha React para Estagiários
              </p>
              <h1 className="font-display text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Fundamentos de React na prática, com foco em lógica e visão de
                produto.
              </h1>
              <p className="max-w-3xl text-base leading-relaxed text-zinc-200 sm:text-lg">
                Este projeto foi desenhado para acelerar a formação técnica do
                time, com exercícios progressivos que combinam UI declarativa,
                boas práticas de estado e resolução de problemas reais.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <a
                  href="https://react.dev/learn"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-red-300/35 bg-red-400/10 px-4 py-2 font-semibold text-red-100 transition hover:-translate-y-0.5 hover:bg-red-300/20"
                >
                  Começar pelo Learn React
                </a>
                <a
                  href="https://react.dev/reference/react"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/35 bg-white/5 px-4 py-2 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  Abrir API Reference
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
              <h2 className="font-display text-xl font-semibold text-white">
                Objetivo principal do projeto
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-200">
                Ensinar os fundamentos essenciais do React para estagiários, com
                foco em construção de componentes, manipulação de estado,
                efeitos, reuso de lógica e organização de código orientada à
                clareza.
              </p>
              <dl className="mt-5 grid gap-3 text-sm">
                <div className="rounded-xl border border-white/10 bg-zinc-950/70 p-3">
                  <dt className="text-zinc-400">Criado por</dt>
                  <dd className="mt-1 font-medium text-zinc-100">
                    Felipe Reducino
                  </dd>
                </div>
                <div className="rounded-xl border border-white/10 bg-zinc-950/70 p-3">
                  <dt className="text-zinc-400">Stack da aula</dt>
                  <dd className="mt-1 font-medium text-zinc-100">
                    React 19 + TypeScript + Tailwind CSS + React Router
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 shadow-xl shadow-black/60 sm:p-8">
          <div className="mb-6 flex items-end justify-between gap-3">
            <div>
              <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                Navegação dos Exercícios
              </h2>
              <p className="mt-2 text-sm text-zinc-300">
                Cada rota abre um componente vazio para implementação prática do
                desafio correspondente.
              </p>
            </div>
            <span className="rounded-full border border-red-400/45 bg-red-500/15 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-red-100 uppercase">
              10 módulos
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {exerciseLinks.map((item) => (
              <Link
                key={item.id}
                to={item.caminho}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-950 to-black p-4 transition hover:-translate-y-1 hover:border-red-400/50 hover:shadow-lg hover:shadow-red-950/30"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-zinc-400 uppercase">
                  Exercício {item.id.toString().padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">
                  {item.nome}
                </h3>
                <p className="mt-2 text-sm text-zinc-300">{item.foco}</p>
                <p className="mt-3 text-xs text-red-200/90 group-hover:text-white">
                  Arquivo: exercicios/{item.arquivo}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 shadow-xl shadow-black/60 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-white">
              Referências Oficiais React
            </h2>
            <p className="mt-2 text-sm text-zinc-300">
              Fontes recomendadas para estudar o conteúdo da trilha com material
              atualizado diretamente pelo time do React.
            </p>
            <ul className="mt-5 space-y-3">
              {referencias.map((ref) => (
                <li
                  key={ref.href}
                  className="rounded-xl border border-white/10 bg-zinc-950 p-4"
                >
                  <a
                    href={ref.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-red-200 transition hover:text-white"
                  >
                    {ref.label}
                  </a>
                  <p className="mt-1 text-sm text-zinc-300">{ref.descricao}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 shadow-xl shadow-black/60 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-white">
              Curiosidades para o time
            </h2>
            <p className="mt-2 text-sm text-zinc-300">
              Contexto rápido para ajudar os estagiários a entender o impacto do
              React no mercado.
            </p>
            <ul className="mt-5 space-y-3">
              {curiosidades.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/10 bg-gradient-to-br from-zinc-950 to-black p-4 text-sm leading-relaxed text-zinc-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </main>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/exercicio-1" element={<ExercicioUm />} />
      <Route path="/exercicio-2" element={<ExercicioDois />} />
      <Route path="/exercicio-3" element={<ExercicioTres />} />
      <Route path="/exercicio-4" element={<ExercicioQuatro />} />
      <Route path="/exercicio-5" element={<ExercicioCinco />} />
      <Route path="/exercicio-6" element={<ExercicioSeis />} />
      <Route path="/exercicio-7" element={<ExercicioSete />} />
      <Route path="/exercicio-8" element={<ExercicioOito />} />
      <Route path="/exercicio-9" element={<ExercicioNove />} />
      <Route path="/exercicio-10" element={<ExercicioDez />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
