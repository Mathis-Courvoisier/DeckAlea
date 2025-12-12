const deckForm = document.getElementById('deckForm');
const deckContainer = document.getElementById('deckContainer');

// CSV intégré directement dans un tableau d'objets
const cartes = [
  { nom:"Princesse", niveau:16, categorie:"Troupe", evolution:0, capacite:0, icone:"🏹👸", couleur:"#000000" },
  { nom:"Chevalier", niveau:16, categorie:"Troupe", evolution:1, capacite:1, icone:"⚔️🤴", couleur:"#000000" },
  { nom:"Arc X", niveau:15, categorie:"Win condition", evolution:0, capacite:0, icone:"🎯🏹", couleur:"#B173EB" },
  { nom:"Fut de gobelins", niveau:15, categorie:"Win condition", evolution:0, capacite:0, icone:"🛢️👹", couleur:"#B173EB" },
  { nom:"Gardes", niveau:15, categorie:"Troupe", evolution:0, capacite:0, icone:"🛡️🗡️", couleur:"#000000" },
  { nom:"Flèches", niveau:15, categorie:"Sort", evolution:0, capacite:0, icone:"🏹💨", couleur:"#A9EAFE" },
  { nom:"Gang de gobelins", niveau:15, categorie:"Troupe", evolution:0, capacite:0, icone:"👹👹", couleur:"#000000" },
  { nom:"Artificière", niveau:15, categorie:"Troupe", evolution:1, capacite:0, icone:"💣👧", couleur:"#000000" },
  { nom:"Canon", niveau:15, categorie:"Bâtiment", evolution:0, capacite:0, icone:"🎯💣", couleur:"#DF6D14" },
  { nom:"Archers", niveau:15, categorie:"Troupe", evolution:1, capacite:0, icone:"🏹🏹", couleur:"#000000" },
  { nom:"Gobelinstein", niveau:14, categorie:"Troupe", evolution:0, capacite:1, icone:"🤖👹", couleur:"#000000" },
  { nom:"Roi squelette", niveau:14, categorie:"Troupe", evolution:0, capacite:1, icone:"💀👑", couleur:"#000000" },
  { nom:"Cimetière", niveau:14, categorie:"Win condition", evolution:0, capacite:0, icone:"⚰️👻", couleur:"#B173EB" },
  { nom:"Sorcier électrique", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"⚡🧙", couleur:"#000000" },
  { nom:"Sorcière de la nuit", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"🌙🧙‍♀️", couleur:"#000000" },
  { nom:"Sorcier de glace", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"❄️🧙", couleur:"#000000" },
  { nom:"Pêcheur", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"🎣👨‍🦱", couleur:"#000000" },
  { nom:"Voleuse", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"🗡️👧", couleur:"#000000" },
  { nom:"Mineur", niveau:14, categorie:"Win condition", evolution:0, capacite:0, icone:"⛏️🪨", couleur:"#B173EB" },
  { nom:"Bûche", niveau:14, categorie:"Sort", evolution:0, capacite:0, icone:"🌳🪵", couleur:"#A9EAFE" },
  { nom:"Golem", niveau:14, categorie:"Win condition", evolution:0, capacite:0, icone:"🪨💪", couleur:"#B173EB" },
  { nom:"Géant gobelin", niveau:14, categorie:"Win condition", evolution:1, capacite:0, icone:"👹💪", couleur:"#B173EB" },
  { nom:"Foreuse gobeline", niveau:14, categorie:"Win condition", evolution:1, capacite:0, icone:"⛏️👹", couleur:"#B173EB" },
  { nom:"Poison", niveau:14, categorie:"Sort", evolution:0, capacite:0, icone:"☠️🧪", couleur:"#A9EAFE" },
  { nom:"Bébé dragon", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"🐉👶", couleur:"#000000" },
  { nom:"Prince ténébreux", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"🏇🌑", couleur:"#000000" },
  { nom:"Sapeurs", niveau:14, categorie:"Win condition", evolution:0, capacite:0, icone:"💣👷", couleur:"#B173EB" },
  { nom:"Cochons royaux", niveau:14, categorie:"Win condition", evolution:1, capacite:0, icone:"🐖👑", couleur:"#B173EB" },
  { nom:"Géant", niveau:14, categorie:"Win condition", evolution:0, capacite:0, icone:"💪👑", couleur:"#B173EB" },
  { nom:"Valkyrie", niveau:14, categorie:"Troupe", evolution:1, capacite:0, icone:"🪓👸", couleur:"#000000" },
  { nom:"Boule de feu", niveau:14, categorie:"Sort", evolution:0, capacite:0, icone:"🔥💣", couleur:"#A9EAFE" },
  { nom:"Chevaucheur de cochon", niveau:14, categorie:"Win condition", evolution:0, capacite:0, icone:"🐖🏇", couleur:"#B173EB" },
  { nom:"Gobelin explosif", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"💣👹", couleur:"#000000" },
  { nom:"Gobelin à sarbacane", niveau:14, categorie:"Troupe", evolution:1, capacite:0, icone:"🎯👹", couleur:"#000000" },
  { nom:"Séisme", niveau:14, categorie:"Sort", evolution:0, capacite:0, icone:"🌍💥", couleur:"#A9EAFE" },
  { nom:"Golem d’élixir", niveau:14, categorie:"Win condition", evolution:0, capacite:0, icone:"💧🪨", couleur:"#B173EB" },
  { nom:"Esprit de soin", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"💖👻", couleur:"#000000" },
  { nom:"Recrues royales", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"🏰⚔️", couleur:"#000000" },
  { nom:"Géant royal", niveau:14, categorie:"Win condition", evolution:0, capacite:0, icone:"💪👑", couleur:"#B173EB" },
  { nom:"Mortier", niveau:14, categorie:"Win condition", evolution:1, capacite:0, icone:"🎯💣", couleur:"#B173EB" },
  { nom:"Tesla", niveau:14, categorie:"Bâtiment", evolution:1, capacite:0, icone:"⚡🔧", couleur:"#DF6D14" },
  { nom:"Fut à squelettes", niveau:14, categorie:"Win condition", evolution:0, capacite:0, icone:"⚰️💀", couleur:"#B173EB" },
  { nom:"Gargouilles", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"🦇🪨", couleur:"#000000" },
  { nom:"Mega boule de neige", niveau:14, categorie:"Sort", evolution:1, capacite:0, icone:"❄️💥", couleur:"#A9EAFE" },
  { nom:"Chauves-souris", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"🦇👶", couleur:"#000000" },
  { nom:"Squelettes", niveau:14, categorie:"Troupe", evolution:1, capacite:0, icone:"💀💀", couleur:"#000000" },
  { nom:"Esprit électrique", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"⚡👻", couleur:"#000000" },
  { nom:"Esprit de glace", niveau:14, categorie:"Troupe", evolution:1, capacite:0, icone:"❄️👻", couleur:"#000000" },
  { nom:"Esprit de feu", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"🔥👻", couleur:"#000000" },
  { nom:"Chevalier d'or", niveau:13, categorie:"Troupe", evolution:0, capacite:1, icone:"⚔️🥇", couleur:"#000000" },
  { nom:"Fantôme royal", niveau:13, categorie:"Troupe", evolution:1, capacite:0, icone:"👻👑", couleur:"#000000" },
  { nom:"Rage", niveau:13, categorie:"Sort", evolution:0, capacite:0, icone:"😡💨", couleur:"#A9EAFE" },
  { nom:"Miroir", niveau:13, categorie:"Sort", evolution:0, capacite:0, icone:"🪞✨", couleur:"#A9EAFE" },
  { nom:"Trois mousquetaires", niveau:13, categorie:"Troupe", evolution:0, capacite:0, icone:"🔫🔫", couleur:"#000000" },
  { nom:"Roquette", niveau:13, categorie:"Sort", evolution:0, capacite:0, icone:"🚀💥", couleur:"#A9EAFE" },
  { nom:"Sorcier", niveau:13, categorie:"Troupe", evolution:1, capacite:0, icone:"🧙‍♂️✨", couleur:"#000000" },
  { nom:"Tour de l'enfer", niveau:13, categorie:"Bâtiment", evolution:0, capacite:0, icone:"🔥🏰", couleur:"#DF6D14" },
  { nom:"Mousquetaire", niveau:13, categorie:"Troupe", evolution:0, capacite:0, icone:"🏹🧝", couleur:"#000000" },
  { nom:"Cabane de gobelins", niveau:13, categorie:"Bâtiment", evolution:0, capacite:0, icone:"🏠👹", couleur:"#DF6D14" },
  { nom:"Buisson suspect", niveau:13, categorie:"Win condition", evolution:0, capacite:0, icone:"🌿👀", couleur:"#B173EB" },
  { nom:"Barbares", niveau:13, categorie:"Troupe", evolution:1, capacite:0, icone:"🪓🪓", couleur:"#000000" },
  { nom:"Colis royal", niveau:13, categorie:"Sort", evolution:0, capacite:0, icone:"📦👑", couleur:"#A9EAFE" },
  { nom:"Gobelins à lances", niveau:13, categorie:"Troupe", evolution:0, capacite:0, icone:"🗡️👹", couleur:"#000000" },
  { nom:"Bombardier", niveau:13, categorie:"Troupe", evolution:1, capacite:0, icone:"💣🧔", couleur:"#000000" },
  { nom:"Cheffe des voleuses", niveau:12, categorie:"Troupe", evolution:0, capacite:1, icone:"🗡️👸", couleur:"#000000" },
  { nom:"Reine des archers", niveau:12, categorie:"Troupe", evolution:0, capacite:1, icone:"🏹👸", couleur:"#000000" },
  { nom:"Maître mineur", niveau:12, categorie:"Troupe", evolution:0, capacite:1, icone:"⛏️🧙", couleur:"#000000" },
  { nom:"Petit prince", niveau:12, categorie:"Troupe", evolution:0, capacite:1, icone:"🏇👑", couleur:"#000000" },
  { nom:"Méga-chevalier", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"⚔️💪", couleur:"#000000" },
  { nom:"Machine gobeline", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"⚙️👹", couleur:"#000000" },
  { nom:"Mamie Sorcière", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"👵🧙‍♀️", couleur:"#000000" },
  { nom:"P.E.K.K.A", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"🤖⚔️", couleur:"#000000" },
  { nom:"Foudre", niveau:12, categorie:"Sort", evolution:0, capacite:0, icone:"⚡🌩️", couleur:"#A9EAFE" },
  { nom:"Électro dragon", niveau:12, categorie:"Troupe", evolution:1, capacite:0, icone:"⚡🐉", couleur:"#000000" },
  { nom:"Sorcière", niveau:13, categorie:"Troupe", evolution:1, capacite:0, icone:"🧙‍♀️✨", couleur:"#000000" },
  { nom:"Bouliste", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"💣🛡️", couleur:"#000000" },
  { nom:"Bourreau", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"🪓💀", couleur:"#000000" },
  { nom:"Charette à canon", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"🛻💣", couleur:"#000000" },
  { nom:"Chasseur", niveau:12, categorie:"Troupe", evolution:1, capacite:0, icone:"🏹🦌", couleur:"#000000" },
  { nom:"Tornade", niveau:12, categorie:"Sort", evolution:0, capacite:0, icone:"🌪️💨", couleur:"#A9EAFE" },
  { nom:"Armée de squelettes", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"💀⚔️", couleur:"#000000" },
  { nom:"Fut à barbares", niveau:12, categorie:"Sort", evolution:0, capacite:0, icone:"🛢️🪓", couleur:"#A9EAFE" },
  { nom:"Extracteur d’élixir", niveau:12, categorie:"Bâtiment", evolution:0, capacite:0, icone:"💧🏭", couleur:"#DF6D14" },
  { nom:"Cage gobeline", niveau:12, categorie:"Bâtiment", evolution:0, capacite:0, icone:"🏠👹", couleur:"#DF6D14" },
  { nom:"Pierre tombale", niveau:12, categorie:"Bâtiment", evolution:0, capacite:0, icone:"⚰️🪨", couleur:"#DF6D14" },
  { nom:"Barbares d’élite", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"🪓💪", couleur:"#000000" },
  { nom:"Frippons", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"🏃‍♂️💨", couleur:"#000000" },
  { nom:"Zap", niveau:12, categorie:"Sort", evolution:0, capacite:0, icone:"⚡💥", couleur:"#A9EAFE" },
  { nom:"Gobelins", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"👹👹", couleur:"#000000" },
  { nom:"Berserker", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"😡🪓", couleur:"#000000" },
  { nom:"Moine", niveau:11, categorie:"Troupe", evolution:0, capacite:1, icone:"🧘‍♂️🥋", couleur:"#000000" },
  { nom:"Molosse de lave", niveau:11, categorie:"Win condition", evolution:0, capacite:0, icone:"🐕🔥", couleur:"#B173EB" },
  { nom:"Zappy", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"⚡🤖", couleur:"#000000" },
  { nom:"Impératrice spirituelle", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"👑👻", couleur:"#000000" },
  { nom:"Cavabélier", niveau:11, categorie:"Win condition", evolution:0, capacite:0, icone:"🐴🛡️", couleur:"#B173EB" },
  { nom:"Bûcheron", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"🪓🪵", couleur:"#000000" },
  { nom:"Archer magique", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"🏹✨", couleur:"#000000" },
  { nom:"Phénix", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"🔥🦅", couleur:"#000000" },
  { nom:"Dragon de l'enfer", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"🔥🐉", couleur:"#000000" },
  { nom:"Électro géant", niveau:11, categorie:"Win condition", evolution:0, capacite:0, icone:"⚡💪", couleur:"#B173EB" },
  { nom:"Géant squelette", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"💀💪", couleur:"#000000" },
  { nom:"Ballon", niveau:11, categorie:"Win condition", evolution:0, capacite:0, icone:"🎈💣", couleur:"#B173EB" },
  { nom:"Prince", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"🏇👑", couleur:"#000000" },
  { nom:"Gel", niveau:11, categorie:"Sort", evolution:0, capacite:0, icone:"❄️💨", couleur:"#A9EAFE" },
  { nom:"Géante runique", niveau:11, categorie:"Win condition", evolution:0, capacite:0, icone:"💪🔮", couleur:"#B173EB" },
  { nom:"Clone", niveau:11, categorie:"Sort", evolution:0, capacite:0, icone:"👥✨", couleur:"#A9EAFE" },
  { nom:"Néant", niveau:11, categorie:"Sort", evolution:0, capacite:0, icone:"🌌💀", couleur:"#A9EAFE" },
  { nom:"Malédiction gobeline", niveau:11, categorie:"Sort", evolution:0, capacite:0, icone:"👹☠️", couleur:"#A9EAFE" },
  { nom:"Cabane de barbares", niveau:11, categorie:"Bâtiment", evolution:0, capacite:0, icone:"🏠🪓", couleur:"#DF6D14" },
  { nom:"Machine volante", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"🛩️⚙️", couleur:"#000000" },
  { nom:"Tour à bombe", niveau:11, categorie:"Bâtiment", evolution:0, capacite:0, icone:"🏰💣", couleur:"#DF6D14" },
  { nom:"Électrocuteurs", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"⚡🗡️", couleur:"#000000" },
  { nom:"Bélier de combat", niveau:11, categorie:"Win condition", evolution:0, capacite:0, icone:"🐏⚔️", couleur:"#B173EB" },
  { nom:"Fournaise", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"🔥🏭", couleur:"#000000" },
  { nom:"Guérisseuse armée", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"💖⚔️", couleur:"#000000" },
  { nom:"Mini P.E.K.K.A", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"🤖🪓", couleur:"#000000" },
  { nom:"Méga gargouille", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"🦇💪", couleur:"#000000" },
  { nom:"Golem de glace", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"❄️🪨", couleur:"#000000" },
  { nom:"Horde de gargouilles", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"🦇🦇", couleur:"#000000" },
  { nom:"Dragons squelettes", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"🐉💀", couleur:"#000000" },
  { nom:"Ronces", niveau:11, categorie:"Sort", evolution:0, capacite:0, icone:"🌿🗡️", couleur:"#A9EAFE" }
];


// Écoute du formulaire
deckForm.addEventListener('submit', e => {
    e.preventDefault();

    const niveauMin = parseInt(document.getElementById('niveauMin').value);
    const winCond = parseInt(document.getElementById('winCond').value);
    const sorts = parseInt(document.getElementById('sorts').value);
    const batiments = parseInt(document.getElementById('batiments').value);
    const evolution = parseInt(document.getElementById('evolution').value);
    const capacite = parseInt(document.getElementById('capacite').value);

    const totalDemandes = winCond + sorts + batiments + evolution + capacite;

    if (totalDemandes > 8) {
        const surplus = totalDemandes - 8;
        alert("Trop de cartes demandées : " + surplus + " en trop.");
        return;
    }

    const deck = genererDeck(niveauMin, winCond, sorts, batiments, evolution, capacite);
    afficherDeck(deck);
});


// Génération du deck
function genererDeck(niveauMin, winCond, sorts, batiments, evolution, capacite) {
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


