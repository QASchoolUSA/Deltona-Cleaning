# AGENTS.md

## Cursor Cloud specific instructions

This repository is a single **Next.js 16 / React 19** marketing website ("Deltona Cleaning") managed with **npm**. The marketing pages are fully static/self-contained, but the booking widget talks to a separate central admin service (see below). `npm install` is handled by the startup update script.

### Services

| Service | Command | Port | Notes |
|---|---|---|---|
| Next.js web app | `npm run dev` | 3000 | The only service in this repo. Standard scripts (`dev`, `build`, `start`, `lint`) live in `package.json`. |

### Booking widget → Booking Broom (non-obvious)

The multi-step `BookingWidget` (`src/components/BookingWidget.tsx`, rendered on `/services/[slug]` pages) POSTs to this app's `/api/book` route, which **forwards the booking to a central "Booking Broom" admin app** (a separate repo) via two env vars:

- `BOOKING_BROOM_URL` — base URL of a running Booking Broom instance (e.g. `http://localhost:3000`)
- `BOOKING_BROOM_API_KEY` — this site's dev API key: `bb_deltona_dev_key`

These belong in `.env.local` (gitignored). Without them, browsing and the widget UI still work, but the final "Book cleaning" submit returns an error because `/api/book` can't reach Booking Broom.

To exercise the full booking flow locally:
1. Start the Booking Broom app (its own repo has a `## Cursor Cloud specific instructions` section covering its Convex + Next.js startup). It runs on port 3000 and seeds a `deltona` site.
2. Create `.env.local` here with `BOOKING_BROOM_URL=http://localhost:3000` and `BOOKING_BROOM_API_KEY=bb_deltona_dev_key`.
3. Run this app on a different port (e.g. `PORT=3001 npm run dev`) so it doesn't collide with Booking Broom on 3000.
4. Submit the widget; the booking appears on the Booking Broom dashboard in real time.

### Lint

`npm run lint` runs but currently reports pre-existing errors (e.g. `@typescript-eslint/no-empty-object-type` in `ui/input.tsx` / `ui/textarea.tsx`, plus unused-var warnings) in the committed source. These are not environment problems — do not treat a non-zero lint exit as a setup failure, and do not "fix" them unless the task asks.
