const deckForm = document.getElementById('deckForm');
const deckContainer = document.getElementById('deckContainer');
const submitBtn = deckForm.querySelector('button[type="submit"]');

let cartes = [];
submitBtn.disabled = true;

/* =======================
   CHARGEMENT CSV
======================= */

fetch('cartes_CR.csv')
  .then(res => res.text())
  .then(text => {
    cartes = parseCSV(text);
    submitBtn.disabled = false;
  })
  .catch(err => {
    console.error('Erreur CSV', err);
    alert("Erreur chargement données");
  });

function parseCSV(text) {
  const lignes = text.trim().split('\n');
  const headers = lignes.shift().split(',');

  return lignes.map(ligne => {
    const valeurs = ligne.split(',');
    let obj = {};

    headers.forEach((h, i) => {
      let v = valeurs[i]?.trim();
      if (v === '0' || v === '1') v = Number(v);
      else if (!isNaN(v)) v = Number(v);
      obj[h.trim()] = v;
    });

    return obj;
  });
}

/* =======================
   SUBMIT
======================= */

deckForm.addEventListener('submit', e => {
  e.preventDefault();

  if (cartes.length === 0) {
    alert("Données non chargées");
    return;
  }

  const niveauMin = +niveauMinInput.value;
  const winCond   = +winCondInput.value;
  const sorts     = +sortsInput.value;
  const batiments = +batimentsInput.value;
  const troupes   = +troupesInput.value;
  const evolution = +evolutionInput.value;
  const capacite  = +capaciteInput.value;

  const total = winCond + sorts + batiments + troupes;
  if (total !== 8) {
    alert("Le deck doit contenir exactement 8 cartes");
    return;
  }

  const deck = genererDeck(
    niveauMin,
    winCond,
    sorts,
    batiments,
    troupes,
    evolution,
    capacite
  );

  if (!deck) {
    alert("Combinaison impossible avec ces contraintes");
    return;
  }

  afficherDeck(deck);
});

/* =======================
   GÉNÉRATION
======================= */

function genererDeck(niveauMin, winCond, sorts, batiments, troupes, evoMin, capMin) {
  let deck = [];
  let dispo = cartes.filter(c => c.niveau >= niveauMin);

  function tirer(filtre, n) {
    let pool = dispo.filter(filtre).filter(c => !deck.includes(c));
    if (pool.length < n) return false;

    for (let i = 0; i < n; i++) {
      const idx = Math.floor(Math.random() * pool.length);
      deck.push(pool[idx]);
      pool.splice(idx, 1);
    }
    return true;
  }

  if (!tirer(c => c.categorie === 'win condition', winCond)) return null;
  if (!tirer(c => c.categorie === 'sort', sorts)) return null;
  if (!tirer(c => c.categorie === 'bâtiment', batiments)) return null;
  if (!tirer(c => c.categorie === 'troupe', troupes)) return null;

  const evoCount = deck.filter(c => c.evolution === 1).length;
  const capCount = deck.filter(c => c.capacite === 1).length;

  if (evoCount < evoMin) {
    if (!tirer(c => c.evolution === 1, evoMin - evoCount)) return null;
  }

  if (capCount < capMin) {
    if (!tirer(c => c.capacite === 1, capMin - capCount)) return null;
  }

  return deck.slice(0, 8);
}

/* =======================
   AFFICHAGE
======================= */

function afficherDeck(deck) {
  deckContainer.innerHTML = '';

  deck.forEach(c => {
    const div = document.createElement('div');
    div.className = 'carte';
    if (c.evolution) div.classList.add('evo');
    if (c.capacite) div.classList.add('cap');

    div.innerHTML = `
      <div class="icone">${c.icone}</div>
      <div class="nom" style="color:${c.couleur}">${c.nom}</div>
      <div class="niv">lvl.${c.niveau}</div>
    `;

    deckContainer.appendChild(div);
  });
}

/* =======================
   COPIE DECK
======================= */

const boutonCopier = document.querySelector('.btn.btn-outline-warning');

boutonCopier.addEventListener('click', () => {
  const cartesDeck = Array.from(deckContainer.children).map(div => {
    const nom = div.querySelector('.nom').textContent;
    return cartes.find(c => c.nom === nom);
  });

  if (cartesDeck.length !== 8) {
    alert("Aucun deck valide");
    return;
  }

  const ids = cartesDeck.map(c => c.identifiant).join(';');
  const lien = `https://link.clashroyale.com/fr?clashroyale://copyDeck?deck=${ids}&slots=0;0;0;0;0;0;0;0&tt=159000000&l=Royals&id=URGQJJGG`;
  window.open(lien, '_blank');
});
