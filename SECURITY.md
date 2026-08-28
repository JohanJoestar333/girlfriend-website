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

- **Bucket list items** (text + a done/not-done flag), **shared music
  playlist entries** (song title, artist, YouTube video ID, and a short
  note), and **shared photo memories** (a caption, an optional date, and
  a link to the photo) are stored in a Firebase Firestore database,
  across three collections (`bucketlist`, `musicsongs`, and `memories`),
  so all three sync across devices.
- **Uploaded photos themselves are hosted on Cloudinary** (a free
  third-party image host), not Firebase — only the resulting photo URL
  is stored in Firestore. Photos are resized/compressed in the browser
  before upload.
- **No accounts, passwords, payment details, or personal identifiers** are
  collected, stored, or processed anywhere in this project. The one
  password on the site (see below) is a standalone access gate, not an
  authentication system tied to any account or personal data.
- Weather and moon-phase data are fetched from public, keyless APIs
  (Open-Meteo) at view time and are not stored.

## Known, intentional limitations

This section exists so nobody "discovers" these as if they were surprises —
they're accepted trade-offs for a small personal project, documented here
on purpose:

- **The password gate is client-side only.** The password used to access
  the site lives in plain JavaScript in `index.html` and is trivially
  visible to anyone who views page source. It exists to keep the link from
  being casually stumbled into (e.g. via search or a shared link preview),
  not to withstand a deliberate attempt to bypass it. There is no server
  enforcing this check.
- **The Firebase config (including the API key) is public in this repo.**
  This is normal and expected for Firebase client apps — the API key alone
  does not grant access to data. Actual access control is enforced by
  **Firestore security rules**, configured separately in the Firebase
  console (not in this repo).
- **Firestore rules are intentionally permissive** for the `bucketlist`,
  `musicsongs`, and `memories` collections, since the site has no login
  system to scope access to. This means anyone who obtained the Firebase
  config could technically read or write to those collections. Given the
  low sensitivity of the data across all three (a to-do-style list, a
  shared song list, and photo captions/links, with no personal
  identifiers), this is an accepted trade-off rather than an oversight.
  Every other path in the database is denied by default via an explicit
  catch-all rule.
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
`bucketlist`, `musicsongs`, or `memories` collections, or a way to break
the site for other visitors), please open an issue on this repository, or
reach out to me directly rather than exploiting or publicly disclosing it
first.

Since this is a low-traffic personal project, please allow a reasonable
amount of time for a response — this isn't a maintained product with an
on-call security team behind it.
