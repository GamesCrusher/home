/* ==========================================================================
   Paradox Exe Games — game data + rendering
   Edit the GAMES array below to swap in your real titles, art, and links.
   ========================================================================== */

const GAMES = [
  {
    title: "NULL POINTER",
    glyph: "NP",
    genre: "Puzzle-platformer",
    engine: "Unity",
    status: "In development",
    accent: "#2be8ff",
    desc: "Every jump you don't take still happens somewhere. Reference it wrong and find out where.",
    cta: "Wishlist",
    link: "#"
  },
  {
    title: "ECHO LOOP",
    glyph: "EL",
    genre: "Top-down action",
    engine: "Unity",
    status: "Prototype",
    accent: "#ff2e88",
    desc: "Record your last ten seconds, then fight alongside them. Time is your only teammate.",
    cta: "View prototype",
    link: "#"
  },
  {
    title: "BYTE ROT",
    glyph: "BR",
    genre: "Survival roguelike",
    engine: "Unity",
    status: "In development",
    accent: "#ffce3d",
    desc: "The save file is corrupting in real time. Finish the run before the world forgets itself.",
    cta: "Wishlist",
    link: "#"
  },
  {
    title: "GHOST PROTOCOL",
    glyph: "GP",
    genre: "Stealth",
    engine: "Unity",
    status: "Prototype",
    accent: "#2be8ff",
    desc: "You're the bug in someone else's system. Sneak past the patches before they ship.",
    cta: "View prototype",
    link: "#"
  },
  {
    title: "STACK OVERFLOW",
    glyph: "SO",
    genre: "Physics party game",
    engine: "Unity",
    status: "Prototype",
    accent: "#ff2e88",
    desc: "Pile four players onto one unstable tower. First to overflow the stack loses.",
    cta: "View prototype",
    link: "#"
  },
  {
    title: "GLITCH.EXE",
    glyph: "GX",
    genre: "Metroidvania",
    engine: "Unity",
    status: "Coming soon",
    accent: "#ffce3d",
    desc: "A world that only renders where you've already been. Explore carefully — or don't.",
    cta: "Coming soon",
    link: "#"
  }
];

function renderGames() {
  const grid = document.getElementById("games-grid");
  const count = document.getElementById("cart-count");
  if (!grid) return;

  grid.innerHTML = GAMES.map((game) => `
    <article class="game-card" style="--card-accent: ${game.accent}">
      <div class="card-art">
        <span class="status-badge">${game.status}</span>
        <span class="card-glyph">${game.glyph}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${game.title}</h3>
        <p class="card-desc">${game.desc}</p>
        <ul class="card-specs">
          <li>GENRE <span>${game.genre}</span></li>
          <li>ENGINE <span>${game.engine}</span></li>
        </ul>
        <a class="card-cta" href="${game.link}">${game.cta}</a>
      </div>
    </article>
  `).join("");

  if (count) {
    count.textContent = `// ${GAMES.length} CARTRIDGES LOADED`;
  }

  revealCards();
}

function revealCards() {
  const cards = document.querySelectorAll(".game-card");
  if (!("IntersectionObserver" in window)) {
    cards.forEach((c) => c.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach((card, i) => {
    card.style.transitionDelay = `${Math.min(i * 60, 300)}ms`;
    observer.observe(card);
  });
}

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderGames();
  setYear();
});
