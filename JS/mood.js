//contento sera true si esta contento y si esta triste es false
let contento;
let sonidoSwitch = document.getElementById("sonido");
let sonidoCarga = document.getElementById("sonido");

//funció per a mostrar i ocultar divs
function canviaDiv() {
    document.getElementById("sentimientos").style.display = "flex";
    document.getElementById("sentimientos").style.flexDirection = "row";
    document.getElementById("sentimientos").style.justifyContent = "center";
    document.getElementById("sentimientos").style.alignContent = "center";
    document.getElementById("inicio").style.display = "none";
}

function estaContento(valor) {
    contento = valor;
    document.getElementById("opcion").style.display = "block";
    document.getElementById("sentimientos").style.display = "none";
}

function muestraPeli() {
    document.getElementById("opcion").style.display = "none";

    if (contento == true) {
        let numero = Math.floor(Math.random() * pelisCont.length);
        document.getElementById("titulo").innerHTML = pelisCont[numero].titulo;
        document.getElementById("descripcion").innerHTML = pelisCont[numero].descripcion;
        document.getElementById("image").src = pelisCont[numero].img;
        document.getElementById("iconoCara1").src = pelisCont[numero].img3;
        document.getElementById("iconoElemento1").src = pelisCont[numero].img2;
        document.getElementById("ver").setAttribute("href", pelisCont[numero].site);
        document.getElementById("escuchar").setAttribute("href", pelisCont[numero].site);



    } else {
        let numero2 = Math.floor(Math.random() * pelisTriste.length);
        document.getElementById("titulo2").innerHTML = pelisTriste[numero2].titulo;
        document.getElementById("descripcion2").innerHTML = pelisTriste[numero2].descripcion;
        document.getElementById("image2").src = pelisTriste[numero2].img;
        document.getElementById("iconoCara2").src = pelisTriste[numero2].img3;
        document.getElementById("iconoElemento2").src = pelisTriste[numero2].img2;
        document.getElementById("ver").setAttribute("href", pelisTriste[numero2].site);
        document.getElementById("escuchar").setAttribute("href", pelisTriste[numero2].site);



    }
    document.getElementById("ver").innerHTML = "Ver";
    document.getElementById("escuchar").innerHTML = "Ver";

}




//Logotipo
//Movimiento Boca
TweenMax.to("#espases1", 0.7, {
    morphSVG: {
        shape: "#espases2"
    },
    repeat: -1,
    yoyo: true
});


//Movimiento Ceja
TweenLite.to("#C1", 0.7, {
    y: 25,
    onComplete: onComplete,
    onReverseComplete: onComplete,
    ease: SlowMo.ease.config(0.7, 0.7, false)
});

function onComplete() {
    this.reversed(!this.reversed());
}

TweenLite.to("#C2", 0.7, {
    y: -25,
    onComplete: onComplete,
    onReverseComplete: onComplete,
    ease: SlowMo.ease.config(0.7, 0.7, false)
});

//Movimiento Ojos
let bool1 = true;

let intOjoBoca = setInterval(function () {
    if (bool1 == true) {
        bool1 = false;

        $(".circulo, .circulo1").css("display", "none");
        $(".linea, .linea1").css("display", "block");
    } else {
        bool1 = true;
        $(".circulo, .circulo1").css("display", "block");
        $(".linea, .linea1").css("display", "none");
    }

}, 700);


function muestraIntro() {

    clearInterval(intOjoBoca);
    $(".circulo, .circulo1").css("display", "block");
    $(".linea, .linea1").css("display", "none");

    //Zoom logo
    TweenLite.to("#start", 1.2, {
        scale: 500,
        //delay: 3,
        x: 700,
        y: 100,
        onComplete: muestraExplicacion,
        ease: Power0.easeNone
    });

}

$("#start").click(muestraIntro);

function onComplete() {
    this.reversed(!this.reversed());
}


function muestraExplicacion() {
    //Hacer visible el div con la explicacion
    document.getElementById("TextoExplicacion").style.display = "flex";
    document.getElementById("TextoExplicacion").style.opacity = "1";
    document.getElementById("boton").style.display = "none";
    document.getElementById("start").style.display = "none";
    document.getElementById("TE").style.opacity = "none";
    //TextoExplicacion
    TweenLite.to("#TE", 2, {
        opacity: 1,
        ease: SlowMo.ease.config(0.5, 0.5, false)
    });
}






