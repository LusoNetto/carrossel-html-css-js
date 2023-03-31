let contador = 0;
let valor = 0;
primeira = document.getElementById("primeira")

setInterval( function() {
    contador++;
    if(contador>3){
        contador = 0;
    }
    mudarImagem(contador);
}, 5000)

function mudarImagem(contador) {
    primeira.style.marginLeft = `${-contador*25}%`
}