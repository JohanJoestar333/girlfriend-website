# Firebase — Complete Site Setup

This guide explains how to connect the site to Firebase so that the **Bucket List** and **Music** data can be synchronized across devices.

The Firebase project used by the site is:

- **Firebase Project:** `girlfriend-website-c0de`
- **Database:** Cloud Firestore
- **Collections used by the site:**
  - `bucketlist`
  - `movies` (the "Movie Nights" list inside the Bucket List tab)
  - `musicsongs`

> **Importante:** o Firebase usado aqui é o **Cloud Firestore**. Não é necessário configurar Firebase Storage apenas para sincronizar os dados das songs, desde que o código esteja salvando as informações das songs no Firestore.

---

# 1. O que o Firebase faz no site?

Sem Firebase, o site consegue funcionar normalmente, mas os dados ficam apenas no navegador/dispositivo em que foram adicionados.

For example:

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
              │     │   movies        │
              │     │   musicsongs    │
              │     │                 │
              │     └─────────────────┘
              │
        ┌─────┴─────┐
        │            │
     💻 Computer   📱 Phone
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

2. Sign in with your Google account.
3. Open the project:

```text
girlfriend-website-c0de
```

This should be the same Firebase project configured in the site.

---

# 3. Ativar o Firestore Database

In the Firebase Console:

1. Open the project `girlfriend-website-c0de`.
2. In the left sidebar, go to:

```text
Build → Firestore Database
```

3. If Firestore has not been created yet, click:

```text
Create database
```

4. Choose a region.

For a project used in Brazil, a region such as:

```text
southamerica-east1
```

is a suitable option if it is available for the project.

5. When Firebase asks about security rules, you can start with:

```text
Start in test mode
```

### Attention

O **test mode é temporário**. Ele deixa o banco aberto para leitura/escrita e não deve ser tratado como uma configuração de segurança permanente.

Once Firestore is working, publish specific rules for the collections the site actually uses.

---

# 4. Criar/registrar o aplicativo Web

Now we need to connect the HTML to the Firebase project.

1. In the Firebase Console, click the gear icon next to:

```text
Project Overview
```

2. Entre em:

```text
Project settings
```

3. Scroll down to:

```text
Your apps
```

4. If there is not already a Web app, click the icon:

```text
</>
```

5. Give the app a name, for example:

```text
girlfriend-site
```

6. You do not need to check:

```text
Also set up Firebase Hosting
```

If the site is already hosted through GitHub Pages/Netlify, Firebase Hosting is not required for this purpose.

7. Clique em:

```text
Register app
```

Firebase will show an object similar to:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "girlfriend-website-c0de.firebaseapp.com",
  projectId: "girlfriend-website-c0de",
  storageBucket: "SEU_BUCKET",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456"
};
```

---

# 5. Conferir o CONFIG.firebase no index.html

Open:

```text
index.html
```

Look for the configuration:

```javascript
CONFIG
```

and inside it:

```javascript
firebase
```

It should contain these six values:

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

Replace the values with the actual values shown in:

```text
Firebase Console
→ Project settings
→ Your apps
→ Web app
```

### The six important values

| Field | What it is |
|---|---|
| `apiKey` | Identifies the Firebase application |
| `authDomain` | Authentication domain for the project |
| `projectId` | Firebase project ID |
| `storageBucket` | Bucket associated with the project |
| `messagingSenderId` | ID used by messaging services |
| `appId` | Web application identifier |

Do not invent these values. Copy the `firebaseConfig` provided by Firebase exactly.

---

# 6. Bucket List + Firebase

The Bucket List uses the collection:

```text
bucketlist
```

Each Bucket List item should be stored as a document inside this collection.

Exemplo:

```text
bucketlist
├── item-1
├── item-2
├── item-3
└── ...
```

The site can then:

- add items;
- editing items;
- mark items as completed;
- delete items;
- synchronize these changes across devices.

When Firebase is working, the Bucket List sync indicator should show something like:

```text
🟢 Synced — changes save for both of you
```

---

# 7. Music + Firebase

The new **Music** tab also needs a collection in Firestore.

The collection used by the project is:

```text
musicsongs
```

The structure is:

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

This allows songs added on one device to be retrieved on another.

For example:

```text
💻 Você adiciona uma song
        ↓
