
// Personajes

class Personaje {
    constructor(tipo, img, vida, ataque, mana) {
      this.tipo = tipo;
      this.img = img;
      this.vida = vida;
      this.vidaInicial = vida;
      this.ataque = ataque;
      this.mana = mana;
      this.manaInicial = mana;
    }
  }
  
  const guerrero = new Personaje('guerrero', '<img src="./img/warrior.png" alt="">', 28000, 2000, 1600);
  const mago = new Personaje('mago', '<img src="./img/wizard.png" alt="">', 18000, 4000, 6000);
  const asesino = new Personaje('asesino', '<img src="./img/assassin.png" alt="">', 21000, 5000, 2400);
  
  const personajes = [guerrero, mago, asesino];
  
  // Ataques
 class Ataque {
    constructor(tipo, danio, mana) {
        this.tipo = tipo;
        this.danio = danio;
        this.mana = mana;
    }
 }

 const cuerpoACuerpo = new Ataque('Cuerpo a Cuerpo', 2000, 100);
 const bolaDeFuego = new Ataque('Hechizo', 5000, 1000);
 const dagasAsesinas = new Ataque('Sigilo', 3000, 600);

 const ataques = [cuerpoACuerpo, bolaDeFuego, dagasAsesinas];

  // Jugador y Enemigo
  const jugadorHumano = [];
  const jugadorPc = [];


function iniciarJuego(){
    
    // Escondemos la seccion de seleccionar ataque
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'none';

    // Escondemos la seccion de resultado
    let sectionResultado = document.getElementById('resultado');
    sectionResultado.style.display = 'none';

    // Stats GUERRERO
    let spanVidaGuerrero = document.getElementById('vida-guerrero');
    spanVidaGuerrero.innerHTML = personajes[0].vida;

    let spanAtaqueGuerrero = document.getElementById('ataque-guerrero');
    spanAtaqueGuerrero.innerHTML = personajes[0].ataque;

    let spanManaGuerrero = document.getElementById('mana-guerrero');
    spanManaGuerrero.innerHTML = personajes[0].mana;
    
    // Stats MAGO
    let spanVidaMago = document.getElementById('vida-mago');
    spanVidaMago.innerHTML = personajes[1].vida;

    let spanAtaqueMago = document.getElementById('ataque-mago');
    spanAtaqueMago.innerHTML = personajes[1].ataque;

    let spanManaMago = document.getElementById('mana-mago');
    spanManaMago.innerHTML = personajes[1].mana;

    // Stats ASESINO
    let spanVidaAsesino = document.getElementById('vida-asesino');
    spanVidaAsesino.innerHTML = personajes[2].vida;

    let spanAtaqueAsesino = document.getElementById('ataque-asesino');
    spanAtaqueAsesino.innerHTML = personajes[2].ataque;

    let spanManaAsesino = document.getElementById('mana-asesino');
    spanManaAsesino.innerHTML = personajes[2].mana;

   // Escuchamos el boton de seleccionar personaje
   let botonPersonajeJugador = document.getElementById('boton-personaje');
   botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);

}

function seleccionarPersonajeJugador(){
    // Escondemos la seccion de seleccionar personaje.
    let sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje');
    sectionSeleccionarPersonaje.style.display = 'none'
    
    // Mostramos la seccion de seleccionar ataque.
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'block';

    let inputGuerrero = document.getElementById('guerrero');
    let inputMago = document.getElementById('mago');
    let inputAsesino = document.getElementById('asesino');

    let spanPersonajeJugador = document.getElementById('personaje-jugador');
    let imagenJugador = document.getElementById('img-jugador');
    let spanVidaJugador = document.getElementById('vida-jugador');
    let spanAtaqueJugador = document.getElementById('ataque-jugador');
    let spanManaJugador = document.getElementById('mana-jugador');

    if (inputGuerrero.checked){
        jugadorHumano.push(personajes[0]);
        spanPersonajeJugador.innerHTML = jugadorHumano[0].tipo;
        imagenJugador.innerHTML = jugadorHumano[0].img;
        spanVidaJugador.innerHTML = jugadorHumano[0].vida;
        spanAtaqueJugador.innerHTML = jugadorHumano[0].ataque;
        spanManaJugador.innerHTML = jugadorHumano[0].mana;
    } else if (inputMago.checked){
        jugadorHumano.push(personajes[1]);
        spanPersonajeJugador.innerHTML = jugadorHumano[0].tipo;
        imagenJugador.innerHTML = jugadorHumano[0].img;
        spanVidaJugador.innerHTML = jugadorHumano[0].vida;
        spanAtaqueJugador.innerHTML = jugadorHumano[0].ataque;
        spanManaJugador.innerHTML = jugadorHumano[0].mana;
    } else if (inputAsesino.checked){
        jugadorHumano.push(personajes[2]);
        spanPersonajeJugador.innerHTML = jugadorHumano[0].tipo;
        imagenJugador.innerHTML = jugadorHumano[0].img;
        spanVidaJugador.innerHTML = jugadorHumano[0].vida;
        spanAtaqueJugador.innerHTML = jugadorHumano[0].ataque;
        spanManaJugador.innerHTML = jugadorHumano[0].mana;
    } else {
        // En caso de que no haya seleccionado personaje
        let aceptaSeleccionar = confirm('Por favor, seleccione un personaje para empezar la batalla.');

        if(aceptaSeleccionar){
            location.reload();
        } else {
            // Ah sos re troll jajaja
            window.close();
        }
    }

    seleccionarPersonajeEnemigo();
}

