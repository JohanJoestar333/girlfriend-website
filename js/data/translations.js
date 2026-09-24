/* ================================================================
   TRANSLATIONS — js/data/translations.js
   ----------------------------------------------------------------
   The site is bilingual (English / Portuguese). Text written in CONFIG
   and in the HTML is English; tr() in app.js looks each string up here
   when Portuguese is selected. Anything missing falls back to English.

   PT_TRANSLATIONS   "English text": "Texto em português"
   PT_FIRST_DESC     Portuguese descriptions for the "Our Firsts" timeline

   To translate new text, add one line to PT_TRANSLATIONS.
   ================================================================ */

const PT_TRANSLATIONS = {
  // Navigation / buttons / section headings
  "Our Story": "Nossa História",
  "Our Album": "Nosso Álbum",
  Us: "Nós",
  "Open When...": "Abra Quando...",
  "Bucket List": "Lista de Desejos",
  Quizzes: "Quizzes",
  Music: "Músicas",
  "Our Games": "Nossos Jogos",
  "Photo Booth": "Cabine de fotos",
  "A little collection, just for us": "Uma pequena coleção, só nossa",
  "Five decks, five different feelings. Pick one and draw a card.":
    "Cinco baralhos, cinco sensações diferentes. Escolha um e puxe uma carta.",
  "Random": "Aleatório",
  "♡ My Favorites": "♡ Meus Favoritos",
  "My Favorites": "Meus Favoritos",
  "Card of the Day": "Carta do Dia",
  Categories: "Categorias",
  Rounds: "Rodadas",
  "∞ Endless": "∞ Sem Fim",
  "All categories": "Todas as categorias",
  "Select one or more categories": "Selecione uma ou mais categorias",
  "Start Game": "Começar Jogo",
  "← Back to Our Games": "← Voltar aos Nossos Jogos",
  "Exit": "Sair",
  Skip: "Pular",
  "Next Card →": "Próxima Carta →",
  "End game & see summary": "Terminar e ver o resumo",
  "Play Again": "Jogar de Novo",
  "Our Game Stats": "Estatísticas dos Nossos Jogos",
  "Total cards played": "Total de cartas jogadas",
  "No favorites yet — tap ♡ on any card to save it here.":
    "Ainda sem favoritos — toque em ♡ em qualquer carta para guardá-la aqui.",
  "Nicely played ♥": "Muito bem jogado ♥",
  "Cards played": "Cartas jogadas",
  Matches: "Combinações",
  Disasters: "Desastres",
  "Prediction accuracy": "Precisão da previsão",
  "Predict my answer first": "Prever minha resposta primeiro",
  "Did the prediction match?": "A previsão bateu?",
  "Both answered — did you match?": "Os dois responderam — vocês combinaram?",
  "🎯 Match!": "🎯 Combinou!",
  "😂 Disaster!": "😂 Desastre!",
  cards: "cartas",
  "Really Know Us": "Conhecer de Verdade",
  Deep: "Profundo",
  "Meaningful questions about memories, values, and each other.":
    "Perguntas significativas sobre memórias, valores e sobre vocês dois.",
  "You or Me?": "Você ou Eu?",
  "Would You Rather": "Prefere Que",
  "Impossible choices, funny and romantic. Discuss, then reveal.":
    "Escolhas impossíveis, engraçadas e românticas. Conversem e depois revelem.",
  "After Dark": "Depois do Anoitecer",
  Flirty: "Flerte",
  "Playful, romantic, and a little bold. Skip anything, anytime.":
    "Brincalhão, romântico e um pouco ousado. Pule qualquer carta, a qualquer momento.",
  "Couple Chaos": "Caos do Casal",
  Chaos: "Caos",
  "Ridiculous scenarios. Answer secretly, then see if you match.":
    "Cenários ridículos. Respondam em segredo e vejam se combinam.",
  Someday: "Um Dia",
  Future: "Futuro",
  "Dream about the life you're building together.":
    "Sonhem com a vida que estão construindo juntos.",
  "Press play": "Aperte o play",
  "Songs for every mood — ours, yours, and everything in between.":
    "Músicas para cada humor — nossas, suas e tudo no meio.",
  "Now playing": "Tocando agora",
  "No songs in this playlist yet.": "Ainda não há músicas nesta playlist.",
  "Synced — songs save for both of you.":
    "Sincronizado — as músicas ficam salvas para nós dois.",
  "Not synced yet — songs only stay on this device.":
    "Ainda não sincronizado — as músicas ficam apenas neste dispositivo.",
  "Add a song": "Adicionar música",
  "Add song": "Adicionar",

  "Test your memory": "Teste sua memória",
  "How well do you really know us? Pick a quiz and find out.":
    "Quão bem você realmente nos conhece? Escolha um quiz e descubra.",
  "Eduarda Quiz": "Quiz da Eduarda",
  "Thommy Quiz": "Quiz do Thommy",
  "Us Together": "Nós Dois",
  "15 questions about her": "15 perguntas sobre ela",
  "15 questions about him": "15 perguntas sobre ele",
  "15 questions about us": "15 perguntas sobre nós",
  "← Back to quizzes": "← Voltar aos quizzes",
  "Next →": "Próxima →",
  "Try again": "Tentar de novo",
  "← All quizzes": "← Todos os quizzes",
  Results: "Resultado",
  "Final score": "Resultado final",
  "Explore Our Story ♥": "Explore Nossa História ♥",
  "Today ♥": "Hoje ♥",
  "Explore Our Story": "Explore Nossa História",
  "Right now": "Agora",
  Today: "Hoje",
  "Tap to open": "Toque para abrir",
  "Tap to close": "Toque para fechar",
  "A little snapshot of us — news, a daily quote, mood, plans & notes.":
    "Um resumo de nós — notícias, frase do dia, mood, planos e notas.",
  "A little snapshot of us — news, mood, plans & notes.":
    "Um resumo de nós — notícias, frase do dia, mood, planos e notas.",
  "World news today": "Notícias do dia",
  "On this day": "Nesse dia",
  "Quote of the day": "Frase do dia",
  "Loading quote…": "A carregar a frase…",
  Unsave: "Tirar dos guardados",
  Save: "Guardar",
  "Loading headlines…": "A carregar manchetes…",
  "Our mood": "Nosso humor",
  "On the calendar": "No calendário",
  "Latest day card": "Último cartão",
  days: "dias",
  hrs: "hrs",
  min: "min",
  "Pick a mood": "Escolhe um humor",
  "Together, in numbers": "Juntos, em números",
  "How Long We've Been Us": "Há Quanto Tempo Estamos Juntos",
  "The wait is almost over": "A espera está quase acabando",
  "Until I See You Again": "Até Eu Te Ver de Novo",
  "For now, though": "Por enquanto",
  "Where We Are": "Onde Estamos",
  "Different places. Same moon. Same love. Just counting the days until we're together again.":
    "Lugares diferentes. A mesma lua. O mesmo amor. Só contando os dias até estarmos juntos de novo.",
  "No more distance. Just us now. ♥":
    "Sem mais distância. Agora somos só nós. ♥",
  "Together ♥": "Juntos ♥",
  "Right now": "Agora",
  "What the Sky Looks Like Where We Are": "Como Está o Céu Onde Estamos",
  "Look up": "Olhe para cima",
  "The Same Moon": "A Mesma Lua",
  "No matter how far apart we are, there's something comforting about knowing we're still under the same moon.":
    "Não importa quão longe estejamos, há algo reconfortante em saber que ainda estamos sob a mesma lua.",
  "Small things, mostly": "Pequenas coisas, principalmente",
  "Things I Miss About You": "Coisas de Que Sinto Falta em Você",
  "There are so many little things I miss. Some are big. Most are actually incredibly simple.":
    "Há tantas coisinhas de que sinto falta. Algumas são grandes. A maioria, na verdade, é bem simples.",
  "The real reason": "O verdadeiro motivo",
  "You Made Me Better": "Você Me Tornou uma Pessoa Melhor",
  "Just because": "Só porque sim",
  "Little Things I Love About Us": "Pequenas Coisas que Amo na Nossa História",
  "Click this ♥": "Clique aqui ♥",
  "Just a little reminder that I love you. 💚":
    "Só um pequeno lembrete de que eu te amo. 💚",
  "A little collection": "Um pequeno cantinho",
  "Our Little Collection": "Nossa Pequena Coleção",
  "Some of my favorite memories of us.":
    "Algumas das minhas lembranças favoritas de nós.",
  "According to us": "Segundo nós",
  "Us, According to Us": "Nós, Segundo Nós",
  "Our Favorites": "Nossos Favoritos",
  "Fun Facts About Us": "Curiosidades Sobre Nós",
  "Our Firsts": "Nossos Primeiros",
  "More memories being made...": "Mais memórias sendo criadas...",
  "For when I can't be there": "Para quando eu não puder estar aí com você",
  "Open When You Need Me": "Abra Quando Precisar de Mim",
  "For the moments when I can't physically be there, but I still want to be there for you.":
    "Para aqueles momentos em que eu não puder estar aí de verdade, mas ainda quiser estar pertinho de você.",
  "Everything we still want to do": "Tudo que ainda queremos fazer",
  "Our Bucket List": "Nossa Lista de Coisas que Queremos Fazer",
  "A running list of the places we want to see, the things we want to try, and the little (and big) adventures we're saving for each other.":
    "Uma lista dos lugares que ainda queremos conhecer, das coisas que queremos experimentar e das pequenas (e grandes) aventuras que ainda temos pela frente.",
  "Add something to the list...": "Adicione alguma coisa à lista...",
  "Add": "Adicionar",
  "What we're watching together": "O que estamos assistindo juntos",
  "Movie Nights": "Noites de Cinema",
  "Search for a movie to add it to our watchlist, then move it over and rate it together once we've actually watched it.":
    "Pesquise um filme para adicioná-lo à nossa lista, depois mova-o e avaliem juntos assim que tiverem assistido.",
  "Search for a movie...": "Pesquise um filme...",
  Search: "Pesquisar",
  "To Watch": "Para Assistir",
  Watched: "Assistidos",
  "Nothing queued up yet — search for a movie above.":
    "Nada na fila ainda — pesquise um filme acima.",
  "Nothing watched yet — move something over once you've seen it.":
    "Nada assistido ainda — mova um filme assim que tiverem visto.",
  "No movies found — try a different title.":
    "Nenhum filme encontrado — tente outro título.",
  "+ Add": "+ Adicionar",
  "Turn on camera": "Ligar a câmara",
  "Continue to camera": "Continuar para a câmara",
  "Start countdown": "Iniciar contagem",
  "Mark as watched": "Marcar como assistido",
  "Move back to watchlist": "Mover de volta pra lista",
  Remove: "Remover",
  Average: "Média",
  "Made with love, just for you.": "Feito com carinho, só para você.",
  Years: "Anos",
  Months: "Meses",
  Days: "Dias",
  Hours: "Horas",
  Minutes: "Minutos",
  Seconds: "Segundos",
  "And somehow, every day with you still feels like something I want more of.":
    "E, de algum jeito, cada dia com você ainda me faz querer viver mais um pouquinho da vida ao seu lado.",
  "loading sky...": "carregando o céu...",
  "Weather unavailable right now.": "Não foi possível carregar o clima agora.",
  "Clear skies": "Céu limpo",
  Cloudy: "Nublado",
  Rainy: "Chuvoso",
  Snowy: "Nevando",
  Thunderstorms: "Tempestades",
  Foggy: "Nebuloso",
  "Clear night": "Noite limpa",
  "Feels like": "Sensação de",
  "Weather": "Clima",
  "New Moon": "Lua Nova",
  "Waxing Crescent": "Lua Crescente",
  "First Quarter": "Lua Quarto Crescente",
  "Waxing Gibbous": "Gibosa Crescente",
  "Full Moon": "Lua Cheia",
  "Waning Gibbous": "Gibosa Minguante",
  "Last Quarter": "Quarto Minguante",
  "Waning Crescent": "Lua Minguante",
  illuminated: "iluminada",
  "You found it. ": "Você encontrou. ",
  "Nothing here yet — add the first thing above.":
    "Nada aqui ainda — adicione a primeira coisa acima.",
  "Mark as not done": "Marcar como não concluído",
  "Mark as done": "Marcar como concluído",
  Edit: "Editar",
  Delete: "Excluir",
  done: "concluídos",
  "Move up": "Mover para cima",
  "Move down": "Mover para baixo",
  "Synced — changes save for both of you.":
    "Sincronizado — as mudanças ficam salvas para nós dois.",
  "Not synced yet — changes only stay on this device.":
    "Ainda não sincronizado — as mudanças ficam apenas neste dispositivo.",
  "Today. Finally. ♥": "Hoje. Finalmente. ♥",
  "Different places. Same moon. Same love. Just counting the days until we're together again.":
    "Lugares diferentes. A mesma lua. O mesmo amor. Só contando os dias até estarmos juntos de novo.",
  "add photo in CONFIG.album": "adicione a foto em CONFIG.album",
  "replace with": "troque por",
  "your favorite": "sua foto favorita",
  "photo of you two": "de vocês dois",
  "our photo": "nossa foto",
  "probably working on something.": "provavelmente fazendo alguma coisa.",

  // Final section / closing message
  "One more thing": "Mais uma coisa",
  "Until Then...": "Até lá...",
  "Until I can hold you again, I'll keep collecting little moments, memories, pictures, and reasons to look forward to the next one.":
    "Até poder te abraçar de novo, vou continuar colecionando pequenos momentos, lembranças, fotos e motivos para esperar ansiosamente pelo nosso próximo encontro.",
  "Thank you for being you.": "Obrigado por ser você.",
  "See you soon. ♥": "Até logo. ♥",

  // Personal CONFIG content
  "a little place that's just ours": "um cantinho que é só nosso",
  "For You, My Love": "Para Você, Meu Amor",
  "A collection of the moments, feelings, memories, and little things that make us... us.":
    "Uma coleção dos momentos, sentimentos, lembranças e pequenas coisas que fazem a nossa história ser o que é.",
  "Sometimes I wish I could put everything I feel for you into words. Since I can't, I made you a little place where some of those feelings can live.":
    "Às vezes eu queria conseguir colocar em palavras tudo o que sinto por você. Como nem sempre consigo, criei um cantinho onde pelo menos um pouco disso pode ficar.",
  "Your warm hugs that make everything better.":
    "Seus abraços quentinhos que fazem tudo parecer melhor.",
  "Hearing your voice in person, not through a screen.":
    "Ouvir sua voz de perto, e não através de uma tela.",
  "Our late-night conversations face to face.":
    "Nossas conversas de madrugada, nós dois ali, cara a cara.",
  "Waking up next to you in the morning.": "Acordar ao seu lado.",
  "Holding your hand while we walk together.":
    "Segurar sua mão enquanto a gente caminha.",
  "Your laugh that fills the room with joy.":
    "Sua risada enchendo o ambiente inteiro.",
  "The way you look at me when you're happy.":
    "O jeito que você olha para mim quando está feliz.",
  "Just being in the same room as you.": "Só estar no mesmo lugar que você.",
  "Every little moment we share together.":
    "Cada pequeno momento que a gente vive junto.",
  "One of the things I value most about you is how you've helped me grow. You've made me more patient, more mature, more understanding.":
    "Uma das coisas que mais valorizo em você é o quanto você me ajudou a crescer. Com você, aprendi a ter mais paciência, mais maturidade e mais compreensão.",
  "You motivated me to take my goals seriously, to study harder, to actually follow through on the things I say I want.":
    "Você me motivou a levar meus objetivos mais a sério, estudar mais e realmente correr atrás daquilo que eu digo que quero.",
  "You made me want to become a better person, not because you asked me to, but because being around you made it feel worth it.":
    "Você me fez querer ser uma pessoa melhor, não porque me pediu isso, mas porque estar ao seu lado me fez querer evoluir por mim mesmo.",
  "You taught me to appreciate consistency and slow, quiet growth over grand gestures.":
    "Você me ensinou a valorizar a constância e aquele crescimento tranquilo, aos poucos, em vez de achar que tudo precisa ser um grande gesto.",
  "And more than anything, you helped me understand a deeper kind of love, one that isn't only about big romantic moments, but about becoming someone who supports, listens, understands, and grows alongside another person.":
    "E, mais do que tudo, você me ajudou a entender um tipo mais profundo de amor — não só pelos grandes momentos românticos, mas por aprender a apoiar, ouvir, entender e crescer ao lado de alguém.",
  "Your laugh": "Sua risada",
  "Our stupid jokes": "Nossas piadas sem noção",
  "Late-night conversations": "Conversas de madrugada",
  "Being able to be ourselves": "Poder ser a gente mesmo",
  "Getting excited about seeing each other":
    "A ansiedade boa de nos vermos de novo",
  "The way we miss each other": "O jeito que a gente sente saudade um do outro",
  "Doing absolutely nothing together": "Não fazer absolutamente nada, juntos",
  "Talking about our future": "Falar sobre nosso futuro",
  "Making memories out of ordinary days":
    "Transformar dias comuns em lembranças",
  Us: "Nós",
  "Favorite Memories": "Memórias Favoritas",
  "Foods We've Eaten": "Comidas que Já Comemos",
  "Places We've Been": "Lugares Onde Já Fomos",
  "Polaroid Pictures": "Fotos Polaroid",
  "Party Pictures": "Fotos de Festa",
  "Our Memories": "Nossas Lembranças",
  "— add your own!": "— adicione as suas!",
  "Add a photo": "Adicionar uma foto",
  "Choose which album it belongs to.": "Escolha a que álbum ela pertence.",
  Album: "Álbum",
  Calendar: "Calendário",
  "Day Cards": "Cartões do dia",
  "Little notes": "Bilhetes",
  "Write each other something during the day. Cards expire after 24 hours.":
    "Escrevam um ao outro durante o dia. Os cartões expiram em 24 horas.",
  "Your message": "A tua mensagem",
  "Thinking of you…": "A pensar em ti…",
  "Thinking of you… (optional if you send audio)":
    "A pensar em ti… (opcional se enviares áudio)",
  "Send card": "Enviar cartão",
  "No cards yet — leave the first one above.":
    "Ainda sem cartões — deixa o primeiro em cima.",
  "Clear audio": "Limpar áudio",
  "Upload audio": "Enviar áudio",
  "Optional: use Kikivoice (cloned voice)":
    "Opcional: usar Kikivoice (voz clonada)",
  Listen: "Ouvir",
  Save: "Guardar",
  Saved: "Guardado",
  "Expires in": "Expira em",
  From: "De",
  Record: "Gravar",

  More: "Mais",
  All: "Todos",
  Both: "Os dois",
  "Both of us": "Os dois",
  "From bucket list (optional)": "Da bucket list (opcional)",
  "— None —": "— Nenhum —",
  "Add to calendar": "Agendar no calendário",

  "New album": "Novo álbum",
  "Create a folder for new memories — it appears in the list above when you upload.":
    "Cria uma pasta para novas lembranças — aparece na lista quando enviares fotos.",
  "Album name": "Nome do álbum",
  "e.g. Trip to the beach": "ex.: Viagem à praia",
  "Add album": "Adicionar álbum",
  "Our schedules": "Nossas agendas",
  "Shared Calendar": "Calendário Compartilhado",
  "See each other's plans so we know when to text — and when to wait.":
    "Veja os planos um do outro pra saber quando mandar mensagem — e quando esperar.",
  Both: "Os dois",
  "Add to the calendar": "Adicionar ao calendário",
  What: "O quê",
  Who: "Quem",
  "Start (optional)": "Início (opcional)",
  "End (optional)": "Fim (opcional)",
  "Notes (optional)": "Notas (opcional)",
  "Add event": "Adicionar evento",
  "Select a day": "Selecione um dia",
  "No plans this day.": "Nada agendado neste dia.",
  "Class, work, study, date night…": "Aula, trabalho, estudo, date…",
  "Don't call during this, or free after…":
    "Não ligar durante isso, ou livre depois…",
  "Edit event": "Editar evento",
  "Save event": "Salvar evento",
  Repeat: "Repetir",
  "Does not repeat": "Não se repete",
  "Every day": "Todos os dias",
  "Every week": "Toda semana",
  "Every month": "Todo mês",
  "Every year": "Todos os anos",
  "Repeat until (optional)": "Repetir até (opcional)",
  "Event added.": "Evento adicionado.",
  "Event updated.": "Evento atualizado.",
  "Event deleted.": "Evento apagado.",
  "(repeats)": "(repete)",
  Icon: "Ícone",
  "● Normal": "● Normal",
  "■ Hangout": "■ Encontro",
  "★ Important": "★ Importante",
  "♥ Special": "♥ Especial",

  "Choose a photo": "Escolha uma foto",
  Caption: "Legenda",
  "Date (optional)": "Data (opcional)",
  "Add Memory": "Adicionar Lembrança",
  "Converting & uploading...": "A converter e enviar...",
  "WebP is not allowed. Use JPEG or PNG (PNG is auto-converted to JPEG).":
    "WebP não é permitido. Usa JPEG ou PNG (PNG vira JPEG automaticamente).",
  "Choose a photo first.": "Escolha uma foto primeiro.",
  "Choose an album.": "Escolha um álbum.",
  "Unsorted (pick an album next time)": "Sem álbum (escolha um ao reenviar)",
  "Sem álbum (escolha um ao reenviar)": "Sem álbum (escolha um ao reenviar)",

  "Us, somewhere ordinary": "Nós, em algum lugar comum",
  "That afternoon we didn't want to end":
    "Aquela tarde que não queríamos que acabasse",
  "Us, mid-phonecall": "Nós, no meio de uma ligação",
  "Us, kissing": "Nós, nos beijando",
  "Our last date togheter": "Nosso último encontro",
  "A very good day": "Um dia muito bom",
  "Restaurant at Sao Jose": "Restaurante em São José",
  "Restaurant at Lagoa": "Restaurante na Lagoa",
  "Restaurant at Santa Monica": "Restaurante em Santa Monica",
  "Restaurant at Rio Tavarez": "Restaurante no Rio Tavares",
  "Starbucks do Iguatemi": "Starbucks do Iguatemi",
  "Match And Hotchocolate at PB": "Matcha e chocolate quente no PB",
  "First Homemade Meal": "Nossa Primeira Refeição Feita em Casa",
  "Miami Red String Teory": "Teoria do Fio Vermelho em Miami",
  "That one Airbnb": "Aquele Airbnb",
  "Polaroid one": "Polaroid um",
  "Polaroid two": "Polaroid dois",
  "Polaroid three": "Polaroid três",
  "Polaroid four": "Polaroid quatro",
  "Toma Tudo": "Toma Tudo",
  Spartano: "Spartano",
  "Favorite food": "Comida favorita",
  "Favorite color": "Cor favorita",
  "Favorite song": "Música favorita",
  "Favorite soocer team": "Time de futebol favorito",
  "Favorite hour": "Horário favorito",
  "Favorite weekday": "Dia da semana favorito",
  'Who said \"I love you\" first: Thommy':
    'Quem disse \"eu te amo\" primeiro: Thommy',
  "Who is more stubborn: Fiel": "Quem é mais teimoso: Fiel",
  "Who takes longer to shower: Thommy":
    "Quem demora mais para tomar banho: Thommy",
  "Who is more likely to fall asleep first: Thommy":
    "Quem tem mais chance de dormir primeiro: Thommy",
  "Who eats more: Fiel": "Quem come mais: Fiel",
  "Who has the better tan: Thommy": "Quem tem o bronzeado melhor: Thommy",
  "Who is more dramatic: Fiel": "Quem é mais dramático: Fiel",
  "Who misses the other person more: Thommy": "Quem sente mais saudade: Thommy",
  "First time we met": "Primeira vez que nos conhecemos",
  "First conversation": "Primeira conversa",
  "First date": "Primeiro encontro",
  "First photo together": "Primeira foto juntos",
  "First trip": "Primeira viagem",
  "First time we had to be apart": "Primeira vez que ficamos separados",
  "At 3 a.m. in front of a closed mall. After the party, I picked you and Mary up with Lucca. My first impression was that you were beautiful—but also a little shy.":
    "Às 3 da manhã, em frente a um shopping fechado. Depois da festa, busquei você e a Mary com o Lucca. Minha primeira impressão foi que você era linda — mas também um pouco tímida.",
  "At the apartment in Novo Campeche, just the two of us on the couch, talking about all kinds of things. You were smart, funny, and kind. I was nervous because you didn’t laugh much at my jokes.":
    "No apartamento no Novo Campeche, só nós dois no sofá, conversando sobre todo tipo de coisa. Você era inteligente, engraçada e gentil. Eu estava nervoso porque você não ria muito das minhas piadas.",
  "Open when you're sad": "Abra quando estiver triste",
  "Open when you're missing me": "Abra quando estiver com saudade de mim",
  "Open when you're happy": "Abra quando estiver feliz",
  "Open when you need motivation": "Abra quando precisar de motivação",
  "Open when you're stressed": "Abra quando estiver estressada",
  "Open when you can't sleep": "Abra quando não conseguir dormir",
  "Open when you're angry": "Abra quando estiver com raiva",
  "Open when you need a hug": "Abra quando precisar de um abraço",
  "Open when you're feeling insecure":
    "Abra quando estiver se sentindo insegura",
  "Open when you need to smile": "Abra quando precisar sorrir",
  "Open when you want to remember us": "Abra quando quiser lembrar da gente",
  "Open when you just want to hear from me":
    "Abra quando só quiser ouvir um pouquinho de mim",
  "Open when you're overwhelmed": "Abra quando estiver sobrecarregada",
  "Open when you feel like giving up": "Abra quando sentir vontade de desistir",
  "Open when you did something you're proud of":
    "Abra quando estiver orgulhosa de algo que fez",
  "Open when you're homesick": "Abra quando estiver com saudades de casa",
  "Open when you need a distraction": "Abra quando precisar de uma distração",
  "Open when it's a bad day": "Abra quando for um dia ruim",
  "Open When You're Sad": "Abra Quando Você Estiver Triste",
  "Open When You're Missing Me": "Abra Quando Estiver Com Saudade de Mim",
  "Open When You're Happy": "Abra Quando Você Estiver Feliz",
  "Open When You Need Motivation": "Abra Quando Precisar de Motivação",
  "Open When You're Stressed": "Abra Quando Estiver Estressada",
  "Open When You Can't Sleep": "Abra Quando Não Conseguir Dormir",
  "Open When You're Angry": "Abra Quando Estiver Com Raiva",
  "Open When You Need a Hug": "Abra Quando Precisar de Um Abraço",
  "Open When You're Feeling Insecure":
    "Abra Quando Estiver Se Sentindo Insegura",
  "Open When You Need to Smile": "Abra Quando Precisar Sorrir",
  "Open When You Want to Remember Us": "Abra Quando Quiser Lembrar de Nós",
  "Open When You Just Want to Hear From Me":
    "Abra Quando Só Quiser Ouvir de Mim",
  "Open When You're Overwhelmed": "Abra Quando Estiver Sobrecarregada",
  "Open When You Feel Like Giving Up": "Abra Quando Sentir Vontade De Desistir",
  "Open When You Did Something You're Proud Of":
    "Abra Quando Estiver Orgulhosa De Algo Que Fez",
  "Open When You're Homesick": "Abra Quando Estiver Com Saudades De Casa",
  "Open When You Need a Distraction": "Abra Quando Precisar De Uma Distração",
  "Open When It's a Bad Day": "Abra Quando For Um Dia Ruim",
  "Hey. I know I can't be there to hug you right now, and I wish I could change that. But please remember that whatever you're going through, you don't have to carry it alone. Take a breath, give yourself some time, and remember that there's someone out here who cares about you more than you probably realize. And if none of that works... come here. Big virtual hug. ♥":
    "Ei. Eu sei que não posso estar aí para te dar um abraço agora, e queria muito poder mudar isso. Mas, seja lá pelo que você estiver passando, você não precisa enfrentar tudo sozinha. Respira, dá um tempinho para você e lembra que tem alguém aqui que se importa com você mais do que talvez você perceba. E se nada disso funcionar... vem cá. Um abraço virtual bem apertado. ♥",
  "I miss you too. Probably more than I know how to explain. But instead of thinking about how far apart we are, think about everything we're going to do when we're together again. Every hug, every conversation, every stupid little moment. We're getting closer to that moment every day.":
    "Eu também estou com saudade. Provavelmente mais do que consigo explicar. Mas, em vez de pensar na distância, pensa em tudo que a gente vai fazer quando estiver junto de novo. Cada abraço, cada conversa, cada momento bobo. A cada dia, estamos um pouquinho mais perto disso.",
  "I hope you stay in this moment for a while. Seeing you happy is one of my favorite things in the world. Whatever made you smile today, I hope you get a thousand more reasons to smile tomorrow.":
    "Espero que você aproveite esse momento por um tempinho. Ver você feliz é uma das minhas coisas favoritas no mundo. Seja o que for que te fez sorrir hoje, espero que amanhã apareçam mil motivos a mais para você sorrir.",
  "Remember who you are and how much you're capable of. You don't have to have everything figured out today. Just take the next step. I'm proud of you, and I'll always be cheering for you.":
    "Lembra de quem você é e de tudo o que é capaz de fazer. Você não precisa ter tudo resolvido hoje. Só dá o próximo passo. Tenho orgulho de você e vou estar sempre aqui torcendo por você.",
  "Take a breath. Whatever it is, it doesn't all have to be solved right now. Do one small thing, then the next one. I'm not there to make you tea, but pretend I did.":
    "Respira. Seja lá o que for, você não precisa resolver tudo agora. Faz uma coisinha de cada vez. Eu não estou aí para fazer um chá para você, mas finge que eu fiz.",
  "Close your eyes and imagine I'm right there next to you, the way we've fallen asleep before. If that doesn't work, just give me a call and we can fall a sleep on the phone.":
    "Fecha os olhos e imagina que estou aí do seu lado, como nas vezes em que a gente dormiu junto. Se não funcionar, me liga e a gente pode dormir no telefone.",
  "Whatever it is, feel it fully, you're allowed to. I'm here when you're ready to talk, and I'm not going anywhere in the meantime.":
    "Seja lá o que for, sente tudo. Você não precisa fingir que está tudo bem. Estou aqui quando você estiver pronta para conversar e não vou a lugar nenhum.",
  "Here’s a hug, sent straight from me to you. Go grab Don, spray a little of my perfume on him, and hold him tight. Feel my love through our little one. I’m right there with you.":
    "Aqui vai um abraço, direto de mim para você. Pega o Don, passa um pouquinho do meu perfume nele e abraça ele bem forte. Sente meu carinho através do nosso pequeno. Eu estou aí com você.",
  "Whatever that voice in your head is telling you right now, it’s wrong. I see you clearly, and what I see is someone kind, beautiful, and deeply worth loving. I’m endlessly glad I found you, and nothing you feel insecure about could ever change that.":
    "Seja lá o que essa voz na sua cabeça esteja dizendo agora, ela está errada. Eu vejo você como você realmente é: gentil, linda e alguém que merece ser amada. Sou muito feliz por ter encontrado você, e nada daquilo que te deixa insegura muda o que eu vejo em você.",
  "Think about the last time we laughed so hard neither of us could breathe. That's my favorite version of you. Go find a little bit of that today.":
    "Lembra da última vez que a gente riu tanto que mal conseguia respirar? Essa é uma das minhas versões favoritas de você. Vai atrás de um pouquinho dessa felicidade hoje.",
  "We've built something real, one ordinary day at a time. That's worth remembering, especially on the days it feels far away.":
    "A gente construiu algo real, um dia comum de cada vez. Vale a pena lembrar disso, principalmente naqueles dias em que tudo parece tão distante.",
  "Hey, it’s me. I know you can’t hear my voice right now, but I want you to feel like I’m right here. I miss you, I think about you constantly, and I love everything about you... your laugh, your little expressions, the way the world feels safer with you in it. Even from far away, you’re still my favorite person. Consider this me saying hi, holding your hand, and reminding you that you’re deeply loved.":
    "Ei, sou eu. Eu sei que você não pode ouvir minha voz agora, mas quero que sinta como se eu estivesse aí. Estou com saudade, penso em você o tempo todo e amo tudo em você... sua risada, suas pequenas expressões, o jeito que o mundo parece um pouco mais seguro com você por perto. Mesmo de longe, você continua sendo minha pessoa favorita. Então considera isso como eu dizendo oi, segurando sua mão e lembrando que você é muito amada.",
  "When your head feels like it has forty tabs open, picture us on the couch after a long day, not talking about any of it, just existing side by side. That's really the only cure I have for overwhelm, us, together, no deadline attached. You don't have to hold today by yourself, even from here I'm holding some of it with you.":
    "Quando sua cabeça estiver parecendo ter quarenta abas abertas, imagina a gente no sofá depois de um dia longo, sem falar sobre nada disso, só existindo lado a lado. Essa é, de verdade, a única cura que eu conheço pra sobrecarga: nós dois, juntos, sem prazo nenhum. Você não precisa carregar o dia de hoje sozinha, mesmo daqui eu estou carregando uma parte disso com você.",
  "I've watched you push through things that would've stopped most people, that's part of why I fell for you. Whatever this is, we've survived harder, an ocean between us and counting. You're not doing this alone even though it might feel that way right now. Finish this one for both of us, and I'll be right here when you do.":
    "Eu já te vi superar coisas que teriam parado a maioria das pessoas, isso é parte do motivo pelo qual me apaixonei por você. Seja lá o que for isso, a gente já sobreviveu a coisa pior, um oceano inteiro entre nós e contando. Você não está fazendo isso sozinha, mesmo que pareça agora. Termina essa por nós dois, que eu vou estar bem aqui quando você conseguir.",
  "I want to be the first person you tell when something good happens, even from this far away. So tell me. Let me be loud about how proud I am of you, because I am, more than you probably let yourself believe. Whatever you did, it's ours to celebrate too, we're a team even when we're on different continents.":
    "Eu quero ser a primeira pessoa pra quem você conta quando algo bom acontece, mesmo estando tão longe. Então me conta. Deixa eu gritar o quanto tenho orgulho de você, porque eu tenho, muito mais do que você provavelmente deixa a si mesma acreditar. Seja lá o que você fez, isso também é nosso pra comemorar, a gente é um time mesmo em continentes diferentes.",
  "I know you're missing home, and I need you to know I'm part of that ache too, not just Floripa, not just your bed with Don curled up at the end of it, but me. The version of home you're missing is really just us being in the same room. Close your eyes and go there for a second, I'll meet you. This distance is temporary, what we're building isn't.":
    "Eu sei que você está com saudade de casa, e preciso que você saiba que eu também sou parte dessa saudade, não só Floripa, não só sua cama com o Don enrolado na ponta dela, mas eu. A versão de casa que você está sentindo falta é, na verdade, nós dois no mesmo lugar. Fecha os olhos e vai até lá por um segundo, eu te encontro. Essa distância é passageira, o que a gente está construindo não é.",
  "Put this down for a bit, but not without me, call me while you do it and put me on speaker. Go for a walk, play a song you love, whatever it is, let me be background noise to it. I'd rather be a small part of your distraction than no part of your day at all.":
    "Larga isso aqui por um tempinho, mas não sem mim, me liga enquanto você faz isso e me deixa no viva-voz. Vai caminhar, coloca uma música que você ama, seja lá o que for, deixa eu ser o barulhinho de fundo disso. Prefiro ser uma parte pequena da sua distração do que nenhuma parte do seu dia.",
  "Today was hard, and I can't fix that from this far away, but I can tell you this: it's going to be okay. You don't have to carry today by yourself, I'm here, even if here is just a call away. We've gotten through every bad day so far together, and this one is no different. Call me, let me be the person you land on.":
    "Hoje foi difícil, e eu não consigo resolver isso daqui de longe, mas posso te dizer uma coisa: vai ficar tudo bem. Você não precisa carregar o dia de hoje sozinha, eu estou aqui, mesmo que aqui seja só uma ligação de distância. A gente já passou por todo dia ruim até agora juntos, e esse não vai ser diferente. Me liga, deixa eu ser a pessoa em quem você se apoia.",
  "There's actually one more thing I wanted you to know... No matter how many pages I make, pictures I add, or words I write, none of them are enough to explain how happy I am that I met you.(Unfinished)":
    "Na verdade, tem mais uma coisa que eu queria que você soubesse... Não importa quantas páginas eu faça, quantas fotos eu coloque ou quantas palavras eu escreva, nada disso consegue explicar o quanto eu sou feliz por ter te conhecido. (Inacabado)",
  "Churrasco/ Sushi": "Churrasco / Sushi",
  "Baby Pink/ Green": "Rosa bebê / Verde",
  "Use Somebody/ Tometown Glory": "Use Somebody / Tometown Glory",
  "Inter/ Botafogo": "Inter / Botafogo",
  "Golden/ Blue": "Dourado / Azul",
  "Wednsday/ Thursday": "Quarta-feira / Quinta-feira",
  // ---- Our Games card translations (auto) ----

  Letters: "Cartas",
  Nostalgia: "Nostalgia",
  Pets: "Pets",
  "Pop Culture": "Cultura pop",
  Ranking: "Ranking",
  Roots: "Raízes",
  "Speed Round": "Rodada rápida",
  Superlatives: "Superlativos",
  "This or That": "Isso ou aquilo",
  "Time Capsule": "Cápsula do tempo",
  "Two Truths and a Lie": "Duas verdades e uma mentira",
  Wildcard: "Curinga",
  "What was the very first thing you noticed about me?":
    "Qual foi a primeira coisa que você notou em mim?",
  "When did you first realize you liked me as more than a friend?":
    "Quando você percebeu que gostava de mim mais do que como amigo?",
  "What was your first impression of my laugh?":
    "Qual foi sua primeira impressão da minha risada?",
  "What's a small, ordinary moment with me that you still think about?":
    "Qual é um momento pequeno e comum comigo que você ainda pensa?",
  "What is your favorite memory of us so far, and why?":
    "Qual é a sua lembrança favorita de nós até agora e por quê?",
  "Describe a moment when you felt proud of us as a couple.":
    "Descreva um momento em que você sentiu orgulho de nós como casal.",
  "What's a photo of us that always makes you smile?":
    "Qual é a nossa foto que sempre te faz sorrir?",
  "What's something small I do that you don't think I know you appreciate?":
    "O que é algo pequeno que eu faço e você acha que eu não sei que você aprecia?",
  "What is one habit of mine that you secretly love?":
    "Qual é um hábito meu que você ama secretamente?",
  "When do you feel most proud of me?":
    "Quando você se sente mais orgulhoso de mim?",
  "What's a side of my personality that took you time to understand?":
    "Qual lado da minha personalidade você demorou para entender?",
  "How would you describe me to someone who has never met me?":
    "Como você me descreveria para alguém que nunca me conheceu?",
  "What do you think is my greatest strength?":
    "Qual você acha que é minha maior força?",
  "What is something about me that still surprises you?":
    "O que há em mim que ainda te surpreende?",
  "What is something I do that makes you feel loved without me saying a word?":
    "O que eu faço que faz você se sentir amado sem que eu diga uma palavra?",
  "How do you prefer to receive love from me?":
    "Como você prefere receber meu amor?",
  "What does 'home' feel like when you're with me?":
    "Qual é a sensação de 'casa' quando você está comigo?",
  "When do you feel most heard by me?":
    "Quando você se sente mais ouvido por mim?",
  "What's the best way for me to check in with you on a hard day?":
    "Qual é a melhor maneira de entrar em contato com você em um dia difícil?",
  "Is there a topic you wish we talked about more often?":
    "Existe algum assunto sobre o qual você gostaria que falássemos com mais frequência?",
  "What's something from your childhood you wish I understood better?":
    "O que há de sua infância que você gostaria que eu entendesse melhor?",
  "What childhood dream still lives somewhere in you?":
    "Que sonho de infância ainda vive em você?",
  "Who in your family shaped how you love the most?":
    "Quem na sua família moldou a forma como você mais ama?",
  "What is a dream of yours that you haven't told many people about?":
    "Qual é o seu sonho que você não contou para muitas pessoas?",
  "What would a perfect ordinary day with me look like?":
    "Como seria um dia normal e perfeito comigo?",
  "What is something about me that you think you understand better than most people?":
    "O que há em mim que você acha que entende melhor do que a maioria das pessoas?",
  "What inside joke of ours would you never explain to a stranger?":
    "Que piada interna nossa você nunca explicaria a um estranho?",
  "What song will always remind you of us?":
    "Que música sempre lembrará você de nós?",
  "What do you think has changed most about us since we met?":
    "O que você acha que mais mudou em nós desde que nos conhecemos?",
  "What is one thing we do well as a team?": "O que fazemos bem como equipe?",
  "What is one thing you'd like us to get better at together?":
    "O que você gostaria que melhorássemos juntos?",
  "When do you feel closest to me?":
    "Quando você se sente mais próximo de mim?",
  "What's a value of mine that you didn't expect to admire so much?":
    "Qual é um valor meu que você não esperava admirar tanto?",
  "What principle would you never want us to compromise on?":
    "Qual princípio você nunca gostaria que comprometêssemos?",
  "What's a fear about us that you rarely say out loud?":
    "Qual é o medo sobre nós que você raramente diz em voz alta?",
  "What helps you feel safe when you're anxious about us?":
    "O que ajuda você a se sentir seguro quando está ansioso por nós?",
  "What part of our future are you most excited about, and what part scares you a little?":
    "Com que parte do nosso futuro você está mais animado e que parte te assusta um pouco?",
  "What tradition do you hope we create together?":
    "Que tradição você espera que criemos juntos?",
  "What's something you've never told me because you were afraid of how I'd react?":
    "O que você nunca me contou porque tinha medo de como eu reagiria?",
  "When was the last time you felt truly vulnerable with me?":
    "Quando foi a última vez que você se sentiu verdadeiramente vulnerável comigo?",
  "What do you need from me when you're hurting that I might not always know?":
    "O que você precisa de mim quando está sofrendo e que eu nem sempre saberei?",
  "What is something you wish I asked you about more often?":
    "O que você gostaria que eu perguntasse com mais frequência?",
  "Is there a compliment you've wanted to give me but haven't?":
    "Existe algum elogio que você queria me fazer, mas não fez?",
  "What's something hard you want to say, but gently?":
    "O que é algo difícil que você quer dizer, mas gentilmente?",
  "What builds trust for you the fastest in a relationship?":
    "O que gera confiança para você mais rapidamente em um relacionamento?",
  "When have you felt most trusted by me?":
    "Quando você se sentiu mais confiável para mim?",
  "How do you prefer we repair after a disagreement?":
    "Como você prefere que consertemos após um desentendimento?",
  "What is something I do during conflict that helps you, even if I don't realize it?":
    "O que faço durante o conflito que ajuda você, mesmo que não perceba?",
  "What is a disagreement we handled well, and what made it work?":
    "Qual é um desacordo que lidamos bem e o que o fez funcionar?",
  "In what way have I helped you grow since we met?":
    "De que forma eu ajudei você a crescer desde que nos conhecemos?",
  "What is something you've learned about love from being with me?":
    "O que você aprendeu sobre o amor por estar comigo?",
  "What version of me do you hope I keep becoming?":
    "Que versão de mim você espera que eu continue me tornando?",
  "What do you think I worry about more than I admit?":
    "Com o que você acha que me preocupo mais do que admito?",
  "What do you think makes me feel most confident?":
    "O que você acha que me faz sentir mais confiante?",
  "If you had to guess my biggest insecurity, what would you say?":
    "Se você tivesse que adivinhar minha maior insegurança, o que diria?",
  "What do you think is my love language, and why?":
    "Qual você acha que é minha linguagem de amor e por quê?",
  "Name three things you're grateful for about us right now.":
    "Cite três coisas pelas quais você é grato em nós agora.",
  "What was a moment when you thought, 'I really love this person'?":
    "Qual foi o momento em que você pensou: 'Eu realmente amo essa pessoa'?",
  "Tell the story of a day with me that felt perfect in a simple way.":
    "Conte a história de um dia comigo que pareceu perfeito de uma forma simples.",
  "What does loyalty mean to you in our relationship?":
    "O que lealdade significa para você em nosso relacionamento?",
  "How do you know when I need reassurance?":
    "Como você sabe quando preciso de garantias?",
  "What is our superpower as a couple?":
    "Qual é o nosso superpoder como casal?",
  "What would you miss most about us if we couldn't talk for a week?":
    "Do que você mais sentiria falta de nós se não pudéssemos conversar por uma semana?",
  "Do you feel more comfortable texting or talking when something is serious?":
    "Você se sente mais confortável enviando mensagens de texto ou conversando quando algo é sério?",
  "What is a boundary of yours that you want me to always respect?":
    "Qual é o seu limite que você quer que eu sempre respeite?",
  "What makes you feel most like yourself around me?":
    "O que faz você se sentir mais igual perto de mim?",
  "What shared goal feels most important to you this year?":
    "Qual objetivo compartilhado parece mais importante para você este ano?",
  "What kind of partner do you try to be for me?":
    "Que tipo de parceiro você tenta ser para mim?",
  "What would make you feel distant from me, and how can we avoid that?":
    "O que faria você se sentir distante de mim e como podemos evitar isso?",
  "What does honesty look like to you on ordinary days, not just big ones?":
    "Como é a honestidade para você nos dias normais, não apenas nos grandes?",
  "What is something you're still learning about being in a relationship?":
    "O que você ainda está aprendendo sobre estar em um relacionamento?",
  "What is a soft spot of yours that you only show people you trust?":
    "Qual é o seu ponto fraco que você só mostra às pessoas em quem confia?",
  "If our relationship were a season, which one would it be right now and why?":
    "Se nosso relacionamento fosse uma temporada, qual seria agora e por quê?",
  "Tell them something you've never said out loud before.":
    "Diga a eles algo que você nunca disse em voz alta antes.",
  "Pick a memory and tell the full story, with all the details you remember.":
    "Escolha uma lembrança e conte a história completa, com todos os detalhes que você lembra.",
  "In one minute, say everything you love about me without stopping.":
    "Em um minuto, diga tudo o que você ama em mim sem parar.",
  "Share a fear about the future and let the other person respond with care.":
    "Compartilhe um medo sobre o futuro e deixe a outra pessoa reagir com cuidado.",
  "Ask the question you've been avoiding — gently.":
    "Faça a pergunta que você tem evitado – gentilmente.",
  "What is the kindest thing I've ever done for you?":
    "Qual foi a coisa mais gentil que já fiz por você?",
  "What trip or outing with me would you do again tomorrow if you could?":
    "Que viagem ou passeio comigo você faria novamente amanhã, se pudesse?",
  "What did you almost get wrong about me at the beginning?":
    "O que você quase errou sobre mim no começo?",
  "What part of your younger self still shows up when you're with me?":
    "Que parte do seu eu mais jovem ainda aparece quando você está comigo?",
  "What is something you need me to hear, even if it's hard to say?":
    "O que você precisa que eu ouça, mesmo que seja difícil de dizer?",
  "When was the last time I made you laugh until it hurt?":
    "Quando foi a última vez que fiz você rir até doer?",
  "What is your favorite way we say goodbye or goodnight?":
    "Qual é a sua maneira favorita de dizer adeus ou boa noite?",
  "What about my personality balances yours?":
    "E a minha personalidade equilibra a sua?",
  "What does quality time look like for you with me?":
    "Como é um tempo de qualidade para você comigo?",
  "If we could teleport somewhere for 24 hours, where would we go?":
    "Se pudéssemos nos teletransportar para algum lugar por 24 horas, para onde iríamos?",
  "What does 'forever' mean to you in practical, everyday terms?":
    "O que 'para sempre' significa para você em termos práticos e cotidianos?",
  "What reassures you fastest when you overthink?":
    "O que o tranquiliza mais rapidamente quando você pensa demais?",
  "What is a promise between us that means a lot to you?":
    "Qual é a promessa entre nós que significa muito para você?",
  "What is one thing I do better now than when we first met?":
    "O que faço melhor agora do que quando nos conhecemos?",
  "What snack would I pick if I were stressed?":
    "Que lanche eu escolheria se estivesse estressado?",
  "What would I order at a café without looking at the menu?":
    "O que eu pediria em um café sem olhar o cardápio?",
  "What is a signal that you're done arguing and ready to reconnect?":
    "Qual é o sinal de que você parou de discutir e está pronto para se reconectar?",
  "What emoji would you use to describe me today?":
    "Que emoji você usaria para me descrever hoje?",
  "What is a hard moment we got through that made us stronger?":
    "Qual foi o momento difícil que passamos que nos tornou mais fortes?",
  "What does commitment look like to you on the boring days?":
    "Como é o compromisso para você nos dias chatos?",
  "What story about us do you hope we tell people in ten years?":
    "Que história sobre nós você espera que contemos às pessoas daqui a dez anos?",
  "When do you find it hardest to ask for help from me?":
    "Quando você acha mais difícil pedir minha ajuda?",
  "If we buried a time capsule today, what's the one object you'd insist goes in it?":
    "Se enterrássemos uma cápsula do tempo hoje, qual objeto você insistiria que fosse colocada nela?",
  "What message would you leave for us to read in ten years?":
    "Que mensagem você deixaria para lermos daqui a dez anos?",
  "What current inside joke do you hope we still laugh at in a decade?":
    "De que piada interna atual você espera que ainda riamos em uma década?",
  "What's a photo from this exact month you want us to remember forever?":
    "Qual é a foto deste mês exato que você deseja que lembremos para sempre?",
  "If you could freeze one week of this year in amber, which would it be?":
    "Se você pudesse congelar uma semana deste ano em âmbar, qual seria?",
  "What's something about \"us right now\" that you don't want to change?":
    "O que há em “nós agora” que você não quer mudar?",
  "What would you tell past-you on the day we met?":
    "O que você diria a você no dia em que nos conhecemos?",
  "What's a prediction you have for where we'll be exactly one year from today?":
    "Qual é a sua previsão de onde estaremos exatamente daqui a um ano?",
  "What object in our home tells the truest story about us?":
    "Que objeto em nossa casa conta a história mais verdadeira sobre nós?",
  "If aliens found only our text messages, what would they think we're like?":
    "Se os alienígenas encontrassem apenas nossas mensagens de texto, como pensariam que somos?",
  "What tradition from your family do you hope we carry into our own?":
    "Que tradição da sua família você espera que carreguemos para a nossa?",
  "What's a lesson your parents taught you, on purpose or not, about love?":
    "Qual lição seus pais lhe ensinaram, de propósito ou não, sobre o amor?",
  "What's a memory from home that shaped how you show affection?":
    "Qual é a lembrança de casa que moldou a forma como você demonstra afeto?",
  "Who from your past changed how you love now, and how?":
    "Quem do seu passado mudou a forma como você ama agora e como?",
  "What's something about your hometown you want me to understand better?":
    "O que há em sua cidade natal que você deseja que eu entenda melhor?",
  "What family recipe or ritual do you want to teach me?":
    "Que receita ou ritual de família você quer me ensinar?",
  "What's a story about your grandparents' love that stuck with you?":
    "Qual história sobre o amor dos seus avós que ficou com você?",
  "What did you learn about conflict from the adults around you growing up?":
    "O que você aprendeu sobre conflitos com os adultos ao seu redor enquanto crescia?",
  "What's a value your family instilled in you that still guides you?":
    "Qual valor que sua família incutiu em você e que ainda o orienta?",
  "If your younger self met me today, what would surprise them most?":
    "Se o seu eu mais jovem me conhecesse hoje, o que mais o surpreenderia?",
  "Which love language do you think I express without realizing it?":
    "Qual linguagem de amor você acha que expresso sem perceber?",
  'What\'s a way I could say "I love you" without using those words?':
    "De que maneira eu poderia dizer “eu te amo” sem usar essas palavras?",
  "Do you feel loved more through words, actions, or presence — and has that changed with us?":
    "Você se sente mais amado por meio de palavras, ações ou presença – e isso mudou conosco?",
  "What's a language, literal or made-up, we've built that's just ours?":
    "Qual é a linguagem, literal ou inventada, que construímos e que é só nossa?",
  "What's the kindest sentence I've ever said to you?":
    "Qual foi a frase mais gentil que já disse para você?",
  "What phrase do you wish I said more often?":
    "Que frase você gostaria que eu dissesse com mais frequência?",
  "If our relationship had a motto, what would it be?":
    "Se nosso relacionamento tivesse um lema, qual seria?",
  "What's a gesture that means more to you than any words could?":
    "Qual gesto significa mais para você do que qualquer palavra poderia significar?",
  'How do you say "I\'m sorry" best, and how do I?':
    'Qual a melhor forma de dizer "sinto muito" e como faço?',
  "What's something you've never had to explain to me because I just understood?":
    "O que você nunca teve que me explicar porque eu simplesmente entendi?",
  "How has being with me changed the way you see yourself?":
    "Como estar comigo mudou a maneira como você se vê?",
  "What part of your identity feels safest to show only around me?":
    "Que parte da sua identidade parece mais segura para ser mostrada apenas perto de mim?",
  "What's a label or role you've outgrown since we got together?":
    "Qual rótulo ou função você superou desde que ficamos juntos?",
  "What do you want people to understand about you that they usually miss?":
    "O que você quer que as pessoas entendam sobre você e que geralmente não percebem?",
  "What's something you're still figuring out about who you want to be?":
    "O que você ainda está descobrindo sobre quem você quer ser?",
  "How do you want to be remembered by the people who love you?":
    "Como você quer ser lembrado pelas pessoas que te amam?",
  "What's a version of yourself you're proud you left behind?":
    "Qual é a versão de você mesmo que você tem orgulho de ter deixado para trás?",
  'What does "being yourself" around me actually feel like?':
    "Qual é a sensação real de “ser você mesmo” perto de mim?",
  "What's a strength you didn't know you had until this relationship?":
    "Qual é a força que você não sabia que tinha até esse relacionamento?",
  "If you had to introduce yourself only through what you love, what would you say?":
    "Se você tivesse que se apresentar apenas através daquilo que você ama, o que você diria?",
  "What's something ordinary today that you're quietly grateful for?":
    "O que é algo comum hoje pelo qual você está silenciosamente grato?",
  "Name a hard season that ended up giving you something good.":
    "Cite uma temporada difícil que acabou lhe proporcionando algo bom.",
  "What's a small kindness I did recently that you haven't mentioned?":
    "Qual foi a pequena gentileza que fiz recentemente e que você não mencionou?",
  "What's something about your health or body you're grateful for right now?":
    "O que há em sua saúde ou corpo pelo qual você está grato agora?",
  "Who besides me are you especially thankful for lately, and why?":
    "A quem além de mim você está especialmente grato ultimamente e por quê?",
  "What's a comfort in your daily life you don't take for granted?":
    "Qual é o conforto em sua vida diária que você não considera garantido?",
  "What's something about this exact stage of our relationship you're thankful for?":
    "O que há nesse estágio exato do nosso relacionamento pelo qual você está grato?",
  "What's a mistake that taught you something you're now grateful for?":
    "Qual foi o erro que lhe ensinou algo pelo qual você agora é grato?",
  "What's a small luxury that makes your week better?":
    "Qual é um pequeno luxo que torna a sua semana melhor?",
  "What do you want to remember to be grateful for on a hard day?":
    "O que você quer lembrar para ser grato em um dia difícil?",
  "Would you rather I remembered your stories in perfect detail or always show up when it matters most?":
    "Você prefere que eu me lembre de suas histórias com detalhes perfeitos ou sempre apareça quando for mais importante?",
  "Would you rather we grow slowly and steadily or in sudden big leaps?":
    "Você prefere que cresçamos lenta e continuamente ou em grandes saltos repentinos?",
  "Would you rather know all my flaws upfront or discover them slowly?":
    "Você prefere conhecer todas as minhas falhas antecipadamente ou descobri-las lentamente?",
  "Would you rather I comfort you with words or with quiet company?":
    "Você prefere que eu o console com palavras ou com uma companhia tranquila?",
  "Would you rather matching daily routines or separate ones that overlap on weekends?":
    "Você prefere combinar rotinas diárias ou separar rotinas que se sobrepõem nos finais de semana?",
  "Would you rather I ask more about your day or share more about mine first?":
    "Você prefere que eu pergunte mais sobre o seu dia ou compartilhe mais sobre o meu primeiro?",
  "Would you rather celebrate wins loudly together or quietly between just us?":
    "Você prefere comemorar as vitórias em voz alta juntos ou em silêncio apenas entre nós?",
  "Would you rather we process feelings out loud immediately or need time to think first?":
    "Você prefere que processemos os sentimentos em voz alta imediatamente ou precisamos de tempo para pensar primeiro?",
  "Would you rather I challenge your ideas more or support them more?":
    "Você prefere que eu desafie mais suas ideias ou as apoie mais?",
  "Would you rather build a life that's mostly familiar or mostly new?":
    "Você prefere construir uma vida que seja principalmente familiar ou nova?",
  "Tell me two true things about how you feel today and one made-up one.":
    "Diga-me duas coisas verdadeiras sobre como você se sente hoje e uma inventada.",
  "Share two real childhood memories and one invented one.":
    "Compartilhe duas memórias reais de infância e uma inventada.",
  "Give two true reasons you're with me and one fake reason.":
    "Dê dois motivos verdadeiros para você estar comigo e um motivo falso.",
  "Name two real fears and one fake one.": "Cite dois medos reais e um falso.",
  "Tell two true stories from before we met and one false one.":
    "Conte duas histórias verdadeiras de antes de nos conhecermos e uma falsa.",
  "Share two real dreams for our future and one made-up dream.":
    "Compartilhe dois sonhos reais para o nosso futuro e um sonho inventado.",
  "Give two true opinions about me and one exaggerated one.":
    "Dê duas opiniões verdadeiras sobre mim e uma exagerada.",
  "Tell two real habits of yours and one you're making up.":
    "Conte dois hábitos reais seus e um que você está inventando.",
  "Share two true favorite memories of us and one invented memory.":
    "Compartilhe duas memórias verdadeiras e favoritas de nós e uma memória inventada.",
  "Name two real things you'd change about your day and one fake one.":
    "Cite duas coisas reais que você mudaria no seu dia e uma falsa.",
  'First word that comes to mind when you think of "us"?':
    "A primeira palavra que vem à mente quando você pensa em “nós”?",
  "One thing you need right now, in five words or less?":
    "Algo que você precisa agora, em cinco palavras ou menos?",
  "Best decision you've made this year, in one sentence?":
    "A melhor decisão que você tomou este ano, em uma frase?",
  "Describe today in exactly three words.":
    "Descreva hoje em exatamente três palavras.",
  "What's the first memory of me that comes to mind, no filter?":
    "Qual é a primeira lembrança minha que vem à cabeça, sem filtro?",
  "Name the last thing that made you laugh, fast.":
    "Cite a última coisa que fez você rir, rápido.",
  "One thing you're avoiding thinking about — just name it, don't explain.":
    "Uma coisa em que você está evitando pensar é apenas nomear, não explicar.",
  "What's the truest thing you know about yourself right now?":
    "Qual é a coisa mais verdadeira que você sabe sobre você agora?",
  "Say the nicest thing about me you can think of in three seconds.":
    "Diga a coisa mais legal sobre mim que você puder imaginar em três segundos.",
  "What do you want right this second — say it before you think.":
    "O que você quer neste segundo - diga antes de pensar.",
  "Ask me any question you've been holding onto — right now.":
    "Faça-me qualquer pergunta que você esteja segurando - agora mesmo.",
  "Skip the question. Instead, just tell me something true.":
    "Pule a pergunta. Em vez disso, apenas me diga algo verdadeiro.",
  'Ask me a "Really Know Us" question you make up on the spot.':
    'Faça-me uma pergunta "Really Know Us" que você inventa na hora.',
  "Whoever answers first gets to ask the next question instead of drawing.":
    "Quem responder primeiro faz a próxima pergunta em vez de desenhar.",
  'Say a toast for us that starts with "To us, because..."':
    'Faça um brinde para nós que comece com "Para nós, porque..."',
  "Answer as if you were writing our story's next chapter.":
    "Responda como se estivesse escrevendo o próximo capítulo da nossa história.",
  "If this card were a plot twist in our story, what would it reveal?":
    "Se esta carta fosse uma reviravolta na história da nossa história, o que ela revelaria?",
  "Give an answer using only questions.":
    "Dê uma resposta usando apenas perguntas.",
  "Pick a random object near you and explain how it reminds you of me.":
    "Escolha um objeto aleatório perto de você e explique como ele te lembra de mim.",
  "Say the truest, scariest, most honest thing on your mind about us right now.":
    "Diga a coisa mais verdadeira, mais assustadora e mais honesta que você pensa sobre nós agora.",
  "If you wrote me a letter to open in a hard moment, what's one line it would include?":
    "Se você me escrevesse uma carta para abrir em um momento difícil, qual linha ela incluiria?",
  "What would the subject line be if you emailed future-you about today?":
    "Qual seria o assunto se você enviasse um e-mail para o futuro sobre hoje?",
  "Say the first sentence of a letter thanking me for something specific.":
    "Diga a primeira frase de uma carta me agradecendo por algo específico.",
  "What would you want me to know if you couldn't tell me in person?":
    "O que você gostaria que eu soubesse se não pudesse me contar pessoalmente?",
  "If you left me a note for tomorrow morning, what would it say?":
    "Se você me deixasse um bilhete para amanhã de manhã, o que diria?",
  "What's something you'd only have the courage to say in writing?":
    "O que você só teria coragem de dizer por escrito?",
  "If our relationship got one page in a book, what's the last line?":
    "Se nosso relacionamento tem uma página de livro, qual é a última linha?",
  "Would you rather share a toothbrush for a week or a pillow for a year?":
    "Você prefere compartilhar uma escova de dente por uma semana ou um travesseiro por um ano?",
  "Would you rather be stuck in a karaoke booth with me for 3 hours or a silent library?":
    "Você prefere ficar preso em uma cabine de karaokê comigo por 3 horas ou em uma biblioteca silenciosa?",
  "Would you rather relive our first date forever, or fast-forward to our future wedding day?":
    "Você prefere reviver nosso primeiro encontro para sempre ou avançar para o dia do nosso futuro casamento?",
  "Would you rather get one long love letter a year, or one small sweet note every week?":
    "Você prefere receber uma longa carta de amor por ano ou um pequeno bilhete doce por semana?",
  "Would you rather we lived somewhere loud and exciting, or somewhere quiet and slow?":
    "Você preferiria que morássemos em algum lugar barulhento e emocionante ou em algum lugar calmo e lento?",
  "Would you rather I planned every date for a month, or you did?":
    "Você prefere que eu planeje todos os encontros durante um mês, ou você planejou?",
  "Would you rather I accidentally sent you my whole search history, or my entire camera roll?":
    "Você prefere que eu envie acidentalmente todo o meu histórico de pesquisa ou todo o rolo da câmera?",
  "Would you rather be the planner or the spontaneous one in our duo?":
    "Você prefere ser o planejador ou o espontâneo da nossa dupla?",
  "Would you rather we could read each other's minds for a day, or swap bodies for a day?":
    "Você prefere que possamos ler a mente um do outro por um dia ou trocar de corpo por um dia?",
  "Would you rather have a theme song that plays when we hug, or subtitles for our sarcasm?":
    "Você prefere uma música tema que toca quando nos abraçamos ou legendas para o nosso sarcasmo?",
  "Would you rather I remembered every important date perfectly, or always showed up early?":
    "Você prefere que eu me lembre perfeitamente de todas as datas importantes ou sempre chegue cedo?",
  "Would you rather only speak in questions for an hour or only answer with song lyrics?":
    "Você prefere apenas falar em perguntas por uma hora ou responder apenas com letras de músicas?",
  "Would you rather road trip with no playlist or flight with no snacks?":
    "Você prefere uma viagem sem playlist ou um voo sem lanches?",
  "Would you rather brunch every weekend or late-night snacks every night?":
    "Você prefere um brunch todo fim de semana ou lanches noturnos todas as noites?",
  "Would you rather a clean minimalist home or a cozy cluttered one?":
    "Você prefere uma casa limpa e minimalista ou uma casa aconchegante e desordenada?",
  "Would you rather more physical affection or more verbal affection?":
    "Você prefere mais afeto físico ou mais afeto verbal?",
  "Would you rather a small intimate wedding or a big joyful party?":
    "Você prefere um casamento pequeno e íntimo ou uma grande festa alegre?",
  "Would you rather your partner see your childhood photos or your middle-school diary?":
    "Você prefere que seu parceiro veja as fotos de sua infância ou seu diário do ensino médio?",
  "Would you rather be called out lovingly or comforted first when you're wrong?":
    "Você prefere ser chamado com amor ou consolado primeiro quando estiver errado?",
  "Would you rather share one dream every night or one secret every week?":
    "Você prefere compartilhar um sonho todas as noites ou um segredo todas as semanas?",
  "Would you rather I learn your hobby or you learn mine?":
    "Você prefere que eu aprenda o seu hobby ou você aprenda o meu?",
  "Would you rather cook a complicated recipe together or assemble furniture together?":
    "Você prefere preparar uma receita complicada juntos ou montar móveis juntos?",
  "Would you rather a partner who steals the blankets or steals the fries?":
    "Você prefere um parceiro que roube os cobertores ou as batatas fritas?",
  "Would you rather slow dance in the kitchen or kiss in the rain?":
    "Você prefere dançar lentamente na cozinha ou beijar na chuva?",
  "Would you rather mountains or ocean for our next getaway?":
    "Você prefere montanhas ou oceano em nossa próxima escapadela?",
  "Would you rather try every street food in a city or one fancy tasting menu?":
    "Você prefere experimentar todas as comidas de rua de uma cidade ou um menu de degustação sofisticado?",
  "Would you rather work from home together or commute and meet after work?":
    "Você prefere trabalhar juntos em casa ou viajar e se encontrar depois do trabalho?",
  "Would you rather weekly check-ins about feelings or only talk when needed?":
    "Você prefere fazer check-ins semanais sobre seus sentimentos ou apenas conversar quando necessário?",
  "Would you rather adopt a rescue pet next year or wait until we're more settled?":
    "Você prefere adotar um animal de estimação resgatado no próximo ano ou esperar até que estejamos mais acomodados?",
  "Would you rather be slightly bored together or constantly busy apart?":
    "Vocês preferem ficar um pouco entediados juntos ou constantemente ocupados separados?",
  "Would you rather a slow long-distance chapter with deep talks, or a chaotic in-person week?":
    "Você prefere um capítulo lento de longa distância com conversas profundas ou uma semana caótica presencial?",
  "Would you rather I adopt your slang or you adopt mine forever?":
    "Você prefere que eu adote sua gíria ou você adote a minha para sempre?",
  "Would you rather a spontaneous road trip tonight or a carefully planned one next month?":
    "Você prefere uma viagem espontânea esta noite ou uma cuidadosamente planejada no próximo mês?",
  "Would you rather I always choose the music or always choose the photos we post?":
    "Você prefere que eu sempre escolha a música ou sempre escolha as fotos que postamos?",
  "Would you rather a movie about our love story or a book?":
    "Você prefere um filme sobre nossa história de amor ou um livro?",
  "Would you rather grow old in one city or move every five years?":
    "Você prefere envelhecer em uma cidade ou se mudar a cada cinco anos?",
  "Would you rather I narrated our relationship like a nature documentary or a soap opera?":
    "Você prefere que eu narre nosso relacionamento como um documentário sobre a natureza ou uma novela?",
  "Would you rather I always won at rock-paper-scissors or always lost on purpose to make you happy?":
    "Você prefere que eu sempre ganhe em pedra-papel-tesoura ou sempre perca de propósito para te fazer feliz?",
  "Would you rather have a signature dance move or a signature catchphrase as a couple?":
    "Você prefere ter um movimento de dança de assinatura ou um bordão de assinatura como um casal?",
  "Would you rather I laughed at all your jokes, even bad ones, or was brutally honest about them?":
    "Você prefere que eu ria de todas as suas piadas, mesmo as ruins, ou fui brutalmente honesto sobre elas?",
  "Would you rather we had a couple's theme song that played every time we entered a room?":
    "Você preferiria que tivéssemos uma música tema de casal que tocasse toda vez que entrássemos em uma sala?",
  "Would you rather I texted in all lowercase forever or ALL CAPS forever?":
    "Você prefere que eu mande mensagens em letras minúsculas para sempre ou em letras MAIÚSCULAS para sempre?",
  "Would you rather our future pet judged only me or only you?":
    "Você prefere que nosso futuro animal de estimação julgue apenas eu ou apenas você?",
  "Would you rather I mispronounced one word forever or you did?":
    "Você prefere que eu pronuncie mal uma palavra para sempre ou você fez?",
  "Would you rather we had matching ringtones or matching typing sounds?":
    "Você preferiria que tivéssemos toques ou sons de digitação correspondentes?",
  "Would you rather I snorted when I laughed or you did, for the rest of our lives?":
    "Você preferiria que eu bufasse quando ria ou você o fez, pelo resto de nossas vidas?",
  "Would you rather a candlelit dinner at home or a picnic under the stars?":
    "Prefere um jantar à luz de velas em casa ou um piquenique sob as estrelas?",
  "Would you rather I wrote you poetry or sang you a love song, badly?":
    "Você prefere que eu te escreva poesia ou cante uma canção de amor, mal?",
  "Would you rather we recreate our first kiss every anniversary or invent a new tradition each year?":
    "Você prefere que recriemos nosso primeiro beijo a cada aniversário ou inventemos uma nova tradição a cada ano?",
  "Would you rather a slow dance in the kitchen at midnight or a quiet walk at sunrise?":
    "Você prefere uma dança lenta na cozinha à meia-noite ou uma caminhada tranquila ao nascer do sol?",
  "Would you rather I surprised you with breakfast in bed or a spontaneous day trip?":
    "Você prefere que eu te surpreenda com café da manhã na cama ou uma viagem de um dia espontânea?",
  "Would you rather we exchange love letters once a year or leave little notes constantly?":
    "Você prefere trocar cartas de amor uma vez por ano ou deixar pequenos bilhetes constantemente?",
  "Would you rather a shared playlist that grows forever or one perfect mixtape?":
    "Você prefere uma playlist compartilhada que cresça para sempre ou uma mixtape perfeita?",
  "Would you rather we renew our vows every five years or never need to because nothing changes?":
    "Você prefere que renovemos nossos votos a cada cinco anos ou nunca precisemos, porque nada muda?",
  "Would you rather I remembered every anniversary perfectly or surprised you on random ordinary days?":
    "Você prefere que eu me lembre de cada aniversário perfeitamente ou que te surpreenda em dias normais aleatórios?",
  "Would you rather a long slow hug every morning or a quick kiss every time we part?":
    "Você prefere um abraço longo e lento todas as manhãs ou um beijo rápido toda vez que nos separamos?",
  "Would you rather we get hopelessly lost in a beautiful city or arrive exactly on schedule to somewhere boring?":
    "Você preferiria que nos perdêssemos irremediavelmente em uma bela cidade ou chegássemos exatamente no horário para algum lugar chato?",
  "Would you rather road trip through deserts or through mountains?":
    "Você prefere viajar por desertos ou montanhas?",
  "Would you rather visit ten countries fast or live in one country slowly for a year?":
    "Você prefere visitar dez países rapidamente ou viver em um país lentamente por um ano?",
  "Would you rather camp under real stars or glamp with all the comforts?":
    "Você prefere acampar sob estrelas de verdade ou acampar com todos os confortos?",
  "Would you rather I planned every detail of our trip or we wing it completely?":
    "Você prefere que eu planeje todos os detalhes da nossa viagem ou nós improvisamos completamente?",
  'Would you rather learn to say "I love you" in every language we visit, or order food perfectly instead?':
    'Você prefere aprender a dizer "eu te amo" em todos os idiomas que visitamos ou pedir comida perfeitamente?',
  "Would you rather a trip with zero phone signal or one with perfect wifi the whole time?":
    "Prefere uma viagem sem sinal de telefone ou uma com Wi-Fi perfeito o tempo todo?",
  "Would you rather explore ancient ruins together or dive a coral reef together?":
    "Você prefere explorar ruínas antigas juntos ou mergulhar em um recife de coral juntos?",
  "Would you rather travel with a huge group of friends or completely alone, just us?":
    "Você prefere viajar com um grupo enorme de amigos ou completamente sozinho, só nós?",
  "Would you rather a spontaneous overnight train or a slow scenic ferry?":
    "Você prefere um trem noturno espontâneo ou uma balsa panorâmica lenta?",
  "Would you rather cook a five-course meal together or order the weirdest thing on a menu and share it?":
    "Você prefere cozinhar uma refeição de cinco pratos juntos ou pedir a coisa mais estranha em um cardápio e compartilhá-la?",
  "Would you rather share dessert always or never share dessert again?":
    "Com quem você preferiria dividir uma ilha deserta, Thomas Edison ou John Lennon?",
  "Would you rather I made your coffee perfectly every morning or you made mine?":
    "Você prefere que eu faça seu café perfeitamente todas as manhãs ou você fez o meu?",
  "Would you rather try a food neither of us has heard of or go back to our favorite comfort meal?":
    "Você prefere experimentar uma comida que nenhum de nós conhece ou voltar à nossa comida favorita?",
  'Would you rather a "no phones at dinner" rule forever or a "dessert before dinner sometimes" rule?':
    "Você prefere uma regra permanente de &quot;nada de celulares durante o jantar&quot; ou uma regra de &quot;sobremesa antes do jantar, às vezes&quot;?",
  "Would you rather cook disasters together and laugh about it, or always follow the recipe perfectly?":
    "Você prefere cozinhar desastres juntos e rir disso, ou sempre seguir a receita perfeitamente?",
  "Would you rather a home that always smells like fresh bread or always like fresh coffee?":
    "Prefere uma casa que cheire sempre a pão fresco ou sempre a café fresco?",
  "Would you rather eat street food from every stall or one incredible tasting menu?":
    "Você prefere comer comida de rua de todas as barracas ou um menu de degustação incrível?",
  "Would you rather breakfast for dinner every week or dinner for breakfast every week?":
    "Você prefere café da manhã para o jantar todas as semanas ou jantar para o café da manhã todas as semanas?",
  "Would you rather I remembered your order exactly, or you remembered mine?":
    "Você preferiria que eu me lembrasse exatamente do seu pedido, ou você se lembrou do meu?",
  "Would you rather a home full of books or a home full of plants?":
    "Prefere uma casa cheia de livros ou uma casa cheia de plantas?",
  "Would you rather live somewhere with four real seasons or somewhere warm all year?":
    "Você prefere morar em algum lugar com quatro estações reais ou em algum lugar quente o ano todo?",
  "Would you rather wake up early together or stay up late together, permanently?":
    "Vocês preferem acordar cedo juntos ou ficar acordados até tarde juntos, permanentemente?",
  "Would you rather a minimalist life with less stuff or a cozy life with more?":
    "Prefere uma vida minimalista com menos coisas ou uma vida acolhedora com mais?",
  "Would you rather a weekly game night or a weekly movie night, forever?":
    "Você prefere uma noite de jogos semanal ou uma noite de cinema semanal, para sempre?",
  "Would you rather split chores strictly by category or trade off randomly?":
    "Você prefere dividir as tarefas estritamente por categoria ou trocar aleatoriamente?",
  "Would you rather a loud, social weekend every week or a quiet one every week?":
    "Você prefere um fim de semana social barulhento todas as semanas ou um fim de semana tranquilo todas as semanas?",
  "Would you rather live near the ocean or near mountains?":
    "Você prefere morar perto do oceano ou perto de montanhas?",
  "Would you rather a home office each, or one shared creative space?":
    "Você prefere um escritório em casa ou um espaço criativo compartilhado?",
  "Would you rather a Sunday routine that never changes, or one that's different every week?":
    "Você prefere uma rotina de domingo que nunca muda, ou uma que é diferente a cada semana?",
  "Would you rather never run out of things to talk about, or never run out of comfortable silence?":
    "Você prefere nunca ficar sem coisas para falar ou nunca ficar sem um silêncio confortável?",
  "Would you rather always know exactly how the other feels, or always be a little curious?":
    "Você prefere sempre saber exatamente como o outro se sente, ou sempre ser um pouco curioso?",
  "Would you rather compliment each other daily, or save them for when they really count?":
    "Você prefere elogiar um ao outro diariamente ou guardá-los para quando eles realmente contam?",
  "Would you rather resolve fights the same night, or take a full day to think first?":
    "Você prefere resolver brigas na mesma noite ou tirar um dia inteiro para pensar primeiro?",
  "Would you rather a couple's therapist we check in with yearly, or handle everything ourselves?":
    "Você prefere um terapeuta de casal com quem verificamos anualmente ou cuidamos de tudo sozinhos?",
  "Would you rather be best friends who fell in love, or lovers who became best friends?":
    "Vocês preferem ser melhores amigos que se apaixonaram ou amantes que se tornaram melhores amigos?",
  "Would you rather express love through big gestures or tiny daily ones?":
    "Você prefere expressar amor através de grandes gestos ou pequenos gestos diários?",
  "Would you rather I remembered the small details, or the big milestones better?":
    "Você prefere que eu me lembre melhor dos pequenos detalhes ou dos grandes marcos?",
  "Would you rather we grow at the exact same pace, or take turns leading?":
    "Você prefere que cresçamos exatamente no mesmo ritmo ou nos revezemos liderando?",
  "Would you rather a relationship with zero secrets, or one with a little mystery left?":
    "Você prefere um relacionamento com zero segredos ou um com um pouco de mistério?",
  "Would you rather retire early and modestly, or retire late but wealthy?":
    "Você prefere se aposentar cedo e modestamente, ou se aposentar tarde, mas rico?",
  "Would you rather a wedding abroad, or a wedding at home with everyone we love?":
    "Você prefere um casamento no exterior ou um casamento em casa com todos que amamos?",
  "Would you rather one big family reunion a year, or small visits often?":
    "Você prefere uma grande reunião familiar por ano ou pequenas visitas frequentes?",
  "Would you rather our kids, if any, look more like you or act more like you?":
    "Você prefere que nossos filhos, se houver algum, se pareçam mais com você ou ajam mais como você?",
  "Would you rather build our dream home from scratch, or renovate an old one full of character?":
    "Você prefere construir a casa dos nossos sonhos do zero ou renovar uma antiga cheia de personalidade?",
  "Would you rather one joint bank account for everything, or separate with shared bills only?":
    "Você prefere uma conta bancária conjunta para tudo ou separada apenas com contas compartilhadas?",
  "Would you rather move for my dream job, or yours, if it ever came down to it?":
    "Você preferiria se mudar para o meu emprego dos sonhos, ou o seu, se alguma vez chegasse a esse ponto?",
  "Would you rather grow old in the same house, or move somewhere new later?":
    "Você prefere envelhecer na mesma casa ou se mudar para um lugar novo mais tarde?",
  "Would you rather leave a legacy through work, or through the family and love we build?":
    "Você prefere deixar um legado através do trabalho, ou através da família e do amor que construímos?",
  "Would you rather plan our future in five-year chunks, or take it one year at a time?":
    "Você prefere planejar nosso futuro em pedaços de cinco anos ou levá-lo um ano de cada vez?",
  "Would you rather get snowed in together for a week with no wifi, or stuck at an airport for 24 hours?":
    "Vocês preferem ficar juntos por uma semana sem Wi-Fi ou ficar presos em um aeroporto por 24 horas?",
  "Would you rather our car break down in the middle of nowhere, or our flight get cancelled at 3am?":
    "Você prefere que nosso carro quebre no meio do nada ou que nosso voo seja cancelado às 3 da manhã?",
  "Would you rather accidentally match outfits at a party, or show up to the wrong event together?":
    "Você prefere combinar roupas acidentalmente em uma festa ou aparecer no evento errado juntos?",
  "Would you rather lose the wifi password forever, or lose the TV remote forever?":
    "Você prefere perder a senha do Wi-Fi para sempre ou perder o controle remoto da TV para sempre?",
  "Would you rather both forget an anniversary in the same year, or both remember it twice?":
    "Você prefere que ambos se esqueçam de um aniversário no mesmo ano ou que ambos se lembrem dele duas vezes?",
  "Would you rather survive a blackout with candles and card games, or a heatwave with one fan?":
    "Você prefere sobreviver a um apagão com velas e jogos de cartas ou a uma onda de calor com um ventilador?",
  "Would you rather get soaked in a surprise storm on a date, or freeze walking home from one?":
    "Você prefere ficar encharcado em uma tempestade surpresa em um encontro, ou congelar a pé para casa de um?",
  "Would you rather both oversleep and miss something important, or both show up two hours early?":
    "Você prefere dormir demais e perder algo importante, ou ambos aparecem duas horas mais cedo?",
  "Would you rather adopt a chaotic puppy together, or foster ten fish that all need names?":
    "Você prefere adotar um filhote caótico juntos ou criar dez peixes que precisam de nomes?",
  "Would you rather deal with a flat tire on a road trip, or a dead phone battery on a hike?":
    "Você prefere lidar com um pneu furado em uma viagem ou uma bateria de telefone descarregada em uma caminhada?",
  "Would you rather relive the day we met exactly as it happened, or relive our best date so far?":
    "Você prefere reviver o dia em que nos conhecemos exatamente como aconteceu ou reviver nosso melhor encontro até agora?",
  "Would you rather rewatch our first year together like a movie, or skip to a highlight reel?":
    "Você prefere assistir novamente ao nosso primeiro ano juntos como um filme ou pular para um rolo de destaque?",
  "Would you rather keep every old photo of us, or keep only the best ten forever?":
    "Você prefere manter todas as nossas fotos antigas ou manter apenas as dez melhores para sempre?",
  "Would you rather remember every text we ever sent, or only the handwritten notes?":
    "Você prefere se lembrar de todas as mensagens que enviamos ou apenas das anotações manuscritas?",
  "Would you rather revisit our first date spot every year, or find a new one every year?":
    "Você prefere revisitar nosso primeiro ponto de encontro todos os anos ou encontrar um novo a cada ano?",
  "Would you rather relive our worst fight to fix it perfectly, or leave it in the past untouched?":
    "Você prefere reviver nossa pior luta para consertá-la perfeitamente, ou deixá-la no passado intocada?",
  "Would you rather rewatch how nervous we both were at the start, or skip to how comfortable we are now?":
    "Você prefere observar o quão nervosos nós dois estávamos no início ou pular para o quão confortáveis estamos agora?",
  "Would you rather keep the exact playlist from when we started dating, or update it every year?":
    "Você prefere manter a lista de reprodução exata de quando começamos a namorar ou atualizá-la todos os anos?",
  "Would you rather remember my first-date outfit forever, or forget it and be surprised by old photos?":
    "Você prefere se lembrar da minha roupa de primeiro encontro para sempre, ou esquecê-la e se surpreender com fotos antigas?",
  "Would you rather relive the moment you knew you loved me, or the moment I first said it back?":
    "Você prefere reviver o momento em que soube que me amava ou o momento em que eu disse isso pela primeira vez?",
  "Would you rather our love story be a slow-burn indie film, or a big flashy musical?":
    "Você prefere que nossa história de amor seja um filme indie de queima lenta ou um grande musical chamativo?",
  "Would you rather I serenaded you badly in public, or wrote you a private song instead?":
    "Você preferiria que eu fizesse uma serenata em público ou escrevesse uma música particular para você?",
  "Would you rather cosplay as our favorite fictional couple for a day, or invent our own?":
    "Você prefere fazer cosplay como nosso casal fictício favorito por um dia ou inventar o nosso?",
  "Would you rather binge an entire series in one weekend, or watch one episode a week for a year?":
    "Você prefere assistir a uma série inteira em um fim de semana ou assistir a um episódio por semana durante um ano?",
  "Would you rather our relationship playlist be all one genre, or a chaotic mix of everything?":
    "Você prefere que nossa playlist de relacionamento seja um gênero ou uma mistura caótica de tudo?",
  "Would you rather I quoted movies constantly, or you did?":
    "Você prefere que eu cite filmes constantemente, ou você fez?",
  "Would you rather a couple's karaoke duet we're actually good at, or hilariously bad at?":
    "Você prefere um dueto de karaokê de casal em que somos realmente bons ou hilariantemente ruins?",
  "Would you rather live in a rom-com plot, or a low-key slice-of-life story?":
    "Você prefere viver em um enredo de comédia romântica ou em uma história de vida discreta?",
  "Would you rather I dressed as your favorite character for Halloween, or you dressed as mine?":
    "Você prefere que eu me vista como seu personagem favorito para o Halloween, ou você se vestiu como meu?",
  "Would you rather our text notification be a movie quote, or a song lyric?":
    "Você prefere que nossa notificação por texto seja uma citação de filme ou uma letra de música?",
  "What is the first thing you find yourself noticing about me when I walk into a room?":
    "Qual é a primeira coisa que você percebe sobre mim quando entro em uma sala?",
  "What is your favorite flirty text I've ever sent you?":
    "Qual é a sua mensagem de paquera favorita que eu já te enviei?",
  "How do you flirt when you're trying not to be obvious?":
    "Como você flerta quando está tentando não ser óbvio?",
  "Give me a compliment you don't say often enough.":
    "Me dê um elogio que você não diz com frequência suficiente.",
  "What is a physical feature of mine you notice more than I think?":
    "Qual é uma característica física minha que você percebe mais do que eu penso?",
  "Compliment my personality in the most specific way you can.":
    "Elogie minha personalidade da maneira mais específica possível.",
  "What's a completely ordinary thing I do that you secretly find attractive?":
    "O que é uma coisa completamente comum que eu faço que você secretamente acha atraente?",
  "What outfit of mine is your soft spot?":
    "Qual roupa minha é o seu ponto fraco?",
  "When do I look most 'like myself' to you?":
    'Quando eu pareço mais "eu mesmo" para você?',
  "When did you first feel real chemistry between us?":
    "Quando você sentiu a verdadeira química entre nós?",
  "What instantly puts you in a flirty mood with me?":
    "O que instantaneamente coloca você em um clima de flerte comigo?",
  "Describe our chemistry in three words.":
    "Descreva nossa química em três palavras.",
  "Describe your favorite kiss we've had, and why it stands out.":
    "Descreva seu beijo favorito que tivemos e por que ele se destaca.",
  "Are you more of a slow kiss or a sudden kiss person?":
    "Você é mais uma pessoa que beija devagar ou de repente?",
  "Where is your favorite place to be kissed?":
    "Qual é o seu lugar favorito para ser beijado?",
  "Do you prefer slow and teasing, or spontaneous and a little wild? Tell me why.":
    "Você prefere lento e provocador, ou espontâneo e um pouco selvagem? Me diga por quê.",
  "What kind of attention from me makes you melt?":
    "Que tipo de atenção minha faz você derreter?",
  "Lights on or lights off — and what else matters to you?":
    "Luzes acesas ou apagadas — e o que mais importa para você?",
  "Plan our perfect flirty date night in three sentences.":
    "Planeje nossa noite perfeita de namoro em três frases.",
  "Tell me exactly how you want me to miss you.":
    "Diga-me exatamente como quer que eu sinta sua falta.",
  "Act out (or describe) how you'd pull me closer.":
    "Aja (ou descreva) como você me aproximaria.",
  "Narrate the next time we close a door behind us.":
    "Narre da próxima vez que fecharmos uma porta atrás de nós.",
  "What makes our connection feel unique compared to past ones?":
    "O que faz com que nossa conexão pareça única em comparação com as anteriores?",
  "What is a soft, non-physical thing that still feels intimate?":
    "O que é uma coisa suave, não física, que ainda parece íntima?",
  "Send a flirty emoji only you would understand.":
    "Envie um emoji de paquera que só você entenderia.",
  "Would you rather candles or fairy lights?":
    "Você prefere velas ou luzes de fadas?",
  "Flirt with me for 30 seconds without stopping.":
    "Flerte comigo por 30 segundos sem parar.",
  "List five things that attract you to me, fast.":
    "Liste cinco coisas que te atraem para mim, rápido.",
  "Write a cheesy pickup line about me — then a sincere one.":
    "Escreva uma frase extravagante sobre mim — depois uma sincera.",
  "Book (or pretend to book) our next flirty plan out loud.":
    "Reserve (ou finja reservar) nosso próximo plano de flerte em voz alta.",
  "What's a small crush detail you noticed this week?":
    "O que é um pequeno detalhe de paixão que você notou esta semana?",
  "What should I text you right now to make you smile?":
    "O que devo enviar agora para você sorrir?",
  "How do you want goodnight to feel when we're apart?":
    "Como você quer que a boa noite se sinta quando estivermos separados?",
  "Describe us sharing headphones on public transit.":
    "Descreva-nos compartilhando fones de ouvido no transporte público.",
  "When did a simple 'hi' from me feel different?":
    "Quando é que um simples &quot;oi&quot; meu passou a ter um significado diferente?",
  "Tell me your honest preference about pace and pressure — no guessing.":
    "Diga-me sua preferência honesta sobre ritmo e pressão — sem adivinhar.",
  "Guide me: how do you like to be kissed when you've missed me?":
    "Guie-me: como você gosta de ser beijada quando sente minha falta?",
  "Share one desire and one boundary in the same breath.":
    "Compartilhe um desejo e um limite no mesmo fôlego.",
  "Create a secret code word that means 'come closer'.":
    'Crie uma palavra de código secreto que signifique "aproxime-se".',
  "What's a flirty habit of mine you wish I did more often?":
    "Qual é o meu hábito de paquera que você gostaria que eu fizesse com mais frequência?",
  "If you had to flirt with me using only your eyes across a room, how would you do it?":
    "Se você tivesse que flertar comigo usando apenas seus olhos em uma sala, como você faria isso?",
  "What's the boldest way you've ever flirted with me?":
    "Qual foi a maneira mais ousada de você flertar comigo?",
  "What flirty move works on you every single time?":
    "Que movimento de flerte funciona em você todas as vezes?",
  "How would you flirt with me if we were meeting for the very first time again?":
    "Como você flertaria comigo se estivéssemos nos encontrando pela primeira vez de novo?",
  "What's a flirty text you've drafted but never sent?":
    "O que é uma mensagem de paquera que você redigiu, mas nunca enviou?",
  "What's the difference between how you flirt in public versus in private?":
    "Qual é a diferença entre como você flerta em público e em particular?",
  "Compliment the way I say your name.": "Elogie o jeito que eu digo seu nome.",
  "What's a compliment about me you think I don't believe enough?":
    "O que é um elogio sobre mim que você acha que eu não acredito o suficiente?",
  "Tell me something about my hands, my laugh, or my walk that you love.":
    "Conte-me algo sobre minhas mãos, minha risada ou minha caminhada que você ama.",
  "What compliment would surprise me the most right now?":
    "Que elogio me surpreenderia mais agora?",
  "Say something flattering about how I make you feel, not just how I look.":
    "Diga algo lisonjeiro sobre como eu faço você se sentir, não apenas como eu pareço.",
  "What's the most honest compliment you can give me in ten seconds?":
    "Qual é o elogio mais honesto que você pode me dar em dez segundos?",
  "What do you compliment me on to other people when I'm not around?":
    "O que você me elogia quando não estou por perto?",
  "What's an unexpected thing about me that you find irresistibly attractive?":
    "O que há de inesperado em mim que você acha irresistivelmente atraente?",
  "When am I most attractive to you — dressed up, or completely relaxed at home?":
    "Quando sou mais atraente para você — vestido ou completamente relaxado em casa?",
  "What's a sound I make that you find surprisingly attractive?":
    "Qual é o som que eu faço que você acha surpreendentemente atraente?",
  "What's something I do without thinking that pulls you in every time?":
    "O que é algo que eu faço sem pensar que te atrai todas as vezes?",
  "Describe the moment you realize, mid-conversation, that you're really into me.":
    "Descreva o momento em que você percebe, no meio da conversa, que você realmente gosta de mim.",
  "What's an attraction you didn't expect to develop over time?":
    "O que é uma atração que você não esperava desenvolver ao longo do tempo?",
  "What's the most attractive thing about the way I treat other people?":
    "Qual é a coisa mais atraente sobre a maneira como trato as outras pessoas?",
  "What's a look we give each other that says everything without words?":
    "Qual é o olhar que damos um ao outro que diz tudo sem palavras?",
  "Describe the feeling of the room changing when we lock eyes.":
    "Descreva a sensação da sala mudando quando fechamos os olhos.",
  "What's a moment lately where our chemistry surprised even you?":
    "Qual foi o momento ultimamente em que nossa química surpreendeu até você?",
  "How do you know, physically, when the mood between us shifts?":
    "Como você sabe, fisicamente, quando o clima entre nós muda?",
  "What's a color, scent, or song that instantly brings our chemistry to mind?":
    "O que é uma cor, perfume ou música que instantaneamente traz nossa química à mente?",
  "What happens in your body when I walk into the room?":
    "O que acontece em seu corpo quando entro na sala?",
  "Describe our chemistry as if it were the opening line of a novel.":
    "Descreva nossa química como se fosse a linha de abertura de um romance.",
  "Slow and lingering or quick and playful — what's your mood tonight?":
    "Lento e persistente ou rápido e brincalhão — qual é o seu humor esta noite?",
  "What's the kiss you think about most when we're apart?":
    "Qual é o beijo que você mais pensa quando estamos separados?",
  "Where on my face or neck do you love kissing most?":
    "Onde no meu rosto ou pescoço você mais gosta de beijar?",
  'Describe the perfect "hello" kiss versus the perfect "goodbye" kiss.':
    'Descreva o beijo perfeito de "olá" versus o beijo perfeito de "adeus".',
  "What's a kiss we haven't had yet that you'd love to?":
    "O que é um beijo que ainda não tivemos que você adoraria?",
  "How do you want to be kissed when you've had a hard day?":
    "Como você quer ser beijada quando teve um dia difícil?",
  "What's the most unexpected place we've ever kissed?":
    "Qual foi o lugar mais inesperado que já beijamos?",
  "What's a boundary you want to reaffirm, even if we've talked about it before?":
    "Qual é um limite que você quer reafirmar, mesmo que já tenhamos conversado sobre isso antes?",
  "What helps you feel most desired by me?":
    "O que ajuda você a se sentir mais desejado por mim?",
  "What's something intimate that has nothing to do with physical touch?":
    "O que é algo íntimo que não tem nada a ver com o toque físico?",
  "What pace feels right for us tonight — slow, playful, or intense?":
    "Que ritmo parece certo para nós esta noite — lento, brincalhão ou intenso?",
  "What word or signal could we use to check in with each other in the moment?":
    "Que palavra ou sinal poderíamos usar para verificar um com o outro no momento?",
  "What does feeling safe with me, physically, look like to you?":
    "O que significa sentir-se seguro comigo, fisicamente, para você?",
  "What's something you want more of from me after dark — attention, patience, or playfulness?":
    "O que você quer mais de mim depois do anoitecer — atenção, paciência ou brincadeira?",
  "Show me the face you make right before you kiss me.":
    "Mostre-me a cara que você faz antes de me beijar.",
  'Show me how close is "too close" and how close is "just right."':
    'Mostre-me o quão perto está "muito perto" e o quão perto está "certo".',
  "Show me one thing your hands do when you're nervous around me.":
    "Mostre-me uma coisa que suas mãos fazem quando você está nervosa perto de mim.",
  "Do you prefer slow mornings together, or spontaneous middle-of-the-day moments?":
    "Você prefere manhãs lentas juntos ou momentos espontâneos no meio do dia?",
  "What's your ideal balance between playful teasing and sincere affection?":
    "Qual é o seu equilíbrio ideal entre provocações lúdicas e afeto sincero?",
  "Do you prefer being pursued, or being the one who pursues?":
    "Você prefere ser perseguido ou ser aquele que persegue?",
  "What's more you: candlelight and music, or comfortable pajamas and honesty?":
    "Além disso, você: luz de velas e música, ou pijamas confortáveis e honestidade?",
  "Do you prefer affection in public, in private, or an even mix?":
    "Você prefere afeto em público, em particular ou uma mistura uniforme?",
  "What's your preferred way to be reassured when you feel insecure, intimately?":
    "Qual é a sua maneira preferida de se sentir seguro quando se sente inseguro, intimamente?",
  "Do you prefer surprises in the moment, or a little advance warning?":
    "Você prefere surpresas no momento, ou um pequeno aviso prévio?",
  "Describe us slow dancing in the kitchen with nowhere to be.":
    "Descreva-nos dançando lentamente na cozinha sem ter para onde ir.",
  "Narrate a rainy day spent entirely wrapped up together.":
    "Narre um dia chuvoso passado totalmente embrulhado.",
  "Describe the drive home from a date that went a little too well.":
    "Descreva a viagem para casa de um encontro que correu um pouco bem demais.",
  "Narrate the first five minutes after I surprise you at your door.":
    "Narre os primeiros cinco minutos depois que eu te surpreender na sua porta.",
  "Describe a lazy Sunday morning that turns romantic without either of us planning it.":
    "Descreva uma manhã preguiçosa de domingo que se torna romântica sem que nenhum de nós planeje.",
  "Narrate us getting ready for a night out and being a little too distracted by each other.":
    "Narre-nos nos preparando para uma noite fora e nos distraindo um pouco um com o outro.",
  "Describe the quiet moment after a long day when all either of us wants is closeness.":
    "Descreva o momento de silêncio depois de um longo dia em que tudo o que queremos é proximidade.",
  'Whisper, or write, the first word that comes to mind when you think "desire."':
    'Sussurre, ou escreva, a primeira palavra que vem à mente quando você pensa em "desejo".',
  "Skip this question and instead close the distance between us right now.":
    "Ignore esta pergunta e, em vez disso, diminua a distância entre nós agora.",
  "Who would survive longer in a zombie apocalypse?":
    "Quem sobreviveria mais tempo em um apocalipse zumbi?",
  "Who would be the better reality TV contestant?":
    "Quem seria o melhor concorrente de reality show?",
  "Who would accidentally start a cult with a group project speech?":
    "Quem acidentalmente iniciaria um culto com um discurso de projeto em grupo?",
  "Who would become friends with the flight attendant first?":
    "Quem se tornaria amigo da comissária de bordo primeiro?",
  "Who would win in a dance-off with no practice?":
    "Quem venceria em um duelo de dança sem prática?",
  "Who is more likely to accidentally become famous online?":
    "Quem tem mais probabilidade de se tornar famoso acidentalmente online?",
  "Who is more likely to trip in public and pretend it was on purpose?":
    "Quem é mais propenso a tropeçar em público e fingir que foi de propósito?",
  "Who is more likely to cry during a movie?":
    "Quem é mais propenso a chorar durante um filme?",
  "Who is more likely to adopt a street animal on impulse?":
    "Quem é mais propenso a adotar um animal de rua por impulso?",
  "Who is more likely to forget why they walked into a room?":
    "Quem é mais propenso a esquecer por que entrou em uma sala?",
  "Who is more likely to wave back at someone who wasn't waving at them?":
    "Quem é mais propenso a acenar de volta para alguém que não estava acenando para eles?",
  "Who is more likely to send a text to the wrong person?":
    "Quem é mais propenso a enviar uma mensagem de texto para a pessoa errada?",
  "Who is more likely to have food on their face without noticing?":
    "Quem é mais propenso a ter comida no rosto sem perceber?",
  "Who would win an argument if neither of you could use facts?":
    "Quem ganharia uma discussão se nenhum de vocês pudesse usar fatos?",
  "Who is more stubborn when you're both wrong?":
    "Quem é mais teimoso quando vocês dois estão errados?",
  "Who apologizes first after a silly fight?":
    "Quem se desculpa primeiro depois de uma briga boba?",
  "Who would handle a sudden power outage better?":
    "Quem lidaria melhor com uma queda de energia repentina?",
  "Who would stay calmer if the car broke down?":
    "Quem ficaria mais calmo se o carro quebrasse?",
  "Who would negotiate better with a landlord?":
    "Quem negociaria melhor com um senhorio?",
  "Who would get lost even while using GPS?":
    "Quem se perderia mesmo usando GPS?",
  "Who would forget their own birthday first?":
    "Quem esqueceria seu próprio aniversário primeiro?",
  "Who would talk to a plant like it's a roommate?":
    "Quem falaria com uma planta como se fosse uma colega de quarto?",
  "Who is the better cook, honestly?":
    "Quem é o melhor cozinheiro, honestamente?",
  "Who has better taste in music?": "Quem tem melhor gosto musical?",
  "Who is funnier at 1 a.m.?": "Quem é mais engraçado à 1 da manhã?",
  "Who will fall asleep first tonight?": "Quem vai dormir primeiro esta noite?",
  "Who will text first tomorrow morning?":
    "Quem enviará a primeira mensagem amanhã de manhã?",
  "Who will suggest dessert first?": "Quem vai sugerir a sobremesa primeiro?",
  "Who is more dramatic about being a little sick?":
    "Quem é mais dramático sobre estar um pouco doente?",
  "Who steals more of the blanket?": "Quem rouba mais do cobertor?",
  "Who is more likely to say 'I'm fine' when not fine?":
    'Quem é mais propenso a dizer "estou bem" quando não está bem?',
  "Which one of your inside jokes would confuse a stranger the most?":
    "Qual das suas piadas internas mais confundiria um estranho?",
  "Who starts the inside jokes more often?":
    "Quem começa as piadas internas com mais frequência?",
  "Who would last longer without their phone?":
    "Quem duraria mais tempo sem o celular?",
  "Who would win a staring contest?":
    "Quem ganharia um concurso de olhares fixos?",
  "Who would survive a week of only spicy food?":
    "Quem sobreviveria a uma semana apenas de comida picante?",
  "Who would spend $500 on something completely unnecessary?":
    "Quem gastaria $ 500 em algo completamente desnecessário?",
  "Who would win at charades?": "Quem venceria em charadas?",
  "Who would make a better podcast host?":
    "Quem seria um anfitrião de podcast melhor?",
  "Recreate your first date, right now, as best you can from memory.":
    "Recrie seu primeiro encontro, agora, da melhor maneira que puder, de memória.",
  "Whoever laughs first has to do a silly dance.":
    "Quem ri primeiro tem que fazer uma dança boba.",
  "Who would pack lighter for a trip?":
    "Quem levaria mais leve para uma viagem?",
  "Who would become the group chat admin everyone fears?":
    "Quem se tornaria o administrador de chat em grupo que todos temem?",
  "Who is more likely to rewatch the same series again?":
    "Quem é mais propenso a assistir novamente à mesma série?",
  "Who is more likely to buy a gadget that never gets used?":
    "Quem é mais propenso a comprar um gadget que nunca é usado?",
  "Who is more likely to mishear lyrics confidently?":
    "Quem é mais propenso a ouvir mal as letras com confiança?",
  "Who uses more sarcasm in a disagreement?":
    "Quem usa mais sarcasmo em um desentendimento?",
  "Who would lead if you got locked out of the house?":
    "Quem lideraria se você ficasse trancado fora de casa?",
  "Who would befriend a raccoon energy person first?":
    "Quem faria amizade com uma pessoa de energia de guaxinim primeiro?",
  "Who takes better photos of the other person?":
    "Quem tira fotos melhores da outra pessoa?",
  "Who will say 'I told you so' next?":
    "Quem vai dizer 'eu te avisei' a seguir?",
  "Who is slower to leave the house?": "Quem é mais lento para sair de casa?",
  "What meme energy are you as a couple?":
    "Que energia de meme vocês são como um casal?",
  "Who would win at Mario Kart with one hand?":
    "Quem ganharia no Mario Kart com uma mão?",
  "Who would survive a week as a barista better?":
    "Quem sobreviveria melhor a uma semana como barista?",
  "Who would accidentally join a pyramid scheme first?":
    "Quem se juntaria acidentalmente a um esquema de pirâmide primeiro?",
  "Who is more likely to name a pet something ridiculous?":
    "Quem é mais propenso a chamar um animal de estimação de algo ridículo?",
  "Who is more likely to have a public wardrobe fail?":
    "Quem é mais propenso a ter uma falha no guarda-roupa público?",
  "Who changes the subject to food mid-fight?":
    "Quem muda de assunto para comida no meio da luta?",
  "Who would handle a cancelled flight better?":
    "Quem lidaria melhor com um voo cancelado?",
  "Who would talk during a horror movie more?":
    "Quem falaria mais durante um filme de terror?",
  "Who is messier in the kitchen?": "Quem é mais bagunçado na cozinha?",
  "Who will suggest a nap first this weekend?":
    "Quem vai sugerir um cochilo primeiro neste fim de semana?",
  "Who is more competitive about board games?":
    "Quem é mais competitivo em jogos de tabuleiro?",
  "Who quotes movies more out of context?":
    "Quem cita filmes mais fora de contexto?",
  "Who can hold a plank longer?":
    "Quem pode segurar uma prancha por mais tempo?",
  "Who would invent a worse startup idea?":
    "Quem inventaria uma ideia de startup pior?",
  "Who would become a conspiracy theory believer as a bit?":
    "Quem se tornaria um crente da teoria da conspiração?",
  "Who is more likely to cry at an airport goodbye?":
    "Quem é mais propenso a chorar em um aeroporto de despedida?",
  "Who is more likely to call a teacher 'mom'?":
    "Quem é mais propenso a chamar um professor de 'mãe'?",
  "Who needs more time to cool down?":
    "Quem precisa de mais tempo para se refrescar?",
  "Who would remember the insurance password?":
    "Quem se lembraria da senha do seguro?",
  "Who would name their WiFi something embarrassing?":
    "Quem chamaria seu WiFi de algo embaraçoso?",
  "Who is better at gift-giving?": "Quem é melhor em dar presentes?",
  "Who will become a morning person first?":
    "Quem se tornará uma pessoa matinal primeiro?",
  "Who leaves more dishes 'to soak'?": "Quem deixa mais pratos 'para molhar'?",
  "Who does the better impression of the other?":
    "Quem faz a melhor impressão do outro?",
  "Who can name more capitals in 30 seconds?":
    "Quem pode nomear mais capitais em 30 segundos?",
  "Who would survive a reality dating show longer?":
    "Quem sobreviveria a um reality show por mais tempo?",
  "Who would write a viral tweet by accident?":
    "Quem escreveria um tweet viral por acidente?",
  "Who is more likely to fall for a prank twice?":
    "Quem é mais propenso a cair em uma pegadinha duas vezes?",
  "Who is more likely to wave at a reflective window?":
    "Quem é mais propenso a acenar em uma janela reflexiva?",
  "Who brings up old screenshots in a playful roast?":
    "Quem traz capturas de tela antigas em um assado brincalhão?",
  "Who would stay calm in a haunted house?":
    "Quem ficaria calmo em uma casa assombrada?",
  "Who would collect too many mugs?": "Quem colecionaria canecas demais?",
  "Who is better at parallel parking?":
    "Quem é melhor em estacionamento paralelo?",
  "Who will suggest ordering takeout first?":
    "Quem vai sugerir pedir comida para viagem primeiro?",
  "Who is more likely to say 'one more episode'?":
    'Quem é mais propenso a dizer "mais um episódio"?',
  "Who creates nicknames faster?": "Quem cria apelidos mais rápido?",
  "Who would win a silent contest for 5 minutes?":
    "Quem ganharia um concurso silencioso por 5 minutos?",
  "Who would become a food critic on pure confidence?":
    "Quem se tornaria um crítico de alimentos por pura confiança?",
  "Who would accidentally become the favorite of a random grandma?":
    "Quem acidentalmente se tornaria o favorito de uma avó aleatória?",
  "Who is more likely to start a plant collection?":
    "Quem é mais propenso a iniciar uma coleção de plantas?",
  "Who is more likely to trip while trying to look cool?":
    "Quem é mais propenso a tropeçar enquanto tenta parecer legal?",
  "Who wins when the debate is about movie plots?":
    "Quem ganha quando o debate é sobre enredos de filmes?",
  "Who would fix a leaky faucet with pure stubbornness?":
    "Quem consertaria uma torneira com vazamento com pura teimosia?",
  "Who would talk to Alexa like a person?":
    "Quem falaria com Alexa como uma pessoa?",
  "Who has the better 'I told you so' face?":
    "Quem tem a melhor cara de 'eu te disse'?",
  "Who will finish their drink first on the next date?":
    "Quem terminará a bebida primeiro no próximo encontro?",
  "Who is more likely to hide online shopping packages?":
    "Quem é mais propenso a esconder pacotes de compras online?",
  "Who would win a pillow fight in under 10 seconds?":
    "Quem venceria uma luta de travesseiros em menos de 10 segundos?",
  "Who would forget they're on a video call and start singing?":
    "Quem esqueceria que está em uma videochamada e começaria a cantar?",
  "Who would talk their way out of a speeding ticket?":
    "Quem conseguiria escapar de uma multa por excesso de velocidade?",
  "Who would end up on a first-name basis with every waiter in town?":
    "Quem acabaria em uma base de primeiro nome com todos os garçons da cidade?",
  "Who would win an argument with a self-checkout machine?":
    "Quem ganharia uma discussão com uma máquina de autoatendimento?",
  "Who would accidentally become a regular extra in someone else's vacation photos?":
    "Quem acidentalmente se tornaria um figurante comum nas fotos de férias de outra pessoa?",
  "Who would survive being locked out in pajamas the longest?":
    "Quem sobreviveria mais tempo trancado de pijama?",
  "Who would win a debate against a toddler?":
    "Quem venceria um debate contra uma criança?",
  'Who is more likely to text "we need to talk" as a joke?':
    'Quem é mais propenso a escrever "precisamos conversar" como uma piada?',
  "Who is more likely to fall asleep during a movie they picked?":
    "Quem é mais propenso a adormecer durante um filme que escolheu?",
  "Who is more likely to buy matching outfits without asking first?":
    "Quem é mais propenso a comprar roupas combinando sem perguntar primeiro?",
  "Who is more likely to start clapping at the wrong moment?":
    "Quem é mais propenso a começar a aplaudir no momento errado?",
  "Who is more likely to over-explain a simple answer?":
    "Quem é mais propenso a explicar demais uma resposta simples?",
  "Who is more likely to name every houseplant?":
    "Quem é mais propenso a nomear cada planta de casa?",
  "Who is more likely to get emotionally attached to a video game character?":
    "Quem é mais propenso a se apegar emocionalmente a um personagem de videogame?",
  "Who is more likely to save a spider instead of squashing it?":
    "Quem é mais propenso a salvar uma aranha em vez de esmagá-la?",
  "Who is more likely to laugh at their own joke before finishing it?":
    "Quem é mais propenso a rir de sua própria piada antes de terminá-la?",
  "Who is more likely to walk into a glass door?":
    "Quem é mais propenso a entrar em uma porta de vidro?",
  "Who is more likely to clap when a plane lands?":
    "Quem é mais propenso a aplaudir quando um avião pousa?",
  "Who is more likely to sing the wrong lyrics with total confidence?":
    "Quem é mais propenso a cantar as letras erradas com total confiança?",
  "Who is more likely to answer a call meant for someone else and keep talking?":
    "Quem é mais propenso a atender uma ligação destinada a outra pessoa e continuar falando?",
  "Who is more likely to accidentally like an old photo while stalking someone's profile?":
    "Quem é mais propenso a gostar acidentalmente de uma foto antiga enquanto persegue o perfil de alguém?",
  'Who is more likely to say "you too" when a waiter says "enjoy your meal"?':
    'Quem é mais propenso a dizer "você também" quando um garçom diz "aproveite sua refeição"?',
  "Who is more likely to get caught talking to themselves in the mirror?":
    "Quem é mais propenso a ser pego falando sozinho no espelho?",
  "Who holds a grudge about the thermostat the longest?":
    "Quem guarda rancor do termostato por mais tempo?",
  "Who is more likely to bring receipts, literal or figurative, into an argument?":
    "Quem é mais propenso a trazer recibos, literais ou figurativos, para um argumento?",
  "Who wins the debate over who's the better driver?":
    "Quem vence o debate sobre quem é o melhor piloto?",
  "Who is quicker to admit they're wrong, even a little?":
    "Quem é mais rápido em admitir que está errado, mesmo que um pouco?",
  "Who turns an argument into a bit within five minutes?":
    "Quem transforma um argumento em um pouco em cinco minutos?",
  'Who is more stubborn about the "right" way to load a dishwasher?':
    'Quem é mais teimoso sobre a maneira "certa" de carregar uma máquina de lavar louça?',
  'Who wins the "who\'s more tired" competition every single time?':
    'Quem ganha a competição "quem está mais cansado" todas as vezes?',
  "Who is more likely to fake being asleep to avoid a conversation?":
    "Quem é mais propenso a fingir estar dormindo para evitar uma conversa?",
  "Who would take charge if the wifi went out during a big game?":
    "Quem assumiria o controle se o Wi-Fi saísse durante um grande jogo?",
  "Who would handle discovering a leak under the sink better?":
    "Quem lidaria melhor com a descoberta de um vazamento sob a pia?",
  "Who would stay calmer if we missed our own flight?":
    "Quem ficaria mais calmo se perdêssemos nosso próprio voo?",
  "Who would improvise dinner best if the stove broke?":
    "Quem improvisaria melhor o jantar se o fogão quebrasse?",
  "Who would be more useful in a zombie apocalypse grocery run?":
    "Quem seria mais útil em uma corrida de supermercado do apocalipse zumbi?",
  "Who would keep their cool if the GPS sent us the wrong way for an hour?":
    "Quem manteria a calma se o GPS nos enviasse para o lado errado por uma hora?",
  "Who would handle a surprise in-law visit with zero notice better?":
    "Quem lidaria melhor com uma visita surpresa de sogro sem aviso prévio?",
  "Who would fix a jammed door faster — with tools or brute force?":
    "Quem consertaria uma porta emperrada mais rápido — com ferramentas ou força bruta?",
  "Who would try to befriend a very suspicious pigeon?":
    "Quem tentaria fazer amizade com um pombo muito suspeito?",
  "Who would narrate grocery shopping like a nature documentary?":
    "Quem narraria as compras de supermercado como um documentário sobre a natureza?",
  "Who would give a dramatic TED talk about their favorite snack?":
    "Quem daria uma palestra dramática no TED sobre seu lanche favorito?",
  "Who would name their car something oddly specific?":
    "Quem chamaria seu carro de algo estranhamente específico?",
  "Who would try to have a full conversation with a self-driving car?":
    "Quem tentaria ter uma conversa completa com um carro autônomo?",
  "Who would organize a spontaneous parade over good news?":
    "Quem organizaria um desfile espontâneo sobre boas notícias?",
  "Who would negotiate with a vending machine that ate their money?":
    "Quem negociaria com uma máquina de venda automática que comeu seu dinheiro?",
  "Who would treat a robot vacuum like a pet?":
    "Quem trataria um robô aspirador como um animal de estimação?",
  "Who is the better multitasker, honestly?":
    "Quem é o melhor multitarefa, honestamente?",
  'Who has the more useful "life hacks"?':
    'Quem tem os "truques de vida" mais úteis?',
  "Who is better at remembering directions without GPS?":
    "Quem é melhor em lembrar direções sem GPS?",
  "Who tells a story with better pacing?":
    "Quem conta uma história com melhor ritmo?",
  "Who is more patient in long lines?": "Quem é mais paciente em longas filas?",
  "Who negotiates a better deal shopping?":
    "Quem negocia um melhor negócio de compras?",
  "Who has the stronger poker face?": "Quem tem a cara de poker mais forte?",
  "Who packs a suitcase more efficiently?":
    "Quem faz as malas com mais eficiência?",
  "Who will be the first to suggest getting a pet this year?":
    "Quem será o primeiro a sugerir a compra de um animal de estimação este ano?",
  "Who will bring up a vacation idea first this season?":
    "Quem trará uma ideia de férias primeiro nesta temporada?",
  "Who will fall for the next viral trend first?":
    "Quem vai se apaixonar pela próxima tendência viral primeiro?",
  "Who will start a new hobby first this year?":
    "Quem começará um novo hobby primeiro este ano?",
  "Who will cave and order dessert first tonight?":
    "Quem vai ceder e pedir a sobremesa primeiro esta noite?",
  "Who will remember to water the plants without being asked?":
    "Quem se lembrará de regar as plantas sem ser solicitado?",
  "Who will suggest canceling plans to stay in first?":
    "Quem sugerirá o cancelamento dos planos para ficar em primeiro lugar?",
  "Who takes up more closet space, if we're honest?":
    "Quem ocupa mais espaço no armário, se formos honestos?",
  "Who is more particular about how the towels are folded?":
    "Quem é mais específico sobre como as toalhas são dobradas?",
  'Who "borrows" the other\'s charger and never gives it back?':
    'Quem "pega emprestado" o carregador do outro e nunca o devolve?',
  "Who is louder chewing, and who will actually admit it?":
    "Quem mastiga mais alto e quem realmente admite isso?",
  "Who leaves the cabinet doors open more?":
    "Quem deixa as portas do armário mais abertas?",
  "Who hogs the good blanket first?":
    "Quem monopoliza o bom cobertor primeiro?",
  'Who is more particular about the "correct" TV volume?':
    'Quem é mais específico sobre o volume de TV "correto"?',
  "Who takes longer to pick something to watch?":
    "Quem leva mais tempo para escolher algo para assistir?",
  "What's a word only the two of you use, and what does it actually mean?":
    "O que é uma palavra que apenas vocês dois usam e o que ela realmente significa?",
  "What's a face one of you makes that instantly cracks the other up?":
    "O que é um rosto que um de vocês faz que instantaneamente quebra o outro?",
  "What bit have you done so many times it's basically tradition now?":
    "O que você já fez tantas vezes que é basicamente tradição agora?",
  "Who started your longest-running inside joke, and how?":
    "Quem começou sua piada interna mais antiga e como?",
  "What's a movie line you two quote way too often?":
    "O que é uma fala de filme que vocês dois citam com muita frequência?",
  "What's the weirdest thing that's become \"your song\" as a joke?":
    'Qual é a coisa mais estranha que se tornou "sua música" como uma piada?',
  "What's an overreaction one of you had that's now a running bit?":
    "O que é uma reação exagerada que um de vocês teve que agora é um pouco recorrente?",
  "What nickname exists only because of an inside joke?":
    "Que apelido existe apenas por causa de uma piada interna?",
  "Who can go the longest without checking their phone right now?":
    "Quem pode passar mais tempo sem verificar o telefone agora?",
  "Who can list five countries faster?":
    "Quem pode listar cinco países mais rapidamente?",
  "Who can do a better impression of the other, right now?":
    "Quem pode fazer uma melhor impressão do outro, agora?",
  "Who can hold eye contact the longest without laughing?":
    "Quem consegue manter contato visual por mais tempo sem rir?",
  'Who can come up with a rhyme for "us" the fastest?':
    'Quem pode criar uma rima para "nós" mais rápido?',
  "Who can guess the other's next words in a familiar story?":
    "Quem pode adivinhar as próximas palavras do outro em uma história familiar?",
  "Who can name more of each other's favorite things in 20 seconds?":
    "Quem pode nomear mais as coisas favoritas um do outro em 20 segundos?",
  "Who can keep a straight face the longest while the other tries to make them laugh?":
    "Quem consegue manter uma cara séria por mais tempo enquanto o outro tenta fazê-los rir?",
  "Who would win a debate about pineapple on pizza?":
    "Quem ganharia um debate sobre o abacaxi na pizza?",
  "Who would be a better game show contestant, honestly?":
    "Quem seria um concorrente de game show melhor, honestamente?",
  "Who would survive longer without coffee or tea?":
    "Quem sobreviveria mais tempo sem café ou chá?",
  "Who would win at a trivia night about each other?":
    "Quem ganharia em uma noite de curiosidades sobre o outro?",
  "Who would make friends with a stranger in line faster?":
    "Quem faria amizade com um estranho na fila mais rápido?",
  "Who would be more likely to cry at a commercial?":
    "Quem seria mais propenso a chorar em um comercial?",
  'Who would win a "who can be quieter" contest for one hour?':
    'Quem ganharia um concurso "quem pode ser mais silencioso" por uma hora?',
  "Who would be funnier live-tweeting a boring meeting?":
    "Quem seria mais engraçado twittando ao vivo uma reunião chata?",
  'Who is most likely to become the "fun one" at every party you both attend?':
    'Quem é mais propenso a se tornar o "divertido" em todas as festas que vocês dois participam?',
  "Who is most likely to remember a stranger's name better than their own coworker's?":
    "Quem é mais propenso a lembrar o nome de um estranho melhor do que o de seu próprio colega de trabalho?",
  "Who is most likely to turn a five-minute errand into an hour-long adventure?":
    "Quem é mais propenso a transformar uma missão de cinco minutos em uma aventura de uma hora?",
  'Who is most likely to win "best hype person" at the other\'s big moment?':
    'Quem tem mais probabilidade de ganhar "melhor pessoa sensacionalista" no grande momento do outro?',
  "What country should we visit together first?":
    "Que país devemos visitar juntos primeiro?",
  "Beach vacation, city trip, or nature escape — what's our next move?":
    "Férias na praia, viagem à cidade ou fuga da natureza — qual é o nosso próximo passo?",
  "What is a place from your childhood you'd like to show me?":
    "Que lugar da sua infância você gostaria de me mostrar?",
  "Would you rather a slow train journey or a quick flight for our trips?":
    "Você prefere uma viagem de trem lenta ou um voo rápido para nossas viagens?",
  "What would our dream home look like?":
    "Como seria a casa dos nossos sonhos?",
  "What is non-negotiable in a place we live?":
    "O que não é negociável em um lugar em que vivemos?",
  "Do you picture plants, pets, art — what makes a house feel like ours?":
    "Você imagina plantas, animais de estimação, arte — o que faz uma casa parecer nossa?",
  "City apartment or house with a yard?":
    "Apartamento urbano ou casa com quintal?",
  "Where do you picture your career five years from now?":
    "Onde você imagina sua carreira daqui a cinco anos?",
  "How can I best support your work goals?":
    "Como posso apoiar melhor seus objetivos de trabalho?",
  "What does work-life balance look like for us as a team?":
    "Como é o equilíbrio entre trabalho e vida pessoal para nós como equipe?",
  "If money didn't matter for one year, what would we do?":
    "Se o dinheiro não importasse por um ano, o que faríamos?",
  "What money habit do you want us to build together?":
    "Que hábito de dinheiro você quer que construamos juntos?",
  "Save for a house, travel, or experiences first — what's your priority?":
    "Poupe para uma casa, viagem ou experiências em primeiro lugar — qual é a sua prioridade?",
  "What would our perfect ordinary Sunday look like?":
    "Como seria o nosso domingo comum perfeito?",
  "Are we more morning coffee people or late-night talk people long-term?":
    "Somos mais pessoas que tomam café pela manhã ou pessoas que conversam tarde da noite a longo prazo?",
  "How social do you want our life to be — dinners out or quiet home?":
    "Quão social você quer que nossa vida seja — jantares fora ou casa tranquila?",
  "What kind of family life do you picture for us?":
    "Que tipo de vida familiar você imagina para nós?",
  "How involved do you want extended family to be in our daily life?":
    "Quão envolvido você quer que a família extensa esteja em nossa vida diária?",
  "What family tradition from your side do you want to keep?":
    "Que tradição familiar do seu lado você quer manter?",
  "Do you picture a pet in our future — and if so, what kind?":
    "Você imagina um animal de estimação em nosso futuro — e, em caso afirmativo, de que tipo?",
  "Dog, cat, or something unexpected?": "Cachorro, gato ou algo inesperado?",
  "What's one adventure you want us to take before we settle down?":
    "Qual é a aventura que você quer que a gente faça antes de se estabelecer?",
  "What scare (skydiving, camping, karaoke) should we try together?":
    "Que susto (paraquedismo, acampamento, karaokê) devemos tentar juntos?",
  "What does marriage mean to you, in your own words?":
    "O que o casamento significa para você, em suas próprias palavras?",
  "What would make a wedding feel like 'us'?":
    'O que faria um casamento parecer "nós"?',
  "Describe, in one paragraph, what you imagine our wedding day feeling like.":
    "Descreva, em um parágrafo, como você imagina o dia do nosso casamento.",
  "What tradition would you want us to create together?":
    "Que tradição você gostaria que criássemos juntos?",
  "Weekly date night, annual trip, or something weirder?":
    "Noite de encontro semanal, viagem anual ou algo mais estranho?",
  "How do you imagine we'll spend the holidays once we're together full-time?":
    "Como você imagina que passaremos as férias quando estivermos juntos em tempo integral?",
  "Do you prefer hosting or traveling for holidays?":
    "Prefere hospedar ou viajar de férias?",
  "What do you imagine us doing when we're old together?":
    "O que você nos imagina fazendo quando envelhecermos juntos?",
  "Where do you hope we grow old?": "Onde você espera que envelheçamos?",
  "What's a dream of yours that you want us to chase together?":
    "Qual é o seu sonho que você quer que perseguamos juntos?",
  "What personal dream should never get lost because of the relationship?":
    "Que sonho pessoal nunca deve ser perdido por causa do relacionamento?",
  "What's one thing you'd want on a shared bucket list right now?":
    "O que você gostaria de ter em uma lista de desejos compartilhada agora?",
  "Name three things we should do before five years pass.":
    "Cite três coisas que devemos fazer antes que passem cinco anos.",
  "Where do you think we'll be living five years from now?":
    "Onde você acha que estaremos vivendo daqui a cinco anos?",
  "Do you see us in Brazil, abroad, or both across different seasons?":
    "Você nos vê no Brasil, no exterior ou em ambas as estações?",
  "Plan our next date, right now, in detail.":
    "Planeje nossa próxima data, agora, em detalhes.",
  "What language would you want us to learn together?":
    "Que idioma você gostaria que aprendêssemos juntos?",
  "What color is our future kitchen, in your head?":
    "Qual é a cor da nossa futura cozinha, na sua cabeça?",
  "How do you feel about joint vs separate finances long-term?":
    "Como você se sente sobre finanças conjuntas versus separadas a longo prazo?",
  "How important is living near friends?":
    "Qual é a importância de morar perto de amigos?",
  "How do you feel about kids — timing, openness, fears?":
    "Como você se sente em relação às crianças — tempo, abertura, medos?",
  "What rules would our future pet have to follow?":
    "Que regras nosso futuro animal de estimação teria que seguir?",
  "What festival or concert should be on our list?":
    "Que festival ou concerto deve estar na nossa lista?",
  "What vows matter more to you: poetic or practical?":
    "O que os votos importam mais para você: poéticos ou práticos?",
  "What should we always do on our anniversary?":
    "O que devemos sempre fazer no nosso aniversário?",
  "New Year's Eve in or out, years from now?":
    "Véspera de Ano Novo dentro ou fora, daqui a alguns anos?",
  "What hobby do you hope we're still doing at 70?":
    "Que hobby você espera que ainda estejamos fazendo aos 70 anos?",
  "If we wrote a five-year plan tonight, what tops the list?":
    "Se escrevermos um plano de cinco anos esta noite, o que encabeça a lista?",
  "One spontaneous item and one planned item for the list.":
    "Um item espontâneo e um item planejado para a lista.",
  "Urban energy or quieter life — where does your gut go?":
    "Energia urbana ou vida mais tranquila — para onde vai o seu instinto?",
  "What memory do you hope we create this year?":
    "Que memória você espera que criemos este ano?",
  "Road trip across a country — which one?":
    "Viagem de carro por um país — qual?",
  "Guest room or home office if we had to choose one?":
    "Quarto de hóspedes ou escritório em casa, se tivéssemos que escolher um?",
  "How do we handle busy seasons without losing us?":
    "Como lidamos com as estações movimentadas sem nos perder?",
  "What does 'enough' money mean to you?":
    'O que o dinheiro "suficiente" significa para você?',
  "How much routine vs spontaneity do you want long-term?":
    "Quanta rotina vs espontaneidade você quer a longo prazo?",
  "What values do you hope our household has?":
    "Que valores você espera que nossa família tenha?",
  "Would you rather foster first or adopt for life?":
    "Você prefere adotar primeiro ou adotar por toda a vida?",
  "Camping for a weekend — yes, no, or luxury glamping only?":
    "Acampar por um fim de semana — sim, não ou apenas glamping de luxo?",
  "How do you want to handle last names, if at all?":
    "Como você quer lidar com sobrenomes, se for o caso?",
  "Sunday morning ritual idea — go.":
    "Ideia de ritual matinal de domingo — vá.",
  "Which holiday do you want to make 'ours'?":
    'Que feriado você quer fazer "nosso"?',
  "Travel when old, or deep roots in one place?":
    "Viajar quando velho, ou raízes profundas em um só lugar?",
  "What creative project could we do as a couple someday?":
    "Que projeto criativo poderíamos fazer como casal algum dia?",
  "A kind of food destination you want to travel for.":
    "Um tipo de destino gastronômico para o qual você deseja viajar.",
  "Same city forever or chapters in different places?":
    "A mesma cidade para sempre ou capítulos em lugares diferentes?",
  "Describe a random Tuesday with us in ten years.":
    "Descreva uma terça-feira aleatória conosco em dez anos.",
  "First class once or more trips on a budget?":
    "Primeira classe uma ou mais viagens com orçamento limitado?",
  "What is the first thing you'd hang on the wall?":
    "Qual é a primeira coisa que você penduraria na parede?",
  "Whose job would dictate a move, if either?":
    "O trabalho de quem ditaria uma mudança, se for o caso?",
  "Gym partners, hobby partners, or independent hobbies?":
    "Parceiros de academia, parceiros de hobby ou hobbies independentes?",
  "How do you want to show up for each other's parents?":
    "Como vocês querem aparecer para os pais um do outro?",
  "First Impressions": "Primeiras impressões",
  Memories: "Memórias",
  Appreciation: "Apreciação",
  Personality: "Personalidade",
  Love: "Amor",
  Communication: "Comunicação",
  Childhood: "Infância",
  Dreams: "Sonhos",
  Us: "Nós",
  Relationship: "Relacionamento",
  Values: "Valores",
  Fears: "Medos",
  Future: "Futuro",
  Vulnerability: "Vulnerabilidade",
  "Things We Haven't Said": "O que ainda não dissemos",
  Trust: "Confiança",
  Conflict: "Conflito",
  Growth: "Crescimento",
  "How Well Do You Know Me": "O quanto você me conhece",
  "Language of Love": "Linguagem do amor",
  Identity: "Identidade",
  Gratitude: "Gratidão",
  Funny: "Engraçado",
  Romantic: "Romântico",
  "Impossible Choices": "Escolhas impossíveis",
  Travel: "Viagem",
  Food: "Comida",
  Lifestyle: "Estilo de vida",
  Embarrassing: "Constrangedor",
  Hypothetical: "Hipotético",
  "Choose Between Us": "Escolha entre nós",
  Chaos: "Caos",
  Flirting: "Flertes",
  Compliments: "Elogios",
  Attraction: "Atração",
  Chemistry: "Química",
  Kissing: "Beijos",
  Preferences: "Preferências",
  "Date Night": "Encontro",
  Confessions: "Confissões",
  Rate: "Avalie",
  "Tell Me": "Me diga",
  "Show Me": "Me mostre",
  "Romantic Scenarios": "Cenários românticos",
  Choose: "Escolha",
  "Playful Challenges": "Desafios brincalhões",
  "Who Would": "Quem iria",
  "Most Likely": "Mais provável",
  Arguments: "Discussões",
  "Hypothetical Disasters": "Desastres hipotéticos",
  "Weird Scenarios": "Cenários estranhos",
  Predictions: "Previsões",
  "Petty Debates": "Debates bobos",
  "Inside Jokes": "Piadas internas",
  Challenges: "Desafios",
  Random: "Aleatório",
  Home: "Lar",
  Career: "Carreira",
  Money: "Dinheiro",
  Family: "Família",
  Adventures: "Aventuras",
  Marriage: "Casamento",
  Traditions: "Tradições",
  Holidays: "Festas",
  Retirement: "Aposentadoria",
  "Where Will We Be": "Onde estaremos",
  "Future Memories": "Memórias futuras",
  Legacy: "Legado",
  "Why?": "Por quê?",
  "What does comfort look like to you after a hard day?":
    "Como é o conforto para você depois de um dia difícil?",
  Comfort: "Conforto",
  "What is the smallest thing I do that makes you feel calmer?":
    "Qual é a menor coisa que eu faço que te deixa mais calmo(a)?",
  "When you're overwhelmed, do you want solutions or just my presence?":
    "Quando você está sobrecarregado(a), você quer soluções ou só a minha presença?",
  "What's a place, real or imagined, where you feel completely safe with me?":
    "Qual é um lugar, real ou imaginário, onde você se sente completamente seguro(a) comigo?",
  "What sound or silence helps you settle down the fastest?":
    "Que som ou silêncio te ajuda a se acalmar mais rápido?",
  "What's something you never had to ask me for, because I just noticed you needed it?":
    "O que é algo que você nunca precisou me pedir, porque eu simplesmente percebi que você precisava?",
  "Do you prefer a hug, a joke, or silence when you're upset?":
    "Você prefere um abraço, uma piada ou silêncio quando está chateado(a)?",
  "What's the most comforted you've ever felt in your life, and was I there?":
    "Quando você já se sentiu mais confortado(a) na vida, e eu estava presente?",
  "What's one thing I say that instantly makes you feel better?":
    "Qual frase minha faz você se sentir melhor instantaneamente?",
  "What comfort do you wish you'd asked for as a kid that you can ask me for now?":
    "Que conforto você gostaria de ter pedido quando criança, que pode me pedir agora?",
  "You don't have to answer fully — even sharing a little counts.":
    "Você não precisa responder completamente — até compartilhar um pouco já conta.",
  "What's one ordinary Tuesday you're quietly grateful for?":
    "Qual é uma terça-feira comum pela qual você é grato(a) em silêncio?",
  "Name a small thing about our routine you'd genuinely miss if it disappeared.":
    "Cite algo pequeno da nossa rotina que você realmente sentiria falta se desaparecesse.",
  "What's something hard you went through that you're grateful I saw you through?":
    "O que é algo difícil que você passou e pelo qual é grato(a) por eu ter te acompanhado?",
  "What part of your day am I usually not there for, that you wish I could see?":
    "Em que parte do seu dia eu geralmente não estou, mas você gostaria que eu visse?",
  "What's a risk you took because you knew I'd support you either way?":
    "Que risco você correu porque sabia que eu te apoiaria de qualquer jeito?",
  "What is something about your life now that you don't take for granted anymore?":
    "O que na sua vida hoje você não considera mais garantido?",
  "What's a version of gratitude you feel for me that's hard to put into words?":
    "Que tipo de gratidão por mim é difícil de colocar em palavras?",
  "What's a habit of mine you didn't expect to be thankful for?":
    "Que hábito meu você não esperava agradecer por ter?",
  "When do you catch yourself feeling lucky about us, out of nowhere?":
    "Quando você se pega sentindo sorte por nós, do nada?",
  "Say three things about me you've never actually thanked me for.":
    "Diga três coisas sobre mim pelas quais você nunca me agradeceu de verdade.",
  "What makes a place feel like 'home' to you when I'm not physically there?":
    "O que faz um lugar parecer 'lar' para você quando eu não estou fisicamente presente?",
  "What smell or sound instantly makes you think of home?":
    "Que cheiro ou som te faz pensar em lar instantaneamente?",
  "Do you feel more 'home' in silence with me, or in noise and activity?":
    "Você se sente mais 'em casa' no silêncio comigo, ou no barulho e na atividade?",
  "What is one object that, if lost, would feel like losing a piece of us?":
    "Qual objeto, se perdido, pareceria perder um pedaço de nós?",
  "Have I ever felt like home to you before we even had a shared address?":
    "Eu já parecia lar para você mesmo antes de termos um endereço em comum?",
  "What does it mean to you to build a home, versus just live in a house?":
    "O que significa construir um lar para você, em vez de apenas morar numa casa?",
  "What's your favorite corner of wherever you live right now, and why?":
    "Qual é o seu canto favorito de onde você mora agora, e por quê?",
  "What routine, however small, makes a place feel lived-in and ours?":
    "Que rotina, por menor que seja, faz um lugar parecer habitado e nosso?",
  "If home were a feeling instead of a place, how would you describe it?":
    "Se lar fosse um sentimento em vez de um lugar, como você o descreveria?",
  "What's something from your childhood home you want to recreate in ours someday?":
    "O que da casa da sua infância você quer recriar na nossa algum dia?",
  "What part of who you are today did you build because of us?":
    "Que parte de quem você é hoje você construiu por causa de nós?",
  "What's something about yourself you understand better since being with me?":
    "O que sobre você mesmo(a) você entende melhor desde que está comigo?",
  "What identity or role matters most to you outside of being my partner?":
    "Qual identidade ou papel importa mais para você fora de ser meu(minha) parceiro(a)?",
  "How do you protect your individuality inside a relationship?":
    "Como você protege sua individualidade dentro de um relacionamento?",
  "What's a label you used to define yourself by that you've outgrown?":
    "Que rótulo você costumava usar para se definir e já superou?",
  "What's something true about you that has nothing to do with me at all?":
    "O que é algo verdadeiro sobre você que não tem nada a ver comigo?",
  "What part of yourself are you still figuring out, even now?":
    "Que parte de você mesmo(a) você ainda está descobrindo, até agora?",
  "Do you feel more like yourself when you're alone, or when you're with me?":
    "Você se sente mais você mesmo(a) sozinho(a), ou quando está comigo?",
  "What's a belief about yourself I helped you unlearn?":
    "Qual crença sobre você mesmo(a) eu te ajudei a desaprender?",
  "If you introduced yourself with no job title and no relationship status, who are you?":
    "Se você se apresentasse sem cargo e sem status de relacionamento, quem você é?",
  "What moment made you realize 'this is serious' between us?":
    "Que momento fez você perceber 'isso é sério' entre nós?",
  Milestones: "Marcos",
  "What's a milestone of ours, big or small, that people would underestimate?":
    "Qual marco nosso, grande ou pequeno, as pessoas subestimariam?",
  "What milestone are you most looking forward to next?":
    "Qual marco você está mais ansioso(a) para viver a seguir?",
  "Which milestone changed how you saw our future the most?":
    "Qual marco mudou mais a forma como você via o nosso futuro?",
  "What's a 'first' with me you still remember in detail?":
    "Qual 'primeira vez' comigo você ainda lembra em detalhes?",
  "What milestone do you wish we'd celebrated more than we did?":
    "Qual marco você gostaria que tivéssemos comemorado mais do que comemoramos?",
  "What private milestone, one nobody else knows about, matters most to you?":
    "Qual marco privado, que ninguém mais sabe, importa mais para você?",
  "What's a small 'we made it' moment we don't talk about enough?":
    "Qual pequeno momento de 'conseguimos' nós não comentamos o suficiente?",
  "What milestone still ahead of us scares you a little, in a good way?":
    "Qual marco que ainda está por vir te assusta um pouco, de um jeito bom?",
  "Tell the full story of the moment you knew we'd last.":
    "Conte a história completa do momento em que você soube que duraríamos.",
  "Would you rather I remembered your coffee order or your schedule perfectly?":
    "Você prefere que eu lembrasse do seu pedido de café ou da sua agenda perfeitamente?",
  "Would you rather we texted all day or called once at night?":
    "Você prefere que a gente trocasse mensagens o dia todo ou ligasse uma vez à noite?",
  "Would you rather I noticed when you're quiet or when you're loud?":
    "Você prefere que eu percebesse quando você está quieto(a) ou quando está agitado(a)?",
  "Would you rather we made big plans together or lived more day by day?":
    "Você prefere que a gente fizesse grandes planos juntos ou vivesse mais dia a dia?",
  "Would you rather I asked more questions or shared more of my own thoughts?":
    "Você prefere que eu fizesse mais perguntas ou compartilhasse mais meus próprios pensamentos?",
  "Would you rather I was the one who worries or the one who reassures?":
    "Você prefere que eu fosse quem se preocupa ou quem tranquiliza?",
  "Would you rather we kept most things private or shared almost everything with friends?":
    "Você prefere que a gente mantivesse a maioria das coisas privadas ou compartilhasse quase tudo com os amigos?",
  "Would you rather I planned surprises or asked you what you actually want?":
    "Você prefere que eu planejasse surpresas ou perguntasse o que você realmente quer?",
  "Would you rather our love be loud and obvious or quiet and steady?":
    "Você prefere que o nosso amor fosse alto e óbvio ou quieto e constante?",
  "Would you rather I forgave quickly or took time to really process first?":
    "Você prefere que eu perdoasse rápido ou levasse tempo para realmente processar primeiro?",
  "One word for how you feel right now, no thinking.":
    "Uma palavra para como você se sente agora, sem pensar.",
  "No overthinking — first answer only.":
    "Sem pensar demais — só a primeira resposta.",
  "The last thing that surprised you, in five words or less.":
    "A última coisa que te surpreendeu, em cinco palavras ou menos.",
  "Name a smell that instantly reminds you of me.":
    "Cite um cheiro que te lembra instantaneamente de mim.",
  "The first place you'd want to go, right now, no planning.":
    "O primeiro lugar para onde você iria agora, sem planejar.",
  "One thing you're proud of yourself for this week.":
    "Uma coisa da qual você se orgulha esta semana.",
  "Say the first nickname for me that comes to mind.":
    "Diga o primeiro apelido meu que vier à mente.",
  "The emoji that best describes today, no explanation.":
    "O emoji que melhor descreve hoje, sem explicação.",
  "One thing you want more of in your life right now.":
    "Uma coisa que você quer mais na sua vida agora.",
  "First song lyric that pops into your head.":
    "Primeira frase de música que vem à sua cabeça.",
  "The truest compliment you can give me in three words.":
    "O elogio mais verdadeiro que você pode me dar em três palavras.",
  "Trade questions: ask me anything you've always wanted to know, right now.":
    "Troque as perguntas: me pergunte qualquer coisa que sempre quis saber, agora.",
  "Describe today as if it were a chapter title in our story.":
    "Descreva hoje como se fosse o título de um capítulo da nossa história.",
  "Pick one word to ban from our vocabulary for the rest of the night, and why.":
    "Escolha uma palavra para banir do nosso vocabulário pelo resto da noite, e por quê.",
  "Answer this question, but only using questions of your own.":
    "Responda esta pergunta, mas usando apenas perguntas suas.",
  "Say something true about us that you've never said out loud before.":
    "Diga algo verdadeiro sobre nós que você nunca disse em voz alta antes.",
  "If tonight had a soundtrack, what's the one song that plays right now?":
    "Se hoje à noite tivesse uma trilha sonora, qual música tocaria agora?",
  "Invent a new rule for our relationship, on the spot, and commit to it.":
    "Invente uma nova regra para o nosso relacionamento, na hora, e se comprometa com ela.",
  "Skip your turn and instead do something kind for me right now.":
    "Pule sua vez e, em vez disso, faça algo gentil por mim agora.",
  "Pick an object nearby and explain, honestly, what it says about our life together.":
    "Escolha um objeto por perto e explique, honestamente, o que ele diz sobre nossa vida juntos.",
  "Say the most honest thing on your mind right now, no matter how small.":
    "Diga a coisa mais honesta em sua mente agora, não importa quão pequena.",
  "What value did your family raise you with that you now question?":
    "Qual valor sua família te ensinou que você agora questiona?",
  "What matters more to you in a hard decision: logic or feeling?":
    "O que importa mais para você numa decisão difícil: lógica ou sentimento?",
  "What's a value we don't share but you've come to respect in me anyway?":
    "Qual valor nós não compartilhamos, mas você passou a respeitar em mim mesmo assim?",
  "What do you think a relationship owes each person, at minimum?":
    "O que você acha que um relacionamento deve a cada pessoa, no mínimo?",
  "What's something you'd never compromise on, even for me?":
    "O que você nunca abriria mão, nem mesmo por mim?",
  "What does integrity look like in the small, unwatched moments?":
    "Como é a integridade nos pequenos momentos, quando ninguém está olhando?",
  "What value do you hope we pass on if we ever raise a family?":
    "Qual valor você espera que a gente transmita se algum dia criarmos uma família?",
  "What's a small act of kindness that says a lot about someone's character?":
    "Qual pequeno ato de bondade diz muito sobre o caráter de alguém?",
  "What does 'showing up' for someone really mean to you?":
    "O que significa realmente 'estar presente' por alguém para você?",
  "What's a value you've had to defend, even when it wasn't easy?":
    "Qual valor você já teve que defender, mesmo quando não foi fácil?",
  "If you could freeze one hour with me forever, which one would it be?":
    "Se você pudesse congelar uma hora comigo para sempre, qual seria?",
  Time: "Tempo",
  "Do you feel like time moves faster or slower when you're with me?":
    "Você sente que o tempo passa mais rápido ou mais devagar quando está comigo?",
  "What's a moment you wish had lasted longer than it did?":
    "Qual momento você gostaria que tivesse durado mais do que durou?",
  "What do you want us to make more time for this year?":
    "Para que você quer que a gente reserve mais tempo este ano?",
  "If we could relive any single day together exactly as it happened, which one?":
    "Se pudéssemos reviver um único dia juntos exatamente como aconteceu, qual seria?",
  "What's something you used to think we had plenty of time for, and now don't take for granted?":
    "O que você costumava achar que teríamos bastante tempo, e agora não considera mais garantido?",
  "What time of day do you feel most connected to me?":
    "Em que horário do dia você se sente mais conectado(a) comigo?",
  "If you had one more hour with the version of us from a year ago, what would you say?":
    "Se você tivesse mais uma hora com a versão de nós de um ano atrás, o que diria?",
  "What's a slow, uneventful memory of us that you wouldn't trade for anything?":
    "Qual memória lenta e sem grandes eventos você não trocaria por nada?",
  "How has your sense of 'the future' changed since we started counting time together?":
    "Como sua noção de 'futuro' mudou desde que passamos a contar o tempo juntos?",
  "Would you rather I narrated our whole day like a nature documentary, or in a movie-trailer voice?":
    "Você prefere que eu narrasse o nosso dia inteiro como um documentário de natureza, ou com voz de trailer de filme?",
  "Would you rather I laughed at my own jokes before finishing them, or never laughed at yours?":
    "Você prefere que eu risse das minhas próprias piadas antes de terminá-las, ou nunca risse das suas?",
  "Would you rather we had matching ridiculous hats, or matching ringtones?":
    "Você prefere que a gente tivesse chapéus ridículos combinando, ou toques de celular iguais?",
  "Would you rather I hummed constantly and off-key, or talked to myself out loud?":
    "Você prefere que eu cantarolasse sem parar e desafinado, ou falasse sozinho(a) em voz alta?",
  "Would you rather we had a secret handshake we use in public, or a code word for 'save me'?":
    "Você prefere que a gente tivesse um cumprimento secreto em público, ou uma palavra-código para 'me salva'?",
  "Would you rather I wrote you poetry badly, or sang to you badly?":
    "Você prefere que eu escrevesse poesia mal para você, ou cantasse mal para você?",
  "Would you rather a candlelit dinner at home, or a picnic under the stars?":
    "Você prefere um jantar à luz de velas em casa, ou um piquenique sob as estrelas?",
  "Would you rather I left little notes around the house, or sent sweet texts during the day?":
    "Você prefere que eu deixasse bilhetinhos pela casa, ou mandasse mensagens fofas durante o dia?",
  "Would you rather slow dance in the kitchen, or in the rain?":
    "Você prefere dançar devagar na cozinha, ou na chuva?",
  "Would you rather I remembered every anniversary exactly, or surprised you on random ordinary days instead?":
    "Você prefere que eu lembrasse exatamente de cada aniversário, ou te surpreendesse em dias comuns aleatórios?",
  "Would you rather lose all our photos or all our voice messages?":
    "Você prefere perder todas as nossas fotos ou todos os nossos áudios?",
  "Would you rather only be able to hug or only be able to hold hands, forever?":
    "Você prefere só poder abraçar ou só poder dar as mãos, para sempre?",
  "Would you rather I always told the truth bluntly, or softened it every time?":
    "Você prefere que eu sempre falasse a verdade sem rodeios, ou a suavizasse sempre?",
  "Would you rather have unlimited time but less money, or unlimited money but less time?":
    "Você prefere ter tempo ilimitado mas menos dinheiro, ou dinheiro ilimitado mas menos tempo?",
  "Would you rather road-trip with no destination, or fly somewhere with a strict itinerary?":
    "Você prefere uma viagem de carro sem destino, ou voar para algum lugar com um roteiro rígido?",
  "Would you rather camp in the mountains together, or stay in a fancy city hotel?":
    "Você prefere acampar nas montanhas juntos, ou ficar num hotel chique na cidade?",
  "Would you rather we learned a new language together for a trip, or relied entirely on translation apps?":
    "Você prefere que a gente aprendesse um novo idioma juntos para uma viagem, ou dependesse totalmente de aplicativos de tradução?",
  "Would you rather visit ten countries in a month, or one country for a whole year?":
    "Você prefere visitar dez países em um mês, ou um país durante um ano inteiro?",
  "Would you rather cook an elaborate meal together every Sunday, or always order in on Sundays?":
    "Você prefere cozinhar uma refeição elaborada juntos todo domingo, ou sempre pedir comida aos domingos?",
  "Would you rather share dessert every time, or always get your own?":
    "Você prefere sempre dividir a sobremesa, ou sempre pedir a sua própria?",
  "Would you rather I criticized your cooking honestly, or lied and said it's perfect?":
    "Você prefere que eu criticasse sua comida honestamente, ou mentisse dizendo que está perfeita?",
  "Would you rather we lived minimally with few things, or surrounded by things that remind us of memories?":
    "Você prefere que a gente vivesse com poucas coisas, ou cercados de coisas que nos lembram memórias?",
  "Would you rather have a strict weekly routine together, or completely wing it every week?":
    "Você prefere ter uma rotina semanal rígida juntos, ou improvisar completamente toda semana?",
  "Would you rather we hosted friends often, or kept our home mostly just for us?":
    "Você prefere que a gente recebesse amigos com frequência, ou mantivesse nossa casa mais reservada para nós?",
  "Would you rather we never went to bed angry, or always took space to cool off first?":
    "Você prefere que a gente nunca fosse dormir bravo, ou sempre desse um tempo para esfriar a cabeça primeiro?",
  "Would you rather I initiated conversations about feelings, or you did?":
    "Você prefere que eu iniciasse as conversas sobre sentimentos, ou você?",
  "Would you rather have one big yearly vacation, or several small weekend trips?":
    "Você prefere uma grande viagem anual, ou várias viagens curtas de fim de semana?",
  "Would you rather we celebrated small wins constantly, or saved celebration for big milestones?":
    "Você prefere que a gente comemorasse pequenas vitórias sempre, ou guardasse a comemoração para grandes marcos?",
  "Would you rather we settled down early, or explored freely before settling?":
    "Você prefere que a gente se estabelecesse cedo, ou explorasse livremente antes de se estabelecer?",
  "Would you rather have a detailed 10-year plan, or figure it out as we go?":
    "Você prefere ter um plano detalhado de 10 anos, ou ir descobrindo aos poucos?",
  "Would you rather prioritize career growth or lifestyle flexibility in our next big decision?":
    "Você prefere priorizar o crescimento na carreira ou a flexibilidade de estilo de vida na nossa próxima grande decisão?",
  "Would you rather I told an embarrassing story about you at a party, or you told one about me?":
    "Você prefere que eu contasse uma história vergonhosa sobre você numa festa, ou você contasse uma sobre mim?",
  "Would you rather sing karaoke terribly in front of my family, or dance terribly in front of yours?":
    "Você prefere cantar karaokê terrivelmente na frente da minha família, ou dançar terrivelmente na frente da sua?",
  "Would you rather accidentally like an old photo of mine from years ago, or comment the wrong thing publicly?":
    "Você prefere curtir sem querer uma foto antiga minha de anos atrás, ou comentar a coisa errada publicamente?",
  "Would you rather I was more spontaneous, or more reliable?":
    "Você prefere que eu fosse mais espontâneo(a), ou mais confiável?",
  "Would you rather a partner who challenges you daily, or one who keeps things calm and steady?":
    "Você prefere um(a) parceiro(a) que te desafia todos os dias, ou um que mantém tudo calmo e estável?",
  "Would you rather I was more competitive, or more laid-back about winning and losing?":
    "Você prefere que eu fosse mais competitivo(a), ou mais tranquilo(a) sobre ganhar e perder?",
  "Would you rather live one perfect year together and forget it, or remember an average one forever?":
    "Você prefere viver um ano perfeito juntos e esquecê-lo, ou lembrar de um ano mediano para sempre?",
  "Would you rather have a soundtrack that plays whenever you're falling for me, or one for when you're mad at me?":
    "Você prefere ter uma trilha sonora que toca quando você está se apaixonando por mim, ou uma para quando está bravo(a) comigo?",
  "Would you rather we could pause time only for us once a year, or rewind one mistake once a year?":
    "Você prefere que a gente pudesse pausar o tempo só para nós uma vez por ano, ou voltar atrás em um erro uma vez por ano?",
  "Would you rather I always drove, or you always drove?":
    "Você prefere que eu sempre dirigisse, ou você sempre dirigisse?",
  "Would you rather I handled all the planning, or you handled all the planning?":
    "Você prefere que eu cuidasse de todo o planejamento, ou você cuidasse?",
  "Would you rather I always picked the music, or you always picked the music?":
    "Você prefere que eu sempre escolhesse a música, ou você sempre escolhesse?",
  "Would you rather our apartment flooded a little, or our internet died for a week?":
    "Você prefere que nosso apartamento alagasse um pouco, ou que nossa internet caísse por uma semana?",
  "Would you rather both get food poisoning before a big event, or both oversleep and miss it entirely?":
    "Você prefere que ambos passassem mal de comida antes de um grande evento, ou que ambos dormissem demais e perdessem tudo?",
  "Would you rather get a flat tire far from home, or lock ourselves out at midnight?":
    "Você prefere furar um pneu longe de casa, ou ficar trancados do lado de fora à meia-noite?",
  "Would you rather relive our very last fight to end it better, or forget it happened at all?":
    "Você prefere reviver nossa última briga para terminá-la melhor, ou esquecer que ela aconteceu?",
  "Would you rather keep the exact voice memo from our first 'I love you,' or the memory alone, unrecorded?":
    "Você prefere guardar o áudio exato do nosso primeiro 'eu te amo', ou só a memória, sem gravação?",
  "Would you rather relive the nervous excitement before our first kiss, or the comfort of a thousandth one?":
    "Você prefere reviver o nervosismo antes do nosso primeiro beijo, ou o conforto do milésimo?",
  "Would you rather our love story get a tragic prestige-drama ending, or a cheesy happy one?":
    "Você prefere que nossa história de amor tivesse um final trágico de drama premiado, ou um final feliz meloso?",
  "Would you rather I quoted your favorite show constantly, or you quoted mine constantly?":
    "Você prefere que eu citasse sua série favorita o tempo todo, ou você citasse a minha?",
  "Would you rather we had a couple's theme song chosen by our friends, or one we picked ourselves?":
    "Você prefere que a gente tivesse uma música-tema de casal escolhida pelos amigos, ou uma que a gente mesmo escolhesse?",
  "Would you rather I worked from home forever, or traveled constantly for work?":
    "Você prefere que eu trabalhasse de casa para sempre, ou viajasse constantemente a trabalho?",
  "Would you rather have more free time with less money, or more money with less free time?":
    "Você prefere ter mais tempo livre com menos dinheiro, ou mais dinheiro com menos tempo livre?",
  "Would you rather we worked in the same field, or completely different ones?":
    "Você prefere que a gente trabalhasse na mesma área, ou em áreas completamente diferentes?",
  "Would you rather I took a big career risk with your full support, or played it safe together?":
    "Você prefere que eu corresse um grande risco na carreira com seu apoio total, ou que jogássemos seguro juntos?",
  "Would you rather be stuck together in a heatwave with no AC, or a snowstorm with no heating?":
    "Você prefere ficar preso(a) comigo numa onda de calor sem ar-condicionado, ou numa nevasca sem aquecimento?",
  Weather: "Clima",
  "Would you rather rainy days in together, or sunny days out together?":
    "Você prefere dias de chuva em casa juntos, ou dias de sol fora juntos?",
  "Would you rather chase storms for the thrill, or always seek out calm, clear skies?":
    "Você prefere perseguir tempestades pela emoção, ou sempre buscar céus calmos e claros?",
  "Would you rather we deleted social media for a year, or never turned off notifications?":
    "Você prefere que a gente deletasse as redes sociais por um ano, ou nunca desligasse as notificações?",
  Technology: "Tecnologia",
  "Would you rather text in full sentences always, or only in abbreviations and emojis?":
    "Você prefere sempre mandar mensagem com frases completas, ou só com abreviações e emojis?",
  "Would you rather have a smart home that does everything, or keep everything old-fashioned and manual?":
    "Você prefere uma casa inteligente que faz tudo, ou manter tudo à moda antiga e manual?",
  "Would you rather rewatch our favorite movie every year on the same day, or always find something new?":
    "Você prefere reassistir nosso filme favorito todo ano no mesmo dia, ou sempre encontrar algo novo?",
  Movies: "Filmes",
  "Would you rather I cried at every sad movie, or never showed emotion during them?":
    "Você prefere que eu chorasse em todo filme triste, ou nunca demonstrasse emoção neles?",
  "Would you rather our life be adapted into a comedy, or a romantic drama?":
    "Você prefere que nossa vida virasse uma comédia, ou um drama romântico?",
  "Would you rather play on the same team, or be friendly rivals in a sport?":
    "Você prefere jogar no mesmo time, ou ser rivais amigáveis em um esporte?",
  Sports: "Esportes",
  "Would you rather I was your loudest cheerleader, or your calm, quiet support?":
    "Você prefere que eu fosse seu(sua) torcedor(a) mais barulhento(a), ou seu apoio calmo e silencioso?",
  "Would you rather train for a marathon together, or take up a chill hobby instead?":
    "Você prefere treinar para uma maratona juntos, ou adotar um hobby mais tranquilo?",
  "Would you rather I remembered your childhood stories perfectly, or your daily preferences perfectly?":
    "Você prefere que eu lembrasse perfeitamente das suas histórias de infância, ou das suas preferências diárias?",
  "Would you rather never fight again but grow apart slowly, or fight sometimes but stay close?":
    "Você prefere nunca mais brigar, mas se distanciar aos poucos, ou brigar às vezes, mas continuar próximos?",
  "Would you rather I always agreed with you, or always gave an honest opinion even if different?":
    "Você prefere que eu sempre concordasse com você, ou sempre desse uma opinião honesta mesmo que diferente?",
  "Would you rather live near the beach, or in the mountains, for the rest of our lives?":
    "Você prefere morar perto da praia, ou nas montanhas, pelo resto da nossa vida?",
  "Would you rather I made up a ridiculous nickname for everyone we meet, or narrated our arguments like a sports commentator?":
    "Você prefere que eu inventasse um apelido ridículo para todo mundo que a gente conhece, ou narrasse nossas brigas como um comentarista esportivo?",
  "Would you rather I did an accent for a full day, or only spoke in movie quotes?":
    "Você prefere que eu falasse com sotaque o dia inteiro, ou só falasse em frases de filmes?",
  "Would you rather write our love story down for our kids to read someday, or keep it just between us?":
    "Você prefere escrever nossa história de amor para nossos filhos lerem um dia, ou mantê-la só entre nós?",
  "Would you rather one grand romantic gesture a year, or tiny ones every single day?":
    "Você prefere um grande gesto romântico por ano, ou pequenos gestos todos os dias?",
  "Would you rather always know exactly how the other feels, or keep a little mystery?":
    "Você prefere sempre saber exatamente como o outro se sente, ou manter um pouco de mistério?",
  "Would you rather resolve conflict with humor, or with a serious, direct conversation?":
    "Você prefere resolver conflitos com humor, ou com uma conversa séria e direta?",
  "Would you rather chase one big shared dream, or support each other's separate dreams?":
    "Você prefere perseguir um grande sonho em comum, ou apoiar os sonhos separados um do outro?",
  "Would you rather have kids early, later, or leave it open entirely?":
    "Você prefere ter filhos cedo, mais tarde, ou deixar totalmente em aberto?",
  "Would you rather explore your home country fully first, or go abroad right away?":
    "Você prefere explorar totalmente o seu país primeiro, ou ir para o exterior imediatamente?",
  "Would you rather travel with a big group of friends, or always just the two of us?":
    "Você prefere viajar com um grande grupo de amigos, ou sempre só nós dois?",
  "Would you rather give up coffee together, or give up sweets together?":
    "Você prefere abrir mão do café juntos, ou abrir mão dos doces juntos?",
  "Would you rather learn to cook one cuisine perfectly, or a little of every cuisine?":
    "Você prefere aprender a cozinhar uma culinária perfeitamente, ou um pouco de cada culinária?",
  "Would you rather live somewhere with four seasons, or somewhere warm all year?":
    "Você prefere morar em um lugar com quatro estações, ou em um lugar quente o ano todo?",
  "Would you rather early bedtimes and early mornings, or late nights and slow mornings, together?":
    "Você prefere dormir e acordar cedo, ou noites tardias e manhãs devagar, juntos?",
  "Would you rather I was quieter in public and louder at home, or the opposite?":
    "Você prefere que eu fosse mais quieto(a) em público e mais falante em casa, ou o contrário?",
  "Would you rather a partner who over-explains, or one who under-explains?":
    "Você prefere um(a) parceiro(a) que explica demais, ou um que explica de menos?",
  "Would you rather I mixed up your family members' names at a gathering, or forgot an important date out loud?":
    "Você prefere que eu confundisse o nome dos seus parentes numa reunião, ou esquecesse uma data importante em voz alta?",
  "Would you rather switch lives for a day to understand each other better, or never know exactly what the other's day is like?":
    "Você prefere trocar de vida por um dia para se entenderem melhor, ou nunca saber exatamente como é o dia do outro?",
  "Would you rather I chose our vacations, or you chose our vacations, every time?":
    "Você prefere que eu escolhesse nossas férias, ou você escolhesse, sempre?",
  "Would you rather both lose your voice the day before something important, or both catch a cold on a trip?":
    "Você prefere que ambos perdessem a voz um dia antes de algo importante, ou pegassem um resfriado numa viagem?",
  "Would you rather remember every single detail of how we met, or only the feeling of it?":
    "Você prefere lembrar de cada detalhe de como nos conhecemos, ou apenas da sensação?",
  "Would you rather our relationship be turned into a reality show, or a documentary?":
    "Você prefere que nosso relacionamento virasse um reality show, ou um documentário?",
  "Would you rather I brought work stress home sometimes, or never talked about work at all?":
    "Você prefere que eu trouxesse o estresse do trabalho para casa às vezes, ou nunca falasse sobre trabalho?",
  "Would you rather a perfect sunny wedding, or a dramatic rainy one we'll never forget?":
    "Você prefere um casamento perfeito e ensolarado, ou um dramático e chuvoso que nunca esqueceremos?",
  "Would you rather I read every message the second it arrives, or take hours to reply sometimes?":
    "Você prefere que eu lesse toda mensagem assim que chega, ou demorasse horas para responder às vezes?",
  "Would you rather cry together at a sad film, or laugh together through the whole thing instead?":
    "Você prefere chorar juntos num filme triste, ou rir juntos o tempo todo em vez disso?",
  "Would you rather we bonded over watching sports together, or bonded over something totally different?":
    "Você prefere que a gente se conectasse assistindo esportes juntos, ou por meio de algo totalmente diferente?",
  "Would you rather relive our happiest day on repeat, or keep discovering new happiest days?":
    "Você prefere reviver nosso dia mais feliz repetidamente, ou continuar descobrindo novos dias mais felizes?",
  "What's the smallest flirty gesture that gets your attention every time?":
    "Qual é o menor gesto de flerte que sempre chama sua atenção?",
  "How do you flirt when you're trying to make me laugh instead of blush?":
    "Como você flerta quando está tentando me fazer rir em vez de corar?",
  "What's a look I give you that you've learned to read perfectly?":
    "Que olhar meu você aprendeu a ler perfeitamente?",
  "What's your go-to flirty line, even if it's a little cheesy?":
    "Qual é sua cantada preferida, mesmo que seja um pouco brega?",
  "Do you flirt more with words, with touch, or with teasing?":
    "Você flerta mais com palavras, com toque, ou provocando?",
  "What's a compliment about my hands, eyes, or smile that you actually mean?":
    "Qual elogio sobre minhas mãos, olhos ou sorriso você realmente quer dizer?",
  "Compliment the way I text you good morning.":
    "Elogie a forma como eu te mando mensagem de bom dia.",
  "What's something about my confidence, or lack of it, that you find endearing?":
    "O que sobre minha confiança, ou a falta dela, você acha encantador?",
  "Tell me the compliment you give me most in your head but rarely say out loud.":
    "Diga o elogio que você mais me dá na sua cabeça, mas raramente fala em voz alta.",
  "What's an unexpected thing about me that caught your attention early on?":
    "O que de inesperado em mim chamou sua atenção logo no início?",
  "What's a version of me — tired, focused, laughing — that you're most drawn to?":
    "Qual versão minha — cansado(a), concentrado(a), rindo — te atrai mais?",
  "What's something I wear that you secretly hope I wear again?":
    "O que eu visto que você secretamente espera que eu use de novo?",
  "What moment recently made you feel a spark out of nowhere?":
    "Que momento recente te fez sentir uma faísca do nada?",
  "How does our chemistry show up differently now compared to the beginning?":
    "Como nossa química se manifesta diferente agora comparado ao começo?",
  "What's a silent moment between us that felt more intense than words?":
    "Qual momento de silêncio entre nós pareceu mais intenso do que palavras?",
  "What's the difference between a good kiss and a great one, for you?":
    "Qual é a diferença entre um beijo bom e um ótimo, para você?",
  "Forehead, cheek, or lips — which good morning kiss do you crave most?":
    "Testa, bochecha ou lábios — qual beijo de bom dia você mais deseja?",
  "Do you like being surprised with affection, or asked first?":
    "Você gosta de ser surpreendido(a) com carinho, ou de ser perguntado(a) antes?",
  "What's more you: playful teasing all night, or one intense moment?":
    "O que combina mais com você: provocação divertida a noite toda, ou um momento intenso?",
  "Design a date night with zero talking allowed until dessert.":
    "Crie um encontro noturno sem conversa permitida até a sobremesa.",
  "What's a flirty twist you'd add to a totally normal dinner date?":
    "Que toque de flerte você adicionaria a um jantar completamente normal?",
  "Confess something you find yourself wanting more of, physically, lately.":
    "Confesse algo que você tem sentido vontade de ter mais, fisicamente, ultimamente.",
  "What's a thought about me you had today that you're only now admitting?":
    "Qual pensamento sobre mim você teve hoje e só agora está admitindo?",
  "Rate how well I read your mood today, and tell me what gave it away.":
    "Avalie o quanto eu entendi seu humor hoje, e diga o que te entregou.",
  "Tell me the exact moment today you thought about me unprompted.":
    "Me diga o exato momento hoje em que você pensou em mim sem motivo.",
  "Tell me what makes you feel most desired by me.":
    "Me diga o que te faz sentir mais desejado(a) por mim.",
  "Show me the exact face you make when you're pretending not to be flirting.":
    "Me mostre a cara exata que você faz quando finge que não está flertando.",
  "Show me how you'd get my attention from across a room, no words.":
    "Me mostre como você chamaria minha atenção do outro lado da sala, sem palavras.",
  "Narrate the perfect five minutes right before we fall asleep together.":
    "Narre os cinco minutos perfeitos logo antes de dormirmos juntos.",
  "Describe a slow Saturday morning where neither of us wants to get up.":
    "Descreva uma manhã de sábado devagar em que nenhum de nós quer levantar.",
  "What builds anticipation for you more: waiting, or knowing exactly when?":
    "O que constrói mais expectativa para você: a espera, ou saber exatamente quando?",
  "Would you rather I surprised you with affection mid-day, or planned it for the evening?":
    "Você prefere que eu te surpreendesse com carinho no meio do dia, ou planejasse para a noite?",
  "Would you rather a slow, teasing goodbye, or a quick, intense one?":
    "Você prefere uma despedida lenta e provocante, ou uma rápida e intensa?",
  "What's a small thing I do that instantly shifts the mood for you?":
    "O que é uma pequena coisa que eu faço que muda o clima instantaneamente para você?",
  "Tell me exactly what you want tonight, without hesitating.":
    "Me diga exatamente o que você quer hoje à noite, sem hesitar.",
  "Dare me to say something bold before the next round starts.":
    "Desafie-me a dizer algo ousado antes da próxima rodada começar.",
  "Make up a silly rule about touching for the rest of the game.":
    "Invente uma regra boba sobre toque para o resto do jogo.",
  "Whisper, or write, one word that describes how you feel right now.":
    "Sussurre, ou escreva, uma palavra que descreve como você se sente agora.",
  "Skip this card and give me one long, slow kiss instead.":
    "Pule esta carta e me dê um beijo longo e lento em vez disso.",
  "What's the flirtiest thing about the way I move through a room?":
    "O que há de mais sedutor na forma como eu me movo por um ambiente?",
  "When do you feel the most playful, flirty version of yourself with me?":
    "Quando você se sente na versão mais brincalhona e sedutora de si mesmo(a) comigo?",
  "What's the sexiest compliment you've never actually said out loud?":
    "Qual é o elogio mais sedutor que você nunca disse em voz alta?",
  "Compliment my voice, specifically, and what it does to you.":
    "Elogie especificamente minha voz, e o que ela causa em você.",
  "What's something I do without thinking that you find irresistibly attractive?":
    "O que eu faço sem pensar que você acha irresistivelmente atraente?",
  "Casual clothes or dressed up — which version of me pulls your focus more?":
    "Roupas casuais ou arrumado(a) — qual versão minha prende mais sua atenção?",
  "What's your favorite unexpected place we've kissed?":
    "Qual é seu lugar favorito inesperado onde já nos beijamos?",
  "Describe the kiss you think about when you miss me the most.":
    "Descreva o beijo em que você pensa quando sente mais a minha falta.",
  "Would you rather I initiated a kiss in public, or saved it for when we're alone?":
    "Você prefere que eu iniciasse um beijo em público, ou guardasse para quando estivermos sozinhos?",
  "Plan a date that ends with neither of us wanting to say goodnight.":
    "Planeje um encontro que termine sem que nenhum de nós queira dizer boa noite.",
  "Confess a small thing you do on purpose just to get my attention.":
    "Confesse uma pequena coisa que você faz de propósito só para chamar minha atenção.",
  "What's a fantasy about us you've only recently let yourself think about?":
    "Qual fantasia sobre nós você só recentemente se permitiu pensar?",
  "Tell me what 'missing me' actually feels like in your body.":
    "Me diga o que 'sentir minha falta' realmente parece no seu corpo.",
  "Show me your favorite way to be pulled closer.":
    "Me mostre sua forma favorita de ser puxado(a) para mais perto.",
  "Narrate the moment right after a long hug when neither of us lets go first.":
    "Narre o momento logo depois de um abraço longo quando nenhum de nós solta primeiro.",
  "What's a look across a crowded room that instantly says everything?":
    "Qual olhar do outro lado de uma sala cheia diz tudo instantaneamente?",
  "Would you rather a slow dance with no music, or music with no dancing?":
    "Você prefere uma dança lenta sem música, ou música sem dançar?",
  "What's something intimate that feels different now than it did when we started?":
    "O que há de íntimo que parece diferente agora do que quando começamos?",
  "Challenge me to a staring contest where the loser gives the winner a kiss.":
    "Desafie-me para um jogo de olhar fixo em que quem perder dá um beijo no vencedor.",
  "Say the boldest true thing you're thinking, right now, out loud.":
    "Diga a coisa mais ousada e verdadeira que você está pensando, agora, em voz alta.",
  "What's a flirty compliment you'd only say after a glass of wine?":
    "Qual elogio sedutor você só diria depois de uma taça de vinho?",
  "What's the most attractive thing about how I handle a hard day?":
    "O que há de mais atraente na forma como eu lido com um dia difícil?",
  "Slow and lingering, or quick and surprising — what's your kiss mood today?":
    "Devagar e demorado, ou rápido e surpreendente — qual é seu humor para beijo hoje?",
  "What's your ideal way to be woken up in the morning?":
    "Qual é sua forma ideal de ser acordado(a) de manhã?",
  "What's one flirty tradition you want us to start on date nights?":
    "Qual tradição sedutora você quer que a gente comece nas noites de encontro?",
  "Confess the last time you couldn't stop thinking about a specific moment with me.":
    "Confesse a última vez que você não conseguiu parar de pensar num momento específico comigo.",
  "Tell me one word for how you want tonight to feel.":
    "Me diga uma palavra para como você quer que hoje à noite pareça.",
  "Show me the exact hug you need right now.":
    "Me mostre o abraço exato que você precisa agora.",
  "Describe getting ready together for a night out, distracted by each other the whole time.":
    "Descreva se arrumando juntos para uma noite, distraídos um pelo outro o tempo todo.",
  "What's something about tension between us that you secretly enjoy?":
    "O que sobre a tensão entre nós você secretamente gosta?",
  "Would you rather I teased you all evening and delivered later, or got straight to the point?":
    "Você prefere que eu te provocasse a noite toda e entregasse depois, ou fosse direto ao ponto?",
  "What's something you want more of that you haven't asked for directly?":
    "O que você quer mais que ainda não pediu diretamente?",
  "Dare me to whisper something in your ear before this round ends.":
    "Desafie-me a sussurrar algo no seu ouvido antes que esta rodada termine.",
  "What's the flirtiest thing about my handwriting, my texts, or the way I type?":
    "O que há de mais sedutor na minha caligrafia, minhas mensagens, ou no jeito que eu digito?",
  "Compliment the way I hold you, specifically.":
    "Elogie especificamente a forma como eu te abraço.",
  "What version of confident-me do you find most magnetic?":
    "Qual versão minha, confiante, você acha mais magnética?",
  "What's the perfect length for a goodbye kiss, in your opinion?":
    "Qual é a duração perfeita para um beijo de despedida, na sua opinião?",
  "Do you want more spontaneous affection, or more planned romantic moments?":
    "Você quer mais carinho espontâneo, ou mais momentos românticos planejados?",
  "What's a flirty dare you'd want built into our next date night?":
    "Que desafio sedutor você gostaria que fosse incluído no nosso próximo encontro?",
  "Confess one thing you find yourself doing just to make me look at you.":
    "Confesse uma coisa que você faz só para me fazer olhar para você.",
  "Tell me what makes a regular Tuesday feel romantic to you.":
    "Me diga o que faz uma terça-feira comum parecer romântica para você.",
  "Show me how you look at me when you think I'm not paying attention.":
    "Me mostre como você me olha quando acha que não estou prestando atenção.",
  "Narrate the quiet moment right before either of us says something we've been holding back.":
    "Narre o momento quieto logo antes de qualquer um de nós dizer algo que estava guardando.",
  "What's a physical detail of mine that gets more attractive to you over time, not less?":
    "Qual detalhe físico meu fica mais atraente para você com o tempo, e não menos?",
  "Would you rather a bold move from me first, or a bold move from you first?":
    "Você prefere que eu faça o primeiro movimento ousado, ou que você faça?",
  "What makes you feel most wanted, specifically, versus just loved?":
    "O que te faz sentir mais desejado(a), especificamente, e não só amado(a)?",
  "Make up a flirty forfeit for whoever answers the next card worst.":
    "Invente uma penalidade sedutora para quem responder pior a próxima carta.",
  "Say the one thing you'd want me to do right now if you could ask for anything.":
    "Diga a única coisa que você gostaria que eu fizesse agora, se pudesse pedir qualquer coisa.",
  "What's a flirty habit of mine you hope I never grow out of?":
    "Qual hábito sedutor meu você espera que eu nunca perca?",
  "Compliment the last thing I said that made you smile.":
    "Elogie a última coisa que eu disse que te fez sorrir.",
  "What's an attractive quality of mine that has nothing to do with looks?":
    "Qual qualidade atraente minha não tem nada a ver com aparência?",
  "What's a moment you wish had turned into a kiss, but didn't?":
    "Qual momento você gostaria que tivesse virado um beijo, mas não virou?",
  "Do you prefer affection that starts slow, or affection that's sudden and surprising?":
    "Você prefere carinho que começa devagar, ou carinho que é súbito e surpreendente?",
  "What's the most romantic thing that could happen on an otherwise ordinary night in?":
    "Qual é a coisa mais romântica que poderia acontecer numa noite comum em casa?",
  "Confess something about desire you've never said to anyone before, not just me.":
    "Confesse algo sobre desejo que você nunca disse a ninguém antes, nem mesmo a mim.",
  "Tell me the difference between how you flirt now versus at the very beginning.":
    "Me diga a diferença entre como você flerta agora e como flertava no início.",
  "Show me the exact reaction you have when I surprise you.":
    "Me mostre a reação exata que você tem quando eu te surpreendo.",
  "Describe the version of us, ten years from now, still flirting like this.":
    "Descreva a versão de nós, daqui a dez anos, ainda flertando assim.",
  "What's the fastest our chemistry has ever gone from calm to electric?":
    "Qual foi a vez mais rápida em que nossa química foi do calmo ao elétrico?",
  "Would you rather a whispered compliment, or a written one you can keep?":
    "Você prefere um elogio sussurrado, ou um escrito que você pode guardar?",
  "What's a boundary that, when respected, actually makes you feel closer to me?":
    "Qual limite, quando respeitado, na verdade te faz sentir mais próximo(a) de mim?",
  "Who would win a scavenger hunt in a place they've never been?":
    "Quem venceria uma caça ao tesouro num lugar onde nunca esteve?",
  "Who would talk their way out of a speeding ticket first?":
    "Quem conseguiria escapar de uma multa por excesso de velocidade primeiro?",
  "Who would win a blindfolded taste test of our favorite snacks?":
    "Quem venceria um teste de sabor de olhos vendados com nossos lanches favoritos?",
  "Who would become the unofficial mayor of any small town we visited?":
    "Quem se tornaria o prefeito não-oficial de qualquer cidade pequena que visitássemos?",
  "Who would survive better if we suddenly had to live off-grid for a month?":
    "Quem sobreviveria melhor se de repente tivéssemos que viver sem energia por um mês?",
  "Who would end up adopting a stray animal on a random walk?":
    "Quem acabaria adotando um animal de rua numa caminhada aleatória?",
  "Who would win a cooking competition with a mystery basket of ingredients?":
    "Quem venceria uma competição de culinária com uma cesta misteriosa de ingredientes?",
  "Who would talk to literally every stranger at a party?":
    "Quem conversaria literalmente com todo desconhecido numa festa?",
  "Who would win a spontaneous dance battle in the kitchen?":
    "Quem venceria uma batalha de dança espontânea na cozinha?",
  "Who is more likely to start a hobby and quit within a week?":
    "Quem é mais propenso(a) a começar um hobby e desistir em uma semana?",
  "Who is more likely to talk to a pet like it fully understands English?":
    "Quem é mais propenso(a) a falar com um animal de estimação como se ele entendesse tudo?",
  "Who is more likely to get emotionally attached to a plant?":
    "Quem é mais propenso(a) a se apegar emocionalmente a uma planta?",
  "Who is more likely to send a voice message instead of just typing?":
    "Quem é mais propenso(a) a mandar um áudio em vez de simplesmente digitar?",
  "Who is more likely to win an argument by simply outlasting the other?":
    "Quem é mais propenso(a) a vencer uma discussão apenas por resistir mais tempo?",
  "Who is more likely to buy something just because it was on sale?":
    "Quem é mais propenso(a) a comprar algo só porque estava em promoção?",
  "Who is more likely to laugh at the worst possible moment?":
    "Quem é mais propenso(a) a rir no pior momento possível?",
  "Who is more likely to walk into a glass door in public?":
    "Quem é mais propenso(a) a esbarrar numa porta de vidro em público?",
  "Who is more likely to accidentally reply-all to an embarrassing message?":
    "Quem é mais propenso(a) a responder a todos por acidente numa mensagem constrangedora?",
  "Who brings up an argument from months ago at the worst time?":
    "Quem traz à tona uma discussão de meses atrás na pior hora?",
  "Who is more likely to end an argument with a joke that actually works?":
    "Quem é mais propenso(a) a terminar uma discussão com uma piada que realmente funciona?",
  "Who would handle losing the house keys in a foreign city better?":
    "Quem lidaria melhor com a perda das chaves de casa numa cidade estrangeira?",
  "Who would stay calmer if we both got separated in a crowded place?":
    "Quem ficaria mais calmo(a) se nos separássemos num lugar cheio de gente?",
  "Who would end up giving a stranger unsolicited relationship advice?":
    "Quem acabaria dando conselhos de relacionamento sem pedirem para um desconhecido?",
  "Who would try to make friends with a very unfriendly cat?":
    "Quem tentaria fazer amizade com um gato muito arisco?",
  "Who would accidentally end up in the background of a stranger's photoshoot?":
    "Quem acabaria aparecendo sem querer no fundo de um ensaio fotográfico de um desconhecido?",
  "Who has better handwriting?": "Quem tem letra melhor?",
  "Who is the better dancer, honestly, no bias?":
    "Quem dança melhor, honestamente, sem viés?",
  "Who gives better advice under pressure?":
    "Quem dá melhores conselhos sob pressão?",
  "Who will be the first to fall asleep on the couch tonight?":
    "Quem vai ser o primeiro a dormir no sofá hoje à noite?",
  "Who will suggest ordering dessert before we even finish the main course?":
    "Quem vai sugerir pedir sobremesa antes mesmo de terminarmos o prato principal?",
  "Who takes longer getting ready to leave the house?":
    "Quem demora mais para se arrumar para sair?",
  "Who is pickier about how the dishwasher gets loaded?":
    "Quem é mais exigente sobre como a lava-louças é carregada?",
  "What's the dumbest joke that still makes both of you laugh every time?":
    "Qual é a piada mais boba que ainda faz vocês dois rirem toda vez?",
  "What's a phrase that means something completely different only to you two?":
    "Qual frase significa algo completamente diferente só para vocês dois?",
  "Who can name more of each other's exes without flinching?":
    "Quem consegue citar mais ex-namorados(as) do outro sem se abalar?",
  "Who can go longer without saying 'um' or 'like' while talking?":
    "Quem consegue falar mais tempo sem dizer 'tipo' ou 'né'?",
  "Who would win if you both tried to build furniture with no instructions?":
    "Quem venceria se ambos tentassem montar um móvel sem instruções?",
  "Who would be funnier narrating a nature documentary?":
    "Quem seria mais engraçado narrando um documentário de natureza?",
  "Who is most likely to fall in love with a random dog on the street?":
    "Quem é mais propenso(a) a se apaixonar por um cachorro qualquer na rua?",
  "Who is most likely to accidentally start a trend among your friends?":
    "Quem é mais propenso(a) a começar uma moda sem querer entre os amigos?",
  "Who would win a debate about which decade had the best music?":
    "Quem venceria um debate sobre qual década teve a melhor música?",
  "Who would be the first to cave and check their phone during a 'no phones' rule?":
    "Quem seria o primeiro a ceder e checar o celular durante uma regra de 'sem celular'?",
  "Who is more likely to plan an entire trip in one sitting out of excitement?":
    "Quem é mais propenso(a) a planejar uma viagem inteira de uma vez só de tão animado(a)?",
  "Who is more likely to make a to-do list and never look at it again?":
    "Quem é mais propenso(a) a fazer uma lista de tarefas e nunca mais olhar para ela?",
  "Who is more likely to laugh so hard they can't finish a sentence?":
    "Quem é mais propenso(a) a rir tanto que não consegue terminar uma frase?",
  "Who is more likely to text an apology instead of saying it in person?":
    "Quem é mais propenso(a) a mandar um pedido de desculpas por mensagem em vez de dizer pessoalmente?",
  "Who would panic first if the power went out during a movie night?":
    "Quem entraria em pânico primeiro se a luz caísse numa noite de filme?",
  "Who would end up narrating their own life out loud without noticing?":
    "Quem acabaria narrando a própria vida em voz alta sem perceber?",
  "Who is more likely to win a spelling bee under pressure?":
    "Quem é mais propenso(a) a vencer um soletrando sob pressão?",
  "Who will bring up getting a bigger TV first?":
    "Quem vai sugerir comprar uma TV maior primeiro?",
  "Who leaves more half-empty glasses of water around the house?":
    "Quem deixa mais copos de água pela metade espalhados pela casa?",
  "What's a mispronounced word that became permanently part of your vocabulary as a couple?":
    "Qual palavra pronunciada errada virou permanentemente parte do vocabulário de vocês como casal?",
  "Who can list the most countries in one minute?":
    "Quem consegue listar mais países em um minuto?",
  "Who would be a better contestant on a cooking reality show?":
    "Quem seria um(a) melhor participante num reality show de culinária?",
  "Who is most likely to turn a boring chore into a game?":
    "Quem é mais propenso(a) a transformar uma tarefa chata em um jogo?",
  "Who would win a competition for who can nap the fastest?":
    "Quem venceria uma competição de quem tira uma soneca mais rápido?",
  "Who would give the more convincing fake excuse to skip a boring event?":
    "Quem daria a desculpa falsa mais convincente para faltar a um evento chato?",
  "Who is more likely to become emotionally invested in a stranger's drama online?":
    "Quem é mais propenso(a) a se envolver emocionalmente no drama online de um desconhecido?",
  "Who is more likely to get caught talking about someone right as they walk in?":
    "Quem é mais propenso(a) a ser pego(a) falando de alguém bem na hora em que a pessoa entra?",
  "Who is quicker to say 'you're right' just to end an argument?":
    "Quem fala 'você tem razão' mais rápido só para acabar com uma discussão?",
  "Who would come up with a better backup plan if our first plan totally failed?":
    "Quem teria um plano B melhor se nosso primeiro plano falhasse completamente?",
  "Who would befriend the world's most talkative taxi driver?":
    "Quem faria amizade com o taxista mais falante do mundo?",
  "Who tells better bedtime stories, even for adults?":
    "Quem conta melhores histórias para dormir, mesmo para adultos?",
  "Who will suggest a spontaneous weekend trip first this year?":
    "Quem vai sugerir uma viagem espontânea de fim de semana primeiro este ano?",
  "Who is more particular about how the bed gets made?":
    "Quem é mais exigente sobre como a cama é arrumada?",
  "What's a text typo that became a running joke you still use?":
    "Qual erro de digitação virou uma piada que vocês ainda usam?",
  "Who can hold their breath longer, right now?":
    "Quem consegue prender a respiração por mais tempo, agora?",
  "Who would win at karaoke on a song neither of you knows well?":
    "Quem venceria no karaokê numa música que nenhum dos dois conhece bem?",
  "Who is most likely to accidentally befriend a celebrity in real life?":
    "Quem é mais propenso(a) a acidentalmente fazer amizade com uma celebridade na vida real?",
  "Who would out-negotiate a street vendor first?":
    "Quem conseguiria negociar melhor com um vendedor de rua primeiro?",
  "Who is more likely to fall for an obvious April Fools' joke?":
    "Quem é mais propenso(a) a cair numa pegadinha óbvia de primeiro de abril?",
  "Who is more likely to accidentally show up to a costume party in regular clothes?":
    "Quem é mais propenso(a) a aparecer sem querer numa festa a fantasia com roupa normal?",
  "Who is better at arguing calmly instead of raising their voice?":
    "Quem é melhor em discutir com calma em vez de levantar a voz?",
  "Who would be first to suggest calling it a night if a plan started going wrong?":
    "Quem seria o primeiro a sugerir encerrar a noite se um plano começasse a dar errado?",
  "Who would try to teach a parrot to say something ridiculous?":
    "Quem tentaria ensinar um papagaio a dizer algo ridículo?",
  "Who is a better judge of character on a first meeting?":
    "Quem tem melhor julgamento de caráter num primeiro encontro?",
  "Who will be the one to suggest redecorating a room first?":
    "Quem vai sugerir redecorar um cômodo primeiro?",
  "Who leaves their shoes in the most inconvenient spot?":
    "Quem deixa os sapatos no lugar mais inconveniente?",
  "What's a costume, prop, or object that's become a couple's tradition prop?":
    "Qual fantasia, adereço ou objeto virou um item tradicional do casal?",
  "Who can balance something on their head the longest, right now?":
    "Quem consegue equilibrar algo na cabeça por mais tempo, agora?",
  "Who would survive a week eating only what's in the fridge right now?":
    "Quem sobreviveria uma semana comendo só o que está na geladeira agora?",
  "Who is most likely to turn a five-star review into a personal mission?":
    "Quem é mais propenso(a) a transformar uma avaliação de cinco estrelas numa missão pessoal?",
  "Who would win a competition to make the other laugh first, no talking allowed?":
    "Quem venceria uma competição para fazer o outro rir primeiro, sem falar?",
  "Who is more likely to fall in love with a new hobby overnight?":
    "Quem é mais propenso(a) a se apaixonar por um novo hobby da noite para o dia?",
  "Who is more likely to send a voice message that's way too long by accident?":
    "Quem é mais propenso(a) a mandar um áudio acidentalmente longo demais?",
  "Who is the one who needs the last word, even in a silly disagreement?":
    "Quem precisa ter a última palavra, mesmo numa discussão boba?",
  "Who would take charge if we both got food poisoning on vacation?":
    "Quem assumiria o controle se ambos passássemos mal de comida nas férias?",
  "Who would end up giving directions to a lost tourist, even in an unfamiliar city?":
    "Quem acabaria dando informações a um turista perdido, mesmo numa cidade desconhecida?",
  "Who is better at keeping a secret, honestly?":
    "Quem é melhor em guardar segredo, honestamente?",
  "Who will bring up trying a new restaurant first this month?":
    "Quem vai sugerir experimentar um novo restaurante primeiro este mês?",
  "Who takes over the aux cord more often on car rides?":
    "Quem toma conta do controle da música com mais frequência nas viagens de carro?",
  "What's an accent or voice one of you does that's become a household bit?":
    "Qual sotaque ou voz que um de vocês faz virou uma piada de casa?",
  "Who can come up with a better excuse for being late, on the spot?":
    "Quem consegue inventar uma desculpa melhor para o atraso, na hora?",
  "Who would win an eating contest with something neither of you likes?":
    "Quem venceria um concurso de comer algo que nenhum dos dois gosta?",
  "Who is most likely to become the group's designated planner for every trip?":
    "Quem é mais propenso(a) a se tornar o(a) planejador(a) oficial de todas as viagens do grupo?",
  "Who is most likely to know the lyrics to a song neither of you claims to like?":
    "Quem é mais propenso(a) a saber a letra de uma música que nenhum dos dois admite gostar?",
  "Who would win a game of chess against a suspiciously confident stranger?":
    "Quem venceria uma partida de xadrez contra um desconhecido suspeitosamente confiante?",
  "Who is more likely to name every plant in the house something ridiculous?":
    "Quem é mais propenso(a) a dar nomes ridículos para todas as plantas de casa?",
  "What's a trip we should take specifically to celebrate a milestone?":
    "Qual viagem deveríamos fazer especificamente para comemorar um marco?",
  "Would you rather explore one continent deeply, or touch every continent briefly?":
    "Você prefere explorar um continente a fundo, ou visitar rapidamente todos os continentes?",
  "What's a travel tradition you want us to have every single year?":
    "Qual tradição de viagem você quer que a gente tenha todo ano?",
  "What's one room in our future home that's entirely your vision?":
    "Qual cômodo da nossa futura casa será totalmente da sua visão?",
  "Do you want a home that's always ready for guests, or one that's just for us?":
    "Você quer uma casa sempre pronta para visitas, ou uma só para nós?",
  "What's a small ritual you want built into how we start mornings at home?":
    "Qual pequeno ritual você quer incorporar em como começamos as manhãs em casa?",
  "What does success look like for you outside of a job title?":
    "Como é o sucesso para você fora de um cargo?",
  "How do you want us to handle it if one of our careers takes off faster than the other's?":
    "Como você quer que a gente lide se a carreira de um decolar mais rápido que a do outro?",
  "What's a splurge you want us to allow ourselves without guilt?":
    "Qual gasto extra você quer que a gente se permita sem culpa?",
  "How do you want us to make big financial decisions — together every time, or with some independence?":
    "Como você quer que a gente tome grandes decisões financeiras — sempre juntos, ou com alguma independência?",
  "What's a habit you hope we build together in the next year?":
    "Qual hábito você espera que a gente construa juntos no próximo ano?",
  "Do you want our weekends to be mostly planned, or mostly open?":
    "Você quer que nossos fins de semana sejam mais planejados, ou mais livres?",
  "What role do you hope our future household plays for extended family?":
    "Que papel você espera que nosso futuro lar tenha para a família estendida?",
  "What's something from my family's way of doing things you'd want to adopt?":
    "O que na forma da minha família fazer as coisas você gostaria de adotar?",
  "If we got a pet tomorrow, what would we name it and why?":
    "Se a gente adotasse um bicho amanhã, como o chamaríamos e por quê?",
  "What's a physical challenge, like a hike or a race, you want us to train for together?":
    "Qual desafio físico, como uma trilha ou corrida, você quer que a gente treine juntos?",
  "What's a wedding detail that would mean nothing to guests but everything to you?":
    "Qual detalhe do casamento não significaria nada para os convidados, mas tudo para você?",
  "What's a tradition from a friend's family you secretly want to steal for ours?":
    "Qual tradição da família de um amigo você secretamente quer roubar para a nossa?",
  "What's one holiday you'd want to completely reinvent for just the two of us?":
    "Qual feriado você gostaria de reinventar completamente só para nós dois?",
  "What's a skill you want to have fully mastered by the time we retire?":
    "Qual habilidade você quer ter dominado completamente até nos aposentarmos?",
  "What's a dream you'd chase even if it meant a few years of instability?":
    "Qual sonho você perseguiria mesmo que significasse alguns anos de instabilidade?",
  "What's a bucket list item that would surprise people who think they know you?":
    "Qual item da lista de desejos surpreenderia quem acha que te conhece?",
  "If you had to bet, what city do you think we'll actually end up in?":
    "Se você tivesse que apostar, em qual cidade acha que a gente realmente vai acabar morando?",
  "What's a moment you're already looking forward to remembering, even before it happens?":
    "Qual momento você já está ansioso para lembrar, mesmo antes de acontecer?",
  "What's something you want people to say about how we treated each other?":
    "O que você quer que as pessoas digam sobre como nós nos tratávamos?",
  "What habit do you want us to build to take care of each other physically as we age?":
    "Qual hábito você quer que a gente construa para cuidar um do outro fisicamente conforme envelhecemos?",
  Health: "Saúde",
  "How do you want us to support each other through a tough health scare, if it ever happens?":
    "Como você quer que a gente se apoie durante um susto de saúde, se algum dia acontecer?",
  "What does taking care of your mind, not just your body, look like for you long-term?":
    "Como é cuidar da sua mente, não só do corpo, para você no longo prazo?",
  "What kind of friend group do you hope we build together over the years?":
    "Que tipo de grupo de amigos você espera que a gente construa ao longo dos anos?",
  Community: "Comunidade",
  "How involved do you want us to be in a neighborhood or local community someday?":
    "O quão envolvidos você quer que a gente esteja numa vizinhança ou comunidade local algum dia?",
  "What's a cause or group you'd want us to volunteer for together?":
    "Qual causa ou grupo você gostaria que a gente ajudasse voluntariamente juntos?",
  "What's a fear you want to have outgrown together by next year?":
    "Qual medo você quer ter superado junto comigo até o próximo ano?",
  "What's a version of 'us' five years from now that you're actively working toward?":
    "Qual versão de 'nós' daqui a cinco anos você está ativamente trabalhando para alcançar?",
  "What skill do you want us to learn together purely to grow closer?":
    "Qual habilidade você quer que a gente aprenda junto só para ficarmos mais próximos?",
  "What's a destination that scares you a little but you'd still want to visit with me?":
    "Qual destino te assusta um pouco, mas você ainda gostaria de visitar comigo?",
  "Would you rather move abroad for a year as an experiment, or never leave home for more than a month?":
    "Você prefere morar no exterior por um ano como experiência, ou nunca ficar fora de casa por mais de um mês?",
  "What's a piece of furniture or art you want to keep forever, no matter how many times we move?":
    "Qual móvel ou obra de arte você quer manter para sempre, não importa quantas vezes a gente se mude?",
  "Should our future home be closer to nature, or closer to everything convenient?":
    "Nossa futura casa deveria ficar mais perto da natureza, ou mais perto de tudo conveniente?",
  "What's a professional dream of yours I might not fully know about yet?":
    "Qual sonho profissional seu eu talvez ainda não conheça completamente?",
  "How do you want us to celebrate each other's career wins, big and small?":
    "Como você quer que a gente comemore as vitórias profissionais um do outro, grandes e pequenas?",
  "What financial goal do you want us to hit together in the next three years?":
    "Qual meta financeira você quer que a gente alcance juntos nos próximos três anos?",
  "Would you rather live below our means comfortably, or stretch for a bigger lifestyle?":
    "Você prefere viver confortavelmente abaixo do nosso orçamento, ou se esforçar por um estilo de vida maior?",
  "What's something you want our future life to have less of?":
    "O que você quer que a nossa futura vida tenha menos?",
  "What's a fear about family, yours or mine, that you want us to face together?":
    "Qual medo sobre família, a sua ou a minha, você quer que a gente enfrente junto?",
  "How do you imagine our future pet fitting into a normal weekday?":
    "Como você imagina nosso futuro bicho de estimação se encaixando num dia de semana normal?",
  "What's an adventure you want to have before any major life change, like kids or a move?":
    "Qual aventura você quer viver antes de uma grande mudança de vida, como filhos ou uma mudança de cidade?",
  "What's a fear about marriage you want to talk through honestly before it happens?":
    "Qual medo sobre casamento você quer conversar com honestidade antes que aconteça?",
  "What tradition do you want to be known for, specifically, among our friends?":
    "Por qual tradição você quer ser conhecido(a), especificamente, entre nossos amigos?",
  "What's your ideal balance between tradition and doing something completely new each year?":
    "Qual é o seu equilíbrio ideal entre tradição e fazer algo completamente novo a cada ano?",
  "What conversation about retirement do you want us to start having now, even if it's far off?":
    "Qual conversa sobre aposentadoria você quer que a gente comece a ter agora, mesmo que ainda esteja longe?",
  "What's a dream that would need both of us fully on board to actually happen?":
    "Qual sonho precisaria de nós dois totalmente comprometidos para realmente acontecer?",
  "What's an item on the list that only makes sense once we're older?":
    "Qual item da lista só faz sentido quando formos mais velhos?",
  "What would make you say 'yes, this is exactly where we're supposed to be'?":
    "O que te faria dizer 'sim, é exatamente aqui que devíamos estar'?",
  "What's a small future memory, not a big milestone, that you're quietly hoping for?":
    "Qual pequena memória futura, não um grande marco, você está esperando em silêncio?",
  "If we only left behind one lesson for people who knew us, what should it be?":
    "Se deixássemos apenas uma lição para quem nos conheceu, qual deveria ser?",
  "What's a healthy habit you want us to hold each other accountable for?":
    "Qual hábito saudável você quer que a gente cobre um do outro?",
  "How do you want us to stay connected to old friends as life gets busier?":
    "Como você quer que a gente continue conectado com velhos amigos conforme a vida fica mais corrida?",
  "What's something about conflict you want us to get better at handling together?":
    "O que sobre conflito você quer que a gente melhore em lidar juntos?",
  "What's a trip you'd want to take completely unplanned, with nothing booked in advance?":
    "Qual viagem você gostaria de fazer completamente sem planejamento, sem nada reservado com antecedência?",
  "What's the first thing you want to do the day we move into our first real home together?":
    "Qual é a primeira coisa que você quer fazer no dia em que nos mudarmos para nossa primeira casa de verdade juntos?",
  "If our careers ever pulled us to different cities, how do you want us to decide what to do?":
    "Se nossas carreiras algum dia nos levassem para cidades diferentes, como você quer que a gente decida o que fazer?",
  "What's something money-related that stressed you in the past that you want us to handle differently?":
    "O que relacionado a dinheiro te estressou no passado que você quer que a gente lide de forma diferente?",
  "What does 'a good life,' in the simplest terms, mean to you?":
    "O que significa 'uma vida boa', nos termos mais simples, para você?",
  "What's a family pattern from your upbringing you actively want to break?":
    "Qual padrão familiar da sua criação você quer ativamente quebrar?",
  "Would having a pet change how you picture our future travel plans?":
    "Ter um bicho de estimação mudaria como você imagina nossos futuros planos de viagem?",
  "What's an adventure that would only be fun because it's with me specifically?":
    "Qual aventura só seria divertida porque é comigo especificamente?",
  "What's one thing you'd want a close friend to say in a wedding speech about us?":
    "O que você gostaria que um amigo próximo dissesse num discurso de casamento sobre nós?",
  "What's a tradition we already have that you didn't realize was a tradition until now?":
    "Qual tradição a gente já tem que você não percebeu que era uma tradição até agora?",
  "How do you want us to handle it if our families have very different holiday expectations?":
    "Como você quer que a gente lide se nossas famílias tiverem expectativas muito diferentes para os feriados?",
  "What's something you want to have let go of completely by the time we retire?":
    "O que você quer ter deixado para trás completamente até nos aposentarmos?",
  "What's a dream you have for me that you've never actually told me?":
    "Qual sonho você tem para mim que nunca me contou de verdade?",
  "What's the most expensive item on your bucket list, and is it worth saving for?":
    "Qual é o item mais caro da sua lista de desejos, e vale a pena economizar para ele?",
  "What's a place neither of us has considered yet that might actually be perfect for us?":
    "Qual lugar nenhum de nós considerou ainda que pode ser perfeito para nós?",
  "What everyday object do you think will one day remind us of exactly this era of our life?":
    "Qual objeto do dia a dia você acha que um dia vai nos lembrar exatamente desta fase da nossa vida?",
  "What's a small kindness you hope becomes 'our thing' that others remember us for?":
    "Qual pequena gentileza você espera que se torne 'a nossa marca' pela qual os outros vão nos lembrar?",
  "What's a stress-relief habit you want us to practice together regularly?":
    "Qual hábito de alívio de estresse você quer que a gente pratique juntos regularmente?",
  "What kind of neighbors do you hope we become to the people around us?":
    "Que tipo de vizinhos você espera que a gente se torne para as pessoas ao redor?",
  "What's a version of yourself you're actively trying to grow into, and how can I help?":
    "Qual versão de você mesmo(a) você está tentando ativamente se tornar, e como eu posso ajudar?",
  "What's a place we visited once that you'd want to live in for a season, just to try it?":
    "Qual lugar que já visitamos você gostaria de morar por uma temporada, só para experimentar?",
  "How important is it to you that our home reflects both our personalities equally?":
    "O quão importante é para você que nossa casa reflita as duas personalidades igualmente?",
  "What's a boundary you want us to protect around work, even during busy seasons?":
    "Qual limite você quer que a gente proteja em relação ao trabalho, mesmo em épocas corridas?",
  "What's a purchase you'd want us to save up for together as a shared goal?":
    "Qual compra você gostaria que a gente economizasse juntos como uma meta em comum?",
  "Would you rather a life full of variety, or a life with a few things done perfectly?":
    "Você prefere uma vida cheia de variedade, ou uma vida com poucas coisas feitas perfeitamente?",
  "What's something about building a family, however that looks for us, that excites you most?":
    "O que sobre construir uma família, seja lá como for para nós, mais te empolga?",
  "If we ever had multiple pets, how do you imagine they'd each fit into our home?":
    "Se a gente algum dia tivesse vários bichos, como você imagina que cada um se encaixaria em nossa casa?",
  "What's a spontaneous adventure we could actually plan for next month?":
    "Qual aventura espontânea a gente poderia realmente planejar para o mês que vem?",
  "What part of planning a future wedding are you most excited to do together?":
    "Qual parte de planejar um futuro casamento você está mais animado(a) para fazer junto?",
  "What tradition do you want to make sure survives even a big move or life change?":
    "Qual tradição você quer garantir que sobreviva mesmo a uma grande mudança de vida?",
  "What's the most 'us' way you can imagine spending a holiday that has nothing to do with tradition?":
    "Qual é a forma mais 'a nossa cara' de passar um feriado que não tem nada a ver com tradição?",
  "What's a version of 'slowing down' that actually sounds appealing to you, not scary?":
    "Qual versão de 'desacelerar' realmente parece atraente para você, e não assustadora?",
  "What dream have you never said out loud because it felt too big to admit?":
    "Qual sonho você nunca disse em voz alta porque parecia grande demais para admitir?",
  "What's a bucket list item you'd only ever want to do with me, no one else?":
    "Qual item da lista de desejos você só gostaria de fazer comigo, com mais ninguém?",
  "How much does being near the ocean, mountains, or a specific landscape matter to you long-term?":
    "O quanto estar perto do oceano, montanhas, ou uma paisagem específica importa para você no longo prazo?",
  "What's a moment from a future birthday, yours or mine, that you're already imagining?":
    "Qual momento de um futuro aniversário, seu ou meu, você já está imaginando?",
  "What do you hope this specific chapter of our life is remembered for, later on?":
    "Pelo que você espera que este capítulo específico da nossa vida seja lembrado, mais tarde?",
  "What's a way you want us to celebrate simply being healthy together, not just fix problems?":
    "De que forma você quer que a gente celebre simplesmente estar saudável junto, e não só resolver problemas?",
  "What's a local tradition or event you'd want us to make a yearly habit?":
    "Qual tradição ou evento local você gostaria que a gente tornasse um hábito anual?",
  "What's a compliment about your own growth you'd want to hear from me a year from now?":
    "Qual elogio sobre seu próprio crescimento você gostaria de ouvir de mim daqui a um ano?",
  "What's a trip that would be more about the journey than the destination for you?":
    "Qual viagem seria mais sobre o trajeto do que o destino para você?",
  "What's a dream you'd chase differently now than you would have five years ago?":
    "Qual sonho você perseguiria de forma diferente agora do que perseguiria há cinco anos?",
  // Photo Booth
  Filter: "Filtro",
  "Pattern color": "Cor do padrão",
  // Bouquet
  "Fresh for a week": "Fresco por uma semana",
  Bouquet: "Buquê",
  "A little bouquet just for you. Arrange as many blooms as you like on the page — it stays fresh for a week, then it wilts away, or gets replaced the moment you make a new one.":
    "Um buquezinho só para você. Arrume quantas flores quiser na página — ele fica fresco por uma semana, depois murcha, ou é substituído assim que você monta um novo.",
  "No bouquet yet — build one below 💐":
    "Ainda sem buquê — monte um abaixo 💐",
  "Arrange it yourself": "Arrume você mesmo",
  "Build a bouquet": "Montar um buquê",
  "This week's bouquet": "O buquê desta semana",
  "Choose one wrap": "Escolha um embrulho",
  "Tap a flower to add it, then drag it into place": "Toque numa flor para adicioná-la, depois arraste até o lugar",
  Bows: "Laços",
  "Brown Satin Bow": "Laço de Cetim Marrom",
  "Blue Striped Bow": "Laço Listrado Azul",
  "Green Plaid Bow": "Laço Xadrez Verde",
  Clear: "Limpar",
  "A little note (optional)": "Um bilhetinho (opcional)",
  "Something sweet to go with it…": "Algo fofo para acompanhar…",
  "Create this bouquet": "Criar este buquê",
  "White & Pink Lily": "Lírio Branco e Rosa",
  "Bright Pink Hibiscus": "Hibisco Rosa Vivo",
  "Pale Pink Orchid": "Orquídea Rosa Claro",
  "Blue Periwinkle": "Vinca Azul",
  "Green Gerbera Daisy": "Margarida Gérbera Verde",
  "Iridescent Bloom": "Flor Iridescente",
  "Leopard Print Lily": "Lírio Estampa de Onça",
  "Purple Cornflower": "Centáurea Roxa",
  "Cream Lily": "Lírio Creme",
  "Cream Plumeria": "Plumeria Creme",
  "Dark Red Lily": "Lírio Vermelho Escuro",
  "Golden Lily": "Lírio Dourado",
  "Kraft Wrap": "Embrulho Kraft",
  "White Wrap": "Embrulho Branco",
  "Black Wrap": "Embrulho Preto",
  "Pink Wrap": "Embrulho Rosa",
  "Newspaper Wrap": "Embrulho de Jornal",
  Wilted: "Murcho",
  Bigger: "Maior",
  Smaller: "Menor",
  "Rotate left": "Girar à esquerda",
  "Rotate right": "Girar à direita",
  Remove: "Remover",
  "Save with page": "Salvar com a página",
  "Save, no background": "Salvar sem fundo",
  "Delete this bouquet?": "Apagar este buquê?",
  "Bouquet created.": "Buquê criado.",
  "Bouquet deleted.": "Buquê apagado.",
  "Add at least one flower.": "Adicione ao menos uma flor.",
};