☁️ Firestore
        ↓
📱 Ela aparece no celular
```

The `musicsongs` collection must be included in the Firestore rules. Se ela não estiver autorizada, a aba de songs poderá funcionar visualmente, mas não conseguirá salvar ou carregar os dados corretamente.

---

# 8. Rules corretas do Firestore

This is one of the most important parts.

In the Firebase Console, go to:

```text
Build
→ Firestore Database
→ Rules
```

For this project, the collections used by the site need to be allowed:

```text
bucketlist
movies
musicsongs
memories
calendar
albums
daycards
moods
thommyPersonal
photoboothCalls
  ├── callerCandidates
  └── calleeCandidates
```

Use:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    // BUCKET LIST
    match /bucketlist/{docId} {
      allow read, write: if true;
    }

    // MOVIES
    match /movies/{doc} {
      allow read, write: if true;
    }

    // MUSIC
    match /musicsongs/{docId} {
      allow read, write: if true;
    }

    // OUR ALBUM / MEMORIES
    match /memories/{docId} {
      allow read, write: if true;
    }

    // CALENDAR
    match /calendar/{docId} {
      allow read, write: if true;
    }

    // ALBUMS
    match /albums/{docId} {
      allow read, write: if true;
    }

    // DAYCARDS
    match /daycards/{docId} {
      allow read, write: if true;
    }  

    // MOODS
    match /moods/{docId} {
      allow read, write: if true;
    }

    // PERSONAL
    match /thommyPersonal/{doc} {
      allow read, write: if true;
    }

    // PHOTOBOOTH
    match /photoboothCalls/{callId} {
      allow read, write: if true;

      match /callerCandidates/{candId} {
        allow read, write: if true;
      }

      match /calleeCandidates/{candId} {
        allow read, write: if true;
      }
    }

    // Everything else is blocked
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

Then click:

```text
Publish
```

## What do these rules do?

### Bucket List

```javascript
match /bucketlist/{docId} {
  allow read, write: if true;
}
```

Allows:

- reading the Bucket List;
- creating items;
- editing items;
- marking items;
- deleting items.

### Movies (inside the Bucket List tab)

```javascript
match /movies/{docId} {
  allow read, write: if true;
}
```

Allows:

- loading the movies watchlist and watched list;
- adding movies (via TMDB search or manually);
- moving a movie between "to watch" and "watched";
- saving each partner's star rating;
- deleting movies.

### Music

```javascript
match /musicsongs/{docId} {
  allow read, write: if true;
}
```

Allows:

- loading songs;
- adding songs;
- editing songs, if the code does this;
- deleting songs, if the code does this.

### Qualquer outra coleção

```javascript
match /{document=**} {
  allow read, write: if false;
}
```

Blocks all other collections that were not explicitly allowed.

---

# 9. O que significa `allow read, write: if true`?

This rule:

```javascript
allow read, write: if true;
```

means that **anyone who can access the site and project can potentially try to read or modify documents in these collections**.

This is because the site currently does not use a login/authentication system to identify you.

For a small personal site, this may be acceptable as a first version.

However, this is not a truly private configuration.

## In the future

We can add:

- Firebase Authentication;
- Google login;
- email/password login;
- authorized users;
- rules based on `request.auth`;
- access only for the two of you.

Exemplo de uma futura regra autenticada:

```javascript
allow read, write: if request.auth != null;
```

This is only an example. **Do not replace the current rules with this without configuring Firebase Authentication in the code**, because the site would also need to perform authentication.

---

# 10. A API Key do Firebase pode aparecer no GitHub?

Yes.

It is normal for the Firebase Web configuration to appear in public JavaScript/HTML:

```javascript
apiKey: "...",
authDomain: "...",
projectId: "...",
storageBucket: "...",
messagingSenderId: "...",
appId: "..."
```

The Firebase Web `apiKey` does not work like a traditional secret password.

What primarily controls access to Firestore data are the **Security Rules**.

Portanto:

```text
firebaseConfig público
        ≠
