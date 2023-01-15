// PERSONAJES
class Character {
    constructor(name, type, img, rageImg, winImg, looseImg, life, attackStat, manaStat) {
        this.name = name;
        this.type = type;
        this.img = img;
        this.rageImg = rageImg;
        this.winImg = winImg;
        this.looseImg = looseImg;
        this.life = life;
        this.initialLife = life;
        this.manaStat = manaStat;
        this.initialMana = manaStat;
        this.attackStat = attackStat;
    }
};

const astaroth = new Character('astaroth', 'asesino', '<img src="./img/characters/character-astaroth.png" alt="">', '<img src="./img/characters/character-astaroth-rage.png" alt="">', '<img src="./img/characters/character-astaroth-win.png" alt="">', '<img src="./img/characters/character-astaroth-loose.png" alt="">', 25637, 15231, 4982);

const mephistopheles = new Character('mephistopheles', 'asesino', '<img src="./img/characters/character-mephistopheles.png" alt="">', '<img src="./img/characters/character-mephistopheles-rage.png" alt="">', '<img src="./img/characters/character-mephistopheles-win.png" alt="">', '<img src="./img/characters/character-mephistopheles-loose.png" alt="">', 19891, 20112, 4120);

const cimeries = new Character('cimeries', 'asesino', '<img src="./img/characters/character-cimeries.png" alt="">', '<img src="./img/characters/character-cimeries-rage.png" alt="">', '<img src="./img/characters/character-cimeries-win.png" alt="">', '<img src="./img/characters/character-cimeries-loose.png" alt="">', 15217, 25213, 3111);

const tiamat = new Character('tiamat', 'guerrero', '<img src="./img/characters/character-tiamat.png" alt="">', '<img src="./img/characters/character-tiamat-rage.png" alt="">', '<img src="./img/characters/character-tiamat-win.png" alt="">', '<img src="./img/characters/character-tiamat-loose.png" alt="">', 44892, 12213, 5111);

const nergal = new Character('nergal', 'guerrero', '<img src="./img/characters/character-nergal.png" alt="">', '<img src="./img/characters/character-nergal-rage.png" alt="">', '<img src="./img/characters/character-nergal-win.png" alt="">', '<img src="./img/characters/character-nergal-loose.png" alt="">', 42510, 15101, 4230);

const gorgon = new Character('gorgon', 'guerrero', '<img src="./img/characters/character-gorgon.png" alt="">', '<img src="./img/characters/character-gorgon-rage.png" alt="">', '<img src="./img/characters/character-gorgon-win.png" alt="">', '<img src="./img/characters/character-gorgon-loose.png" alt="">', 35203, 18121, 2999);

const baphomet = new Character('baphomet', 'mago', '<img src="./img/characters/character-baphomet.png" alt="">', '<img src="./img/characters/character-baphomet-rage.png" alt="">', '<img src="./img/characters/character-baphomet-win.png" alt="">', '<img src="./img/characters/character-baphomet-loose.png" alt="">', 14982, 10128, 34999);

const vestri = new Character('vestri', 'mago', '<img src="./img/characters/character-vestri.png" alt="">', '<img src="./img/characters/character-vestri-rage.png" alt="">', '<img src="./img/characters/character-vestri-win.png" alt="">', '<img src="./img/characters/character-vestri-loose.png" alt="">', 9999, 12023, 30401);

const allCharacters = [astaroth, tiamat, baphomet, mephistopheles, nergal, vestri, cimeries,  gorgon];


// ATAQUES
class Attack {
    constructor(type, damage, mana) {
        this.type = type;
        this.damage = damage;
        this.mana = mana;
    }
};

const swordSlash = new Attack('Cuerpo a Cuerpo', 15000, 2000);
const fireBalls = new Attack('Hechizo', 12000, 8000);
const assassinsDaggers = new Attack('Sigilo', 20000, 4000);

const Attacks = [swordSlash, fireBalls, assassinsDaggers];

// JUGADOR Y ENEMIGO
const humanPlayer = [];
const npcPlayer = [];

// Characters Inputs
let availableCharacters  ;
let inputAstaroth ;
let inputTiamat ;
let inputBaphomet ;
let inputMephistopheles ;
let inputNergal ;
let inputVestri ;
let inputCimeries ;
let inputGorgon ;
let characterContainerAstaroth ;
let characterContainerTiamat ;
let characterContainerBaphomet ;
let characterContainerMephistopheles ;
let characterContainerNergal ;
let characterContainerVestri ;
let characterContainerCimeries ;
let characterContainerGorgon ;
// Sections
const sectionWelcomeGame = document.getElementById('welcome');
const sectionSelectCharacter = document.getElementById('selectCharacter');
const sectionBattle = document.getElementById('battle');
const sectionEndgame = document.getElementById('endgame');
// Welcome
const playButton = document.getElementById('welcome__btn');
const favCharacterContainer = document.getElementById('favCharacter__container');
favCharacterContainer.style.opacity = '0';
// Select character
const selectCharacterContainer = document.getElementById('selectCharacter__character');
const selectCharacterInput = document.getElementById('character__input');
let selectCharacterBtn ;
let characterContainer ;