const PT_FIRST_DESC = {
  "First time we met":
    "Às 3 da manhã, em frente a um shopping fechado. Depois da festa, busquei você e a Mary com o Lucca. Minha primeira impressão foi que você era linda — mas também um pouco tímida.",
  "First conversation":
    "No apartamento no Novo Campeche, só nós dois no sofá, conversando sobre todo tipo de coisa. Você era inteligente, engraçada e gentil. Eu estava nervoso porque você não ria muito das minhas piadas.",
  "First date": `Nosso primeiro encontro de verdade aconteceu pela Lagoa da Conceição. Eu tinha planejado o dia inteiro só para nós. Começamos no Meskla Café, dividindo pão de queijo quentinho, café e banana bread — a comida estava maravilhosa, mas estar sentado na sua frente deixou tudo ainda melhor.\n\nEu tinha reservado secretamente uma mesa em um restaurante misterioso para mais tarde naquela noite, querendo te surpreender. Como ainda tínhamos horas pela frente, simplesmente ficamos juntos — conversando, rindo baixinho, aproveitando a companhia um do outro e tomando um sorvete enquanto a tarde passava.\n\nQuando finalmente chegou a hora, entramos no Bistro dos Sete Ais, um restaurante lindo dentro de um hotel elegante. O jantar foi especial, o ambiente aconchegante, e toda a noite pareceu o começo perfeito de algo especial.`,
  "First photo together":
    "Foi no seu último open bar aqui em Florianópolis, pouco antes de você partir para o intercâmbio. Nossa primeira foto juntos é de nós nos beijando no Toma Tudo; número 257 na sua câmera digital. Um momento simples que, de alguma forma, se tornou um dos mais especiais.",
  "First trip": `No dia antes de você partir, reservamos espontaneamente um Airbnb... nossa primeira vez fazendo algo assim juntos. Não foi uma grande viagem, apenas um lugar tranquilo fora de casa, mas foi especial. Passamos o tempo totalmente presentes um com o outro, rindo, conversando sem esconder nada e nos conectando de uma forma mais profunda do que nunca. Foi também o dia em que dissemos “eu te amo” um para o outro pela primeira vez, um momento simples e sincero que fez tudo parecer ainda mais real.`,
  "First time we had to be apart": `Além das viagens curtas para Lajeado e Rio para visitar nossas famílias, a verdadeira separação aconteceu no dia em que você partiu para o intercâmbio. Eu te deixei no aeroporto sabendo que não te veria por meses. Ver você indo embora me encheu de uma tristeza profunda, daquelas que pesam no peito... mas, ao mesmo tempo, fiquei genuinamente feliz por você estar prestes a começar um novo capítulo da sua vida.\n\nA distância dói. Ficar longe de você é difícil de maneiras que nem sempre consigo colocar em palavras. Mas o meu amor por você não tem distância. Ele permanece comigo todos os dias, constante e certo, não importa quantos quilômetros existam entre nós.`,
};