senha do banco
```

But this **does not mean that the database is automatically protected**.

Se as regras permitirem:

```javascript
allow read, write: if true;
```

qualquer pessoa poderá potencialmente interagir com essas coleções.

---

# 11. Indexs do Firestore

The site code uses ordering by:

```javascript
orderBy('createdAt')
```

Depending on the query used by the code, Firestore may ask you to create an index.

If an error similar to this appears in the Console:

```text
FAILED_PRECONDITION
```

or a message asking you to create an index, Firebase normally provides a link:

```text
Create index
```

Click that link and confirm the creation.

Then wait for the index to become:

```text
Enabled
```

Do not create indexes randomly. Only create those requested by Firestore or required by the queries in the code.

---

# 12. Testar a Bucket List

After configuring everything:

1. Save `index.html`.
2. Deploy the site.
3. Abra o site.
4. Open the tab:

```text
Bucket List
```

5. Check the sync indicator.

The expected result is:

```text
🟢 Synced
```

ou:

```text
🟢 Synced — changes save for both of you
```

6. Add an item.

7. Open the site in another browser or device.

8. Check whether the item appears.

---

# 13. Testar a aba Music

Now perform the same test with songs.

1. Open:

```text
Music
```

2. Add a song.
3. Wait a few seconds.
4. Open the site on another device or tab.
5. Check whether the song appears.

The expected flow is:

```text
Addsr song
       ↓
JavaScript of the site
       ↓
Firestore
       ↓
musicsongs
       ↓
Outro dispositivo
       ↓
Song aparece
```

---

# 14. Teste completo recomendado

Faça este teste antes de considerar o Firebase concluído.

## Bucket List

- [ ] Addsr item no computador
- [ ] Verificar item no celular
- [ ] Marcar item como concluído
- [ ] Verificar alteração no outro dispositivo
- [ ] Editsr item
- [ ] Verificar edição no outro dispositivo
- [ ] Deletesr item
- [ ] Verificar exclusão no outro dispositivo

## Music

- [ ] Addsr song no computador
- [ ] Verificar song no celular
- [ ] Refresh a página
- [ ] Confirmar que a song continua lá
- [ ] Addsr outra song em outro dispositivo
- [ ] Confirmar que ela aparece no primeiro dispositivo

---

# 15. Não open o HTML com `file://`

Avoid testing the site simply by opening:

```text
file:///Users/seunome/Desktop/site/index.html
```

Ideally, run the site through:

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

This avoids several issues related to JavaScript and Web services.

---

# 16. GitHub Pages

If the project is hosted on GitHub Pages, the flow is normally:

