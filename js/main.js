// PERSONAJES
class Character {
    constructor(name, type, img, rageImg, winImg, looseImg, lifeStat, attackStat, manaStat) {
        this.name = name;
        this.type = type;
        this.img = img;
        this.rageImg = rageImg;
        this.winImg = winImg;
        this.looseImg = looseImg;
        this.lifeStat = lifeStat;
        this.initialLife = lifeStat;
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
    constructor(type, damage, mana, lifeBonus) {
        this.type = type;
        this.damage = damage;
        this.mana = mana;
        this.lifeBonus = lifeBonus;

        this.damageForPlayer = damage;
        this.manaForPlayer = mana;
        this.lifeBonusForPlayer = lifeBonus;

        this.damageForNpc = damage;
        this.manaForNpc = mana;
        this.lifeBonusForNpc = lifeBonus;
    }
};

const swordSlash = new Attack('Cuerpo a Cuerpo', 15000, 2000, 0);
const fireBalls = new Attack('Hechizo', 12000, 8000, 0);
const assassinsDaggers = new Attack('Sigilo', 20000, 4000, 0);

const allAttacks = [swordSlash, fireBalls, assassinsDaggers];

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
let selectCharacterBtn = document.getElementById('selectCharacter__btn');
let characterContainer ;
// Battle
const humanPlayerImgBattleContainer = document.getElementById('player__img');
const humanPlayerBattleCharacterName = document.getElementById('player__name');
const humanPlayerBattleCharacterType = document.getElementById('playerStat__type');
const humanPlayerBattleCharacterLife = document.getElementById('playerStat__life');
const humanPlayerBattleCharacterAttack = document.getElementById('playerStat__attack');
const humanPlayerBattleCharacterMana = document.getElementById('playerStat__mana');

const npcPlayerImgBattleContainer = document.getElementById('npc__img');
const npcPlayerBattleCharacterName = document.getElementById('npc__name');
const npcPlayerBattleCharacterType = document.getElementById('npcStat__type');
const npcPlayerBattleCharacterLife = document.getElementById('npcStat__life');
const npcPlayerBattleCharacterAttack = document.getElementById('npcStat__attack');
const npcPlayerBattleCharacterMana = document.getElementById('npcStat__mana');

const attackSlashInfoDamageForPlayer = document.getElementById('attackSlash__info--damage');
const attackSlashInfoManaForPlayer = document.getElementById('attackSlash__info--manaRequired');
const attackSlashInfoBonusForPlayer = document.getElementById('attackSlash__info--bonus');

const attackFireInfoDamageForPlayer = document.getElementById('attackFire__info--damage');
const attackFireInfoManaForPlayer = document.getElementById('attackFire__info--manaRequired');
const attackFireInfoBonusForPlayer = document.getElementById('attackFire__info--bonus');

const attackDaggersInfoDamageForPlayer = document.getElementById('attackDaggers__info--damage');
const attackDaggersInfoManaForPlayer = document.getElementById('attackDaggers__info--manaRequired');
const attackDaggersInfoBonusForPlayer = document.getElementById('attackDaggers__info--bonus');



const btnAttackSlash = document.getElementById('attack__btn--slash');
const btnAttackFire = document.getElementById('attack__btn--fire');
const btnAttackDaggers = document.getElementById('attack__btn--daggers');


function welcomeGame(){
    sectionSelectCharacter.style.display = 'none';
    sectionBattle.style.display = 'none';
    sectionEndgame.style.display = 'none';
    playButton.addEventListener('click', characterSelection);
};

function characterSelection() {
    sectionWelcomeGame.style.display = 'none';
    sectionSelectCharacter.style.display = 'grid';
    selectCharacterBtn.addEventListener('click', selectEnemyCharacter);


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
                                <p class="stat__data life">${character.lifeStat}</p>
                                <p class="stat__data attackStat">${character.attackStat}</p>
                                <p class="stat__data manaStat">${character.manaStat}</p>
                            </div>          
                        </div>
                    </div>
                </label>
            </div>
        `
        selectCharacterContainer.innerHTML += availableCharacters;

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

function selectEnemyCharacter(){
    
    function verifyChoose(){
        if(inputAstaroth.checked){
            humanPlayer.push(allCharacters[0]);
            return true;
        } else if (inputTiamat.checked){
            humanPlayer.push(allCharacters[1]);
            return true;
        } else if (inputBaphomet.checked){
            humanPlayer.push(allCharacters[2]);
            return true;
        }else if(inputMephistopheles.checked){
            humanPlayer.push(allCharacters[3]);
            return true;
        }else if(inputNergal.checked){
            humanPlayer.push(allCharacters[4]);
            return true;
        }else if(inputVestri.checked){
            humanPlayer.push(allCharacters[5]);
            return true;
        }else if(inputCimeries.checked){
            humanPlayer.push(allCharacters[6]);
            return true;
        }else if(inputGorgon.checked){
            humanPlayer.push(allCharacters[7]);
            return true;
        } else {
            // En caso de que no haya seleccionado personaje
            let aceptaSeleccionar = confirm('Por favor, seleccione un personaje para empezar la batalla.');
            if(aceptaSeleccionar){
                reiniciarJuego();
            } else {
                // Ah sos re troll jajaja
                window.close();
            }
        }
    };

    function randomNpcCharacter(){
        let randomCharacter = randomNum(1,8);

        if(randomCharacter == 1){
            npcPlayer.push(allCharacters[0]);
            return true;
        } else if(randomCharacter == 2){
            npcPlayer.push(allCharacters[1]);
            return true;
        } else if(randomCharacter == 3){
            npcPlayer.push(allCharacters[2]);
            return true;
        } else if(randomCharacter == 4){
            npcPlayer.push(allCharacters[3]);
            return true;
        } else if(randomCharacter == 5){
            npcPlayer.push(allCharacters[4]);
            return true;
        } else if(randomCharacter == 6){
            npcPlayer.push(allCharacters[5]);
            return true;
        } else if(randomCharacter == 7){
            npcPlayer.push(allCharacters[6]);
            return true;
        } else {
            npcPlayer.push(allCharacters[7]);
            return true;
        }
    };

    verifyChoose();
    randomNpcCharacter();
    
    if(verifyChoose && randomNpcCharacter){
        battle();
    } else {
        alert('Ha ocurrido un error refresca la pagina.')
    }
    
};

function battle(){
    sectionSelectCharacter.style.display = 'none';
    sectionBattle.style.display = 'grid';

    // Initial values
    humanPlayerImgBattleContainer.innerHTML = humanPlayer[0].rageImg
    humanPlayerBattleCharacterName.innerHTML = humanPlayer[0].name
    humanPlayerBattleCharacterType.innerHTML = humanPlayer[0].type
    humanPlayerBattleCharacterLife.innerHTML = humanPlayer[0].lifeStat
    humanPlayerBattleCharacterAttack.innerHTML = humanPlayer[0].attackStat
    humanPlayerBattleCharacterMana.innerHTML = humanPlayer[0].manaStat
    npcPlayerImgBattleContainer.innerHTML = npcPlayer[0].rageImg
    npcPlayerBattleCharacterName.innerHTML = npcPlayer[0].name
    npcPlayerBattleCharacterType.innerHTML = npcPlayer[0].type
    npcPlayerBattleCharacterLife.innerHTML = npcPlayer[0].lifeStat
    npcPlayerBattleCharacterAttack.innerHTML = npcPlayer[0].attackStat
    npcPlayerBattleCharacterMana.innerHTML = npcPlayer[0].manaStat
    // Attack values
    function attackValuesPlayer(){
        if(humanPlayer[0].type == 'guerrero'){
            // Slash
            allAttacks[0].damageForPlayer += 1000;
            allAttacks[0].manaForPlayer -= 1000;
            // Fire
            allAttacks[1].damageForPlayer -= 2000;
            allAttacks[1].manaForPlayer += 4000;
            allAttacks[1].lifeBonusForPlayer += 5000;
            // Daggers
            allAttacks[2].damageForPlayer -= 1000;
            allAttacks[2].manaForPlayer += 1000;
            allAttacks[2].lifeBonusForPlayer += 1000;
        } else if(humanPlayer[0].type == 'asesino'){
            // Slash
            allAttacks[0].damageForPlayer -= 2000;
            allAttacks[0].manaForPlayer += 3000;
            allAttacks[1].lifeBonusForPlayer += 2500;
            // Fire
            allAttacks[1].damageForPlayer -= 3000;
            allAttacks[1].manaForPlayer += 6000;
            allAttacks[1].lifeBonusForPlayer += 2500;
            // Daggers
            allAttacks[2].damageForPlayer += 3000;
            allAttacks[2].manaForPlayer -= 2000;

        } else if (humanPlayer[0].type == 'mago'){
            // Slash
            allAttacks[0].damageForPlayer -= 4000;
            allAttacks[0].manaForPlayer += 4000;
            allAttacks[0].lifeBonusForPlayer += 6000;
            // Fire
            allAttacks[1].damageForPlayer += 3000;
            allAttacks[1].manaForPlayer -= 4000;
            // Daggers
            allAttacks[2].damageForPlayer -= 3000;
            allAttacks[2].manaForPlayer += 3000;
            allAttacks[2].lifeBonusForPlayer += 2000;
        }
    };
    function attackValuesNpc(){
        if(npcPlayer[0].type == 'guerrero'){
            // Slash
            allAttacks[0].damageForNpc += 1000;
            allAttacks[0].manaForNpc -= 1000;
            // Fire
            allAttacks[1].damageForNpc -= 2000;
            allAttacks[1].manaForNpc += 4000;
            allAttacks[1].lifeBonusForNpc += 5000;
            // Daggers
            allAttacks[2].damageForNpc -= 1000;
            allAttacks[2].manaForNpc += 1000;
            allAttacks[2].lifeBonusForNpc += 1000;
        } else if(npcPlayer[0].type == 'asesino'){
            // Slash
            allAttacks[0].damageForNpc -= 2000;
            allAttacks[0].manaForNpc += 3000;
            allAttacks[1].lifeBonusForNpc += 2500;
            // Fire
            allAttacks[1].damageForNpc -= 3000;
            allAttacks[1].manaForNpc += 6000;
            allAttacks[1].lifeBonusForNpc += 2500;
            // Daggers
            allAttacks[2].damageForNpc += 3000;
            allAttacks[2].manaForNpc -= 2000;

        } else if (npcPlayer[0].type == 'mago'){
            // Slash
            allAttacks[0].damageForNpc -= 4000;
            allAttacks[0].manaForNpc += 4000;
            allAttacks[0].lifeBonusForNpc += 6000;
            // Fire
            allAttacks[1].damageForNpc += 3000;
            allAttacks[1].manaForNpc -= 4000;
            // Daggers
            allAttacks[2].damageForNpc -= 3000;
            allAttacks[2].manaForNpc += 3000;
            allAttacks[2].lifeBonusForNpc += 2000;
        }
    };
    attackValuesNpc();
    attackValuesPlayer();
    // Print values
    attackSlashInfoDamageForPlayer.innerHTML = allAttacks[0].damageForPlayer;
    attackSlashInfoManaForPlayer.innerHTML =  allAttacks[0].manaForPlayer;
    attackSlashInfoBonusForPlayer.innerHTML = allAttacks[0].lifeBonusForPlayer;

    attackFireInfoDamageForPlayer.innerHTML = allAttacks[1].damageForPlayer;
    attackFireInfoManaForPlayer.innerHTML = allAttacks[1].damageForPlayer;
    attackFireInfoBonusForPlayer.innerHTML = allAttacks[1].damageForPlayer;

    attackDaggersInfoDamageForPlayer.innerHTML = allAttacks[2].damageForPlayer;
    attackDaggersInfoManaForPlayer.innerHTML = allAttacks[2].damageForPlayer;
    attackDaggersInfoBonusForPlayer.innerHTML = allAttacks[2].damageForPlayer;

    // Button listeners
    // btnAttackSlash.addEventListener('click', slashAttack);
    // btnAttackFire.addEventListener('click', fireAttack);
    // btnAttackDaggers.addEventListener('click', daggersAttack);
    // Attack Functions
    function slashAttack(atacante, defensor){
        
    }

};


function reiniciarJuego(){
    location.reload();
};

function randomNum(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min);
};

window.addEventListener('load', welcomeGame);