function seleccionarPersonajeEnemigo(){

    let personajeAleatorio = aleatorio(1,3);
    let spanPersonajeEnemigo = document.getElementById('personaje-enemigo');
    let spanVidaEnemigo = document.getElementById('vida-enemigo');
    let spanAtaqueEnemigo = document.getElementById('ataque-enemigo');
    let spanManaEnemigo = document.getElementById('mana-enemigo');
    let imagenEnemigo = document.getElementById('img-enemigo');

    if (personajeAleatorio == 1){
        jugadorPc.push(personajes[0]);
        spanPersonajeEnemigo.innerHTML = jugadorPc[0].tipo;
        imagenEnemigo.innerHTML = jugadorPc[0].img;
        spanVidaEnemigo.innerHTML = jugadorPc[0].vida;
        spanAtaqueEnemigo.innerHTML = jugadorPc[0].ataque;
        spanManaEnemigo.innerHTML = jugadorPc[0].mana;
        
    } else if (personajeAleatorio == 2){
        jugadorPc.push(personajes[1]);
        spanPersonajeEnemigo.innerHTML = jugadorPc[0].tipo;
        imagenEnemigo.innerHTML = jugadorPc[0].img;
        spanVidaEnemigo.innerHTML = jugadorPc[0].vida;
        spanAtaqueEnemigo.innerHTML = jugadorPc[0].ataque;
        spanManaEnemigo.innerHTML = jugadorPc[0].mana;
    } else {
        jugadorPc.push(personajes[2]);
        spanPersonajeEnemigo.innerHTML = jugadorPc[0].tipo;
        imagenEnemigo.innerHTML = jugadorPc[0].img;
        spanVidaEnemigo.innerHTML = jugadorPc[0].vida;
        spanAtaqueEnemigo.innerHTML = jugadorPc[0].ataque;
        spanManaEnemigo.innerHTML = jugadorPc[0].mana;
    }

    combate()
}


function actualizarStats(){
    
    // Stats jugador
    let VidaJugador = document.getElementById('vida-jugador');
    let ManaJugador = document.getElementById('mana-jugador');
    VidaJugador.innerHTML = jugadorHumano[0].vida;
    ManaJugador.innerHTML= jugadorHumano[0].mana;

    // Stats enemigo
    let VidaEnemigo = document.getElementById('vida-enemigo');
    let ManaEnemigo = document.getElementById('mana-enemigo');
    VidaEnemigo.innerHTML = jugadorPc[0].vida;
    ManaEnemigo.innerHTML = jugadorPc[0].mana;
}

function ataqueCuerpoACuerpo(atacante, defensor){
    if (atacante.tipo == 'guerrero'){
        defensor.vida = defensor.vida - (ataques[0].danio * 1.5); 
        actualizarStats();
    } else if (atacante.tipo == 'mago'){
            if(atacante.mana >= ataques[0].mana * 10){
                defensor.vida = defensor.vida - (ataques[0].danio * 0.3);
                atacante.mana = atacante.mana - (ataques[0].mana * 10);
                atacante.vida = atacante.vida + 150;
                actualizarStats();
            } else if (atacante == jugadorHumano[0]) {
                let botonAtaqueCuerpo = document.getElementById('ataque-cuerpo');
                botonAtaqueCuerpo.disabled = true;
            } else {
                atacante.vida = atacante.vida + 500;
                atacante.mana = atacante.mana + 500;
                actualizarStats();
            }
    } else if (atacante.tipo == 'asesino'){
        if(atacante.mana >=  ataques[0].mana * 6){
            defensor.vida = defensor.vida - atacante.ataque;
            atacante.mana = atacante.mana - (ataques[0].mana * 6);
            atacante.vida = atacante.vida + 50;
            actualizarStats();
        } else if (atacante == jugadorHumano[0]) {
            let botonAtaqueCuerpo = document.getElementById('ataque-cuerpo');
            botonAtaqueCuerpo.disabled = true;
        } else {
            atacante.vida = atacante.vida + 500;
            atacante.mana = atacante.mana + 500;
            actualizarStats();
        }
    }
}

