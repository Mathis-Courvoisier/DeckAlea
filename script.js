const deckForm = document.getElementById('deckForm');
const deckContainer = document.getElementById('deckContainer');

// CSV intégré directement dans un tableau d'objets
const cartes = [
  { nom:"Boule de feu", niveau:16, categorie:"Sort", evolution:0, capacite:0, icone:"🔥💣", couleur:"#A9EAFE", identifiant:28000000, elixir:4 },
  { nom:"Chevalier", niveau:16, categorie:"Troupe", evolution:1, capacite:1, icone:"⚔️🤴", couleur:"#000000", identifiant:26000000, elixir:3 },
  { nom:"Esprit de glace", niveau:16, categorie:"Troupe", evolution:1, capacite:0, icone:"❄️👻", couleur:"#000000", identifiant:26000030, elixir:1 },
  { nom:"Gang de gobelins", niveau:16, categorie:"Troupe", evolution:0, capacite:0, icone:"👹👹", couleur:"#000000", identifiant:26000041, elixir:3 },
  { nom:"Princesse", niveau:16, categorie:"Troupe", evolution:0, capacite:0, icone:"🏹👸", couleur:"#000000", identifiant:26000026, elixir:3 },
  { nom:"Fut de gobelins", niveau:16, categorie:"Win condition", evolution:0, capacite:0, icone:"🛢️👹", couleur:"#B173EB", identifiant:27000001, elixir:3 },
  { nom:"Canon", niveau:15, categorie:"Bâtiment", evolution:0, capacite:0, icone:"🎯💣", couleur:"#DF6D14", identifiant:27000000, elixir:3 },
  { nom:"Flèches", niveau:15, categorie:"Sort", evolution:0, capacite:0, icone:"🏹💨", couleur:"#A9EAFE", identifiant:28000001, elixir:3 },
  { nom:"Bûche", niveau:15, categorie:"Sort", evolution:0, capacite:0, icone:"🌳🪵", couleur:"#A9EAFE", identifiant:28000011, elixir:2 },
  { nom:"Archers", niveau:15, categorie:"Troupe", evolution:1, capacite:0, icone:"🏹🏹", couleur:"#000000", identifiant:26000001, elixir:3 },
  { nom:"Artificière", niveau:15, categorie:"Troupe", evolution:1, capacite:0, icone:"💣👧", couleur:"#000000", identifiant:26000064, elixir:3 },
  { nom:"Gobelin à sarbacane", niveau:15, categorie:"Troupe", evolution:1, capacite:0, icone:"🎯👹", couleur:"#000000", identifiant:26000040, elixir:3 },
  { nom:"Gardes", niveau:15, categorie:"Troupe", evolution:0, capacite:0, icone:"🛡️🗡️", couleur:"#000000", identifiant:26000025, elixir:3 },
  { nom:"Voleuse", niveau:15, categorie:"Troupe", evolution:0, capacite:0, icone:"🗡️👧", couleur:"#000000", identifiant:26000046, elixir:3 },
  { nom:"Arc X", niveau:15, categorie:"Win condition", evolution:0, capacite:0, icone:"🎯🏹", couleur:"#B173EB", identifiant:27000008, elixir:6 },
  { nom:"Sapeurs", niveau:15, categorie:"Win condition", evolution:0, capacite:0, icone:"💣👷", couleur:"#B173EB", identifiant:26000058, elixir:2 },
  { nom:"Tesla", niveau:14, categorie:"Bâtiment", evolution:1, capacite:0, icone:"⚡🔧", couleur:"#DF6D14", identifiant:27000006, elixir:4 },
  { nom:"Fut à barbares", niveau:14, categorie:"Sort", evolution:0, capacite:1, icone:"🛢️🪓", couleur:"#A9EAFE", identifiant:27000005, elixir:2 },
  { nom:"Mega boule de neige", niveau:14, categorie:"Sort", evolution:1, capacite:0, icone:"❄️💥", couleur:"#A9EAFE", identifiant:28000017, elixir:2 },
  { nom:"Poison", niveau:14, categorie:"Sort", evolution:0, capacite:0, icone:"☠️🧪", couleur:"#A9EAFE", identifiant:28000009, elixir:4 },
  { nom:"Séisme", niveau:14, categorie:"Sort", evolution:0, capacite:0, icone:"🌍💥", couleur:"#A9EAFE", identifiant:28000014, elixir:3 },
  { nom:"Tornade", niveau:14, categorie:"Sort", evolution:0, capacite:0, icone:"🌪️💨", couleur:"#A9EAFE", identifiant:28000012, elixir:3 },
  { nom:"Foudre", niveau:14, categorie:"Sort", evolution:0, capacite:0, icone:"⚡🌩️", couleur:"#A9EAFE", identifiant:28000007, elixir:6 },
  { nom:"Gobelinstein", niveau:14, categorie:"Troupe", evolution:0, capacite:1, icone:"🤖👹", couleur:"#000000", identifiant:26000099, elixir:5 },
  { nom:"Roi squelette", niveau:14, categorie:"Troupe", evolution:0, capacite:1, icone:"💀👑", couleur:"#000000", identifiant:26000069, elixir:4 },
  { nom:"Gobelins", niveau:14, categorie:"Troupe", evolution:0, capacite:1, icone:"👹👹", couleur:"#000000", identifiant:26000002, elixir:2 },
  { nom:"Méga gargouille", niveau:14, categorie:"Troupe", evolution:0, capacite:1, icone:"🦇💪", couleur:"#000000", identifiant:26000039, elixir:3 },
  { nom:"Fournaise", niveau:14, categorie:"Troupe", evolution:1, capacite:0, icone:"🔥🏭", couleur:"#000000", identifiant:27000010, elixir:4 },
  { nom:"Sorcière", niveau:14, categorie:"Troupe", evolution:1, capacite:0, icone:"🧙‍♀️✨", couleur:"#000000", identifiant:26000007, elixir:5 },
  { nom:"Squelettes", niveau:14, categorie:"Troupe", evolution:1, capacite:0, icone:"💀💀", couleur:"#000000", identifiant:26000010, elixir:1 },
  { nom:"Valkyrie", niveau:15, categorie:"Troupe", evolution:1, capacite:0, icone:"🪓👸", couleur:"#000000", identifiant:26000011, elixir:4 },
  { nom:"P.E.K.K.A", niveau:14, categorie:"Troupe", evolution:1, capacite:0, icone:"🤖⚔️", couleur:"#000000", identifiant:26000004, elixir:7 },
  { nom:"Bébé dragon", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"🐉👶", couleur:"#000000", identifiant:26000015, elixir:4 },
  { nom:"Chauves-souris", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"🦇👶", couleur:"#000000", identifiant:26000049, elixir:2 },
  { nom:"Esprit de feu", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"🔥👻", couleur:"#000000", identifiant:26000031, elixir:1 },
  { nom:"Esprit de soin", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"💖👻", couleur:"#000000", identifiant:26000068, elixir:1 },
  { nom:"Esprit électrique", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"⚡👻", couleur:"#000000", identifiant:26000084, elixir:1 },
  { nom:"Gargouilles", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"🦇🪨", couleur:"#000000", identifiant:26000005, elixir:3 },
  { nom:"Gobelin explosif", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"💣👹", couleur:"#000000", identifiant:26000095, elixir:4 },
  { nom:"Pêcheur", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"🎣👨‍🦱", couleur:"#000000", identifiant:26000061, elixir:3 },
  { nom:"Prince ténébreux", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"🏇🌑", couleur:"#000000", identifiant:26000027, elixir:4 },
  { nom:"Recrues royales", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"🏰⚔️", couleur:"#000000", identifiant:26000047, elixir:7 },
  { nom:"Sorcier de glace", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"❄️🧙", couleur:"#000000", identifiant:26000023, elixir:3 },
  { nom:"Sorcier électrique", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"⚡🧙", couleur:"#000000", identifiant:26000042, elixir:4 },
  { nom:"Sorcière de la nuit", niveau:14, categorie:"Troupe", evolution:0, capacite:0, icone:"🌙🧙‍♀️", couleur:"#000000", identifiant:26000048, elixir:4 },
  { nom:"Cochons royaux", niveau:14, categorie:"Win condition", evolution:1, capacite:0, icone:"🐖👑", couleur:"#B173EB", identifiant:26000059, elixir:5 },
  { nom:"Foreuse gobeline", niveau:14, categorie:"Win condition", evolution:1, capacite:0, icone:"⛏️👹", couleur:"#B173EB", identifiant:26000096, elixir:4 },
  { nom:"Fut à squelettes", niveau:14, categorie:"Win condition", evolution:1, capacite:0, icone:"⚰️💀", couleur:"#B173EB", identifiant:27000009, elixir:3 },
  { nom:"Géant gobelin", niveau:14, categorie:"Win condition", evolution:1, capacite:0, icone:"👹💪", couleur:"#B173EB", identifiant:26000060, elixir:6 },
  { nom:"Mortier", niveau:14, categorie:"Win condition", evolution:1, capacite:0, icone:"🎯💣", couleur:"#B173EB", identifiant:27000002, elixir:4 },
  { nom:"Chevaucheur de cochon", niveau:14, categorie:"Win condition", evolution:0, capacite:0, icone:"🐖🏇", couleur:"#B173EB", identifiant:26000021, elixir:4 },
  { nom:"Cimetière", niveau:14, categorie:"Win condition", evolution:0, capacite:0, icone:"⚰️👻", couleur:"#B173EB", identifiant:28000010, elixir:5 },
  { nom:"Géant", niveau:14, categorie:"Win condition", evolution:0, capacite:0, icone:"💪👑", couleur:"#B173EB", identifiant:26000003, elixir:5 },
  { nom:"Géant royal", niveau:14, categorie:"Win condition", evolution:0, capacite:0, icone:"💪👑", couleur:"#B173EB", identifiant:26000024, elixir:6 },
  { nom:"Golem", niveau:14, categorie:"Win condition", evolution:0, capacite:0, icone:"🪨💪", couleur:"#B173EB", identifiant:26000009, elixir:8 },
  { nom:"Golem d’élixir", niveau:14, categorie:"Win condition", evolution:0, capacite:0, icone:"💧🪨", couleur:"#B173EB", identifiant:26000067, elixir:3 },
  { nom:"Mineur", niveau:14, categorie:"Win condition", evolution:0, capacite:0, icone:"⛏️🪨", couleur:"#B173EB", identifiant:26000032, elixir:3 },
  { nom:"Bélier de combat", niveau:14, categorie:"Win condition", evolution:0, capacite:0, icone:"🐏⚔️", couleur:"#B173EB", identifiant:26000036, elixir:4 },
  { nom:"Cabane de gobelins", niveau:13, categorie:"Bâtiment", evolution:0, capacite:0, icone:"🏠👹", couleur:"#DF6D14", identifiant:27000001, elixir:4 },
  { nom:"Tour de l'enfer", niveau:13, categorie:"Bâtiment", evolution:0, capacite:0, icone:"🔥🏰", couleur:"#DF6D14", identifiant:27000003, elixir:5 },
  { nom:"Colis royal", niveau:13, categorie:"Sort", evolution:0, capacite:0, icone:"📦👑", couleur:"#A9EAFE", identifiant:28000018, elixir:3 },
  { nom:"Miroir", niveau:13, categorie:"Sort", evolution:0, capacite:0, icone:"🪞✨", couleur:"#A9EAFE", identifiant:28000006, elixir:"?" },
  { nom:"Rage", niveau:13, categorie:"Sort", evolution:0, capacite:0, icone:"😡💨", couleur:"#A9EAFE", identifiant:28000002, elixir:2 },
  { nom:"Roquette", niveau:13, categorie:"Sort", evolution:0, capacite:0, icone:"🚀💥", couleur:"#A9EAFE", identifiant:28000003, elixir:6 },
  { nom:"Chevalier d'or", niveau:13, categorie:"Troupe", evolution:0, capacite:1, icone:"⚔️🥇", couleur:"#000000", identifiant:26000074, elixir:4 },
  { nom:"Mini P.E.K.K.A", niveau:13, categorie:"Troupe", evolution:0, capacite:1, icone:"🤖🪓", couleur:"#000000", identifiant:26000018, elixir:4 },
  { nom:"Cheffe des voleuses", niveau:13, categorie:"Troupe", evolution:0, capacite:1, icone:"🗡️👸", couleur:"#000000", identifiant:26000103, elixir:6 },
  { nom:"Archer magique", niveau:13, categorie:"Troupe", evolution:0, capacite:1, icone:"🏹✨", couleur:"#000000", identifiant:26000062, elixir:4 },
  { nom:"Barbares", niveau:13, categorie:"Troupe", evolution:1, capacite:0, icone:"🪓🪓", couleur:"#000000", identifiant:26000008, elixir:5 },
  { nom:"Bombardier", niveau:13, categorie:"Troupe", evolution:1, capacite:0, icone:"💣🧔", couleur:"#000000", identifiant:26000013, elixir:2 },
  { nom:"Fantôme royal", niveau:13, categorie:"Troupe", evolution:1, capacite:0, icone:"👻👑", couleur:"#000000", identifiant:26000050, elixir:3 },
  { nom:"Mousquetaire", niveau:13, categorie:"Troupe", evolution:1, capacite:0, icone:"🏹🧝", couleur:"#000000", identifiant:26000014, elixir:4 },
  { nom:"Sorcier", niveau:13, categorie:"Troupe", evolution:1, capacite:0, icone:"🧙‍♂️✨", couleur:"#000000", identifiant:26000017, elixir:5 },
  { nom:"Gobelins à lances", niveau:13, categorie:"Troupe", evolution:0, capacite:0, icone:"🗡️👹", couleur:"#000000", identifiant:26000019, elixir:2 },
  { nom:"Trois mousquetaires", niveau:13, categorie:"Troupe", evolution:0, capacite:0, icone:"🔫🔫", couleur:"#000000", identifiant:26000028, elixir:9 },
  { nom:"Buisson suspect", niveau:13, categorie:"Win condition", evolution:0, capacite:0, icone:"🌿👀", couleur:"#B173EB", identifiant:26000097, elixir:2 },
  { nom:"Cage gobeline", niveau:12, categorie:"Bâtiment", evolution:1, capacite:0, icone:"🏠👹", couleur:"#DF6D14", identifiant:27000012, elixir:4 },
  { nom:"Extracteur d’élixir", niveau:12, categorie:"Bâtiment", evolution:0, capacite:0, icone:"💧🏭", couleur:"#DF6D14", identifiant:27000007, elixir:6 },
  { nom:"Pierre tombale", niveau:12, categorie:"Bâtiment", evolution:0, capacite:0, icone:"⚰️🪨", couleur:"#DF6D14", identifiant:27000009, elixir:3 },
  { nom:"Zap", niveau:12, categorie:"Sort", evolution:0, capacite:0, icone:"⚡💥", couleur:"#A9EAFE", identifiant:28000008, elixir:2 },
  { nom:"Maître mineur", niveau:12, categorie:"Troupe", evolution:0, capacite:1, icone:"⛏️🧙", couleur:"#000000", identifiant:26000065, elixir:4 },
  { nom:"Petit prince", niveau:12, categorie:"Troupe", evolution:0, capacite:1, icone:"🏇👑", couleur:"#000000", identifiant:26000093, elixir:3 },
  { nom:"Reine des archers", niveau:12, categorie:"Troupe", evolution:0, capacite:1, icone:"🏹👸", couleur:"#000000", identifiant:26000072, elixir:5 },
  { nom:"Chasseur", niveau:12, categorie:"Troupe", evolution:1, capacite:0, icone:"🏹🦌", couleur:"#000000", identifiant:26000044, elixir:4 },
  { nom:"Électro dragon", niveau:12, categorie:"Troupe", evolution:1, capacite:0, icone:"⚡🐉", couleur:"#000000", identifiant:26000063, elixir:5 },
  { nom:"Armée de squelettes", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"💀⚔️", couleur:"#000000", identifiant:26000012, elixir:3 },
  { nom:"Barbares d’élite", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"🪓💪", couleur:"#000000", identifiant:26000043, elixir:6 },
  { nom:"Berserker", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"😡🪓", couleur:"#000000", identifiant:26000102, elixir:2 },
  { nom:"Bouliste", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"💣🛡️", couleur:"#000000", identifiant:26000034, elixir:5 },
  { nom:"Bourreau", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"🪓💀", couleur:"#000000", identifiant:26000045, elixir:5 },
  { nom:"Charette à canon", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"🛻💣", couleur:"#000000", identifiant:26000054, elixir:5 },
  { nom:"Frippons", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"🏃‍♂️💨", couleur:"#000000", identifiant:26000053, elixir:5 },
  { nom:"Machine gobeline", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"⚙️👹", couleur:"#000000", identifiant:26000096, elixir:5 },
  { nom:"Mamie Sorcière", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"👵🧙‍♀️", couleur:"#000000", identifiant:26000083, elixir:4 },
  { nom:"Méga-chevalier", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"⚔️💪", couleur:"#000000", identifiant:26000055, elixir:7 },
  { nom:"Golem de glace", niveau:12, categorie:"Troupe", evolution:0, capacite:0, icone:"❄️🪨", couleur:"#000000", identifiant:26000038, elixir:2 },
  { nom:"Géante runique", niveau:12, categorie:"Win condition", evolution:0, capacite:0, icone:"💪🔮", couleur:"#B173EB", identifiant:26000101, elixir:4 },
  { nom:"Cabane de barbares", niveau:11, categorie:"Bâtiment", evolution:0, capacite:0, icone:"🏠🪓", couleur:"#DF6D14", identifiant:27000005, elixir:6 },
  { nom:"Tour à bombe", niveau:11, categorie:"Bâtiment", evolution:0, capacite:0, icone:"🏰💣", couleur:"#DF6D14", identifiant:27000004, elixir:4 },
  { nom:"Clone", niveau:11, categorie:"Sort", evolution:0, capacite:0, icone:"👥✨", couleur:"#A9EAFE", identifiant:28000013, elixir:3 },
  { nom:"Gel", niveau:11, categorie:"Sort", evolution:0, capacite:0, icone:"❄️💨", couleur:"#A9EAFE", identifiant:28000005, elixir:4 },
  { nom:"Malédiction gobeline", niveau:11, categorie:"Sort", evolution:0, capacite:0, icone:"👹☠️", couleur:"#A9EAFE", identifiant:28000024, elixir:2 },
  { nom:"Néant", niveau:11, categorie:"Sort", evolution:0, capacite:0, icone:"🌌💀", couleur:"#A9EAFE", identifiant:28000023, elixir:3 },
  { nom:"Ronces", niveau:11, categorie:"Sort", evolution:0, capacite:0, icone:"🌿🗡️", couleur:"#A9EAFE", identifiant:28000026, elixir:3 },
  { nom:"Moine", niveau:11, categorie:"Troupe", evolution:0, capacite:1, icone:"🧘‍♂️🥋", couleur:"#000000", identifiant:26000077, elixir:5 },
  { nom:"Bûcheron", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"🪓🪵", couleur:"#000000", identifiant:26000035, elixir:4 },
  { nom:"Dragon de l'enfer", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"🔥🐉", couleur:"#000000", identifiant:26000037, elixir:4 },
  { nom:"Dragons squelettes", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"🐉💀", couleur:"#000000", identifiant:26000080, elixir:4 },
  { nom:"Électrocuteurs", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"⚡🗡️", couleur:"#000000", identifiant:26000052, elixir:4 },
  { nom:"Géant squelette", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"💀💪", couleur:"#000000", identifiant:26000020, elixir:6 },
  { nom:"Guérisseuse armée", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"💖⚔️", couleur:"#000000", identifiant:26000068, elixir:4 },
  { nom:"Horde de gargouilles", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"🦇🦇", couleur:"#000000", identifiant:26000022, elixir:5 },
  { nom:"Impératrice spirituelle", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"👑👻", couleur:"#000000", identifiant:26000025, elixir:3 },
  { nom:"Machine volante", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"🛩️⚙️", couleur:"#000000", identifiant:26000057, elixir:4 },
  { nom:"Phénix", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"🔥🦅", couleur:"#000000", identifiant:26000087, elixir:4 },
  { nom:"Prince", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"🏇👑", couleur:"#000000", identifiant:26000016, elixir:5 },
  { nom:"Zappy", niveau:11, categorie:"Troupe", evolution:0, capacite:0, icone:"⚡🤖", couleur:"#000000", identifiant:26000052, elixir:6 },
  { nom:"Ballon", niveau:11, categorie:"Win condition", evolution:0, capacite:0, icone:"🎈💣", couleur:"#B173EB", identifiant:26000006, elixir:5 },
  { nom:"Cavabélier", niveau:11, categorie:"Win condition", evolution:0, capacite:0, icone:"🐴🛡️", couleur:"#B173EB", identifiant:26000051, elixir:5 },
  { nom:"Électro géant", niveau:11, categorie:"Win condition", evolution:0, capacite:0, icone:"⚡💪", couleur:"#B173EB", identifiant:26000085, elixir:7 },
  { nom:"Molosse de lave", niveau:11, categorie:"Win condition", evolution:0, capacite:0, icone:"🐕🔥", couleur:"#B173EB", identifiant:26000029, elixir:7 }
];

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

