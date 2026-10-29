# Long Life Windows & Doors: website

The one-page website for Long Life Windows & Doors (Vancouver, since 1989).
It's built with [Astro](https://astro.build), which turns the files in `src/`
into a plain, fast HTML page. There's no database and nothing to log in to.

## Run it on your computer

You need [Node.js](https://nodejs.org) version 22.22 or newer.

```bash
npm install        # first time only: downloads Astro
npm run dev        # starts a local preview at http://localhost:4321
```

While `npm run dev` is running, any change you save shows up in the browser straight away.

Other commands:

```bash
npm run build      # builds the finished site into the dist/ folder
npm run preview    # serves that finished build locally, to double-check it
```

## Where to change things

| What you want to change | File |
| --- | --- |
| Phone, email, address, Instagram/HomeStars links, all the wording, the photo lists | `src/data/site.js` |
| Colours, fonts, spacing | the top of `src/styles/global.css` (the `:root` block) |
| Photos | `src/assets/` (then update the file name in `src/data/site.js`) |
| Page layout / structure | `src/pages/index.astro` |
| Browser tab icon | `public/favicon.png` |

**Text:** open `src/data/site.js`, find the sentence and edit it inside the quotes.
For apostrophes inside text, use the curly ’ the site already uses.

**Colours:** in `src/styles/global.css` the first block lists every colour, e.g.
`--red: #B32D24;`. Change the code there and it changes everywhere.

**Photos:** put the new photo in `src/assets/`, then in `src/data/site.js` change
the matching `import ... from '../assets/....jpg'` line. To add a neighbourhood photo,
add an import at the top and a line like `{ image: newPhoto, city: 'Burnaby' },`
to the `homes` list. The city buttons and photo counts update automatically.
Astro makes small WebP versions of every photo for you when it builds.

## How the consultation form works

The form setting is in `src/data/site.js`:

```js
export const FORM_ENDPOINT = '';
```

- **While it's empty (`''`, the default):** pressing "Book my free consultation" opens
  the visitor's own email app with a message to hello@longlife.ca that already
  has everything they typed in it. They still have to press send, so some
  requests may get lost this way.
- **To get requests delivered to you automatically, turn on Formspree (free plan available):**
  1. Sign up at [formspree.io](https://formspree.io) with the email that should receive requests.
  2. Create a new form. Formspree gives you an endpoint like `https://formspree.io/f/abcdwxyz`.
  3. Paste it into `site.js`: `export const FORM_ENDPOINT = 'https://formspree.io/f/abcdwxyz';`
  4. Save, commit and deploy. Send yourself a test request.

Either way the visitor sees "Thank you. We’ll call to book your consultation."
If Formspree can't be reached, they see a short message asking them to call 604 439 0982.
A hidden `_gotcha` field filters out most spam bots.

## Put it online (Vercel)

1. Push this repository to GitHub (already done if you're reading this there).
2. Sign in at [vercel.com](https://vercel.com) with GitHub, click **Add New → Project**
   and pick this repository. Vercel detects Astro by itself, so click **Deploy**.
3. Every time a change is pushed to GitHub, Vercel rebuilds the site.
4. To use your own domain: in Vercel open the project → **Settings → Domains**.

**To confirm:** `astro.config.mjs` has `site: 'https://longlife.ca'`. That's a
placeholder. Change it to the real domain, because search engines and
social-media previews use it.

## Undo a change

Every change is saved as a "commit" in git, so nothing is ever really lost.

```bash
git log --oneline          # list recent changes, newest first
git revert <commit-id>     # undo one change (creates a new "undo" commit)
git push                   # publish the undo; Vercel redeploys
```

If you've edited a file but haven't committed yet and want to throw the edit away:

```bash
git checkout -- src/data/site.js
```

Vercel also keeps every past deploy: in the project's **Deployments** tab you can
pick an older one and choose **Promote to Production** to roll back instantly.

## What's in the folder

```
astro.config.mjs        Astro settings (site URL)
public/                 files copied as-is: favicon, robots.txt
src/assets/             logo and project photos
src/data/site.js        business info and all page text
src/styles/global.css   all styles, in page order
src/pages/index.astro   the page itself + the small script for the interactive parts
```
