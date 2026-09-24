/* ================================================================
   QUIZ DATA — js/data/quizzes.js
   ----------------------------------------------------------------
   The questions for the Quizzes tab. One key per quiz; every question
   and answer has an English (en) and Portuguese (pt) version.
   Quiz flow and scoring live in app.js (search "QUIZZES").
   ================================================================ */

const QUIZ_DATA = {
  eduarda: {
    title: { en: "Eduarda Quiz", pt: "Quiz da Eduarda" },
    questions: [
      {
        q: {
          en: "What is Eduarda's full name?",
          pt: "Qual é o nome completo da Eduarda?",
        },
        options: [
          { en: "Eduarda Silva", pt: "Eduarda Silva" },
          { en: "Maria Eduarda", pt: "Maria Eduarda" },
          { en: "Eduarda Salton", pt: "Eduarda Salton" },
          { en: "Eduarda Pessoa", pt: "Eduarda Pessoa" },
        ],
        correct: 2,
      },
      {
        q: {
          en: "Who is her best friend?",
          pt: "Qual a melhor amiga dela?",
        },
        options: [
          { en: "Lucca", pt: "Lucca" },
          { en: "Mari", pt: "Mari" },
          { en: "Ana", pt: "Ana" },
          { en: "Júlia", pt: "Júlia" },
        ],
        correct: 1,
      },
      {
        q: {
          en: "She has a sensitivity/allergy to which common seasoning?",
          pt: "Ela tem alguma sensibilidade/alergia a um tempero bem comum?",
        },
        options: [
          { en: "Onion", pt: "Cebola" },
          { en: "Garlic", pt: "Alho" },
          { en: "Pepper", pt: "Pimenta" },
          { en: "Cilantro", pt: "Coentro" },
        ],
        correct: 1,
      },
      {
        q: {
          en: "What was her favorite concert?",
          pt: "Qual foi o show favorito dela?",
        },
        options: [
          { en: "Post Malone", pt: "Post Malone" },
          { en: "Felipe Ret", pt: "Felipe Ret" },
          { en: "Katy Perry", pt: "Katy Perry" },
          { en: "Matuê", pt: "Matuê" },
        ],
        correct: 0,
      },
      {
        q: {
          en: "What is her favorite color?",
          pt: "Qual a cor favorita dela?",
        },
        options: [
          { en: "Hot pink", pt: "Rosa shock" },
          { en: "Navy blue", pt: "Azul-marinho" },
          { en: "Baby pink", pt: "Rosa bebê" },
          { en: "Lime green", pt: "Verde lima" },
        ],
        correct: 2,
      },
      {
        q: {
          en: "Which sports does she like to follow?",
          pt: "Ela gosta de acompanhar quais esportes?",
        },
        options: [
          { en: "Volleyball / Skating", pt: "Vôlei / Patins" },
          { en: "Basketball / Hockey", pt: "Basquete / Hockey" },
          { en: "Soccer / Tennis", pt: "Futebol / Tênis" },
          { en: "UFC / Polo", pt: "UFC / Polo" },
        ],
        correct: 2,
      },
      {
        q: {
          en: "What word does she hate the most when Thommy says it?",
          pt: "Qual a palavra que ela mais odeia que o Thommy fala?",
        },
        options: [
          { en: "Keke", pt: "Keke" },
          { en: "De boas", pt: "De boas" },
          { en: "Fac", pt: "Fac" },
          { en: "Da hora", pt: "Da hora" },
        ],
        correct: 0,
      },
      {
        q: {
          en: "She has already broken a bone. True or false?",
          pt: "Ela já quebrou um osso. Verdadeiro ou falso?",
        },
        options: [
          { en: "True", pt: "Verdadeiro" },
          { en: "False", pt: "Falso" },
        ],
        correct: 1,
      },
      {
        q: {
          en: "What is her favorite food?",
          pt: "Qual a comida favorita dela?",
        },
        options: [
          { en: "Sushi", pt: "Sushi" },
          { en: "Hamburger", pt: "Hambúrguer" },
          { en: "Churrasco (BBQ)", pt: "Churrasco" },
          { en: "Popcorn", pt: "Pipoca" },
        ],
        correct: 2,
      },
      {
        q: {
          en: "Which Brazilian state is her family from?",
          pt: "De qual estado do Brasil a família dela é?",
        },
        options: [
          { en: "SP", pt: "SP" },
          { en: "RJ", pt: "RJ" },
          { en: "RS (Rio Grande do Sul)", pt: "RS (Rio Grande do Sul)" },
          { en: "MG", pt: "MG" },
        ],
        correct: 2,
      },
      {
        q: {
          en: "What is her favorite season?",
          pt: "Qual a época do ano favorita dela?",
        },
        options: [
          { en: "Winter", pt: "Inverno" },
          { en: "Summer", pt: "Verão" },
          { en: "Spring", pt: "Primavera" },
          { en: "Fall", pt: "Outono" },
        ],
        correct: 1,
      },
      {
        q: {
          en: "What is her favorite song?",
          pt: "Qual a música favorita dela?",
        },
        options: [
          { en: "Poker Face", pt: "Poker Face" },
          { en: "Someone Like You", pt: "Someone Like You" },
          { en: "Use Somebody", pt: "Use Somebody" },
          { en: "Californication", pt: "Californication" },
        ],
        correct: 2,
      },
      {
        q: {
          en: "Who is her favorite soccer player?",
          pt: "Qual o jogador de futebol favorito dela?",
        },
        options: [
          { en: "Neymar", pt: "Neymar" },
          { en: "Pedri", pt: "Pedri" },
          { en: "Messi", pt: "Messi" },
          { en: "Thomas Müller", pt: "Thomas Müller" },
        ],
        correct: 3,
      },
      {
        q: {
          en: "What is her favorite day of the week?",
          pt: "Qual o dia favorito da semana dela?",
        },
        options: [
          { en: "Wednesday", pt: "Quarta-feira" },
          { en: "Saturday", pt: "Sábado" },
          { en: "Friday", pt: "Sexta-feira" },
          { en: "Sunday", pt: "Domingo" },
        ],
        correct: 0,
      },
      {
        q: {
          en: "At what age did she move to Floripa?",
          pt: "Qual idade ela se mudou para Floripa?",
        },
        options: [
          { en: "18", pt: "18" },
          { en: "16", pt: "16" },
          { en: "20", pt: "20" },
          { en: "11", pt: "11" },
        ],
        correct: 1,
      },
    ],
  },
  thommy: {
    title: { en: "Thommy Quiz", pt: "Quiz do Thommy" },
    questions: [
      {
        q: {
          en: "What is Thommy's full name?",
          pt: "Qual é o nome completo do Thommy?",
        },
        options: [
          { en: "Thomas Silva Duarte", pt: "Thomas Silva Duarte" },
          {
            en: "Thomas Repsold Duarte Pessoa",
            pt: "Thomas Repsold Duarte Pessoa",
          },
          { en: "Tommy Pessoa", pt: "Tommy Pessoa" },
          { en: "Thomas Duarte Repsold", pt: "Thomas Duarte Repsold" },
        ],
        correct: 1,
      },
      {
        q: {
          en: "What is his favorite animal?",
          pt: "Qual é o animal favorito dele?",
        },
        options: [
          { en: "Dog", pt: "Cachorro" },
          { en: "Cat", pt: "Gato" },
          { en: "Owl", pt: "Coruja" },
          { en: "Fish", pt: "Peixe" },
        ],
        correct: 2,
      },
      {
        q: {
          en: "What color did he say is his favorite?",
          pt: "Qual cor ele disse que é a favorita?",
        },
        options: [
          { en: "Blue", pt: "Azul" },
          { en: "Black", pt: "Preto" },
          { en: "Green", pt: "Verde" },
          { en: "Red", pt: "Vermelho" },
        ],
        correct: 2,
      },
      {
        q: {
          en: "What is his favorite sport / martial art?",
          pt: "Qual esporte/arte marcial favorita?",
        },
        options: [
          { en: "Muay Thai", pt: "Muay Thai" },
          { en: "Jiu-jitsu", pt: "Jiu-jitsu" },
          { en: "Boxing", pt: "Boxe" },
          { en: "Regular gym", pt: "Academia normal" },
        ],
        correct: 1,
      },
      {
        q: {
          en: "He hates which sandwich topping?",
          pt: "Ele odeia qual legume/conserva que costuma vir em sanduíches?",
        },
        options: [
          { en: "Lettuce", pt: "Alface" },
          { en: "Tomato", pt: "Tomate" },
          { en: "Pickles", pt: "Pickles" },
          { en: "Onion", pt: "Cebola" },
        ],
        correct: 2,
      },
      {
        q: {
          en: "What is his favorite city?",
          pt: "Qual a cidade favorita dele?",
        },
        options: [
          { en: "New York", pt: "Nova York" },
          { en: "Miami", pt: "Miami" },
          { en: "Tokyo", pt: "Tóquio" },
          { en: "San Diego", pt: "San Diego" },
        ],
        correct: 0,
      },
      {
        q: {
          en: "Who is his favorite superhero?",
          pt: "Qual o super-herói favorito dele?",
        },
        options: [
          { en: "Spider-Man", pt: "Homem-Aranha" },
          { en: "Superman", pt: "Super-Homem" },
          { en: "Batman", pt: "Batman" },
          { en: "Aquaman", pt: "Aquaman" },
        ],
        correct: 0,
      },
      {
        q: {
          en: "Which city was he born in?",
          pt: "Em qual cidade ele nasceu?",
        },
        options: [
          { en: "Rio de Janeiro", pt: "Rio de Janeiro" },
          { en: "Fort Lauderdale", pt: "Fort Lauderdale" },
          { en: "Miami", pt: "Miami" },
          { en: "Boca Raton", pt: "Boca Raton" },
        ],
        correct: 3,
      },
      {
        q: {
          en: "What is his favorite song?",
          pt: "Qual a música favorita dele?",
        },
        options: [
          { en: "Hometown Glory", pt: "Hometown Glory" },
          { en: "4AM", pt: "4AM" },
          { en: "Sex and Candy", pt: "Sex and Candy" },
          { en: "21 Questions", pt: "21 Questions" },
        ],
        correct: 0,
      },
      {
        q: {
          en: "Does he love Café Cultura? True or false?",
          pt: "Ele ama o Café Cultura? Verdadeiro ou falso?",
        },
        options: [
          { en: "True", pt: "Verdadeiro" },
          { en: "False (he hates it)", pt: "Falso (ele odeia)" },
        ],
        correct: 1,
        wrongSpecial: {
          en: "Are you kidding me… he hates that place 😂",
          pt: "Tá de sacanagem… ele odeia aquele lugar 😂",
        },
      },
      {
        q: {
          en: "Who is his favorite rapper?",
          pt: "Qual o rapper favorito dele?",
        },
        options: [
          { en: "21 Savage", pt: "21 Savage" },
          { en: "Drake", pt: "Drake" },
          { en: "Nemzzz", pt: "Nemzzz" },
          { en: "Eminem", pt: "Eminem" },
        ],
        correct: 2,
      },
      {
        q: {
          en: "What is his favorite time of day?",
          pt: "Qual a hora do dia favorita dele?",
        },
        options: [
          { en: "Blue hour", pt: "Hora azul" },
          { en: "Golden hour", pt: "Hora dourada" },
          { en: "Orange hour", pt: "Hora laranja" },
          { en: "Gray hour", pt: "Hora cinza" },
        ],
        correct: 0,
      },
      {
        q: {
          en: "What is his favorite season?",
          pt: "Qual a época do ano favorita dele?",
        },
        options: [
          { en: "Winter", pt: "Inverno" },
          { en: "Summer", pt: "Verão" },
          { en: "Fall", pt: "Outono" },
          { en: "Spring", pt: "Primavera" },
        ],
        correct: 0,
      },
      {
        q: {
          en: "Which sport does he follow the most?",
          pt: "Qual o esporte que ele mais acompanha?",
        },
        options: [
          { en: "UFC", pt: "UFC" },
          { en: "Surf", pt: "Surf" },
          { en: "Soccer", pt: "Futebol" },
          { en: "Bowling", pt: "Boliche" },
        ],
        correct: 0,
        wrongSpecialIdx: 3,
        wrongSpecial: {
          en: "Bowling? Really? Next you'll say his favorite snack is celery 🎳",
          pt: "Boliche? Sério? Daqui a pouco você diz que o lanche favorito dele é aipo 🎳",
        },
      },
      {
        q: {
          en: "When is his birthday?",
          pt: "Qual o aniversário dele?",
        },
        options: [
          { en: "February 21", pt: "21 de fevereiro" },
          { en: "July 29", pt: "29 de julho" },
          { en: "January 10", pt: "10 de janeiro" },
          { en: "December 1", pt: "1 de dezembro" },
        ],
        correct: 2,
      },
    ],
  },
  us: {
    title: { en: "Us Together Quiz", pt: "Quiz de Nós Dois" },
    questions: [
      {
        q: {
          en: "What day did we meet?",
          pt: "Qual dia a gente se conheceu?",
        },
        options: [
          { en: "May 2, 2026", pt: "2 de maio de 2026" },
          { en: "May 23, 2026", pt: "23 de maio de 2026" },
          { en: "April 7, 2026", pt: "7 de abril de 2026" },
          { en: "February 31, 2026", pt: "31 de fevereiro de 2026" },
        ],
        correct: 0,
        wrongSpecialIdx: 3,
        wrongSpecial: {
          en: "February 31 doesn't even exist… nice try 😂",
          pt: "31 de fevereiro nem existe… boa tentativa 😂",
        },
      },
      {
        q: {
          en: "What animal were we joking about getting at the start?",
          pt: "Qual animal a gente ia ter de brincadeira no começo do relacionamento?",
        },
        options: [
          { en: "Cat", pt: "Gato" },
          { en: "Fish", pt: "Peixe" },
          { en: "Hamster", pt: "Hamster" },
          { en: "Dog", pt: "Cachorro" },
        ],
        correct: 1,
      },
      {
        q: {
          en: "Who has more alcohol tolerance?",
          pt: "Quem tem mais resistência à bebida?",
        },
        options: [
          { en: "Eduarda", pt: "Eduarda" },
          { en: "Thommy", pt: "Thommy" },
          { en: "We're equal", pt: "Os dois iguais" },
          { en: "Neither", pt: "Nenhum" },
        ],
        correct: 0,
      },
      {
        q: {
          en: "What was the restaurant of our first real date?",
          pt: "Qual foi o restaurante do primeiro date?",
        },
        options: [
          { en: "Bistro dos Sete Ais", pt: "Bistro dos Sete Ais" },
          { en: "Arquipélago", pt: "Arquipélago" },
          { en: "McDonald's", pt: "Mc Donald's" },
          { en: "Artezanno", pt: "Artezanno" },
        ],
        correct: 0,
      },
      {
        q: {
          en: "Who likes being the little spoon when cuddling?",
          pt: "Quem gosta de ser a conchinha menor quando estão abraçados?",
        },
        options: [
          { en: "Eduarda", pt: "Eduarda" },
          { en: "Thommy", pt: "Thommy" },
        ],
        correct: 1,
      },
      {
        q: {
          en: "Which ingredient does Eduarda remove from burgers but Thommy loves?",
          pt: "Qual ingrediente a Eduarda remove dos hambúrgueres mas o Thommy ama?",
        },
        options: [
          { en: "Tomato", pt: "Tomate" },
          { en: "Lettuce", pt: "Alface" },
          { en: "Pickles", pt: "Pickles" },
          { en: "Cheese", pt: "Queijo" },
        ],
        correct: 0,
      },
      {
        q: {
          en: "Which seasoning does Eduarda avoid and Thommy loves?",
          pt: "Qual o tempero que a Eduarda evita e o Thommy acha delícia?",
        },
        options: [
          { en: "Pepper", pt: "Pimenta" },
          { en: "Garlic", pt: "Alho" },
          { en: "Oregano", pt: "Orégano" },
          { en: "Salt", pt: "Sal" },
        ],
        correct: 1,
      },
      {
        q: {
          en: "Who usually pays the bills on dates?",
          pt: "Quem paga as contas nos dates?",
        },
        options: [
          { en: "Thommy", pt: "Thommy" },
          { en: "Both", pt: "Os dois" },
          { en: "Paulo", pt: "Paulo" },
          { en: "Eduarda", pt: "Eduarda" },
        ],
        correct: 3,
      },
      {
        q: {
          en: "What was the first movie we watched together?",
          pt: "Qual o primeiro filme que viram juntos?",
        },
        options: [
          { en: "Dead Poets Society", pt: "Sociedade dos Poetas Mortos" },
          { en: "Minions", pt: "Minions" },
          { en: "Love and Other Drugs", pt: "Love and Other Drugs" },
          { en: "The Devil's Advocate", pt: "O Advogado do Diabo" },
        ],
        correct: 2,
      },
      {
        q: {
          en: "What was the first movie we saw in the cinema together?",
          pt: "Qual o primeiro filme que vimos no cinema juntos?",
        },
        options: [
          { en: "The Odyssey", pt: "A Odisseia" },
          { en: "Spider-Man", pt: "Homem-Aranha" },
          { en: "SpongeBob", pt: "Bob Esponja" },
          { en: "Fast & Furious", pt: "Velozes e Furiosos" },
        ],
        correct: 1,
      },
      {
        q: {
          en: "_____ always asks for water at restaurants and _____ refuses to order it but always takes a sip?",
          pt: "_____ sempre pede água nos restaurantes e ______ recusa a pedir, mas sempre pede um gole?",
        },
        options: [
          { en: "Thommy / Eduarda", pt: "Thommy / Eduarda" },
          { en: "Eduarda / Thommy", pt: "Eduarda / Thommy" },
        ],
        correct: 1,
      },
      {
        q: {
          en: "_____ always orders matcha and _____ always orders espresso?",
          pt: "_____ sempre pede matcha e ______ sempre pede café expresso?",
        },
        options: [
          { en: "Eduarda / Thommy", pt: "Eduarda / Thommy" },
          { en: "Thommy / Eduarda", pt: "Thommy / Eduarda" },
        ],
        correct: 1,
      },
      {
        q: {
          en: "_____ always takes photos and _____ always covers their face?",
          pt: "_____ sempre tira fotos e ______ sempre tapa o rosto?",
        },
        options: [
          { en: "Thommy / Eduarda", pt: "Thommy / Eduarda" },
          { en: "Eduarda / Thommy", pt: "Eduarda / Thommy" },
        ],
        correct: 0,
      },
      {
        q: {
          en: "_____ always goes to sleep early and _____ always stays up yapping?",
          pt: "_____ sempre dorme cedo e ______ sempre fica tagarelando?",
        },
        options: [
          { en: "Eduarda / Thommy", pt: "Eduarda / Thommy" },
          { en: "Thommy / Eduarda", pt: "Thommy / Eduarda" },
        ],
        correct: 1,
      },
      {
        q: {
          en: "Who knows more about politics?",
          pt: "Quem manja mais de política?",
        },
        options: [
          { en: "Eduarda", pt: "Eduarda" },
          { en: "Thommy", pt: "Thommy" },
        ],
        correct: 0,
        correctSpecial: {
          en: "See, I was being nice… but we both know the real answer 😌",
          pt: "Viu, fui bonzinho… mas nós dois sabemos a resposta certa 😌",
        },
        wrongSpecial: {
          en: "I can't believe you picked me 😂😂",
          pt: "Não acredito que você selecionou eu kkkkk",
        },
      },
    ],
  },
};
