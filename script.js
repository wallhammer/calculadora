function KMaM()
{
    let entrada = document.querySelector("#entradakilometros");
    let valor = Number(entrada.value);
    valor/=1.609;
    let salida = document.querySelector("#salidamillas");
    salida.value = valor;
}
function KaL()
{
    let entrada= document.querySelector("#entradakilo");
    let valor = Number(entrada.value);
    valor*=2.205;
    let salida = document.querySelector("#salidalibra")
    salida.value=valor;
}
function JaBTU()
{
    let entrada= document.querySelector("#entradajulio");
    let valor = Number(entrada.value);
    valor=valor*1.944;
    let salida = document.querySelector("#salidaBTU")
    salida.value=valor;
}
function SaN()
{
    let entrada= document.querySelector("#entradasegundo");
    let valor = Number(entrada.value);
    valor/=1055;
    let salida = document.querySelector("#salidanudo")
    salida.value=valor;
}
let boton1=document.querySelector("#convertirmillas");
boton1.addEventListener('click',KMaM);

let botonmasa = document.querySelector("#convertirmasa");
botonmasa.addEventListener('click',KaL);

let botonEnergia = document.querySelector("#convertirBTU");
botonEnergia.addEventListener('click',JaBTU);

let botonvelocidad = document.querySelector("#convertirnudo");
botonvelocidad.addEventListener('click',SaN);