function welcomeGame(){
    sectionSelectCharacter.style.display = 'none';
    sectionBattle.style.display = 'none';
    sectionEndgame.style.display = 'none';
    playButton.addEventListener('click', characterSelection);
};

function characterSelection() {
    sectionWelcomeGame.style.display = 'none';
    sectionSelectCharacter.style.display = 'grid';
    
    allCharacters.forEach((character) => {
        availableCharacters = ` 
        <div class="character__container">
                <input type="radio" name="character" id="${character.name}" class="character__input">
                <label for="${character.name}" id="character__${character.name}--bg" class="character__label"> 
                    <div class="character__img">
                        ${character.img}
                    </div>
                    <div class="character__info">
                        <h3 class="characterInfo__name">${character.name}</h3>
                        <div class="characterInfo__stats">
                            <div class="stats__names">
                                <p class="stat__data">Tipo de demonio:</p>
                                <p class="stat__data">Vida:</p>
                                <p class="stat__data">Ataque:</p>
                                <p class="stat__data">Mana:</p>
                            </div>
                            <div class="stats__values">
                                <p class="stat__data">${character.type}</p>
                                <p class="stat__data life">${character.life}</p>
                                <p class="stat__data attackStat">${character.attackStat}</p>
                                <p class="stat__data manaStat">${character.manaStat}</p>
                            </div>          
                        </div>
                    </div>
                </label>
            </div>
        `
        selectCharacterContainer.innerHTML += availableCharacters;
        selectCharacterBtn = document.getElementById('selectCharacter__btn');

        inputAstaroth = document.getElementById('astaroth');
        characterContainerAstaroth = document.getElementById("character__astaroth--bg");
        inputTiamat = document.getElementById('tiamat');
        characterContainerTiamat = document.getElementById("character__tiamat--bg");
        inputBaphomet = document.getElementById('baphomet');
        characterContainerBaphomet = document.getElementById("character__baphomet--bg");
        inputMephistopheles = document.getElementById('mephistopheles');
        characterContainerMephistopheles = document.getElementById("character__mephistopheles--bg");
        inputNergal = document.getElementById('nergal');
        characterContainerNergal = document.getElementById("character__nergal--bg");
        inputVestri = document.getElementById('vestri');
        characterContainerVestri = document.getElementById("character__vestri--bg");
        inputCimeries = document.getElementById('cimeries');
        characterContainerCimeries = document.getElementById("character__cimeries--bg");
        inputGorgon = document.getElementById('gorgon');
        characterContainerGorgon = document.getElementById("character__gorgon--bg");
    });

    inputBaphomet.addEventListener("change", () => {
        characterContainerBaphomet.classList.add("selected-wizzard");
    });
    document.addEventListener("mouseup", (e) => {
        if (!e.target.closest("label[for='baphomet']")) {
            characterContainerBaphomet.classList.remove("selected-wizzard");
        }
    });
    
    inputAstaroth.addEventListener("change", () => {
        characterContainerAstaroth.classList.toggle("selected-assasin");
    });
    document.addEventListener("mouseup", (e) => {
        if (!e.target.closest("label[for='astaroth']")) {
            characterContainerAstaroth.classList.remove("selected-assasin");
        }
    });

    inputTiamat.addEventListener("change", () => {
        characterContainerTiamat.classList.toggle("selected-warrior");
    });
    document.addEventListener("mouseup", (e) => {
        if (!e.target.closest("label[for='tiamat']")) {
            characterContainerTiamat.classList.remove("selected-warrior");
        }
    });


    inputMephistopheles.addEventListener("change", () => {
        characterContainerMephistopheles.classList.toggle("selected-assasin");
    });
    document.addEventListener("mouseup", (e) => {
        if (!e.target.closest("label[for='mephistopheles']")) {
            characterContainerMephistopheles.classList.remove("selected-assasin");
        }
    });

    inputNergal.addEventListener("change", () => {
        characterContainerNergal.classList.toggle("selected-warrior");
    });
    document.addEventListener("mouseup", (e) => {
        if (!e.target.closest("label[for='nergal']")) {
            characterContainerNergal.classList.remove("selected-warrior");
        }
    });

    inputVestri.addEventListener("change", () => {
        characterContainerVestri.classList.toggle("selected-wizzard");
    });
    document.addEventListener("mouseup", (e) => {
        if (!e.target.closest("label[for='vestri']")) {
            characterContainerVestri.classList.remove("selected-wizzard");
        }
    });

    inputCimeries.addEventListener("change", () => {
        characterContainerCimeries.classList.toggle("selected-assasin");
    });
    document.addEventListener("mouseup", (e) => {
        if (!e.target.closest("label[for='cimeries']")) {
            characterContainerCimeries.classList.remove("selected-assasin");
        }
    });

    inputGorgon.addEventListener("change", () => {
        characterContainerGorgon.classList.toggle("selected-warrior");
    });
    document.addEventListener("mouseup", (e) => {
        if (!e.target.closest("label[for='gorgon']")) {
            characterContainerGorgon.classList.remove("selected-warrior");
        }
    });

};
window.addEventListener('load', welcomeGame);