```text
Edit index.html
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

# 17. Common problems

## 🟡 Pill continua como "Not synced"

Check:

1. `apiKey`
2. `authDomain`
3. `projectId`
4. `storageBucket`
5. `messagingSenderId`
6. `appId`

All of them need to be correct.

Also check that there is no:

- missing comma;
- missing quote;
- missing `{}` brace;
- extra text inside the `CONFIG` object.

---

## "Missing or insufficient permissions"

This error usually indicates a problem with the Firestore rules.

Verifique:

```text
Firebase Console
→ Firestore Database
→ Rules
```

Confirm that rules exist for:

```text
bucketlist
musicsongs
```

and that you clicked:

```text
Publish
```

Then refresh the site.

> **If this happened specifically on the Photo Booth** (cameras turn on for
> both of you, but the video/countdown never syncs, and the on-screen status
> now says `permission-denied`): this is almost always because the
> `photoboothCalls` rule only covers the parent document, not its
> `callerCandidates`/`calleeCandidates` **subcollections**. A rule on a path
> in Firestore never automatically applies to the subcollections nested
> under it — each needs its own `match` block. Go straight to section 10
> below and double-check your rule has the nested `match` blocks, not just
> the outer one. This was the exact cause of a real "booth won't connect"
> bug — see the confirmed-working rules example there.

---

## Bucket List funciona, mas Music não

Confira primeiro se a regra:

```javascript
match /musicsongs/{docId} {
  allow read, write: if true;
}
```

está publicada.

Depois abra o browser Console:

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

## Music funciona, mas as songs desaparecem depois de atualizar

This may indicate that:

- the song is only being saved to local storage;
- the Firestore `write` is failing;
- the collection used by the code is not `musicsongs`;
- the rules are blocking the write;
- the read query is failing.

Check the browser Console first.

---

## Funciona no computador, mas não no celular

Confira se os dois dispositivos estão usando exatamente o mesmo endereço of the site publicado.

For example:

```text
Computer:
https://seusite.github.io/...

Phone:
https://seusite.github.io/...
```

Avoid comparing:

```text
localhost
```

com:

```text
GitHub Pages
```

because they are different versions of the site.

Also try a hard refresh.

---

# 18. Como verificar diretamente no Firebase

One of the best ways to confirm that everything is working is to inspect Firestore itself.

Open:

```text
Firebase Console
→ Firestore Database
→ Data
```

You should find:

```text
bucketlist
```

e:

```text
musicsongs
```

After adding a Bucket List item or song through the site, check whether a corresponding document appeared.

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

If the document appears in Firebase but not on the other device, the problem is probably in the code's read/synchronization logic.

If the document never reaches Firebase, the problem is probably in the configuration, rules, or `write` operation.

---

# 19. Checklist final

## Firebase

- [ ] Project `girlfriend-website-c0de` opened
- [ ] Firestore Database created
- [ ] Region selected
- [ ] Web app registered
- [ ] `firebaseConfig` copied from Firebase

## `index.html`

- [ ] `apiKey` configured
- [ ] `authDomain` configured
- [ ] `projectId` configured
- [ ] `storageBucket` configured
- [ ] `messagingSenderId` configured
- [ ] `appId` configured

## Firestore Rules

- [ ] `bucketlist` allowed
- [ ] `movies` allowed
- [ ] `musicsongs` allowed
- [ ] Other collections blocked
- [ ] Rules published

## Bucket List

- [ ] Adds
- [ ] Edits
- [ ] Marks as completed
- [ ] Deletes

## Movies

- [ ] Search returns results (needs `CONFIG.tmdb.apiKey`)
- [ ] Adding a movie saves it to "To Watch"
- [ ] Moving a movie to "Watched" works
- [ ] Both partners' star ratings save
- [ ] Synchronizes across devices

## Music

- [ ] Adds a song
- [ ] Loads songs
- [ ] Data remains after refresh
- [ ] Synchronizes across devices
- [ ] `musicsongs` aparece no Firestore

## Site

- [ ] Tested on `http://localhost` or `https://`
- [ ] Not being opened via `file://`
- [ ] Deployment updated
- [ ] Tested on computer
- [ ] Tested on phone
- [ ] Console has no Firebase errors

---

# 20. Configuração rápida — resumo

