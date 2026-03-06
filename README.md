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

### Step 1 — Create your ZIP file

You need to compress the project folder into a single **ZIP** file to upload to objkt.  
Choose the instructions for your operating system below.

> ⚠️ **Critical rule:** `index.html` must be at the **top level** of the ZIP — not inside a sub-folder.  
> If you zip the whole folder _as a folder_, objkt won't find `index.html` and the token will not work.  
> The steps below show you exactly how to avoid this.

---

#### 🪟 Windows — using File Explorer (no software needed)

1. **Open the project folder** in File Explorer (the folder that contains `index.html`).
2. **Select all four items** inside the folder:
   - `index.html`
   - `sketch.js`
   - `style.css`
   - `js` _(this is a folder)_

   You can select them all at once by pressing **Ctrl + A**.

3. **Right-click** on any of the selected items.
4. In the menu that appears, choose **"Compress to ZIP file"** (Windows 11)  
   — or — **"Send to" → "Compressed (zipped) folder"** (Windows 10).
5. Windows will create a new file called something like `index.zip` or `Compressed.zip` right inside the folder.
6. **Rename it** to something meaningful, e.g. `my-artwork.zip`:
   - Click once on the new ZIP file to select it.
   - Press **F2** (or right-click → **Rename**).
   - Type `my-artwork.zip` and press **Enter**.

✅ Done! Your ZIP is ready to upload.

---

#### 🍎 macOS — using Finder (no software needed)

1. **Open the project folder** in Finder (the folder that contains `index.html`).
2. **Select all four items** inside the folder:
   - `index.html`
   - `sketch.js`
   - `style.css`
   - `js` _(this is a folder)_

   You can select them all at once by pressing **⌘ Command + A**.

3. **Right-click** (or Control-click) on any of the selected items.
4. In the menu that appears, choose **"Compress 4 Items"**.
5. macOS will create a file called `Archive.zip` in the same folder.
6. **Rename it** to something meaningful, e.g. `my-artwork.zip`:
   - Click once on `Archive.zip` to select it, then press **Return**.
   - Type `my-artwork.zip` and press **Return** again.

✅ Done! Your ZIP is ready to upload.

---

#### 💻 Command line (advanced — optional)

If you are comfortable with a terminal, you can zip the files in one command instead.

**macOS / Linux:**
```sh
zip -r my-artwork.zip index.html sketch.js style.css js/
```

**Windows (PowerShell):**
```powershell
Compress-Archive -Path index.html, sketch.js, style.css, js -DestinationPath my-artwork.zip
```

---

### Step 2 — Upload and mint

1. Go to [objkt.com](https://objkt.com) and sign in to your wallet.
2. Click **Create** in the top navigation bar.
3. Select **Interactive token (ZIP)**.
4. Click the upload area and select your `my-artwork.zip` file.
5. Fill in the token name, description, edition count, royalties, and any other details.
6. Click **Mint** and confirm the transaction in your wallet.

---

## Updating p5.js

The bundled file is `js/p5.min.js` (p5.js v1.11.3). To upgrade:

1. Download the latest `p5.min.js` from the [p5.js releases page](https://github.com/processing/p5.js/releases).
2. Replace `js/p5.min.js` with the new file.
3. No other changes needed.

---

## License

[MIT](LICENSE)
