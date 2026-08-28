Aqui está a versão em português do tutorial:

```markdown
# 💚 Site para a Namorada: Tutorial para Iniciantes

> Um guia completo para personalizar o seu site — sem precisar de experiência em programação.

**Dica:** Abra este arquivo no VS Code e pressione `Cmd + Shift + V` (Mac) ou `Ctrl + Shift + V` (Windows) para ver em pré-visualização formatada.

---

## 📖 O que você tem

O site é um **único arquivo HTML** chamado `index.html`. Ele contém tudo:

- **Estrutura** (HTML)
- **Design** (CSS)
- **Interações** (JavaScript)
- **O seu conteúdo** (secção CONFIG)

A maior parte do que você vai querer alterar está num só sítio — o objeto `CONFIG` no final do ficheiro. **Não precisa de perceber todo o código.**

---

## 🛠️ 1. Instalar o VS Code no Mac

Se ainda não tem o VS Code:

1. Vá a: https://code.visualstudio.com/
2. Descarregue a versão para Mac
3. Abra o ficheiro e mova o VS Code para a pasta Aplicações
4. Abra o VS Code

**Não precisa de Node.js, Python, Git nem de mais nada só para editar este site.**

---

## 📁 2. Preparar a pasta do projeto

1. Abra o Finder
2. Vá a **Documentos**
3. Crie uma pasta chamada **Girlfriend Website**
4. Coloque o `index.html` dentro dela

A pasta deve ficar assim:

```
Girlfriend Website/
└── index.html
```

### Quando adicionar fotos:

```
Girlfriend Website/
├── index.html
└── photos/
    ├── hero.jpg
    ├── final.jpg
    ├── photo1.jpg
    ├── photo2.jpg
    └── ...
