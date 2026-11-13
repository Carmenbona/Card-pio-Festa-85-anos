import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'

type State = 'idle' | 'pending' | 'success' | 'error'

const field =
  'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-[var(--glow)] focus:bg-white/10 focus:ring-2 focus:ring-[var(--glow)]/30'
const label = 'mb-1.5 block text-sm font-medium text-white/75'

export function ConfirmacaoForm() {
  const [state, setState] = useState<State>('idle')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state === 'pending') return
    const body = new URLSearchParams()
    new FormData(event.currentTarget).forEach((value, key) => body.append(key, String(value)))
    setState('pending')
    try {
      const response = await fetch('/confirmacao-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok) throw new Error('Falha no envio')
      if (/\bdata-netlify\s*=/i.test(await response.text())) throw new Error('Formulário indisponível')
      setState('success')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div role="status" className="flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle2 className="size-14 text-[var(--glow)]" />
        <h3 className="font-heading text-2xl font-bold text-white">Presença confirmada!</h3>
        <p className="max-w-sm text-white/70">
          Obrigado! Recebemos sua confirmação. Nos vemos no dia 19 de novembro para celebrar os 85 anos da PEU.
        </p>
      </div>
    )
  }

  return (
    <form
      name="confirmacao"
      method="POST"
      action="/confirmacao-form.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      onChange={() => {
        if (state === 'error') setState('idle')
      }}
    >
      <input type="hidden" name="form-name" value="confirmacao" />
      <p hidden>
        <label>
          Não preencha
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <fieldset disabled={state === 'pending'} className="grid gap-5 sm:grid-cols-2">
        <legend className="sr-only">Dados da confirmação</legend>
        <div className="sm:col-span-2">
          <label htmlFor="nome" className={label}>Nome completo</label>
          <input id="nome" name="nome" autoComplete="name" required maxLength={120} className={field} placeholder="Seu nome" />
        </div>
        <div>
          <label htmlFor="email" className={label}>E-mail</label>
          <input id="email" name="email" type="email" autoComplete="email" required maxLength={254} className={field} placeholder="voce@email.com" />
        </div>
        <div>
          <label htmlFor="telefone" className={label}>Telefone / WhatsApp</label>
          <input id="telefone" name="telefone" type="tel" autoComplete="tel" maxLength={30} className={field} placeholder="(00) 00000-0000" />
        </div>
        <div>
          <label htmlFor="adultos" className={label}>Adultos (incluindo você)</label>
          <input id="adultos" name="adultos" type="number" min={1} max={20} defaultValue={1} required className={field} />
        </div>
        <div>
          <label htmlFor="criancas" className={label}>Crianças</label>
          <input id="criancas" name="criancas" type="number" min={0} max={20} defaultValue={0} className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="observacoes" className={label}>Restrições alimentares ou observações</label>
          <textarea id="observacoes" name="observacoes" rows={3} maxLength={1000} className={field} placeholder="Opcional" />
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--glow)] px-8 py-4 font-semibold text-[#020b2a] shadow-[0_0_40px_-5px_var(--glow)] transition hover:brightness-110 disabled:opacity-60"
          >
            {state === 'pending' && <Loader2 className="size-4 animate-spin" />}
            {state === 'pending' ? 'Enviando…' : 'Confirmar presença'}
          </button>
        </div>
      </fieldset>
      {state === 'error' && (
        <p role="alert" className="mt-4 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          Não foi possível confirmar o envio. Seus dados continuam aqui — tente novamente em instantes.
        </p>
      )}
    </form>
  )
}
