# Estrada Digital

Landing page comercial para desenvolvimento de sites institucionais para motoclubes.

## Executar localmente

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra `http://localhost:3000/motoclubes`. A raiz redireciona automaticamente para essa rota.

## Preparar para publicação

1. Confirme `NEXT_PUBLIC_WHATSAPP_NUMBER` em `.env.local`; o contato padrão é `5561920008828`.
2. Ajuste `NEXT_PUBLIC_SITE_URL` para o domínio final.
3. Ajuste `NEXT_PUBLIC_CASE_URL` caso o endereço do case mude.
4. Para usar a captura real do case, salve o arquivo em `public/images/case-mc-os-papas.png` e configure `NEXT_PUBLIC_CASE_SCREENSHOT=/images/case-mc-os-papas.png`.
5. Execute `npm run build` para validar a versão de produção.

Sem um número configurado, os botões continuam funcionais e abrem o seletor de contatos do WhatsApp com a mensagem de diagnóstico preenchida.

As mensagens identificam a landing page como origem e os CTAs dos pacotes informam automaticamente o plano escolhido.

## Stack

- Next.js com App Router
- TypeScript
- Tailwind CSS
- `next/image` e `next/font` para otimização automática

O projeto não usa bibliotecas de componentes ou ícones: os poucos ícones necessários são SVGs internos, reduzindo JavaScript e dependências.
