# objkt-p5js-template

A clean, lightweight boilerplate for creating and minting [p5.js](https://p5js.org) interactive NFTs on [objkt.com](https://objkt.com).

> All dependencies (p5.js) are bundled locally — the token will work entirely offline inside objkt's sandboxed iframe, as required by the platform.

---

## Project structure

```
.
├── index.html      ← required by objkt — entry point for your token
├── sketch.js       ← 👉 YOUR ARTWORK GOES HERE
├── style.css       ← base reset styles (edit as needed)
└── js/
    └── p5.min.js   ← p5.js v1.11.3 (bundled, no CDN)
```

---

## Quick start

1. **Clone or download** this repository.
2. **Open `sketch.js`** and replace the demo artwork inside `setup()` and `draw()` with your own p5.js code.
3. **Preview locally** by opening `index.html` in any browser — no server required.
4. **Zip and mint** (see below).

---

## Writing your sketch

`sketch.js` uses standard [p5.js global mode](https://p5js.org/reference/). The two functions you need are:

```js
function setup() {
  // Runs once — create your canvas and do one-time initialisation.
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Runs every frame (~60 fps by default) — draw your artwork here.
  background(20);
}
```

A `windowResized()` handler is included so the canvas always fills the viewer's screen. Remove it if you prefer a fixed-size canvas.

### Tips

| What you want | How to do it |
|---|---|
| Fixed canvas size | `createCanvas(800, 800)` |
| Slow animation | `frameRate(30)` inside `setup()` |
| Static image (no loop) | Call `noLoop()` at the end of `setup()` |
| Load a local image | Place the file in an `assets/` folder and use `loadImage('assets/my-image.png')` inside `preload()` |
| Add a local font | Use `loadFont('assets/my-font.ttf')` inside `preload()` |
| Random but reproducible | Seed with `randomSeed(42)` or use a hash from `URLSearchParams` |

### ⚠️ objkt sandbox rules

- **No external URLs.** Every resource (images, fonts, sounds, extra scripts) must be included in your ZIP. External requests are blocked.
- **Use relative paths.** Write `js/p5.min.js`, not `/js/p5.min.js` or `https://…`.
- The `<canvas>` element is rendered inside a sandboxed iframe with `allow-scripts allow-downloads` by default.

---

## Minting on objkt.com

1. Select all project files and compress them into a **ZIP** archive.
   The ZIP must contain `index.html` at the **top level** (not inside a sub-folder).

   **macOS / Linux:**
   ```sh
   zip -r my-artwork.zip index.html sketch.js style.css js/
   ```

   **Windows (PowerShell):**
   ```powershell
   Compress-Archive -Path index.html, sketch.js, style.css, js -DestinationPath my-artwork.zip
   ```

2. Go to [objkt.com](https://objkt.com) → **Create** → **Interactive token (ZIP)**.
3. Upload `my-artwork.zip`, fill in the token details, and mint.

---

## Updating p5.js

The bundled file is `js/p5.min.js` (p5.js v1.11.3). To upgrade:

1. Download the latest `p5.min.js` from the [p5.js releases page](https://github.com/processing/p5.js/releases).
2. Replace `js/p5.min.js` with the new file.
3. No other changes needed.

---

## License

[MIT](LICENSE)
