function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === "audio"){
             elemento.play()
    }
    else {
        console.log("elemento inválido ou seletor inválido")
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = (evento) => {
        console.log(evento)
        if(evento.code === "Space" || evento.code === "Enter"){
            tecla.classList.add("ativa")
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove("ativa")
    }
}


/*let tocaSom = document.querySelector(".tecla_pom").addEventListener("click", ()=>{
    document.querySelector("#som_tecla_pom").play()
})*/