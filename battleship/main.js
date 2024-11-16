document.getElementById('submitInfo').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  if(name != ""){
    const session = document.getElementById('playerInfo');
    session.style.display = "none";
    const juego = document.getElementById('boards');
    juego.style.display = "block";
    juego.style.display = "flex";
    juego.style.height = "100%";
    boardGeneration("PS");
    boardGeneration("MS");
    boardGeneration("P");
    boardGeneration("M");
  }
});



function boardGeneration(type) {
  if(type == "P"){
    const boardPlayer = document.getElementById('player-board');
    for(let x = 1;x<=9;x++){
      let divFilas = document.createElement('div');
      divFilas.className = "filas";
      boardPlayer.appendChild(divFilas);
      for(let y = 1;y<=10;y++){
        let positionY = document.createElement('div');
        positionY.className = "columnas";
        positionY.id = `position${x}${y}${type}`;
        positionY.addEventListener('click', () => {
          handleClick(positionY.id);
        });
        divFilas.appendChild(positionY);
      }
    }
  }
  else if(type == "M") {
    const boardMachine = document.getElementById('computer-board');
    for(let x = 1;x<=9;x++){
      let divFilas = document.createElement('div');
      divFilas.className = "filas";
      boardMachine.appendChild(divFilas);
      for(let y = 1;y<=10;y++){
        let positionY = document.createElement('div');
        positionY.className = "columnas";
        positionY.id = `position${x}${y}${type}`;
        positionY.addEventListener('click', () => {
          handleClick(positionY.id);
        });
        divFilas.appendChild(positionY);
      }
    }
  }
}


function handleShipsPositionComputer(){
  for(let i = 1;i<=5;i++){
    const direction = Math.random() * (4 - 1) + 1;
    switch (direction) {
      case 1:

        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      default:
        break;
    }
  }
}


function handleClick(id){
  console.log(id);
}