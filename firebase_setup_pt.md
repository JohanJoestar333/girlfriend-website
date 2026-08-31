# Firebase — Configuração completa do site

Este guia explica como conectar o site ao Firebase para que **Bucket List** e **Músicas** sejam sincronizados entre dispositivos.

O projeto Firebase usado pelo site é:

- **Firebase Project:** `girlfriend-website-c0de`
- **Banco:** Cloud Firestore
- **Coleções usadas pelo site:**
  - `bucketlist`
  - `musicsongs`

> **Importante:** o Firebase usado aqui é o **Cloud Firestore**. Não é necessário configurar Firebase Storage apenas para sincronizar os dados das músicas, desde que o código esteja salvando as informações das músicas no Firestore.

---

# 1. O que o Firebase faz no site?

Sem Firebase, o site consegue funcionar normalmente, mas os dados ficam apenas no navegador/dispositivo em que foram adicionados.

Por exemplo:

- Você adiciona uma Bucket List no computador.
- O item aparece no seu computador.
- Você abre o site no celular.
- O item não aparece porque o celular tem seu próprio armazenamento local.

Com o Firebase/Firestore:

```text
                    Firebase / Firestore
                    ┌─────────────────┐
                    │                 │
              ┌─────┤   bucketlist    │
              │     │   musicsongs    │
              │     │                 │
              │     └─────────────────┘
              │
        ┌─────┴─────┐
        │            │
     💻 Computador   📱 Celular
        │            │
        └──────┬─────┘
               │
          💕 Vocês dois
```

Assim, os dados ficam armazenados na nuvem e podem ser acessados pelos dois dispositivos.

---

# 2. Abrir o projeto Firebase

1. Entre em:

https://console.firebase.google.com

2. Faça login com sua conta Google.
3. Abra o projeto:

```text
girlfriend-website-c0de
```

Esse deve ser o mesmo projeto Firebase configurado no site.

---

# 3. Ativar o Firestore Database

No Firebase Console:

1. Abra o projeto `girlfriend-website-c0de`.
2. No menu lateral, vá para:

```text
Build → Firestore Database
```

3. Se o Firestore ainda não estiver criado, clique em:

```text
Create database
```

4. Escolha uma região.

Para um projeto usado no Brasil, uma região como:

```text
southamerica-east1
```

é uma opção adequada, caso esteja disponível para o projeto.

5. Quando o Firebase perguntar sobre as regras de segurança, você pode começar com:

```text
Start in test mode
```

### Atenção

O **test mode é temporário**. Ele deixa o banco aberto para leitura/escrita e não deve ser tratado como uma configuração de segurança permanente.

Depois que o Firestore estiver funcionando, publique regras específicas para as coleções que o site realmente utiliza.

---

# 4. Criar/registrar o aplicativo Web

Agora precisamos conectar o HTML ao projeto Firebase.

1. No Firebase Console, clique na engrenagem ao lado de:

```text
Project Overview
```

2. Entre em:

```text
Project settings
```

3. Role até:

```text
Your apps
```

4. Se ainda não houver um aplicativo Web, clique no ícone:

```text
</>
```

5. Dê um nome para o aplicativo, por exemplo:

```text
girlfriend-site
```

6. Não é necessário marcar:

```text
Also set up Firebase Hosting
```

Se o site já está sendo hospedado pelo GitHub Pages/Netlify, não precisamos configurar Firebase Hosting para essa finalidade.

7. Clique em:

```text
Register app
```

O Firebase mostrará um objeto parecido com:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "girlfriend-website-c0de.firebaseapp.com",
  projectId: "girlfriend-website-c0de",
  storageBucket: "SEU_BUCKET",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456",
};
```

---

# 5. Conferir o CONFIG.firebase no index.html

Abra:

```text
index.html
```

Procure pela configuração:

```javascript
CONFIG;
```

e dentro dela:

```javascript
firebase;
```

Ela deve ter estes seis valores:

```javascript
firebase: {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
},
```

Substitua os valores pelos valores reais mostrados em:

```text
Firebase Console
→ Project settings
→ Your apps
→ Web app
```

### Os seis valores importantes

| Campo               | O que é                              |
| ------------------- | ------------------------------------ |
| `apiKey`            | Identifica o aplicativo Firebase     |
| `authDomain`        | Domínio de autenticação do projeto   |
| `projectId`         | ID do projeto Firebase               |
| `storageBucket`     | Bucket associado ao projeto          |
| `messagingSenderId` | ID usado pelos serviços de mensagens |
| `appId`             | Identificador do aplicativo Web      |

Não invente esses valores. Copie exatamente o `firebaseConfig` fornecido pelo Firebase.

---

# 6. Bucket List + Firebase

A Bucket List utiliza a coleção:

```text
bucketlist
```

Cada item da Bucket List deve ser armazenado como um documento dentro dessa coleção.

Exemplo:

```text
bucketlist
├── item-1
├── item-2
├── item-3
└── ...
```

O site pode então:

- adicionar itens;
- editar itens;
- marcar itens como concluídos;
- excluir itens;
- sincronizar essas alterações entre dispositivos.

Quando o Firebase estiver funcionando, o indicador da Bucket List deve mostrar algo como:

```text
🟢 Synced — changes save for both of you
```

---

# 7. Músicas + Firebase

A nova aba **Music/Músicas** também precisa de uma coleção no Firestore.

A coleção utilizada pelo projeto é:

```text
musicsongs
```

A estrutura fica:

```text
Firestore
│
├── bucketlist
│   ├── documento
│   ├── documento
│   └── ...
│
└── musicsongs
    ├── documento
    ├── documento
    └── ...
