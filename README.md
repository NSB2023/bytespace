# ByteSpace

A responsive React implementation of the ByteSpace learning platform design. It includes the complete landing page and the additional catalogue, course details, creator profile, login, signup, and 404 screens shown in the supplied references.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To verify a production build, run `npm run build` and `npm run lint`.

## Routes

- `/` — landing page
- `/courses` — searchable course catalogue with categories and pagination
- `/courses/build-digital-asset` — course details with About, Lessons, and Reviews tabs
- `/creators/purepearl-studio` — creator profile
- `/login` — sign in design
- `/signup` — account creation design
- Any other route — 404 page

Course category selection, search, pagination, course tabs, review filters, creator follow, and newsletter confirmation are local interactions. Authentication, enrollment, and video playback are visual demos and are not connected to a backend.

The supplied design screenshots are kept locally in `input/` and excluded from Git. Website graphics are in `public/images/`.