```

---

## 📝 3. Abrir o site no VS Code

1. Abra o VS Code
2. Escolha **File → Open Folder...**
3. Selecione **Documents → Girlfriend Website**
4. Clique em **Open**

No lado esquerdo deve aparecer:

```
Girlfriend Website
└── index.html
```

Clique em `index.html` para abrir.

**Não se preocupe em perceber todo o código.** Para personalizar, só precisa de editar a secção `CONFIG`.

---

## ⭐ 4. A regra mais importante

**Tudo o que é editável está num só sítio.**

Pressione `Cmd + F` (Mac) ou `Ctrl + F` (Windows) e procure:

```javascript
const CONFIG = {
```

É aqui que personaliza:

| O quê | O que alterar |
|------|----------------|
| Nomes | Os vossos nomes |
| Introdução | A mensagem de boas-vindas |
| Datas | Quando começaram a namorar, quando se vão ver |
| Locais | Cidades, coordenadas do tempo |
| Fotos | Foto do hero, foto final |
| Things I Miss | O que sente falta nela |
| "You Made Me Better" | Como ela o ajudou a crescer |
| Little Things | Pequenas coisas que adora |
| Álbum | Fotos e legendas |
| Favoritos | Coisas favoritas |
| Fun Facts | Curiosidades sobre vocês |
| Firsts | Marcos da relação |
| Open When | Mensagens para diferentes momentos |
| Mensagem secreta | Mensagem escondida |
| Quizzes | Perguntas e respostas |
| Música | Playlists e músicas |

---

## ✏️ 5. Como editar com segurança

Vai ver coisas assim:

```javascript
names: { me: "M", her: "Your Name" },
```

**Altere apenas o conteúdo entre aspas:**

```javascript
names: { me: "Thomas", her: "Eduarda" },
```

### ✅ Correto:
```javascript
her: "Eduarda"
```

### ❌ Incorreto:
```javascript
her: Eduarda  // Faltam as aspas!
```

### 🛡️ Regra de ouro:

**Mude o texto, não a estrutura.**

- Mantenha as aspas: `" "`
- Mantenha as vírgulas: `,`
- Mantenha os dois-pontos: `:`
- Mantenha as chavetas e parênteses retos: `{ } [ ]`

Em caso de dúvida, **só mude o que está entre aspas**.

---

## 📊 6. Alterar o contador da relação

Procure:

```javascript
relationshipStart: "2023-06-14T00:00:00",
```

Mude a data para quando a relação começou.

**Formato:** `AAAA-MM-DDTHH:MM:SS`

Exemplo:

```javascript
relationshipStart: "2026-03-15T00:00:00",
```

O contador calcula automaticamente:
- Anos
- Meses
- Dias
- Horas
- Minutos
- Segundos

**Atualiza a cada segundo.** Não precisa de calcular nada à mão.

---

## ⏱️ 7. Alterar a contagem regressiva do reencontro

Procure:

```javascript
reunionDate: "2026-12-20T15:00:00",
```

Mude para a data em que se vão ver outra vez.

**Formato:** `AAAA-MM-DDTHH:MM:SS`

Exemplo:

```javascript
reunionDate: "2026-09-15T18:30:00",
```

Quando chega a zero, o site mostra:

> **Today. Finally. ♥**

---

## 🌍 8. Alterar as cidades

Procure:

```javascript
myLocation:  { city: "São Paulo, Brazil", lat: -23.55, lon: -46.63 },
herLocation: { city: "Lisbon, Portugal",  lat: 38.72, lon: -9.14 },
```

Altere os nomes e as coordenadas.

Exemplo:

```javascript
myLocation:  { city: "Florianópolis, Brazil", lat: -27.59, lon: -48.55 },
herLocation: { city: "San Francisco, USA", lat: 37.77, lon: -122.42 },
```

**Nome da cidade** = O que aparece no site  
**Latitude/Longitude** = Usadas para o tempo (pode obter no Google Maps)

---

## ☀️ 9. Tempo (sem chave de API!)

O site usa **Open-Meteo** — gratuito, sem chave de API.

O tempo usa automaticamente a latitude/longitude das cidades.

**Mostra:**
- Temperatura atual
- Condição do tempo
- “Sensação térmica”
- Humidade

**Efeitos:**
- ☀️ Brilho do sol
- 🌧️ Gotas de chuva
- 🌙 Estrelas à noite

**Atualiza a cada 15 minutos.**

---

## 🌙 10. Fase da lua (sem chave de API!)

A fase da lua é calculada astronomicamente — sem API.

**Mostra:**
- Nome da fase
- Percentagem iluminada
- Visual da lua

**Atualiza a cada hora.**

---

## 📸 11. Adicionar as suas fotos

Procure:

```javascript
photos: {
  hero: null,
  final: null
},
```

1. Crie uma pasta `photos` dentro da pasta do projeto  
2. Coloque as imagens (`.jpg`, `.jpeg`, `.png` ou `.webp`)  
3. Atualize o config:

```javascript
photos: {
  hero: "photos/hero.jpg",
  final: "photos/final.jpg"
},
```

**Importante:** O nome do ficheiro tem de coincidir **exatamente** (incluindo maiúsculas/minúsculas).

---

## 💭 12. "Things I Miss"

Procure:

```javascript
thingsIMiss: [
```

Cada entrada:

```javascript
{ icon: "🤗", text: "Your warm hugs that make everything better.", extra: "" },
```

- `icon`: O emoji mostrado  
- `text`: A mensagem principal  
- `extra`: Segunda mensagem ao clicar (deixe `""` se não houver)

### Exemplo com mensagem extra:

```javascript
{
  icon: "🤗",
  text: "Your warm hugs that make everything better.",
  extra: "I don't think you realize how much I miss them."
},
```

---

## 🌱 13. "You Made Me Better"

Procure:

```javascript
youMadeMeBetter: [
```

Cada parágrafo é uma string separada:

```javascript
youMadeMeBetter: [
  "You helped me become more patient and understanding.",
  "You motivated me to take my goals and studying more seriously.",
  "You made me want to become a better version of myself.",
  "You showed me a deeper kind of love and companionship."
],
```

Adicione, remova ou reescreva quantos quiser.

---

## 💕 14. "Little Things I Love About Us"

Procure:

```javascript
littleThings: [
```

Cada item vira um chip/cartão:

```javascript
littleThings: [
  "Your laugh",
  "Our stupid jokes",
  "Late-night conversations",
  "Being able to be ourselves",
  "Talking about our future"
],
```

Adicione quantos quiser.

---

## 🖼️ 15. Our Album

Procure:

```javascript
album: [
```

O álbum tem **categorias** com **itens**:

```javascript
{
  category: "Us",
  items: [
    { caption: "Us, somewhere ordinary", date: "August 15, 2026", img: "photos/us1.jpg" },
    { caption: "That afternoon we didn't want to end", date: "August 14, 2026", img: "photos/us2.jpg" }
  ]
}
```

**Campos:**
- `category`: Título da secção  
- `caption`: Descrição da foto  
- `date`: Quando foi tirada (opcional)  
- `img`: Caminho da foto  

**As fotos aparecem em grelha** (3 no desktop, 2 no mobile).

---

## ⭐ 16. Favoritos

Procure:

```javascript
favorites: {
```

```javascript
favorites: {
  "Favorite food": "Sushi",
  "Favorite movie": "Interstellar",
  "Favorite song": "Our song",
  "Favorite place": "The beach",
  "Favorite activity": "Late-night drives",
  "Favorite inside joke": "That one thing we never explain"
},
```

Substitua o traço `"—"` pelas respostas reais.

---

## 🎯 17. Fun Facts

Procure:

```javascript
funFacts: [
```

Cada linha vira um cartão:

```javascript
funFacts: [
  "Who said \"I love you\" first: Me",
  "Who is more stubborn: Her",
  "Who takes longer to get ready: Her"
],
```

**Nota:** Use `\"` dentro do texto para aspas.

---

## 📅 18. "Our Firsts"

Procure:

```javascript
firsts: [
```

Cada item tem:

```javascript
{
  title: "First date",
  date: "June 20, 2026",
  desc: "The day everything started feeling a little different."
}
```

Edite ou adicione mais marcos.

---

## ✉️ 19. Mensagens "Open When..."

Procure:

```javascript
openWhen: [
```

Cada mensagem:

```javascript
{
  icon:"💚",
  label:"Open when you're sad",
  title:"Open When You're Sad",
  text:"Your personalized message goes here."
}
```

**Campos:**
- `icon`: Emoji no botão  
- `label`: Texto no botão  
- `title`: Título no popup  
- `text`: A mensagem que ela lê  

### 💡 Ideias:
- Open when you're sad  
- Open when you're missing me  
- Open when you're happy  
- Open when you need motivation  
- Open when you're stressed  
- Open when you can't sleep  
- Open when you're angry  
- Open when you need a hug  
- Open when you're feeling insecure  
- Open when you need to smile  
- Open when you want to remember us  
- Open when you just want to hear from me  

Adicione quantas quiser!

---

## 💚 20. Botão do coração verde

Na página principal há um botão:

> **Click this ♥**

Ao clicar:
- 💚 Corações verdes sobem  
- Aparece a mensagem: "Just a little reminder that I love you. 💚"

**Não precisa de editar nada aqui** — já funciona.

---

## 🤫 21. Mensagem secreta

No rodapé há um coração pequenino `♥`.

**Clique 5 vezes** e aparece uma mensagem secreta.

Para alterar:

```javascript
secretMessage: "There's actually one more thing I wanted you to know..."
```

Escreva algo que só ela compreenda.

---

## ▶️ 22. Como abrir o site

### Método 1: Mais simples (dois cliques)

1. Guarde o ficheiro: `Cmd + S`  
2. Abra o Finder  
3. Vá a: `Girlfriend Website/index.html`  
4. Clique duas vezes para abrir no browser  
5. Atualize a página depois de alterar  

### Método 2: Live Server no VS Code (recomendado)

1. No VS Code, clique em **Extensions** (barra lateral esquerda)  
2. Procure: **Live Server**  
3. Instale  
4. Clique com o botão direito em `index.html` → **Open with Live Server**  
5. O browser abre em: `http://127.0.0.1:5500/index.html`  

**Vantagem:** atualiza sozinho ao guardar.

### Método 3: Servidor Python (para embeds do YouTube)

Algumas funções (como embeds do YouTube) precisam de servidor:

```bash
# Ir à pasta do site
cd ~/Documents/Girlfriend\ Website

# Iniciar o servidor
python3 -m http.server 8000
```

Abra o browser em: `http://localhost:8000`

**Para parar:** `Ctrl + C` no terminal.

---

## ❓ 23. Se algo correr mal

### O site fica totalmente em branco
- Verifique se falta a tag `</script>`  
- Verifique vírgulas ou aspas em falta no CONFIG  

### A foto não aparece
- Está na pasta `photos`?  
- O nome do ficheiro coincide exatamente?  
- O caminho está correto?  

### O tempo não funciona
- Latitude/longitude são números (não texto)?  
- Há internet?  
- Experimente Live Server ou Python em vez de abrir com dois cliques  

### O embed do YouTube não funciona
- **Primeiro:** está a usar um servidor? O YouTube bloqueia embeds em `file://`  
- **Segundo:** o vídeo permite embed? Alguns (ex.: UMG) bloqueiam  

**Teste com um vídeo que funciona:**
```javascript
youtubeId: "5qap5aO4i9A"  // Costuma funcionar sempre
```

Se este funcionar, o código está bem — o problema é esse vídeo em concreto.

### O site parece partido
- Provavelmente apagou uma vírgula, aspas ou parêntese por engano  

### Exemplo de código partido (vírgula em falta):
```javascript
// ❌ PARTIDO
hero: {
  title: "For You"
  subtitle: "Something special"
},

// ✅ CORRIGIDO
hero: {
  title: "For You",
  subtitle: "Something special"
},
```

---

## 🔑 24. Referência rápida: o que NÃO editar

**NÃO edite nada abaixo** do `}` que fecha o objeto CONFIG.

O código abaixo controla:
- Contadores e contagens regressivas  
- Tempo e lua  
- Animações  
- Álbum e lightbox  
- Modais  
- Navegação  
- Lógica dos quizzes  
- Leitor de música  

**Para personalização básica, deixe em paz.**

---

## 📝 25. O seu fluxo de trabalho

**Não tente fazer tudo de uma vez!** Siga esta ordem:

1. **Fazer correr** — Abrir o site com sucesso  
2. **Nomes** — Alterar os nomes  
3. **Datas** — Início da relação, data do reencontro  
4. **Locais** — Cidades, coordenadas  
5. **Fotos** — Hero e foto final  
6. **Conteúdo** — Things I Miss, "You Made Me Better", Little Things  
7. **Álbum** — Fotos e legendas  
8. **Favoritos / Fun Facts / Firsts** — Preencher  
9. **Open When** — Escrever as mensagens  
10. **Mensagem secreta** — Escrever algo especial  
11. **Testar tudo** — Clicar em cada separador, botão e link  

---

## 🧠 26. Modelo mental

```
index.html
│
├── CONFIG ← VOCÊ EDITA ISTO
│   ├── Names
│   ├── Introduction
│   ├── Dates
│   ├── Locations
│   ├── Photos
│   ├── Things I Miss
│   ├── You Made Me Better
│   ├── Little Things
│   ├── Album
│   ├── Favorites
│   ├── Fun Facts
│   ├── Firsts
│   ├── Open When
│   ├── Secret Message
│   ├── QUIZ_DATA ← Perguntas dos quizzes
│   └── playlists ← Playlists de música
│
└── Lógica do site ← DEIXE ISTO EM PAZ
```

---

## 🎵 27. Quizzes: como editar

### Encontrar os quizzes

Dentro do CONFIG (ou perto, no script), procure:

```javascript
const QUIZ_DATA = {
  eduarda: {
    title: { en: "Eduarda Quiz", pt: "Quiz da Eduarda" },
    questions: [
      // Objetos de pergunta aqui
    ]
  },
  thommy: {
    title: { en: "Thommy Quiz", pt: "Quiz do Thommy" },
    questions: [
      // Objetos de pergunta aqui
    ]
  },
  us: {
    title: { en: "Us Together Quiz", pt: "Quiz de Nós Dois" },
    questions: [
      // Objetos de pergunta aqui
    ]
  }
};
```

### Estrutura de uma pergunta

```javascript
{
  q: { en: "Question in English", pt: "Pergunta em português" },
  options: [
    { en: "Option 1 English", pt: "Opção 1 português" },
    { en: "Option 2 English", pt: "Opção 2 português" },
    { en: "Option 3 English", pt: "Opção 3 português" },
    { en: "Option 4 English", pt: "Opção 4 português" }
  ],
  correct: 0  // Índice da resposta certa (0, 1, 2 ou 3)
}
```

### Adicionar uma nova pergunta

```javascript
{
  q: {
    en: "What was the name of our first restaurant date?",
    pt: "Qual era o nome do nosso primeiro restaurante no date?"
  },
  options: [
    { en: "Bistro dos Sete Ais", pt: "Bistro dos Sete Ais" },
    { en: "Arquipélago", pt: "Arquipélago" },
    { en: "McDonald's", pt: "McDonald's" },
    { en: "Artezanno", pt: "Artezanno" }
  ],
  correct: 0
}
```

### Mensagens especiais

```javascript
{
  q: { en: "Who said 'I love you' first?", pt: "Quem disse 'eu te amo' primeiro?" },
  options: [
    { en: "You", pt: "Você" },
    { en: "Me", pt: "Eu" }
  ],
  correct: 0,
  correctSpecial: {
    en: "You got it! 😊",
    pt: "Você acertou! 😊"
  },
  wrongSpecial: {
    en: "Really? It was definitely you! 😂",
    pt: "Sério? Foi definitivamente você! 😂"
  }
}
```

### Perguntas verdadeiro/falso

```javascript
{
  q: { en: "We met in May 2026. True or false?", pt: "A gente se conheceu em maio de 2026. Verdadeiro ou falso?" },
  options: [
    { en: "True", pt: "Verdadeiro" },
    { en: "False", pt: "Falso" }
  ],
  correct: 0  // 0 = Verdadeiro, 1 = Falso
}
```

---

## 🎶 28. Música: como editar playlists

### Encontrar a secção de música

Dentro do CONFIG, procure:

```javascript
playlists: [
  {
    id: "listen-when",
    label: "Listen When…",
    labelPt: "Ouça Quando…",
    description: "Songs for specific moods and moments.",
    descriptionPt: "Músicas para humores e momentos específicos.",
    songs: [
      // Objetos de música aqui
    ]
  }
]
```

### Estrutura da playlist

```javascript
{
  id: "unique-id",        // Tem de ser único (ex.: "our-songs")
  label: "English name",  // Texto do botão em inglês
  labelPt: "Nome em português",
  description: "English description",
  descriptionPt: "Descrição em português",
  songs: [ /* array de músicas */ ]
}
```

### Estrutura de uma música

```javascript
{
  title: "Song Name",
  artist: "Artist Name",
  youtubeId: "XXXXXXXXXXX",  // ID de 11 caracteres do YouTube
  description: "English description",
  descriptionPt: "Descrição em português"
}
```

### Como obter o ID de um vídeo do YouTube

| Tipo de URL | Exemplo | ID |
|-------------|---------|-----|
| Normal | `youtube.com/watch?v=dQw4w9WgXcQ` | `dQw4w9WgXcQ` |
| Curta | `youtu.be/dQw4w9WgXcQ` | `dQw4w9WgXcQ` |
| Com extras | `youtube.com/watch?v=dQw4w9WgXcQ&feature=shared` | `dQw4w9WgXcQ` |

**O ID tem sempre 11 caracteres.**

### Adicionar uma nova playlist

```javascript
{
  id: "road-trip",
  label: "Road Trip Mix",
  labelPt: "Mistura de Viagem",
  description: "Songs for long drives.",
  descriptionPt: "Músicas para viagens longas.",
  songs: [
    {
      title: "Song Name",
      artist: "Artist Name",
      youtubeId: "XXXXXXXXXXX",
      description: "Good driving song.",
      descriptionPt: "Boa música para dirigir."
    }
  ]
}
```

### Problemas com embed do YouTube

| Problema | Solução |
|----------|---------|
| **"Content blocked by UMG"** | Tente outro upload (só áudio, lyric video ou upload de fã) |
| **O vídeo não carrega** | Está a usar um servidor? (Live Server ou Python) |
| **"Embedding disabled"** | O dono do vídeo desativou embeds — procure outro upload |

**Teste com um vídeo conhecido:**
```javascript
youtubeId: "5qap5aO4i9A"  // Costuma funcionar sempre
```

Se este funcionar, o código está bem — o problema é esse vídeo em concreto.

---

## 🚀 29. Publicar com GitHub Pages

1. **Crie uma conta no GitHub** (se ainda não tiver)  
2. **Crie um repositório novo** (público é mais simples para projetos pessoais)  
3. **Envie os ficheiros**:
   - `index.html`
   - pasta `photos/`
4. **Ative o GitHub Pages**:
   - Vá a **Settings → Pages**
   - Em "Build and deployment", escolha:
     - Source: **"Deploy from a branch"**
     - Branch: `main`
     - Folder: `/ (root)`
   - Clique em **Save**
5. **Obtenha o URL** após um ou dois minutos:
   ```
   https://seuusuario.github.io/nome-do-repositorio/
   ```

**Esse é o link que envia a ela!** 🌸

Sempre que atualizar o `index.html` e o reenviar, o site atualiza sozinho em cerca de um minuto.

---

## 🔗 30. Sincronização do Bucket List e das Músicas (opcional)

A aba Bucket List permite adicionar, editar e marcar itens no próprio site.  
A aba Music permite adicionar e apagar músicas.

**Por predefinição:** as alterações ficam só no seu dispositivo.

**Para sincronizar entre os dois:** veja `FIREBASE_SETUP.md` — configuração gratuita de cerca de 10 minutos com Firebase.

---

## 🏁 Conclusão final

**Não está a começar um projeto de programação do zero.**

O seu trabalho é simplesmente:

1. **Abrir** o `index.html`  
2. **Encontrar** `CONFIG = {`  
3. **Personalizar** o conteúdo  
4. **Adicionar** fotos  
5. **Testar** com Live Server ou servidor Python  
6. **Publicar** com GitHub Pages  

**O JavaScript complicado por baixo já faz o trabalho por si.** 💚

---

## 📚 Referência rápida: secções do CONFIG

| Secção | O que altera |
|--------|-------------|
| `names` | Os vossos nomes |
| `hero` | Texto de boas-vindas |
| `relationshipStart` | Quando começaram a namorar |
| `reunionDate` | Quando se vão ver outra vez |
| `myLocation` / `herLocation` | Cidades e tempo |
| `photos` | Fotos hero e final |
| `thingsIMiss` | Coisas de que sente falta nela |
| `youMadeMeBetter` | Como ela o ajudou a crescer |
| `littleThings` | Pequenas coisas que adora |
| `album` | Álbum de fotos |
| `favorites` | Coisas favoritas |
| `funFacts` | Curiosidades sobre vocês |
| `firsts` | Marcos da relação |
| `openWhen` | Mensagens "Open When" |
| `secretMessage` | Mensagem escondida (5 cliques) |
| `QUIZ_DATA` | Perguntas dos quizzes |
| `playlists` | Playlists de música |

---

**Feito com carinho, só para você.** 💚
```