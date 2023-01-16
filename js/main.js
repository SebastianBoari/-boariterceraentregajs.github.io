// Global vars

// Characters
class Character {
    constructor(name, type, img, rageImg, winImg, looseImg, lifeStat, attackStat, manaStat) {
        this.name = name;
        this.type = type;
        this.img = img;
        this.rageImg = rageImg;
        this.winImg = winImg;
        this.looseImg = looseImg;
        this.lifeStat = lifeStat;
        this.attackStat = attackStat;
        this.initialLife = lifeStat;
        this.manaStat = manaStat;
        this.initialMana = manaStat;
    }
};
const astaroth = new Character('astaroth', 'asesino', '<img src="./img/characters/character-astaroth.png" alt="">', '<img src="./img/characters/character-astaroth-rage.png" alt="">', '<img src="./img/characters/character-astaroth-win.png" alt="">', '<img src="./img/characters/character-astaroth-loose.png" alt="">', 256370, 15231, 49820);
const mephistopheles = new Character('mephistopheles', 'asesino', '<img src="./img/characters/character-mephistopheles.png" alt="">', '<img src="./img/characters/character-mephistopheles-rage.png" alt="">', '<img src="./img/characters/character-mephistopheles-win.png" alt="">', '<img src="./img/characters/character-mephistopheles-loose.png" alt="">', 198910, 20112, 4120);
const cimeries = new Character('cimeries', 'asesino', '<img src="./img/characters/character-cimeries.png" alt="">', '<img src="./img/characters/character-cimeries-rage.png" alt="">', '<img src="./img/characters/character-cimeries-win.png" alt="">', '<img src="./img/characters/character-cimeries-loose.png" alt="">', 152170, 25213, 31110);
const tiamat = new Character('tiamat', 'guerrero', '<img src="./img/characters/character-tiamat.png" alt="">', '<img src="./img/characters/character-tiamat-rage.png" alt="">', '<img src="./img/characters/character-tiamat-win.png" alt="">', '<img src="./img/characters/character-tiamat-loose.png" alt="">', 448920, 12213, 51110);
const nergal = new Character('nergal', 'guerrero', '<img src="./img/characters/character-nergal.png" alt="">', '<img src="./img/characters/character-nergal-rage.png" alt="">', '<img src="./img/characters/character-nergal-win.png" alt="">', '<img src="./img/characters/character-nergal-loose.png" alt="">', 425100, 15101, 42300);
const gorgon = new Character('gorgon', 'guerrero', '<img src="./img/characters/character-gorgon.png" alt="">', '<img src="./img/characters/character-gorgon-rage.png" alt="">', '<img src="./img/characters/character-gorgon-win.png" alt="">', '<img src="./img/characters/character-gorgon-loose.png" alt="">', 352030, 18121, 29990);
const baphomet = new Character('baphomet', 'mago', '<img src="./img/characters/character-baphomet.png" alt="">', '<img src="./img/characters/character-baphomet-rage.png" alt="">', '<img src="./img/characters/character-baphomet-win.png" alt="">', '<img src="./img/characters/character-baphomet-loose.png" alt="">', 149820, 10128, 349990);
const vestri = new Character('vestri', 'mago', '<img src="./img/characters/character-vestri.png" alt="">', '<img src="./img/characters/character-vestri-rage.png" alt="">', '<img src="./img/characters/character-vestri-win.png" alt="">', '<img src="./img/characters/character-vestri-loose.png" alt="">', 99990, 12023, 304010);
const allCharacters = [astaroth, tiamat, baphomet, mephistopheles, nergal, vestri, cimeries,  gorgon];
// Attacks
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
// Players
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
const favCharacterImg = document.getElementById('favCharacter__img');
const favCharacterName = document.getElementById('favCharacter__name');
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
let winRoundCounterPlayer = 0;
let winRoundCounterNpc = 0;
const countRoundForPlayer = document.getElementById('player__counter');
const countRoundForNpc = document.getElementById('npc__counter');
const btnAttackSlash = document.getElementById('attack__btn--slash');
const btnAttackFire = document.getElementById('attack__btn--fire');
const btnAttackDaggers = document.getElementById('attack__btn--daggers');
const btnNextRound = document.getElementById('nextRound__btn');
btnNextRound.disabled = true;
// Endgame
const EndgameTxtContainer = document.getElementById('endgame__panel');
const restartGameBtn = document.getElementById('endgame__restartBtn');
const lastCharacterSelectedName = localStorage.getItem('lastCharacter');
const lastCharacterSelectedImg = localStorage.getItem('lastCharacterImg');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions and workflow
// Game Init
function welcomeGame(){
    sectionSelectCharacter.style.display = 'none';
    sectionBattle.style.display = 'none';
    sectionEndgame.style.display = 'none';
    if(lastCharacterSelectedName !== null && lastCharacterSelectedImg !== null){
        favCharacterContainer.style.opacity = '1';
        favCharacterImg.innerHTML = localStorage.getItem('lastCharacterImg');
        favCharacterName.innerHTML = localStorage.getItem('lastCharacter');
    }
    playButton.addEventListener('click', characterSelection);
};
function characterSelection() {
    // Hide sections
    sectionWelcomeGame.style.display = 'none';
    sectionSelectCharacter.style.display = 'grid';
    selectCharacterBtn.addEventListener('click', selectEnemyCharacter);
    // Print on screen characters
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
        // Set inputs per character (harcodeado)
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
    // Input listeners (styles only)
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
            let agreeToSelect = confirm('Por favor, seleccione un personaje para empezar la batalla.');
            if(agreeToSelect){
                restartGame();
            } else {
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
// Attack values
function assignAttackValues(playerType, isHuman) {
    for (let i = 0; i < allAttacks.length; i++) {
        if (playerType === 'guerrero') {
            // Asignar valores para ataques de guerrero
            if (isHuman) {
                allAttacks[i].damageForPlayer += 1000;
                allAttacks[i].manaForPlayer -= 1000;
            } else {
                allAttacks[i].damageForNpc += 1000;
                allAttacks[i].manaForNpc -= 1000;
            }
        } else if (playerType === 'asesino') {
            // Asignar valores para ataques de asesino
            if (isHuman) {
                allAttacks[i].damageForPlayer -= 2000;
                allAttacks[i].manaForPlayer += 3000;
                allAttacks[i].lifeBonusForPlayer += 2500;
            } else {
                allAttacks[i].damageForNpc -= 2000;
                allAttacks[i].manaForNpc += 3000;
                allAttacks[i].lifeBonusForNpc += 2500;
            }
        } else if (playerType === 'mago') {
            // Asignar valores para ataques de mago
            if (isHuman) {
                allAttacks[i].damageForPlayer -= 4000;
                allAttacks[i].manaForPlayer += 4000;
                allAttacks[i].lifeBonusForPlayer += 6000;
            } else {
                allAttacks[i].damageForNpc -= 4000;
                allAttacks[i].manaForNpc += 4000;
                allAttacks[i].lifeBonusForNpc += 6000;
            }
        }
    }
};
function statsUpdate(){
    // For human
    humanPlayerBattleCharacterLife.innerHTML = humanPlayer[0].lifeStat
    humanPlayerBattleCharacterAttack.innerHTML = humanPlayer[0].attackStat
    humanPlayerBattleCharacterMana.innerHTML = humanPlayer[0].manaStat
    // For Npc
    npcPlayerBattleCharacterLife.innerHTML = npcPlayer[0].lifeStat
    npcPlayerBattleCharacterAttack.innerHTML = npcPlayer[0].attackStat
    npcPlayerBattleCharacterMana.innerHTML = npcPlayer[0].manaStat
};
// Attack Functions
function slashAttack(attackerIsHuman){
    if(attackerIsHuman){
        npcPlayer[0].lifeStat -= (humanPlayer[0].attackStat + allAttacks[0].damageForPlayer);
        humanPlayer[0].manaStat -= allAttacks[0].manaForPlayer;
        humanPlayer[0].lifeStat += allAttacks[0].lifeBonusForPlayer;
    } else {
        humanPlayer[0].lifeStat -= (npcPlayer[0].attackStat + allAttacks[0].damageForNpc);
        npcPlayer[0].manaStat -= allAttacks[0].manaForNpc;
        npcPlayer[0].lifeStat += allAttacks[0].lifeBonusForNpc;
    }
};
function fireAttack(attackerIsHuman){
    if(attackerIsHuman){
        npcPlayer[0].lifeStat -= (humanPlayer[0].attackStat + allAttacks[1].damageForPlayer);
        humanPlayer[0].manaStat -= allAttacks[1].manaForPlayer;
        humanPlayer[0].lifeStat += allAttacks[1].lifeBonusForPlayer;
    } else {
        humanPlayer[0].lifeStat -= (npcPlayer[0].attackStat + allAttacks[1].damageForNpc);       
        npcPlayer[0].manaStat -= allAttacks[1].manaForNpc;
        npcPlayer[0].lifeStat += allAttacks[1].lifeBonusForNpc;
    }
};
function daggersAttack(attackerIsHuman){
    if(attackerIsHuman){
        npcPlayer[0].lifeStat -= (humanPlayer[0].attackStat + allAttacks[2].damageForPlayer);
        humanPlayer[0].manaStat -= allAttacks[2].manaForPlayer;
        humanPlayer[0].lifeStat += allAttacks[2].lifeBonusForPlayer;
    } else {
        humanPlayer[0].lifeStat -= (npcPlayer[0].attackStat + allAttacks[2].damageForNpc);
        npcPlayer[0].manaStat -= allAttacks[2].manaForNpc;
        npcPlayer[0].lifeStat += allAttacks[2].lifeBonusForNpc;
    }
};
// Npc Choose Attack
function randomAttackForNpc(){
    let randomAttack = randomNum(1, 3);

    if(randomAttack == 1){
        slashAttack(false);
    } else if(randomAttack == 2){
        fireAttack(false);
    } else {
        daggersAttack(false);
    }
};
// Endgame Screens
function winScreen(){
    sectionBattle.style.display = 'none';
    sectionEndgame.style.display = 'grid';
    // Clean local storage
    localStorage.removeItem('npcWins');
    localStorage.removeItem('playerWins');
    // Add win txt
    let winEndgameTxt = `
        <div class="panel__header">
        ${humanPlayer[0].winImg}
        <h3 class="header__title">Victoria</h3>
        ${npcPlayer[0].looseImg}
        </div>
        <div class="panel__txt">
            <p id="endgame__outcome--txt"><span>${humanPlayer[0].name}</span> ha demostrado ser una fuerza implacable, ha desentrañado los planes ocultos, ha superado las dificultades y ha obtenido la victoria gracias a tu astucia y determinación.</p>
        </div>
    `;
    EndgameTxtContainer.innerHTML = winEndgameTxt;
    // Restart Game
    restartGameBtn.addEventListener('click', () => {
        restartGame();
        localStorage.setItem('lastCharacter', humanPlayer[0].name);
        localStorage.setItem('lastCharacterImg', humanPlayer[0].winImg);
    });
};
function looseScreen(){
    sectionBattle.style.display = 'none';
    sectionEndgame.style.display = 'grid';
    sectionEndgame.setAttribute("style", "background-image: url('../img/backgrounds/loose-bg.jpg');");
    // Clean local storage
    localStorage.removeItem('npcWins');
    localStorage.removeItem('playerWins');
    // Add loose txt
    let looseEndgameTxt = `
        <div class="panel__header">
            ${humanPlayer[0].looseImg}
            <h3 class="header__title header__title--loose">Derrota</h3>
            ${npcPlayer[0].winImg}
        </div>
        <div class="panel__txt">
            <p class="loose__txt" id="endgame__outcome--txt">A pesar de tus esfuerzos, tu oponente <span>${npcPlayer[0].name}</span> se ha revelado como un adversario poderoso e implacable. Aunque has luchado valientemente, tus planes no han sido suficientes para superar sus trampas y tácticas. Aprende de esta derrota y vuelve a intentarlo con nueva astucia y determinación.</p> 
        </div> 
    `;
    EndgameTxtContainer.innerHTML = looseEndgameTxt;
    // Restart Game
    restartGameBtn.addEventListener('click', restartGame);
};
// Count rounds
function winRoundCounterChecker(){
    if (winRoundCounterPlayer == 3){
        winScreen();
    }  else if (winRoundCounterNpc == 3){
        looseScreen();
    }
};
// Stats
function resetStats(){
    // For human
    humanPlayer[0].lifeStat = humanPlayer[0].initialLife
    humanPlayer[0].manaStat = humanPlayer[0].initialMana
    // For Npc
    npcPlayer[0].lifeStat = npcPlayer[0].initialLife
    npcPlayer[0].manaStat = npcPlayer[0].initialLife
    statsUpdate();
};
// Update txt count
function updateRoundCount(){
    countRoundForPlayer.innerHTML = winRoundCounterPlayer;
    countRoundForNpc.innerHTML = winRoundCounterNpc;
};
// Stats checker (winRound / looseRound)
function statsChecker(){
    if(humanPlayer[0].lifeStat <=  0 || humanPlayer[0].manaStat <=  0){
        btnAttackSlash.disabled = true;
        btnAttackFire.disabled = true;
        btnAttackDaggers.disabled = true;
        winRoundCounterNpc++;
        localStorage.setItem('npcWins', winRoundCounterNpc)
        updateRoundCount();
        btnNextRound.disabled = false;
        btnNextRound.addEventListener('click', () => {
            resetStats();
            btnAttackSlash.disabled = false;
            btnAttackFire.disabled = false;
            btnAttackDaggers.disabled = false;
            btnNextRound.disabled = true;
            winRoundCounterChecker();
        })
    } else if(npcPlayer[0].lifeStat <=  0 || npcPlayer[0].manaStat <=  0){
        btnAttackSlash.disabled = true;
        btnAttackFire.disabled = true;
        btnAttackDaggers.disabled = true;
        winRoundCounterPlayer++;
        localStorage.setItem('playerWins', winRoundCounterPlayer)
        updateRoundCount();
        btnNextRound.disabled = false;
        btnNextRound.addEventListener('click', () => {
            resetStats();
            btnAttackSlash.disabled = false;
            btnAttackFire.disabled = false;
            btnAttackDaggers.disabled = false;
            btnNextRound.disabled = true;
            winRoundCounterChecker();
        })
    }
};
// Battle section
function battle(){
    sectionSelectCharacter.style.display = 'none';
    sectionBattle.style.display = 'grid';
    // Initial Characters Stats values
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
    assignAttackValues(humanPlayer[0].type, true);
    assignAttackValues(npcPlayer[0].type, false);
    // Print Attack Values
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
    btnAttackSlash.addEventListener('click', () => {
        slashAttack(true);
        randomAttackForNpc();
        statsUpdate();
        statsChecker();
    });
    btnAttackFire.addEventListener('click', () => {
        fireAttack(true);
        randomAttackForNpc();
        statsUpdate();
        statsChecker();

    });
    btnAttackDaggers.addEventListener('click', () => {
        daggersAttack(true);
        randomAttackForNpc();
        statsUpdate();
        statsChecker();
    });
};
function restartGame(){
    location.reload();
};
function randomNum(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min);
};
window.addEventListener('load', welcomeGame);
// Hecho con amor en 3 dias sin dormir disculpe si no se entiende o es mucho codigo innecesario❤️
