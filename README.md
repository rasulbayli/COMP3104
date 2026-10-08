# COMP3104 Lab 05 - Hosting Single Page Apps with GitHub Pages

## Setup

```bash
npm install
npm start
```

Open http://localhost:3000

## Production build

```bash
npm run build
```

## GitHub Pages deployment

Update the `homepage` value in `package.json` so it matches your GitHub Pages repository URL, then run:

```bash
npm run deploy
```

## Git branch workflow

```bash
git branch dep-inclusions
git checkout dep-inclusions
git add package.json
git commit -m "added project dependencies to our package.json"
git add package-lock.json
git commit -m "adding our dependency lock file"
git add src public
git commit -m "including application source"
git push --set-upstream origin dep-inclusions
```
