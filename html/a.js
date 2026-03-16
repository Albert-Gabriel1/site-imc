function clicou(){
    
    let peso = document.getElementById("peso")
   const dpeso = Number(peso).value
   let altura = document.getElementById('altura')
   const daltura = Number(altura).value
   const resposta = document.getElementById('resposta')
   const rest = dpeso / daltura * daltura
   resposta.innerHTML = `O seu imc é ${rest}`
}