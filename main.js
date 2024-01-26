//Módulos y Estilos || Modules and Styles
import './style.css';
import random from 'random';
//LMHT || HTML
const nombreJugadorInput = document.querySelector("#new-player-name");
const playerRows = document.querySelector("#player-rows");
const buttonAddPlayer = document.querySelector("#add-player");

//CONSTANTES || CONSTANTS
let inGame = false;
const jugadores = {};
//Métodos || Methods
const updatePlayerRows = function(){
  playerRows.innerHTML = '';
  Object.keys(jugadores).forEach(function(nombre){
    const puntaje = jugadores[nombre];
    playerRows.innerHTML += `
    <tr>
      <th>${nombre}</th>
      <th>${puntaje}</th>
    </tr>
    `;
  });
};
const addPlayer = function(){
  const nombre = nombreJugadorInput.value;  //Lee el input || Reads input
  if(nombre != ""){
    jugadores[nombre] = 0; // Añade el jugador || Adds player
  }else{
    jugadores["FunAlbatross" + random.int(1000, 9999)] = 0;
  }
  nombreJugadorInput.value = "";
  console.table( jugadores );
  updatePlayerRows();
};
const deletePlayer = function(e){
  console.log(e.target);
};
//Eventos || Events
buttonAddPlayer.addEventListener('click', addPlayer);
document.addEventListener('keydown', function(e){
  if(e.key == "Enter" && !inGame){
    addPlayer();
  }
});
[ ...document.querySelectorAll("#player-rows>tr") ].forEach( function(row){
  row.addEventListener('click', deletePlayer);
});