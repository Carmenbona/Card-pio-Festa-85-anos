import { createFileRoute } from '@tanstack/react-router'
import { CalendarDays, Clock, GlassWater, IceCreamCone, PartyPopper, Sparkles, UtensilsCrossed } from 'lucide-react'

import { atracoes, bar, chope, cardapio, coqueteis, evento, img, monteSeuDrink, sobremesas } from '@/data/evento'

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
        <nav className="mx-auto flex max-w-6xl items-center justify-center gap-5 px-5 py-4 text-sm text-white/70 sm:gap-8">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="transition hover:text-white">
              {n.label}
            </a>
          ))}
        </nav>
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
            <span className="block">{evento.subtitulo}</span>
          </h1>
          <p className="mt-5 text-lg text-white/70 md:text-xl">
            Uma noite para celebrar.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <CalendarDays className="size-4 text-[var(--glow)]" /> {evento.data}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Clock className="size-4 text-[var(--glow)]" /> {evento.horario}
            </span>
          </div>
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
          <div className="glass mb-5 rounded-2xl p-7 text-center">
            <h3 className="font-heading text-2xl font-bold">{chope.nome}</h3>
            <p className="mt-2 text-white/70">{chope.desc}</p>
          </div>
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
              <InfoCard key={s.nome} nome={s.nome} desc={s.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Diversão */}
      <section id="diversao" className="scroll-mt-20 px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Entretenimento" title="Diversão garantida" icon={PartyPopper} />
          <div className="flex flex-wrap justify-center gap-6">
            {atracoes.map((a) => (
              <div key={a.nome} className="w-full md:w-[calc((100%-3rem)/3)]">
                <InfoCard nome={a.nome} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 px-5 py-10 text-center text-sm text-white/45">
        <p className="font-heading font-semibold text-white/70">
          {evento.nome} · {evento.slogan}
        </p>
        <p className="mt-1">
          {evento.data} · {evento.horario}
        </p>
      </footer>
    </div>
  )
}

function InfoCard({ nome, desc }: { nome: string; desc?: string }) {
  return (
    <article className="glass flex h-full flex-col justify-center rounded-3xl p-8 text-center">
      <h3 className="font-heading text-xl font-bold">{nome}</h3>
      {desc && <p className="mt-2 text-white/70">{desc}</p>}
    </article>
  )
}
