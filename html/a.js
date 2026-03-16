function clicou(){
    let peso = document.getElementById("peso")
   let dpeso = Number(peso.value)
   let altura = document.getElementById('altura')
   let daltura = Number(altura.value)
   let resposta = document.getElementById('resposta')
   let rest = dpeso / (daltura * daltura)
   if(rest< 18.5){
    resposta.innerHTML = `O seu imc é de ${rest.toFixed(2)} e você está abaixo do peso`
   }
   else if (rest >=18.5 && rest<=24.9){
    resposta.innerHTML = `O seu imc é de ${rest.toFixed(2)} e você está com o peso ideal`
   }
   else if (rest >=25.5 && rest<=29.9){
    resposta.innerHTML = `O seu imc é de ${rest.toFixed(2)} e você está com sobrepeso`
   }
   else if (rest >=30.0 && rest <=34.9){
    resposta.innerHTML = `O seu imc é de ${rest.toFixed(2)} e você está com obesidade`
   }
   else if (rest >=35.0 && rest <=39.9){
    resposta.innerHTML = `O seu imc é de ${rest.toFixed(2)} e você está com obesidade severa`
   }
   else if (rest >40.0){
    resposta.innerHTML = `O seu imc é de ${rest.toFixed(2)} e você está acom obesidade morbida`
   }
   else{
    alert("[404 Not Found] Numero valido não encontrado")
   }
}