# News backend (Cloudflare Worker)

Pequeno backend para o widget **Today → World news** do site.

- Lê RSS da BBC (EN / PT)
- Devolve JSON limpo
- Cache na edge ~6 horas
- **Grátis** no plano free da Cloudflare
- **Sem API key**

## 1. Criar conta
1. https://dash.cloudflare.com — regista-te (grátis)
2. No terminal (no teu PC):

```bash
npm i -g wrangler
wrangler login
```

## 2. Deploy

```bash
cd news-backend
wrangler deploy
```

No fim aparece um URL tipo:

```text
https://gf-news.<teu-user>.workers.dev
```

## 3. Ligar ao site

No `index.html`, em `CONFIG`:

```js
newsBackendUrl: "https://gf-news.TEU_USER.workers.dev",
```

(sem barra no final)

## 4. Testar

Abre no browser:

```text
https://gf-news.TEU_USER.workers.dev/?lang=en
https://gf-news.TEU_USER.workers.dev/?lang=pt
https://gf-news.TEU_USER.workers.dev/health
```

Deves ver JSON com `items: [{ title, link, pub }, ...]`.

## Endpoint

| Método | URL | Resposta |
|--------|-----|----------|
| GET | `/?lang=en` | Manchetes mundo (BBC World) |
| GET | `/?lang=pt` | Manchetes em português (BBC) |
| GET | `/health` | `{ ok: true }` |

## Notas
- O site ainda tem **cache local** (localStorage) — mesmo se abrirem o Today várias vezes, quase não gera pedidos.
- Não é CNN10 (copyright); é um brief automático de manchetes gerais.
- Se o Worker estiver offline, o site tenta os proxies antigos como fallback.