let bool2 = true;

setInterval(function () {
    if (bool2 == true) {
        bool2 = false;

        $(".circuloP1, .circulo1P1").css("display", "none");
        $(".lineaP1, .linea1P1").css("display", "block");
    } else {
        bool2 = true;
        $(".circuloP1, .circulo1P1").css("display", "block");
        $(".lineaP1, .linea1P1").css("display", "none");
    }

}, 500, Elastic.easeOut.config(1, 0.3), );






function muestraCancion() {
    document.getElementById("opcion").style.display = "none";

    if (contento == true) {
        document.getElementById("solucion").style.display = "flex";
        let numero3 = Math.floor(Math.random() * cancionesCont.length);
        document.getElementById("titulo").innerHTML = cancionesCont[numero3].titulo;

        document.getElementById("descripcion").innerHTML = cancionesCont[numero3].descripcion;
        document.getElementById("image").src = cancionesCont[numero3].img;
        document.getElementById("iconoCara1").src = cancionesCont[numero3].img3;
        document.getElementById("iconoElemento1").src = cancionesCont[numero3].img2;
        document.getElementById("ver").setAttribute("href", cancionesCont[numero3].site);
        document.getElementById("escuchar").setAttribute("href", cancionesCont[numero3].site);


    } else {
        document.getElementById("solucion2").style.display = "flex";
        let numero4 = Math.floor(Math.random() * cancionesTrist.length);

        document.getElementById("titulo2").innerHTML = cancionesTrist[numero4].titulo;

        document.getElementById("descripcion2").innerHTML = cancionesTrist[numero4].descripcion;
        document.getElementById("image2").src = cancionesTrist[numero4].img;
        document.getElementById("iconoCara2").src = cancionesTrist[numero4].img3;
        document.getElementById("iconoElemento2").src = cancionesTrist[numero4].img2;
        document.getElementById("ver").setAttribute("href", cancionesTrist[numero4].site);
        document.getElementById("escuchar").setAttribute("href", cancionesTrist[numero4].site);

    }
    document.getElementById("ver").innerHTML = "Escuchar";
    document.getElementById("escuchar").innerHTML = "Escuchar";
}

function canviaCarta() {
    document.getElementById("respuesta").style.display = "none";
    document.getElementById("respuesta2").style.display = "flex";
    document.getElementById("respuesta3").style.display = "none";
    document.getElementById("respuesta4").style.display = "flex";
    document.getElementById("flecha").style.display = "none";
    document.getElementById("flecha2").style.display = "none";

    document.getElementById("home").style.width = "25%";

    document.getElementById("home2").style.width = "25%";

    var girada = true;
}



function moverSwitch() {
    var feliz = document.getElementById("feliz");
    var padre = document.getElementById("sentimientos");


    if (feliz.style.marginLeft == "50.5vw") {
        feliz.style.backgroundImage = "url(../img/CaraContento.svg)";

        if (window.matchMedia("(max-width: 600px)").matches) {
            feliz.style.marginLeft = "28.5vw";
        } else if (window.matchMedia("(min-width: 600px) and (max-width: 800px)").matches) {
            feliz.style.marginLeft = "36.3vw";
        } else {
            feliz.style.marginLeft = "43.5vw";
        }
        
        
        if (window.matchMedia("(max-width: 600px)").matches) {
            feliz.style.marginLeft = "28.5vw";
        } else if (window.matchMedia("(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)").matches) {
            feliz.style.marginLeft = "36.3vw";
        } else {
            feliz.style.marginLeft = "43.5vw";
        }
        

        feliz.style.transition = ".5s";
        padre.style.backgroundImage = "url(../img/fondoAmarillo.jpg)";
        padre.style.transition = ".5s";
        document.getElementById("destacarPalabra2").style.fontSize = "40px";
        document.getElementById("destacarPalabra2").style.color = "#31305f";
        document.getElementById("destacarPalabra1").style.fontSize = "50px";
        document.getElementById("destacarPalabra1").style.color = "white";
        document.getElementById("espases5").style.display = "block";
        document.getElementById("espases4").style.display = "none";
        contento = false;

        sonidoSwitch.src = "sonidos/ida-swich.mp3";
        sonidoSwitch.play();

    } else {
        feliz.style.backgroundImage = "url(../img/CaraTriste.svg)";
        feliz.style.marginLeft = "50.5vw";
        feliz.style.transition = ".5s";
        padre.style.backgroundImage = "url(../img/fondoRojo.jpg)";
        padre.style.transition = ".5s";
        document.getElementById("destacarPalabra1").style.fontSize = "40px";
        document.getElementById("destacarPalabra1").style.color = "#31305f";
        document.getElementById("destacarPalabra2").style.fontSize = "50px";
        document.getElementById("destacarPalabra2").style.color = "white";
        document.getElementById("espases4").style.display = "block";
        document.getElementById("espases5").style.display = "none";
        contento = true;

        sonidoSwitch.src = "sonidos/vuelta-swich.mp3";
        sonidoSwitch.play();

    }

}


