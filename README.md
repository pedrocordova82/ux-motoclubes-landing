# Estrada Digital

Landing page comercial para desenvolvimento de sites institucionais para motoclubes.

## Executar localmente

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra `http://localhost:3000`.

## Preparar para publicação

1. Preencha `NEXT_PUBLIC_WHATSAPP_NUMBER` em `.env.local` com DDI, DDD e número, apenas dígitos.
2. Ajuste `NEXT_PUBLIC_SITE_URL` para o domínio final.
3. Execute `npm run build` para validar a versão de produção.

Sem um número configurado, os botões continuam funcionais e abrem o seletor de contatos do WhatsApp com a mensagem de diagnóstico preenchida.

## Stack

- Next.js com App Router
- TypeScript
- Tailwind CSS
- `next/image` e `next/font` para otimização automática

O projeto não usa bibliotecas de componentes ou ícones: os poucos ícones necessários são SVGs internos, reduzindo JavaScript e dependências.
