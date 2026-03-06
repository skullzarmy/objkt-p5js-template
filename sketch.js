// ─────────────────────────────────────────────────────────────────────────────
//  objkt.com  ·  p5.js Boilerplate Template
//  https://github.com/skullzarmy/objkt-p5js-template
//
//  Created by skllzrmy.tez
//  Released under the Unlicense — public domain, no restrictions.
//  If you find this useful, donations appreciated:
//    tz1Qi77tcJn9foeHHP1QHj6UX1m1vLVLMbuY  or  skllzrmy.tez
//
//  HOW TO USE
//  1. Put your artwork logic inside setup() and draw() below.
//  2. Add any helper functions or classes after draw().
//  3. When finished, ZIP the whole project folder and mint on objkt.com.
//     The ZIP must contain index.html at its top level.
//
//  IMPORTANT
//  • Do NOT load any external URLs (fonts, images, scripts, etc.).
//    objkt sandboxes your token — all external requests are blocked.
//  • Reference every asset with a relative path  (e.g. "assets/img.png",
//    not "/assets/img.png" or "https://…").
//  • p5.js is already bundled in js/p5.min.js — no CDN link needed.
// ─────────────────────────────────────────────────────────────────────────────

// ── Optional: global variables ───────────────────────────────────────────────
// Declare variables here that you want accessible in both setup() and draw().
// Example:
//   let angle = 0;
//   let cols, rows;

// ─────────────────────────────────────────────────────────────────────────────
function setup() {
  // createCanvas(width, height) — use windowWidth / windowHeight to fill the
  // viewport, or supply fixed pixel dimensions (e.g. createCanvas(800, 800)).
  createCanvas(windowWidth, windowHeight);

  // ── Your one-time initialisation code goes here ───────────────────────────
  // Example: set a frame rate, choose a color mode, generate initial data, etc.
  // frameRate(30);
  // colorMode(HSB, 360, 100, 100);
  // background(0);
}

// ─────────────────────────────────────────────────────────────────────────────
function draw() {
  // draw() is called repeatedly (default: 60 fps).
  // ── Your per-frame drawing code goes here ────────────────────────────────

  // ----- DEMO: replace everything below with your own artwork ---------------
  background(20);

  // Pulsing circle in the center
  let pulse = sin(frameCount * 0.05) * 40;
  let size  = min(width, height) * 0.35 + pulse;

  noStroke();
  fill(180, 100, 220, 160);
  ellipse(width / 2, height / 2, size, size);

  // Rotating ring of dots
  let numDots  = 12;
  let ringRadius = size * 0.72;
  fill(255, 200, 80, 200);
  for (let i = 0; i < numDots; i++) {
    let a = TWO_PI / numDots * i + frameCount * 0.02;
    let x = width  / 2 + cos(a) * ringRadius;
    let y = height / 2 + sin(a) * ringRadius;
    ellipse(x, y, 10, 10);
  }
  // --------------------------------------------------------------------------
}

// ─────────────────────────────────────────────────────────────────────────────
// windowResized() keeps the canvas full-screen when the viewer resizes.
// Remove or modify if you want a fixed-size canvas.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// ─────────────────────────────────────────────────────────────────────────────
// Add your own helper functions and classes below.
// ─────────────────────────────────────────────────────────────────────────────
