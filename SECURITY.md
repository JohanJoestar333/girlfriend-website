# Security Policy

This repository is a personal, non-commercial hobby project — a single web
page built for one specific person, not a distributed piece of software.
Because of that, this policy is intentionally simple: it explains what data
the site touches, the trade-offs already made on purpose, and how to reach
me if you spot something that should be fixed.

## Supported versions

There are no separate maintained versions or release branches — `main` is
the only version, and it's what's deployed live via GitHub Pages. Security
fixes (if any are ever needed) would go straight into `main`.

## What data this project handles

- **Bucket list items** (text + a done/not-done flag), **a shared movie
  watchlist/watched list** (title, year, TMDB poster path, and each
  partner's star rating), **shared music playlist entries** (song title,
  artist, YouTube video ID, and a short note), and **shared photo
  memories** (a caption, an optional date, and a link to the photo) are
  stored in a Firebase Firestore database, across four collections
  (`bucketlist`, `movies`, `musicsongs`, and `memories`), so all four
  sync across devices.
- **Uploaded photos themselves are hosted on Cloudinary** (a free
  third-party image host), not Firebase — only the resulting photo URL
  is stored in Firestore. Photos are resized/compressed in the browser
  before upload.
- **No user accounts or authentication records** are collected. The site has a
  standalone password gate, but the password itself is kept as a GitHub Actions
  repository secret and only its SHA-256 hash is injected into the deployed
  `gate.js`. The gate is not an authentication system tied to user accounts.
- Weather and moon-phase data are fetched from public, keyless APIs
  (Open-Meteo) at view time and are not stored.

## Known, intentional limitations

This section exists so nobody "discovers" these as if they were surprises —
they're accepted trade-offs for a small personal project, documented here
on purpose:

- **The password gate is client-side only.** The real password is supplied as
  the GitHub Actions `GATE_PASSWORD` repository secret. The deployment
  workflow hashes it with SHA-256 and publishes only the hash. This is better
  than committing the plaintext password, but it is still not strong
  authentication: the browser receives everything needed to verify a guess,
  and a determined visitor can inspect or bypass the client-side gate. It
  exists to keep the link from being casually stumbled into, not to protect
  sensitive information from a deliberate attacker.
- **The Firebase config (including the API key) is public in this repo,
  and so is the TMDB API key used for movie search.** This is normal and
  expected for client-side apps like this one — neither key alone grants
  write access to anything or costs money to use. Actual access control
  for the database is enforced by **Firestore security rules**,
  configured separately in the Firebase console (not in this repo); the
  TMDB key is read-only search access to public movie data.
- **Firestore rules are intentionally permissive** for the `bucketlist`,
  `movies`, `musicsongs`, and `memories` collections, since the site has
  no login system to scope access to. The Photo Booth signaling collections
  are also intentionally open enough for the two-browser WebRTC handshake
  to work. This means anyone who obtained the
  Firebase config could technically read or write to those collections.
  Given the low sensitivity of the data across all four (a to-do-style
  list, a movie watchlist with star ratings, a shared song list, and
  photo captions/links, with no personal identifiers), this is an
  accepted trade-off rather than an oversight. Every other path in the
  database is denied by default via an explicit catch-all rule.
- **The Photo Booth does not store live camera video in Firebase.** Firebase
  is used for WebRTC signaling documents; the actual media connection is
  browser-to-browser when possible, or uses the configured TURN relay when
  necessary. Saved Photo Booth strips are a separate feature and can be
  configured to expire after 24 hours.
- **The Cloudinary upload preset is public and unsigned by design.** This
  means anyone with the preset name could technically upload arbitrary
  images to the associated Cloudinary account, though they could not read,
  edit, or delete anything already there. This is the standard, intended
  way Cloudinary supports uploads from client-side code with no backend.

If any of these assumptions stop being acceptable (e.g. more sensitive
data is added to the database later), the fix is to tighten the Firestore
rules and/or add real authentication — not to treat the current setup as
broken.

## Reporting a vulnerability or concern

If you notice something that seems like a genuine problem beyond what's
already listed above (for example, a way to access data outside the
`bucketlist`, `movies`, `musicsongs`, or `memories` collections, or a way to break
the site for other visitors), please open an issue on this repository, or
reach out to me directly rather than exploiting or publicly disclosing it
first.

Since this is a low-traffic personal project, please allow a reasonable
amount of time for a response — this isn't a maintained product with an
on-call security team behind it.
