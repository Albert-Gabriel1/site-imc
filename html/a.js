function clicou(){
    let peso = document.getElementById("peso")
   let dpeso = Number(peso.value)
   let altura = document.getElementById('altura')
   let daltura = Number(altura.value)
   let resposta = document.getElementById('resposta')
   let rest = dpeso / (daltura * daltura)
   if(rest< 18,5){
    resposta.innerHTML = `O seu imc é de ${rest.toFixed(2)} e você esta abaixo do peso`
   }
   
}