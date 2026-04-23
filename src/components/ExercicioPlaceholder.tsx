import { Link } from "react-router-dom";

type ExercicioPlaceholderProps = {
  titulo: string;
  arquivoMarkdown: string;
};

function ExercicioPlaceholder({
  titulo,
  arquivoMarkdown,
}: ExercicioPlaceholderProps) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-black px-4 py-12 text-zinc-100 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute -left-10 top-14 h-48 w-48 rounded-full bg-red-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-red-600/20 blur-3xl" />

      <section className="mx-auto max-w-2xl rounded-3xl border border-white/15 bg-zinc-950/80 p-8 text-center shadow-2xl shadow-black/70 backdrop-blur-sm sm:p-10">
        <p className="inline-flex rounded-full border border-red-400/45 bg-red-500/15 px-3 py-1 text-xs font-semibold tracking-[0.15em] text-red-100 uppercase">
          Componente de prática
        </p>

        <h1 className="font-display mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {titulo}
        </h1>

        <p className="mt-4 text-base leading-relaxed text-zinc-300">
          Leia o arquivo <span className="rounded bg-black/70 px-2 py-1 text-white border border-white/15">exercicios/{arquivoMarkdown}</span> e implemente a solução neste componente.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-xl border border-red-300/35 bg-red-400/10 px-5 py-2.5 text-sm font-semibold tracking-wide text-red-100 transition hover:-translate-y-0.5 hover:bg-red-300/20"
        >
          VOLTAR
        </Link>
      </section>
    </main>
  );
}

export default ExercicioPlaceholder;


