// função que converte um inteiro em sua forma abreviada

function abreviarNum(numero){
  const unid = ["", "K","M","B","T"];
  let index = 0;

  while(numero >= 1000 && index < unid.length - 1){
    numero /= 1000;
    index++;
}

const inteiro = Math.floor(numero);;
const decimal = Math.floor((numero - inteiro) * 10);

return `${inteiro}${unid[index]}${decimal > 0 ? decimal : ''}`;
}
console.log(abreviarNum(150));
console.log(abreviarNum(15000000));
console.log(abreviarNum(150000));
console.log(abreviarNum(1560));