function ataqueHechizo(atacante, defensor){
    if (atacante.tipo == 'guerrero'){
        if(atacante.mana >= ataques[1].mana * 1.2){
            defensor.vida = defensor.vida - (ataques[1].danio * 0.7);
            atacante.mana = atacante.mana - (ataques[1].mana * 1.2);
            actualizarStats();
        } else if (atacante == jugadorHumano[0]) {
            let botonAtaqueHechizo = document.getElementById('ataque-hechizo');
            botonAtaqueHechizo.disabled = true;
        } else {
            atacante.vida = atacante.vida + 500;
            atacante.mana = atacante.mana + 500;
            actualizarStats();
        }
    } else if (jugadorHumano[0].tipo == 'mago'){
        if (atacante.mana >= ataques[1].mana * 0.8){
            defensor.vida = defensor.vida - (ataques[1].danio * 1.2);
            atacante.mana = atacante.mana - (ataques[1].mana * 0.9);
            atacante.vida = atacante.vida + 150;
            actualizarStats();
        } else if (atacante == jugadorHumano[0]) {
            let botonAtaqueHechizo = document.getElementById('ataque-hechizo');
            botonAtaqueHechizo.disabled = true;
        } else {
            atacante.vida = atacante.vida + 500;
            atacante.mana = atacante.mana + 500;
            actualizarStats();
        }
    } else if (atacante.tipo == 'asesino'){
        if (atacante.mana >= ataques[1].mana * 1.1){
            defensor.vida = defensor.vida - (ataques[1].danio * 0.9);
            atacante.mana = atacante.mana - (ataques[1].mana * 1.1);
            atacante.vida = atacante.vida + 100;
            actualizarStats();
        } else if (atacante == jugadorHumano[0]) {
            let botonAtaqueHechizo = document.getElementById('ataque-hechizo');
            botonAtaqueHechizo.disabled = true;
        } else {
            atacante.vida = atacante.vida + 500;
            atacante.mana = atacante.mana + 500;
            actualizarStats();
        }
    }
}

function ataqueDagas(atacante, defensor){
    if (atacante.tipo == 'guerrero'){

        if(atacante.mana >= ataques[2].mana * 1.1){
            defensor.vida = defensor.vida - (ataques[2].danio * 0.9);
            atacante.mana = atacante.mana - (ataques[2].mana * 1.1);
            actualizarStats();
        } else if (atacante == jugadorHumano[0]) {
            let botonAtaqueDagas = document.getElementById('ataque-dagas');
            botonAtaqueDagas.disabled = true;
        } else {
            atacante.vida = atacante.vida + 500;
            atacante.mana = atacante.mana + 500;
            actualizarStats();
        }

    } else if (atacante.tipo == 'mago'){

        if (atacante.mana >= ataques[2].mana * 1.9){
            defensor.vida = defensor.vida - (ataques[2].danio * 0.5);
            atacante.mana = atacante.mana - (ataques[2].mana * 1.9);
            atacante.vida = atacante.vida + 500;
            atacante.mana = atacante.mana + 500;
            actualizarStats();
        } else if (atacante == jugadorHumano[0]) {
            let botonAtaqueDagas = document.getElementById('ataque-dagas');
            botonAtaqueDagas.disabled = true;
        } else {
            atacante.vida = atacante.vida + 500;
            atacante.mana = atacante.mana + 500;
            actualizarStats();
        }

    } else if (atacante.tipo == 'asesino'){

        if(atacante.mana >= ataques[2].mana * 0.7){
            defensor.vida = defensor.vida - (ataques[2].danio * 1.3);
            atacante.mana = atacante.mana - (ataques[2].mana * 1);
            atacante.vida = atacante.vida + 150;
            atacante.mana = atacante.mana + 500;
            actualizarStats();
        } else if (atacante == jugadorHumano[0]) {
            let botonAtaqueDagas = document.getElementById('ataque-dagas');
            botonAtaqueDagas.disabled = true;
        } else {
            atacante.vida = atacante.vida + 500;
            atacante.mana = atacante.mana + 500;
            actualizarStats();
        }
    }

}


function ataqueAleatorio(atacante, defensor){
    let numeroAleatorioAtaque = aleatorio(1, 3);

    if (numeroAleatorioAtaque == 1){
        ataqueCuerpoACuerpo(atacante, defensor);
    } else if (numeroAleatorioAtaque == 2){
        ataqueHechizo(atacante, defensor);
    } else if (numeroAleatorioAtaque == 3){
        ataqueDagas(atacante, defensor);
    }
}