If Firebase has already been created, the process can be summarized as:

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

       match /movies/{docId} {
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

8. Deploy the site.

9. Testar Bucket List.

10. Testar Movies.

11. Testar Music.

12. If Firestore asks for an index:
    click "Create index".

13. If an error appears:
    F12 → Console
    and check the Firebase message.
```

---

# 21. Segurança — próxima melhoria

The configuration above is enough to get site synchronization working, but the `bucketlist`, `movies`, and `musicsongs` collections remain open.

The recommended next improvement is to add:

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

This is more secure than:

```javascript
allow read, write: if true;
```

**Do not make this change yet without implementing login in the site**, because the rules need to match the authentication method used by the code.

---

# Conclusão

The Firebase setup for this project needs three main things:

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

Once this is configured:

```text
💻 Computer
      ↕
☁️ Firebase / Firestore
      ↕
📱 Phone
```

the two main parts of the site — **Bucket List** and **Music** — can share the same data across devices.

**Minimum required configuration:**

1. Firestore enabled.
2. Web app registered.
3. `CONFIG.firebase` filled in correctly.
4. `bucketlist` collection allowed.
5. `musicsongs` collection allowed.
6. Rules published.
7. Site hospedado em `http://` ou `https://`.
8. Indexes created if Firestore requests them.
9. Test performed on more than one device.

---

## 10. Photo Booth — extra collections and rules

The Photo Booth does not require a new Firebase project or a separate Firebase
service. It uses Firestore only for the temporary WebRTC signaling documents
and optional 24-hour saved photo strips described below.

The site's “While you were away” notifications also **do not require a new
Firebase collection**. Their 24-hour eligibility/tracking is handled by the
website itself.


The Photo Booth tab adds three more things to your Firestore, on top of
everything above. It uses Firestore only as a **signaling relay** to
connect the two of you live (WebRTC) — no camera video ever passes
through Firestore or gets stored anywhere.

Collections used:

```text
photoboothCalls          (doc "live"; subcollections callerCandidates, calleeCandidates)
photoboothStrips         (only used if someone taps "Save for 24h")
```

Add these to your rules alongside the existing ones:

```javascript
match /photoboothCalls/{callId} {
  allow read, write: if true;

  match /callerCandidates/{candId} {
    allow read, write: if true;
  }
  match /calleeCandidates/{candId} {
    allow read, write: if true;
  }
}

match /photoboothStrips/{stripId} {
  allow read, write: if true;
}
```

> ⚠️ **Easy mistake — this is the #1 cause of "cameras turn on but never
> connect":** it's very easy to write only
> `match /photoboothCalls/{callId} { allow read, write: if true; }` and skip
> the two nested `match` blocks inside it. That looks like it covers
> "everything under photoboothCalls," but it doesn't — Firestore rules are
> **not** inherited by subcollections; each nested collection needs its own
> explicit `match`. Without the two blocks above, the offer/answer document
> syncs fine (so it looks like it's working), but every ICE candidate write
> silently fails, and the booth gets stuck with each of you seeing your own
> camera but never your partner's. If the site's on-screen status shows a
> `permission-denied` sync error, this nested-rules mistake is almost
> certainly why. A confirmed-working full rules file looks like this:
>
> ```javascript
> rules_version = '2';
> service cloud.firestore {
>   match /databases/{database}/documents {
>     match /photoboothCalls/{callId} {
>       allow read, write: if true;
>
>       match /callerCandidates/{candId} {
>         allow read, write: if true;
>       }
>       match /calleeCandidates/{candId} {
>         allow read, write: if true;
>       }
>     }
>     // ...your other collections' rules go here too...
>   }
> }
> ```

### What is actually stored, and for how long?

- `photoboothCalls/live` — the temporary handshake (offer/answer/ICE
  candidates) used to connect your two cameras directly to each other.
  It's overwritten every time a new session starts and contains no
  image data at all.
- `photoboothStrips` — **only created if you tap "Save for 24h."** Each
  document holds one finished, already-assembled strip image (as
  base64) plus an `expiresAt` timestamp. Any device that opens the
  Photo Booth tab actively deletes documents whose `expiresAt` has
  passed, the same way old Day Cards clean themselves up. If nobody
  opens the tab again after 24h, the document simply stays until the
  next visit clears it out.
- If you never tap "Save," nothing is written anywhere — the strip
  only ever exists as pixels on your own device, ready to download.
