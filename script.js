const deckForm = document.getElementById('deckForm');
const deckContainer = document.getElementById('deckContainer');

let cartes = [];
let cartesChargees = false;

/* ===================== CHARGEMENT CSV ===================== */

document.addEventListener('DOMContentLoaded', chargerCartesCSV);

function chargerCartesCSV() {
    fetch('cartes_CR.csv')
        .then(res => res.text())
        .then(text => {
            cartes = parserCSV(text);
            cartesChargees = true;
            console.log('Cartes chargées :', cartes.length);
        })
        .catch(err => {
            console.error('Erreur CSV', err);
        });
}

function parserCSV(text) {
    const lignes = text.trim().split('\n');
    const headers = lignes.shift().split(',');

    return lignes.map(ligne => {
        const valeurs = ligne.split(',');
        let obj = {};

        headers.forEach((h, i) => {
            let v = valeurs[i]?.trim();

            if (!isNaN(v) && v !== '') v = Number(v);
            obj[h.trim()] = v;
        });

        return obj;
    });
}

/* ===================== SUBMIT ===================== */

deckForm.addEventListener('submit', e => {
    e.preventDefault();

    if (!cartesChargees) {
        alert("Cartes non chargées");
        return;
    }

    const niveauMin = +niveauMinEl.value;
    const winCond   = +winCondEl.value;
    const sorts     = +sortsEl.value;
    const batiments = +batimentsEl.value;
    const troupes   = +troupesEl.value;
    const evolution = +evolutionEl.value;
    const capacite  = +capaciteEl.value;

    const total = winCond + sorts + batiments + troupes;
    if (total !== 8) {
        alert("Les catégories doivent faire exactement 8 cartes");
        return;
    }

    const deck = genererDeck(
        niveauMin, winCond, sorts, batiments, troupes, evolution, capacite
    );

    if (!deck) return;

    afficherDeck(deck);
});

/* ===================== GÉNÉRATION ===================== */

function genererDeck(niveauMin, winCond, sorts, batiments, troupes, evolution, capacite) {

    const dispo = cartes.filter(c => c.niveau >= niveauMin);
    let deck = [];

    function pick(filterFn, n) {
        const pool = dispo.filter(c =>
            filterFn(c) && !deck.includes(c)
        );

        if (pool.length < n) return false;

        for (let i = 0; i < n; i++) {
            const idx = Math.floor(Math.random() * pool.length);
            deck.push(pool[idx]);
            pool.splice(idx, 1);
        }
        return true;
    }

    if (
        !pick(c => c.categorie?.toLowerCase() === 'win condition', winCond) ||
        !pick(c => c.categorie?.toLowerCase() === 'sort', sorts) ||
        !pick(c => c.categorie?.toLowerCase() === 'bâtiment', batiments) ||
        !pick(c => c.categorie?.toLowerCase() === 'troupe', troupes)
    ) {
        alert("Pas assez de cartes pour ces catégories");
        return null;
    }

    if (deck.filter(c => c.evolution === 1).length < evolution) {
        alert("Pas assez d'évolutions possibles");
        return null;
    }

    if (deck.filter(c => c.capacite === 1).length < capacite) {
        alert("Pas assez de capacités possibles");
        return null;
    }

    return deck;
}

/* ===================== AFFICHAGE ===================== */

function afficherDeck(deck) {
    deckContainer.innerHTML = '';

    deck.forEach(c => {
        const div = document.createElement('div');
        div.className = 'carte';

        if (c.evolution === 1) div.classList.add('evo');
        if (c.capacite === 1) div.classList.add('cap');

        div.innerHTML = `
            <div class="icone">${c.icone}</div>
            <div class="nom" style="color:${c.couleur}">${c.nom}</div>
            <div class="niv">lvl.${c.niveau}</div>
        `;

        deckContainer.appendChild(div);
    });
}
