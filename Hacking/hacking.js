



function clicar(){
    alert("O numero é : 2, Parabens! você encontrou um deles,mas nunca sera capaz de me parar");
    console.log("O ultimo número é 4, corra antes que ele consiga o objetivo!.")
}   
// function clicar2(){
//     var input = document.getElementById("#valor");
//     var texto = input.value;
// }

function verificar()
{
var resposta = document.getElementById("resposta")
resposta = resposta.value
if(resposta == 24){  
    enviar();
    alert("Hm? como voce acertou?! Você se acha muito esperto não é mesmo? Isso ainda nao acabou, voce nunca conseguira me parar, sei que biologia não é seu forte.");
}

}


function enviar(){
    window.location = "/Perguntas/perguntas.html"
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
            window.close();
            alert("Seu tempo Esgotou! Game Over")
            window.location = "/Lose/lose.html"

        }
    }, 1000);
}
window.onload = function () {
    var duration = 60 * 5; // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};