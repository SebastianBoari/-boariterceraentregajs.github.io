// PERSONAJES
class Character {
    constructor(tipo, img, rageImg, winImg, looseImg, vida, ataque, mana) {
        this.tipo = tipo;
        this.img = img;
        this.rageImg = rageImg;
        this.winImg = winImg;
        this.looseImg = looseImg;
        this.vida = vida;
        this.vidaInicial = vida;
        this.ataque = ataque;
        this.mana = mana;
        this.manaInicial = mana;
    }
};

const astaroth = new Character('asesino', '<img src="./img/characters/character-astaroth.png" alt="">', '<img src="./img/characters/character-astaroth-rage.png" alt="">', '<img src="./img/characters/character-astaroth-win.png" alt="">', '<img src="./img/characters/character-astaroth-loose.png" alt="">', 28000, 2000, 1600);

const mephistopheles = new Character('asesino', '<img src="./img/characters/character-mephistopheles.png" alt="">', '<img src="./img/characters/character-mephistopheles-rage.png" alt="">', '<img src="./img/characters/character-mephistopheles-win.png" alt="">', '<img src="./img/characters/character-mephistopheles-loose.png" alt="">', 18000, 4000, 6000);

const cimeries = new Character('asesino', '<img src="./img/characters/character-cimeries.png" alt="">', '<img src="./img/characters/character-cimeries-rage.png" alt="">', '<img src="./img/characters/character-cimeries-win.png" alt="">', '<img src="./img/characters/character-cimeries-loose.png" alt="">', 18000, 4000, 6000);

const tiamat = new Character('guerrero', '<img src="./img/characters/character-tiamat.png" alt="">', '<img src="./img/characters/character-tiamat-rage.png" alt="">', '<img src="./img/characters/character-tiamat-win.png" alt="">', '<img src="./img/characters/character-tiamat-loose.png" alt="">', 21000, 5000, 2400);

const nergal = new Character('guerrero', '<img src="./img/characters/character-nergal.png" alt="">', '<img src="./img/characters/character-nergal-rage.png" alt="">', '<img src="./img/characters/character-nergal-win.png" alt="">', '<img src="./img/characters/character-nergal-loose.png" alt="">', 21000, 5000, 2400);

const gorgon = new Character('guerrero', '<img src="./img/characters/character-gorgon.png" alt="">', '<img src="./img/characters/character-gorgon-rage.png" alt="">', '<img src="./img/characters/character-gorgon-win.png" alt="">', '<img src="./img/characters/character-gorgon-loose.png" alt="">', 21000, 5000, 2400);

const baphomet = new Character('mago', '<img src="./img/characters/character-baphomet.png" alt="">', '<img src="./img/characters/character-baphomet-rage.png" alt="">', '<img src="./img/characters/character-baphomet-win.png" alt="">', '<img src="./img/characters/character-baphomet-loose.png" alt="">', 21000, 5000, 2400);

const vestri = new Character('mago', '<img src="./img/characters/character-vestri.png" alt="">', '<img src="./img/characters/character-vestri-rage.png" alt="">', '<img src="./img/characters/character-vestri-win.png" alt="">', '<img src="./img/characters/character-vestri-loose.png" alt="">', 21000, 5000, 2400);

const allCharacters = [astaroth, mephistopheles, cimeries, tiamat, nergal, gorgon, baphomet, vestri];

// ATAQUES
class Attack {
    constructor(type, damage, mana) {
        this.type = type;
        this.damage = damage;
        this.mana = mana;
    }
};

const swordSlash = new Attack('Cuerpo a Cuerpo', 2000, 100);
const fireBalls = new Attack('Hechizo', 5000, 1000);
const assassinsDaggers = new Attack('Sigilo', 3000, 600);

const Attacks = [swordSlash, fireBalls, assassinsDaggers];

// JUGADOR Y ENEMIGO
const humanPlayer = [];
const npcPlayer = [];



// VARIABLES GLOBALES 

// Bloques de contenido
const sectionWelcomeGame = document.getElementById('welcome');
const sectionSelectCharacter = document.getElementById('selectCharacter');
const sectionBattle = document.getElementById('battle');
const sectionEndgame = document.getElementById('endgame');

const favCharacterContainer = document.getElementById('favCharacter__container');
favCharacterContainer.style.opacity = '0';



// Welcome
const playButton = document.getElementById('welcome__btn');


function welcomeGame(){
    sectionSelectCharacter.style.display = 'none';
    sectionBattle.style.display = 'none';
    sectionEndgame.style.display = 'none';

    playButton.addEventListener('click', characterSelection);

};

function characterSelection() {
    sectionWelcomeGame.style.display = 'none';
    sectionSelectCharacter.style.display = 'block';

};


window.addEventListener('load', welcomeGame);



