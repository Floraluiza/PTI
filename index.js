//ATIVIDADE PTI
//Aluna: Flora Santana

//Parte A
function comb(gasolina, alcool){
  consumo = alcool/gasolina
  consumo = consumo.toFixed(2)

  if(consumo<0.7){
    alert('\n Melhor consumo = '+ consumo + '\n Abasteça com Álcool! \n')
    }
    else if(consumo>0.7){
    alert('\n Melhor consumo = '+ consumo + '\n Abasteça com Gasolina! \n')
    }
    else{
    alert('\n Melhor consumo = '+ consumo + '\n Abasteça com qualquer um deles \n')
  }

return consumo;

}

//Parte B
do{
  alert('Consumo de Gasolina x Álcool')

  var gasolina = parseFloat(prompt('Preço da Gasolina: '))

  var alcool = parseFloat(prompt('Preço do Álcool: '))

  comb(gasolina,alcool)

  pergunta = prompt('Quer fazer outra consulta? (Sim/Não)')

  console.clear()

} while(pergunta=='Sim')

alert('valeu!')