function moverSwitch2() {
    var amarillo = document.getElementById("feliz2");


    if (amarillo.style.marginLeft == "50.5vw") {
        amarillo.style.backgroundImage = "url(../img/microAmarillas.svg)";

        if (window.matchMedia("(max-width: 600px)").matches) {
            amarillo.style.marginLeft = "28.5vw";
        } else if (window.matchMedia("(min-width: 600px) and (max-width: 800px)").matches) {
            amarillo.style.marginLeft = "36.3vw";
        } else {
            amarillo.style.marginLeft = "43.5vw";
        }
        
        
        
        if (window.matchMedia("(max-width: 600px)").matches) {
            amarillo.style.marginLeft = "28.5vw";
        } else if (window.matchMedia("(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)").matches) {
            amarillo.style.marginLeft = "36.3vw";
        } else {
            amarillo.style.marginLeft = "43.5vw";
        }

        amarillo.style.transition = ".5s";
        document.getElementById("destacarPalabra4").style.fontSize = "40px";
        document.getElementById("destacarPalabra4").style.color = "#31305f";
        document.getElementById("destacarPalabra3").style.fontSize = "50px";
        document.getElementById("destacarPalabra3").style.color = "white";


        sonidoSwitch.src = "sonidos/ida-swich.mp3";
        sonidoSwitch.play();



    } else {
        amarillo.style.backgroundImage = "url(../img/palomitasAmarillas.svg)";
        amarillo.style.marginLeft = "50.5vw";
        amarillo.style.transition = ".5s";
        document.getElementById("destacarPalabra3").style.fontSize = "40px";
        document.getElementById("destacarPalabra3").style.color = "#31305f";
        document.getElementById("destacarPalabra4").style.fontSize = "50px";
        document.getElementById("destacarPalabra4").style.color = "white";

        sonidoSwitch.src = "sonidos/vuelta-swich.mp3";
        sonidoSwitch.play();
    }

}



function moverSwitch3() {
    var rojo = document.getElementById("feliz3");


    if (rojo.style.marginLeft == "50.5vw") {

        if (window.matchMedia("(max-width: 600px)").matches) {
            rojo.style.marginLeft = "28.5vw";
        } else if (window.matchMedia("(min-width: 600px) and (max-width: 800px)").matches) {
            rojo.style.marginLeft = "36.3vw";
        } else {
            rojo.style.marginLeft = "43.5vw";
        }

        if (window.matchMedia("(max-width: 600px)").matches) {
            rojo.style.marginLeft = "28.5vw";
        } else if (window.matchMedia("(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)").matches) {
            rojo.style.marginLeft = "36.3vw";
        } else {
            rojo.style.marginLeft = "43.5vw";
        }
        
        
        rojo.style.backgroundImage = "url(../img/CancionesTristes.svg)";
        rojo.style.transition = ".5s";
        document.getElementById("destacarPalabra6").style.fontSize = "40px";
        document.getElementById("destacarPalabra6").style.color = "#31305f";
        document.getElementById("destacarPalabra5").style.fontSize = "50px";
        document.getElementById("destacarPalabra5").style.color = "white";

        sonidoSwitch.src = "sonidos/vuelta-swich.mp3";
        sonidoSwitch.play();



    } else {
        rojo.style.backgroundImage = "url(../img/PeliculasTristes.svg)";

        rojo.style.marginLeft = "50.5vw";
        rojo.style.transition = ".5s";
        document.getElementById("destacarPalabra5").style.fontSize = "40px";
        document.getElementById("destacarPalabra5").style.color = "#31305f";
        document.getElementById("destacarPalabra6").style.fontSize = "50px";
        document.getElementById("destacarPalabra6").style.color = "white";

        sonidoSwitch.src = "sonidos/vuelta-swich.mp3";
        sonidoSwitch.play();


    }

}