function reiniciarStats(){
    
    // Stats jugador
    jugadorHumano[0].vida = jugadorHumano[0].vidaInicial;
    jugadorHumano[0].ataque = jugadorHumano[0].ataqueInicial;
    jugadorHumano[0].mana = jugadorHumano[0].manaInicial;

    let VidaJugador = document.getElementById('vida-jugador');
    let ManaJugador = document.getElementById('mana-jugador');
    VidaJugador.innerHTML = jugadorHumano[0].vida;
    ManaJugador.innerHTML= jugadorHumano[0].mana;

    // Stats enemigo
    jugadorPc[0].vida = jugadorPc[0].vidaInicial;
    jugadorPc[0].ataque = jugadorPc[0].ataqueInicial;
    jugadorPc[0].mana = jugadorPc[0].manaInicial;

    let VidaEnemigo = document.getElementById('vida-enemigo');
    let ManaEnemigo = document.getElementById('mana-enemigo');
    VidaEnemigo.innerHTML = jugadorPc[0].vida;
    ManaEnemigo.innerHTML = jugadorPc[0].mana;
}

function revisarStats() {
    for (let i = 0; i < 3; i++) {
      if (jugadorHumano[0].vida <= 0) {

        // Escondemos la seccion de seleccionar ataque
        let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
        sectionSeleccionarAtaque.style.display = 'none';
        // Mostramos la seccion de resultado
        let sectionResultado = document.getElementById('resultado');
        sectionResultado.style.display = 'block';

        let spanImgResultado = document.getElementById('img-resultado');
        spanImgResultado.innerHTML = jugadorHumano[0].img;

        let spanPersonajeResultado = document.getElementById('personaje-resultado');
        spanPersonajeResultado.innerHTML = jugadorHumano[0].tipo;

        let spanResultadoFinal = document.getElementById('resultado-span');
        spanResultadoFinal.innerHTML = 'sido derrotado.';

        let botonReinicio = document.getElementById('boton-reiniciar');
        botonReinicio.addEventListener('click', reiniciarJuego);

      } else if (jugadorPc[0].vida <= 0) {

        // Escondemos la seccion de seleccionar ataque
        let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
        sectionSeleccionarAtaque.style.display = 'none';

        // Mostramos la seccion de resultado
        let sectionResultado = document.getElementById('resultado');
        sectionResultado.style.display = 'block';
        
        let spanImgResultado = document.getElementById('img-resultado');
        spanImgResultado.innerHTML = jugadorHumano[0].img;

        let spanPersonajeResultado = document.getElementById('personaje-resultado');
        spanPersonajeResultado.innerHTML = jugadorHumano[0].tipo;

        let spanResultadoFinal = document.getElementById('resultado-span');
        spanResultadoFinal.innerHTML = 'vencido a su oponente.';

        let botonReinicio = document.getElementById('boton-reiniciar');
        botonReinicio.addEventListener('click', reiniciarJuego);
      }
    }
}

function combate(){

    let spanDanioAtaqueCuerpoACuerpo = document.getElementById('danio-ataque-cac');
    spanDanioAtaqueCuerpoACuerpo.innerHTML = ataques[0].danio;
    let spanManaAtaqueCuerpoACuerpo = document.getElementById('mana-ataque-cac');
    spanManaAtaqueCuerpoACuerpo.innerHTML = ataques[0].mana;
    let spanDanioAtaqueHechizo = document.getElementById('danio-ataque-h');
    spanDanioAtaqueHechizo.innerHTML = ataques[1].danio;
    let spanManaAtaqueHechizo = document.getElementById('mana-ataque-h');
    spanManaAtaqueHechizo.innerHTML = ataques[1].mana;
    let spanDanioAtaqueDagasAsesinas = document.getElementById('danio-ataque-da');
    spanDanioAtaqueDagasAsesinas.innerHTML = ataques[2].danio;
    let spanManaAtaqueDagasAsesinas = document.getElementById('mana-ataque-da');
    spanManaAtaqueDagasAsesinas.innerHTML = ataques[2].mana;

    let botonAtaqueCuerpo = document.getElementById('ataque-cuerpo');
    botonAtaqueCuerpo.addEventListener('click', function() {
    ataqueCuerpoACuerpo(jugadorHumano[0], jugadorPc[0]);
    ataqueAleatorio(jugadorPc[0], jugadorHumano[0]);
    revisarStats();
    });

    let botonAtaqueHechizo = document.getElementById('ataque-hechizo');
    botonAtaqueHechizo.addEventListener('click', function() {
    ataqueHechizo(jugadorHumano[0], jugadorPc[0]);
    ataqueAleatorio(jugadorPc[0], jugadorHumano[0]);
    revisarStats();
    });

    let botonAtaqueDagas = document.getElementById('ataque-dagas');
    botonAtaqueDagas.addEventListener('click', function() {
    ataqueDagas(jugadorHumano[0], jugadorPc[0]);
    ataqueAleatorio(jugadorPc[0], jugadorHumano[0]);
    revisarStats();
    });
}


function reiniciarJuego(){
    location.reload();
}

function aleatorio(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego);


