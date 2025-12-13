const deckForm = document.getElementById('deckForm');
const deckContainer = document.getElementById('deckContainer');

let cartes = [];

fetch('cartes_CR.csv')
  .then(res => res.text())
  .then(text => {
    cartes = parseCSV(text);
  })
  .catch(err => console.error('Erreur CSV', err));

function parseCSV(text) {
  const lignes = text.trim().split('\n');
  const headers = lignes.shift().split(',');

  return lignes.map(ligne => {
    const valeurs = ligne.split(',');

    let obj = {};
    headers.forEach((h, i) => {
      let v = valeurs[i];

      if (!isNaN(v)) v = Number(v);          // nombres
      if (v === '0' || v === '1') v = Number(v);

      obj[h.trim()] = v;
    });

    return obj;
  });
}



// Écoute du formulaire
deckForm.addEventListener('submit', e => {
    e.preventDefault();

    const niveauMin = parseInt(document.getElementById('niveauMin').value);
    const winCond = parseInt(document.getElementById('winCond').value);
    const sorts = parseInt(document.getElementById('sorts').value);
    const batiments = parseInt(document.getElementById('batiments').value);
    const troupes = parseInt(document.getElementById('troupes').value);
    const evolution = parseInt(document.getElementById('evolution').value);
    const capacite = parseInt(document.getElementById('capacite').value);

    const totalDemandes = winCond + sorts + batiments + troupes + evolution + capacite;

    if (totalDemandes > 8) {
        const surplus = totalDemandes - 8;
        alert("Trop de cartes demandées : " + surplus + " en trop.");
        return;
    }

    const deck = genererDeck(niveauMin, winCond, sorts, batiments, troupes, evolution, capacite);
    afficherDeck(deck);
});


// Génération du deck
function genererDeck(niveauMin, winCond, sorts, batiments, troupes, evolution, capacite) {
    let deck = [];
    let dispo = cartes.filter(c => c.niveau >= niveauMin);

    function ajouterCategorie(categorie, nombre) {
        const filt = dispo.filter(c => c.categorie.toLowerCase() === categorie && !deck.includes(c));
        for(let i=0; i<nombre; i++) {
            if(filt.length === 0) break;
            const idx = Math.floor(Math.random() * filt.length);
            deck.push(filt[idx]);
            filt.splice(idx, 1);
        }
    }

    function ajouterSpec(fonction, nombre) {
        const filt = dispo.filter(c => fonction(c) && !deck.includes(c));
        for(let i=0; i<nombre; i++) {
            if(filt.length === 0) break;
            const idx = Math.floor(Math.random() * filt.length);
            deck.push(filt[idx]);
            filt.splice(idx, 1);
        }
    }

    ajouterCategorie('win condition', winCond);
    ajouterCategorie('sort', sorts);
    ajouterCategorie('bâtiment', batiments);
    ajouterCategorie('troupe', troupes);
    ajouterSpec(c => c.evolution === 1, evolution);
    ajouterSpec(c => c.capacite === 1, capacite);

    // Compléter le deck aléatoirement jusqu'à 8 cartes
    let restant = dispo.filter(c => !deck.includes(c));
    while(deck.length < 8 && restant.length > 0) {
        const idx = Math.floor(Math.random() * restant.length);
        deck.push(restant[idx]);
        restant.splice(idx, 1);
    }

    return deck;
}

// Affichage du deck
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

/////////////////// copier deck ////////////////////////////////////

// Sélection du bouton
const boutonCopier = document.querySelector('.btn.btn-outline-warning');

// Fonction pour générer le lien de partage
function genererLien(deck) {
    if (deck.length !== 8) return null;

    const ids = deck.map(c => c.identifiant).join(';');

    return `https://link.clashroyale.com/fr?clashroyale://copyDeck?deck=${ids}&slots=0;0;0;0;0;0;0;0&tt=159000000&l=Royals&id=URGQJJGG`;
}

// Événement sur le bouton
boutonCopier.addEventListener('click', () => {
    if (!deckContainer.innerHTML) {
        alert("Générez d'abord un deck !");
        return;
    }

    // On récupère les cartes affichées dans le deck
    const deck = Array.from(deckContainer.children).map(div => {
        const nom = div.querySelector('.nom').textContent;
        return cartes.find(c => c.nom === nom);
    });

    const lien = genererLien(deck);
    if (lien) window.open(lien, '_blank');
});
