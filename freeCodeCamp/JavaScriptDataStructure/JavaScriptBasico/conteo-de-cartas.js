var count = 0;

function cc(card) {
  // Cambia solo el código debajo de esta línea
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count++;
    break;

    case 7:
    case 8:
    case 9:
    count;
    break;

    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
    count --;
    break;
  }

  if(count >= 1){
    return `${count} Bet`;
  } else if(count <= 0){
    return `${count} Hold`
  }
  // Cambia solo el código encima de esta línea
}

cc(2); cc(3); cc(7); cc('K'); cc('A');