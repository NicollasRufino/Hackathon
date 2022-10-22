function verificar_perguntas()
{
var resposta = document.getElementById("resposta")
resposta = resposta.value
if(resposta == "db"){  
    enviar();
}
else{
    alert("Voce errou!");
}

}


function enviar(){
    window.location = "/Final/final.html"
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
window.close();