// Écoute du formulaire mobile
deckFormMob.addEventListener('submit', em => {
    em.preventDefault();

    const niveauMinMob = parseInt(document.getElementById('niveauMinMob').value);
    const winCondMob = parseInt(document.getElementById('winCondMob').value);
    const sortsMob = parseInt(document.getElementById('sortsMob').value);
    const batimentsMob = parseInt(document.getElementById('batimentsMob').value);
    const troupesMob = parseInt(document.getElementById('troupesMob').value);
    const evolutionMob = parseInt(document.getElementById('evolutionMob').value);
    const capaciteMob = parseInt(document.getElementById('capaciteMob').value);

    const totalDemandesMob = winCondMob + sortsMob + batimentsMob + troupesMob + evolutionMob + capaciteMob;

    if (totalDemandesMob > 8) {
        const surplus = totalDemandesMob - 8;
        alert("Trop de cartes demandées : " + surplus + " en trop.");
        return;
    }

    const deck = genererDeck(niveauMinMob, winCondMob, sortsMob, batimentsMob, troupesMob, evolutionMob, capaciteMob);
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

    // Calculer le coût moyen en elixir
    const totalElixir = deck.reduce((sum, c) => sum + c.elixir, 0);
    const avgElixir = (totalElixir / deck.length).toFixed(1);

    // Afficher dans le div avec id "avg"
    document.getElementById("avg").innerText = `${avgElixir}`;
    document.getElementById("avgMob").innerText = `${avgElixir}`;

    // Générer le nom du deck
    let win = deck.find(c => c.categorie.toLowerCase() === 'win condition');
    if (!win) {
        // Si pas de Win condition, prendre la carte la plus chère
        win = deck.reduce((prev, curr) => (curr.elixir > prev.elixir ? curr : prev), deck[0]);
    }

    let deckName = '';
    if (avgElixir <= 3.3) {
        deckName = `${win.nom} cycle`;
    } else if (avgElixir <= 4.2) {
        const troupes = deck.filter(c => c.categorie.toLowerCase() === 'troupe');
        let plusChere = troupes.length > 0 ? troupes.reduce((prev, curr) => (curr.elixir > prev.elixir ? curr : prev)) : null;
        deckName = plusChere ? `${win.nom} ${plusChere.nom}` : `${win.nom} ${win.nom}`;
    } else {
        deckName = `${win.nom} lourd`;
    }

    document.getElementById("deckName").innerText = deckName;
    document.getElementById("deckNameMob").innerText = deckName;

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
            <div class="elix">${c.elixir}</div>
            <div class="icone">${c.icone}</div>
            <div class="nom" style="color:${c.couleur}">${c.nom}</div>
            <div class="niv">lvl.${c.niveau}</div>
        `;
        deckContainer.appendChild(div);
    });
}

/////////////////// copier deck ////////////////////////////////////

// Sélection du bouton
const boutonCopier = document.querySelector('.btn.btn-outline-warning.pc');
const boutonCopierMob = document.querySelector('.btn.btn-outline-warning.mobile');

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

// Événement sur le bouton mobile
boutonCopierMob.addEventListener('click', () => {
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