```

Isso permite que as músicas adicionadas em um dispositivo sejam recuperadas em outro.

Por exemplo:

```text
💻 Você adiciona uma música
        ↓
☁️ Firestore
        ↓
📱 Ela aparece no celular
```

A coleção `musicsongs` precisa estar incluída nas regras do Firestore. Se ela não estiver autorizada, a aba de músicas poderá funcionar visualmente, mas não conseguirá salvar ou carregar os dados corretamente.

---

# 8. Regras corretas do Firestore

Esta é uma das partes mais importantes.

No Firebase Console, vá para:

```text
Build
→ Firestore Database
→ Rules
```

Para este projeto, as duas coleções utilizadas pelo site precisam estar liberadas:

```text
bucketlist
musicsongs
```

Use:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    match /bucketlist/{docId} {
      allow read, write: if true;
    }

    match /musicsongs/{docId} {
      allow read, write: if true;
    }

    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

Depois clique:

```text
Publish
```

## O que essas regras fazem?

### Bucket List

```javascript
match /bucketlist/{docId} {
  allow read, write: if true;
}
```

Permite:

- ler Bucket List;
- criar itens;
- editar itens;
- marcar itens;
- excluir itens.

### Músicas

```javascript
match /musicsongs/{docId} {
  allow read, write: if true;
}
```

Permite:

- carregar músicas;
- adicionar músicas;
- editar músicas, caso o código faça isso;
- excluir músicas, caso o código faça isso.

### Qualquer outra coleção

```javascript
match /{document=**} {
  allow read, write: if false;
}
```

Bloqueia todas as outras coleções que não foram explicitamente liberadas.

---

# 9. O que significa `allow read, write: if true`?

Esta regra:

```javascript
allow read, write: if true;
```

significa que **qualquer pessoa que consiga acessar o site e o projeto pode tentar ler ou modificar os documentos dessas coleções**.

Isso acontece porque o site atualmente não está usando um sistema de login/autenticação para identificar vocês.

Para um site pessoal pequeno, pode ser aceitável como primeira versão.

Porém, não é uma configuração realmente privada.

## No futuro

Podemos adicionar:

- Firebase Authentication;
- login Google;
- login por e-mail/senha;
- usuários autorizados;
- regras baseadas em `request.auth`;
- acesso somente para vocês dois.

Exemplo de uma futura regra autenticada:

```javascript
allow read, write: if request.auth != null;
```

Isso é apenas um exemplo. **Não substitua as regras atuais por isso sem configurar o Firebase Authentication no código**, porque o site ainda precisaria fazer login.

---

# 10. A API Key do Firebase pode aparecer no GitHub?

Sim.

É normal que a configuração Web do Firebase apareça no JavaScript/HTML público:

```javascript
apiKey: "...",
authDomain: "...",
projectId: "...",
storageBucket: "...",
messagingSenderId: "...",
appId: "..."
```

A `apiKey` do Firebase Web não funciona como uma senha secreta tradicional.

O que realmente controla o acesso aos dados do Firestore são principalmente as **Security Rules**.

Portanto:

```text
firebaseConfig público
        ≠