function flecha1() {
    if (feliz.style.marginLeft == "50.5vw") {
        document.getElementById("sentimientos").style.display = "none";
        document.getElementById("opcion2").style.display = "flex";
        contento = false;

    } else {
        document.getElementById("opcion").style.display = "flex";
        document.getElementById("sentimientos").style.display = "none";
        contento = true;
    }

}

function flecha2() {


    if (document.getElementById("feliz2").style.marginLeft == "50.5vw") {

        document.getElementById("Load2").style.display = "flex";
        setTimeout(function () {
            document.getElementById("Load2").style.display = "none";
        }, 3000);


        document.getElementById("opcion").style.display = "none";
        document.getElementById("solucion").style.display = "flex";

        muestraPeli();


    } else {
        TweenMax.to("#Load", 0, {
            display: "flex"
        })
        TweenMax.to("#Load", 0, {
            display: "none",
            delay: 3,
        })



        document.getElementById("opcion").style.display = "none";
        document.getElementById("solucion").style.display = "flex";

        muestraCancion();


    }
    sonidoCarga.src = "sonidos/carga.mp3";
    sonidoCarga.play();
}

function flecha3() {

    if (document.getElementById("feliz3").style.marginLeft == "50.5vw") {

        document.getElementById("Load3").style.display = "flex";
        setTimeout(function () {
            document.getElementById("Load3").style.display = "none";
        }, 3000);

        document.getElementById("opcion2").style.display = "none";
        document.getElementById("solucion2").style.display = "flex";

        //Pelicula Triste
        document.getElementById("Load3").style.display = "flex";

        muestraPeli();


    } else {

        TweenMax.to("#Load1", 0, {
            display: "flex"
        })
        TweenMax.to("#Load1", 0, {
            display: "none",
            delay: 3
        })

        document.getElementById("opcion2").style.display = "none";
        document.getElementById("solucion2").style.display = "flex";

        //Pelicula Contento
        document.getElementById("Load1").style.display = "flex";

        muestraCancion();

    }
    sonidoCarga.src = "sonidos/carga.mp3";
    sonidoCarga.play();
}


function tornarAlInici() {
    document.getElementById("solucion").style.display = "none";
    document.getElementById("solucion2").style.display = "none";
    document.getElementById("sentimientos").style.display = "flex";

    var feliz = document.getElementById("feliz");
    var padre = document.getElementById("sentimientos");

    feliz.style.backgroundImage = "url(../img/CaraContento.svg)";
    if (window.matchMedia("(max-width: 600px)").matches) {
        feliz.style.marginLeft = "28.5vw";
    } else if (window.matchMedia("(min-width: 600px) and (max-width: 800px)").matches) {
        feliz.style.marginLeft = "36.3vw";
    } else {
        feliz.style.marginLeft = "43.5vw";
    }
    
    
    if (window.matchMedia("(max-width: 600px)").matches) {
            feliz.style.marginLeft = "28.5vw";
        } else if (window.matchMedia("(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)").matches) {
            feliz.style.marginLeft = "36.3vw";
        } else {
            feliz.style.marginLeft = "43.5vw";
        }
    
    padre.style.backgroundImage = "url(../img/fondoAmarillo.jpg)";

    document.getElementById("destacarPalabra2").style.fontSize = "40px";
    document.getElementById("destacarPalabra2").style.color = "#31305f";
    document.getElementById("destacarPalabra1").style.fontSize = "50px";
    document.getElementById("destacarPalabra1").style.color = "white";
    document.getElementById("espases5").style.display = "block";
    document.getElementById("espases4").style.display = "none";
    contento = false;

    if (girada = true) {
        document.getElementById("respuesta").style.display = "flex";
        document.getElementById("respuesta2").style.display = "none";

        document.getElementById("respuesta3").style.display = "flex";
        document.getElementById("respuesta4").style.display = "none";

        document.getElementById("flecha").style.display = "flex";

        document.getElementById("flecha2").style.display = "flex";

        girada = false;
    }


}
