# rosetta-zara-dev

Next.js App Router projekat sa JavaScriptom i SCSS-om, bez TypeScript-a i Tailwind-a.

## Lokalni razvoj

```sh
npm install
npm run dev
```

Otvori http://localhost:3000.

## Provera i build

```sh
npm run lint
npm run build
```

Static export se generiše u `out/`. Za razvoj koristi `npm run dev`.

## GitHub Pages

Svaki push na `main` pokreće `.github/workflows/pages.yml`, proverava kod, gradi i objavljuje sajt.
GitHub Pages koristi izvor **GitHub Actions**.

URL: https://stefan4012it.github.io/rosetta-zara-dev/

Tokom GitHub Actions build-a automatski se postavlja `basePath` na `/rosetta-zara-dev`.
