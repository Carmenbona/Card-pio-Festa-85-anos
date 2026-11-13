import { createFileRoute } from '@tanstack/react-router'
import { CalendarDays, Clock, GlassWater, IceCreamCone, PartyPopper, Sparkles, UtensilsCrossed } from 'lucide-react'

import { ConfirmacaoForm } from '@/components/ConfirmacaoForm'
import { atracoes, bar, cardapio, coqueteis, evento, img, monteSeuDrink, sobremesas } from '@/data/evento'

export const Route = createFileRoute('/')({
  component: Home,
})

const nav = [
  { href: '#jantar', label: 'Jantar' },
  { href: '#drinks', label: 'Drinks' },
  { href: '#sobremesas', label: 'Sobremesas' },
  { href: '#diversao', label: 'Diversão' },
]

function SectionTitle({ eyebrow, title, icon: Icon }: { eyebrow: string; title: string; icon: typeof Sparkles }) {
  return (
    <div className="mb-12 text-center">
      <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--glow)]">
        <Icon className="size-4" /> {eyebrow}
      </p>
      <h2 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
    </div>
  )
}

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--navy)] text-white">
      {/* Navegação */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[var(--navy)]/70 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="font-heading text-lg font-extrabold tracking-tight">
            PEU <span className="text-[var(--glow)]">85</span>
          </a>
          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#confirmar"
            className="rounded-full border border-[var(--glow)]/60 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--glow)] hover:text-[var(--navy)]"
          >
            Confirmar presença
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-16">
        <img
          src={img('capa-peu-85.png', 2000)}
          srcSet={`${img('capa-peu-85.png', 900)} 900w, ${img('capa-peu-85.png', 1400)} 1400w, ${img('capa-peu-85.png', 2000)} 2000w`}
          sizes="100vw"
          alt="PEU 85 anos — Energizando o Futuro"
          className="mx-auto aspect-[3/1] w-full min-h-[260px] object-cover"
        />
        <div className="relative mx-auto -mt-6 max-w-3xl px-5 pb-20 text-center md:-mt-10">
          <h1 className="font-heading text-4xl font-bold tracking-tight md:text-6xl">
            {evento.titulo}
          </h1>
          <p className="mt-5 text-lg text-white/70 md:text-xl">
            Uma noite para celebrar 85 anos de história com jantar completo, bar de drinks, sobremesas
            irresistíveis e muita diversão.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <CalendarDays className="size-4 text-[var(--glow)]" /> {evento.data}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Clock className="size-4 text-[var(--glow)]" /> {evento.duracao}
            </span>
          </div>
          <a
            href="#confirmar"
            className="mt-10 inline-flex rounded-full bg-[var(--glow)] px-8 py-4 font-semibold text-[var(--navy)] shadow-[0_0_50px_-5px_var(--glow)] transition hover:brightness-110"
          >
            Confirmar minha presença
          </a>
        </div>
      </section>

      {/* Jantar */}
      <section id="jantar" className="scroll-mt-20 px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Cardápio" title="O jantar" icon={UtensilsCrossed} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {cardapio.map((grupo) => (
              <div key={grupo.titulo} className="glass rounded-2xl p-6">
                <h3 className="font-heading mb-4 text-lg font-semibold text-[var(--glow)]">{grupo.titulo}</h3>
                <ul className="space-y-2 text-white/80">
                  {grupo.itens.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--glow)]/70" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drinks */}
      <section id="drinks" className="scroll-mt-20 px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Bartender" title="Cardápio de drinks" icon={GlassWater} />
          <div className="grid gap-5 md:grid-cols-3">
            {coqueteis.map((c) => (
              <div key={c.nome} className="glass rounded-2xl p-7 text-center">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">Coquetel clássico</p>
                <h3 className="font-heading mt-2 text-2xl font-bold">{c.nome}</h3>
                <p className="mt-3 text-white/70">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {bar.map((b) => (
              <div key={b.titulo} className="glass rounded-2xl p-6">
                <h3 className="font-heading mb-3 text-lg font-semibold text-[var(--glow)]">{b.titulo}</h3>
                <p className="text-white/80">{b.itens.join(' · ')}</p>
              </div>
            ))}
          </div>
          <div className="glass mt-5 rounded-2xl p-7 md:p-9">
            <h3 className="font-heading text-2xl font-bold">Monte seu drink</h3>
            <p className="mt-1 text-white/60">Escolha sua fruta, seu complemento e deixe o bartender fazer o resto.</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {(
                [
                  ['Frutas', monteSeuDrink.frutas],
                  ['Complementos', monteSeuDrink.complementos],
                ] as const
              ).map(([t, itens]) => (
                <div key={t}>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/50">{t}</p>
                  <div className="flex flex-wrap gap-2">
                    {itens.map((i) => (
                      <span key={i} className="rounded-full border border-[var(--glow)]/30 bg-[var(--glow)]/10 px-3 py-1 text-sm">
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sobremesas */}
      <section id="sobremesas" className="scroll-mt-20 px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Para adoçar a noite" title="Sobremesas" icon={IceCreamCone} />
          <div className="grid gap-6 md:grid-cols-3">
            {sobremesas.map((s) => (
              <PhotoCard key={s.nome} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Diversão */}
      <section id="diversao" className="scroll-mt-20 px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Entretenimento" title="Diversão garantida" icon={PartyPopper} />
          <div className="grid gap-6 md:grid-cols-3">
            {atracoes.map((a) => (
              <PhotoCard key={a.nome} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* Confirmação */}
      <section id="confirmar" className="scroll-mt-20 px-5 py-24">
        <div className="mx-auto max-w-2xl">
          <SectionTitle eyebrow="RSVP" title="Confirme sua presença" icon={Sparkles} />
          <div className="glass rounded-3xl p-6 md:p-10">
            <ConfirmacaoForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 px-5 py-10 text-center text-sm text-white/45">
        <p className="font-heading font-semibold text-white/70">
          {evento.nome} · {evento.slogan}
        </p>
        <p className="mt-1">{evento.data}</p>
      </footer>
    </div>
  )
}

function PhotoCard({ nome, desc, imagem }: { nome: string; desc: string; imagem: string }) {
  return (
    <article className="group glass overflow-hidden rounded-3xl">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={img(imagem, 800)}
          srcSet={`${img(imagem, 500)} 500w, ${img(imagem, 800)} 800w`}
          sizes="(min-width: 768px) 33vw, 100vw"
          alt={nome}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold">{nome}</h3>
        <p className="mt-2 text-white/70">{desc}</p>
      </div>
    </article>
  )
}
