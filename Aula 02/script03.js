function palindromo(value) {
  let aux;
  if (value.includes('-')) {
    aux = value
      .split('-')
      .join(' ')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .split('')
      .filter((value) => value !== ' ');
  } else {
    aux = value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .split('')
      .filter((value) => value !== ' ');
  }
  const frase = JSON.stringify(aux);
  const fraseReversa = JSON.stringify(aux.reverse());
  return frase === fraseReversa;
}

const frase = prompt('Informe uma frase');

if (frase.length > 0) {
  const y = +frase;

  if (!isNaN(y)) {
    alert('Foi informado um número, por favor informe apenas frases!!!');
  } else {
    if (palindromo(frase)) {
      alert('A frase informada é um palíndromo');
    } else {
      alert('A frase informada não é um palíndromo');
    }
  }
} else {
  alert('Inforne alguma frase!!!');
}