senha do banco
```

Mas isso **não significa que o banco esteja automaticamente protegido**.

Se as regras permitirem:

```javascript
allow read, write: if true;
```

qualquer pessoa poderá potencialmente interagir com essas coleções.

---

# 11. Índices do Firestore

O código do site utiliza ordenação por:

```javascript
orderBy("createdAt");
```

Dependendo da consulta usada pelo código, o Firestore pode pedir a criação de um índice.

Se aparecer um erro no Console semelhante a:

```text
FAILED_PRECONDITION
```

ou uma mensagem dizendo para criar um índice, o Firebase normalmente fornece um link:

```text
Create index
```

Clique nesse link e confirme a criação.

Depois aguarde o índice ficar:

```text
Enabled
```

Não crie índices aleatoriamente. Só crie os que o próprio Firestore solicitar ou os que forem necessários para as consultas do código.

---

# 12. Testar a Bucket List

Depois de configurar tudo:

1. Salve o `index.html`.
2. Faça o deploy do site.
3. Abra o site.
4. Entre na aba:

```text
Bucket List
```

5. Confira o indicador de sincronização.

O esperado é:

```text
🟢 Synced
```

ou:

```text
🟢 Synced — changes save for both of you
```

6. Adicione um item.

7. Abra o site em outro navegador ou dispositivo.

8. Confira se o item aparece.

---

# 13. Testar a aba Music

Agora faça o mesmo teste com as músicas.

1. Abra:

```text
Music
```

2. Adicione uma música.
3. Aguarde alguns segundos.
4. Abra o site em outro dispositivo ou aba.
5. Confira se a música aparece.

O fluxo esperado é:

```text
Adicionar música
       ↓
JavaScript do site
       ↓
Firestore
       ↓
musicsongs
       ↓
Outro dispositivo
       ↓
Música aparece
```

---

# 14. Teste completo recomendado

Faça este teste antes de considerar o Firebase concluído.

## Bucket List

- [ ] Adicionar item no computador
- [ ] Verificar item no celular
- [ ] Marcar item como concluído
- [ ] Verificar alteração no outro dispositivo
- [ ] Editar item
- [ ] Verificar edição no outro dispositivo
- [ ] Excluir item
- [ ] Verificar exclusão no outro dispositivo

## Músicas

- [ ] Adicionar música no computador
- [ ] Verificar música no celular
- [ ] Atualizar a página
- [ ] Confirmar que a música continua lá
- [ ] Adicionar outra música em outro dispositivo
- [ ] Confirmar que ela aparece no primeiro dispositivo

---

# 15. Não abrir o HTML com `file://`

Evite testar o site simplesmente abrindo:

```text
file:///Users/seunome/Desktop/site/index.html
```

O ideal é executar o site através de:

```text
http://localhost
```

ou:

```text
https://seusite.com
```

Por exemplo, se estiver usando GitHub Pages:

```text
https://SEU-USUARIO.github.io/SEU-REPOSITORIO/
```

Isso evita vários problemas relacionados ao funcionamento do JavaScript e dos serviços Web.

---

# 16. GitHub Pages

Se o projeto estiver no GitHub Pages, o fluxo normalmente será:

```text
Editar index.html
        ↓
git add .
        ↓
git commit
        ↓
git push
        ↓
GitHub Pages atualiza
        ↓
Abrir o site
        ↓
Firebase sincroniza
```

Depois de alterar o `firebaseConfig`, certifique-se de que a versão atualizada do `index.html` realmente foi enviada para o GitHub.

---

# 17. Problemas comuns

## 🟡 Pill continua como "Not synced"

Confira:

1. `apiKey`
2. `authDomain`
3. `projectId`
4. `storageBucket`
5. `messagingSenderId`
6. `appId`

Todos precisam estar corretos.

Também confira se não existe:

- vírgula faltando;
- aspas faltando;
- chave `{}` faltando;
- texto sobrando dentro do objeto `CONFIG`.

---

## "Missing or insufficient permissions"

Esse erro normalmente indica problema nas regras do Firestore.

Verifique:

```text
Firebase Console
→ Firestore Database
→ Rules
```

Confirme que existem regras para:

```text
bucketlist
musicsongs
```

e que você clicou em:

```text
Publish
```

Depois atualize o site.

---

## Bucket List funciona, mas Music não

Confira primeiro se a regra:

```javascript
match /musicsongs/{docId} {
  allow read, write: if true;
}
```

está publicada.

Depois abra o Console do navegador:

```text
F12
→ Console
```

e procure erros relacionados a:

```text
musicsongs
Firestore
permission
index
Firebase
```

---

## Music funciona, mas as músicas desaparecem depois de atualizar

Isso pode indicar que:

- a música está sendo salva somente no armazenamento local;
- o `write` no Firestore está falhando;
- a coleção utilizada pelo código não é `musicsongs`;
- as regras estão bloqueando a gravação;
- a consulta de leitura está falhando.

Confira primeiro o Console do navegador.

---

## Funciona no computador, mas não no celular

Confira se os dois dispositivos estão usando exatamente o mesmo endereço do site publicado.

Por exemplo:

```text
Computador:
https://seusite.github.io/...

Celular:
https://seusite.github.io/...
```

Evite comparar:

```text
localhost
```

com:

```text
GitHub Pages
```

porque são versões diferentes do site.

Também tente um refresh completo.

---

# 18. Como verificar diretamente no Firebase

Uma das melhores formas de confirmar se tudo está funcionando é olhar o próprio Firestore.

Abra:

```text
Firebase Console
→ Firestore Database
→ Data
```

Você deverá encontrar:

```text
bucketlist
```

e:

```text
musicsongs
```

Depois de adicionar uma Bucket List ou música pelo site, confira se apareceu um documento correspondente.

Exemplo:

```text
Firestore
│
├── bucketlist
│   ├── ABC123
│   └── DEF456
│
└── musicsongs
    ├── XYZ123
    └── QWE789
```

Se o documento aparece no Firebase, mas não aparece no outro dispositivo, o problema provavelmente está na leitura/sincronização do código.

Se o documento nem chega ao Firebase, o problema provavelmente está na configuração, regra ou operação de `write`.

---

# 19. Checklist final

## Firebase

- [ ] Projeto `girlfriend-website-c0de` aberto
- [ ] Firestore Database criado
- [ ] Região escolhida
- [ ] Aplicativo Web registrado
- [ ] `firebaseConfig` copiado do Firebase

## `index.html`

- [ ] `apiKey` configurada
- [ ] `authDomain` configurado
- [ ] `projectId` configurado
- [ ] `storageBucket` configurado
- [ ] `messagingSenderId` configurado
- [ ] `appId` configurado

## Firestore Rules

- [ ] `bucketlist` permitido
- [ ] `musicsongs` permitido
- [ ] Outras coleções bloqueadas
- [ ] Regras publicadas

## Bucket List

- [ ] Adiciona
- [ ] Edita
- [ ] Marca como concluído
- [ ] Exclui
- [ ] Sincroniza entre dispositivos

## Music

- [ ] Adiciona música
- [ ] Carrega músicas
- [ ] Dados permanecem após refresh
- [ ] Sincroniza entre dispositivos
- [ ] `musicsongs` aparece no Firestore

## Site

- [ ] Testado em `http://localhost` ou `https://`
- [ ] Não está sendo aberto via `file://`
- [ ] Deploy atualizado
- [ ] Testado no computador
- [ ] Testado no celular
- [ ] Console sem erros do Firebase

---

# 20. Configuração rápida — resumo

Se o Firebase já foi criado, o processo pode ser resumido em:

```text
1. Abrir:
   Firebase Console
   → girlfriend-website-c0de

2. Abrir:
   Build → Firestore Database

3. Garantir que o Firestore está ativo.

4. Abrir:
   Project settings
   → Your apps
   → Web app

5. Copiar o firebaseConfig para:
   index.html
   → CONFIG.firebase

6. Abrir:
   Firestore Database
   → Rules

7. Publicar:

   rules_version = '2';

   service cloud.firestore {
     match /databases/{database}/documents {

       match /bucketlist/{docId} {
         allow read, write: if true;
       }

       match /musicsongs/{docId} {
         allow read, write: if true;
       }

       match /{document=**} {
         allow read, write: if false;
       }
     }
   }

8. Fazer deploy do site.

9. Testar Bucket List.

10. Testar Music.

11. Se o Firestore pedir um índice:
    clicar em "Create index".

12. Se aparecer erro:
    F12 → Console
    e verificar a mensagem do Firebase.
```

---

# 21. Segurança — próxima melhoria

A configuração acima é suficiente para colocar a sincronização do site para funcionar, mas as coleções `bucketlist` e `musicsongs` continuam abertas.

A próxima evolução recomendada é adicionar:

```text
Firebase Authentication
        ↓
Login
        ↓
Usuário autenticado
        ↓
Firestore Rules
        ↓
Somente usuários autorizados
```

Por exemplo, futuramente podemos fazer com que somente as duas contas do casal consigam acessar:

```text
bucketlist
musicsongs
```

Isso é mais seguro do que:

```javascript
allow read, write: if true;
```

**Não faça essa mudança ainda sem implementar o login no site**, porque as regras precisam corresponder ao método de autenticação usado pelo código.

---

# Conclusão

O Firebase do projeto precisa de três coisas principais:

```text
                 FIREBASE
                    │
        ┌───────────┼───────────┐
        │           │           │
     Firestore   Config       Rules
        │           │           │
        │           │           │
   ┌────┴────┐      │      ┌────┴─────┐
   │         │      │      │          │
bucketlist  musicsongs  acesso    segurança
```

Com isso configurado:

```text
💻 Computador
      ↕
☁️ Firebase / Firestore
      ↕
📱 Celular
```

e as duas partes principais do site — **Bucket List** e **Músicas** — podem compartilhar os mesmos dados entre dispositivos.

**Configuração mínima necessária:**

1. Firestore ativado.
2. Web app registrado.
3. `CONFIG.firebase` preenchido corretamente.
4. Coleção `bucketlist` autorizada.
5. Coleção `musicsongs` autorizada.
6. Regras publicadas.
7. Site hospedado em `http://` ou `https://`.
8. Índices criados caso o Firestore solicite.
9. Teste realizado em mais de um dispositivo.
