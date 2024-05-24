function calculoDanoFisico(x){
    0.01 * (((1 + estadisticas[x].ataque * movimientos.impactrueno)/25 * estadisticas[x].defensa)+2);
};
function llamarPokemon(pokemonElegido){
    elegirPokemon.innerHTML = "";
    if (pokemonElegido === 1){
        primerosAtaques.innerHTML = "";
        segundosAtaques.innerHTML = "";
        barraUsuario.innerText = Math.ceil(vidaPikachu) + "/35";
        vidaUsuario.appendChild(barraUsuario);
        elegirPokemon.appendChild(pikachu);
        primerosAtaques.appendChild(botonImpactrueno);
        primerosAtaques.appendChild(botonPlacaje);
        segundosAtaques.appendChild(botonRecuperacion);
        segundosAtaques.appendChild(botonGolpesFuria);
        Toastify({
            text: "Has elegido a Pikachu",
            duration: 3000,
            gravity: "bottom",
            position: "right",
            className: "comentario"
        }).showToast();
    } else if (pokemonElegido === 2){
        primerosAtaques.innerHTML = "";
        segundosAtaques.innerHTML = "";
        barraUsuario.innerText = Math.ceil(vidaSnorlax) + "/160";
        vidaUsuario.appendChild(barraUsuario);
        elegirPokemon.appendChild(snorlax);
        primerosAtaques.appendChild(botonGolpeCuerpo);
        primerosAtaques.appendChild(botonCabezazo);
        segundosAtaques.appendChild(botonGolpeCuerpo);
        segundosAtaques.appendChild(botonPisoton);
        Toastify({
            text: "Has elegido a Snorlax",
            duration: 3000,
            gravity: "bottom",
            position: "right",
            className: "comentario"
        }).showToast();
    };
};
function mensajeDeVictoria(){
    Swal.fire({
        title: "Felicidades!",
        text: "Ganaste la pelea!",
        icon: "success"
      }
    );
};
function mensajeDeDerrota(){
    setTimeout(() => Swal.fire({
        title: "Perdiste!",
        text: "Suerte la proxima!",
        icon: "error"
      }
    ),1000);
};

function ataquesPikachu(movimiento){
    if(movimiento === 1){
        vidaRival.innerHTML = "";
        vidaEevee = vidaEevee - 0.01 * (((1 + estadisticas[0].ataqueEspecial * movimientos.impactrueno)/25 * estadisticas[0].defensa)+2);
        barraEevee.innerText = Math.ceil(vidaEevee) + "/55";
        vidaRival.appendChild(barraEevee);
        Toastify({
            text: "Pikachu uso impactrueno. Eevee pierde " + Math.ceil(0.01 * (((1 + estadisticas[0].ataqueEspecial * movimientos.impactrueno)/25 * estadisticas[0].defensa)+2)) +" de vida",
            duration: 3000,
            gravity: "bottom",
            position: "right",
            className: "comentario"
        }).showToast();
        if (vidaEevee <= 0){
            mensajeDeVictoria();  
            eevee.remove();
            barraEevee.remove();
        } else{
            setTimeout(() => ataqueeEevee(Math.random()),3000);
            if (vidaPikachu <= 0){
                mensajeDeDerrota();
            };
        };
    } else if(movimiento === 2){
        vidaRival.innerHTML = "";
        vidaEevee = vidaEevee - 0.01 * (((1 + estadisticas[1].ataque * movimientos.placaje)/25 * estadisticas[1].defensa)+2);
        barraEevee.innerText = Math.ceil(vidaEevee) + "/55";
        vidaRival.appendChild(barraEevee);
        Toastify({
            text: "Pikachu uso placaje. Eevee pierde "+ Math.ceil(0.01 * (((1 + estadisticas[1].ataque * movimientos.placaje)/25 * estadisticas[1].defensa)+2)) +" de vida",
            duration: 3000,
            gravity: "bottom",
            position: "right",
            className: "comentario"
        }).showToast();
        if (vidaEevee <= 0){
            mensajeDeVictoria();
            eevee.remove();
        } else{
            setTimeout(() => ataqueeEevee(Math.random()),3000);
            if (vidaPikachu <= 0){
                mensajeDeDerrota();
            };
        };
    } else if (movimiento === 3){
        if (vidaPikachu <= 5){
            vidaUsuario.innerHTML = "";
            vidaPikachu = vidaPikachu + 30;
            barraUsuario.innerText = vidaPikachu + "/35";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Pikachu uso recuperación. Pikachu recupera 30 de vida",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                className: "comentario"
            }).showToast();
        } else{
            vidaUsuario.innerHTML = "";
            vidaPikachu = estadisticas[0].ps;
            barraUsuario.innerText = vidaPikachu + "/35";
            vidaUsuario.appendChild(barraUsuario);
        };
        if (vidaEevee <= 0){
            mensajeDeVictoria();
        } else{
            setTimeout(() => ataqueeEevee(Math.random()),3000);
            if (vidaPikachu <= 0){
                mensajeDeDerrota();
            };
        };
    }else if (movimiento == 4){
        let dañoAlAsar = Math.random();
        if (dañoAlAsar <= 0.33){
            vidaRival.innerHTML = "";
            vidaEevee = vidaEevee - 0.01 * (((1 + estadisticas[0].ataque * 15)/25 * estadisticas[0].defensa)+2);;
            barraEevee.innerText = Math.ceil(vidaEevee) + "/55";
            vidaRival.appendChild(barraEevee);
            Toastify({
                text: "Pikachu uso golpes furia. Eevee pierde "+ Math.ceil(0.01 * (((1 + estadisticas[0].ataque * movimientos.impactrueno)/25 * estadisticas[0].defensa)+2)) + " de vida",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                className: "comentario"
            }).showToast();
            if (vidaEevee <= 0){
                mensajeDeVictoria();  
                eevee.remove();
            } else{
                setTimeout(() => ataqueeEevee(Math.random()),3000);
                if (vidaPikachu <= 0){
                    mensajeDeDerrota();
                };
            };
        } else if (0.33 < dañoAlAsar <= 0.66){
            vidaRival.innerHTML = "";
            vidaEevee = vidaEevee - 0.01 * (((1 + estadisticas[0].ataque * 30)/25 * estadisticas[0].defensa)+2);
            barraEevee.innerText = Math.ceil(vidaEevee) + "/55";
            vidaRival.appendChild(barraEevee);
            Toastify({
                text: "Pikachu uso golpes furia. Eevee pierde "+ Math.ceil(0.01 * (((1 + estadisticas[0].ataque * movimientos.impactrueno)/25 * estadisticas[0].defensa)+2)) +" de vida",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                className: "comentario"
            }).showToast();
            if (vidaEevee <= 0){
                mensajeDeVictoria();  
                eevee.remove();
            } else{
                setTimeout(() => ataqueeEevee(Math.random()),3000);
                if (vidaPikachu <= 0){
                    mensajeDeDerrota();
                };
            };
        } else if (0.66 < dañoAlAsar <= 1){
            vidaRival.innerHTML = "";
            vidaEevee = vidaEevee - 0.01 * (((1 + estadisticas[0].ataque * 30)/25 * estadisticas[0].defensa)+2);
            barraEevee.innerText = Math.ceil(vidaEevee) + "/55";
            vidaRival.appendChild(barraEevee);
            Toastify({
                text: "Pikachu uso golpes furia. Eevee pierde "+ Math.ceil(0.01 * (((1 + estadisticas[0].ataque * movimientos.impactrueno)/25 * estadisticas[0].defensa)+2)) +" de vida",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                className: "comentario"
            }).showToast();
            if (vidaEevee <= 0){
                mensajeDeVictoria();  
                eevee.remove();
            } else{
                setTimeout(() => ataqueeEevee(Math.random()),3000);
                if (vidaPikachu <= 0){
                    mensajeDeDerrota();
                };
            };
        }; 
    };
};
function ataqueeEevee(movimientoEnemigo){
    if (movimientoEnemigo < 0.25){
        vidaUsuario.innerHTML = "";
        vidaPikachu = vidaPikachu - 0.01 * (((1 + estadisticas[1].ataque * movimientos.placaje)/25 * estadisticas[0].defensa)+2);
        barraUsuario.innerText = Math.ceil(vidaPikachu) + "/35";
        vidaUsuario.appendChild(barraUsuario);
        Toastify({
            text: "Eevee uso placaje. Pikachu pierde "+ Math.ceil(0.01 * (((1 + estadisticas[1].ataque * movimientos.placaje)/25 * estadisticas[0].defensa)+2)) +" de vida",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            className: "comentario",
            onClick: function(){} // Callback after click
        }).showToast();
        if (vidaPikachu <= 0){
            mensajeDeDerrota();
            pikachu.remove();
        };
    } else if (0.25 <= movimientoEnemigo < 0.50){
        vidaUsuario.innerHTML = "";
        vidaPikachu = vidaPikachu - 0.01 * (((1 + estadisticas[1].ataque * movimientos.portazo)/25 * estadisticas[0].defensa)+2);
        barraUsuario.innerText = Math.ceil(vidaPikachu) + "/35";
        vidaUsuario.appendChild(barraUsuario);
        Toastify({
            text: "Eevee uso placaje. Pikachu pierde "+ Math.ceil(0.01 * (((1 + estadisticas[1].ataque * movimientos.ataqueRapido)/25 * estadisticas[0].defensa)+2)) +" de vida",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            className: "comentario",
            onClick: function(){} // Callback after click
        }).showToast();
        if (vidaPikachu <= 0){
            mensajeDeDerrota();
            pikachu.remove();
        };
    } else if (0.50 <= movimientoEnemigo < 0.75){
        if (vidaEevee <= 25){
            vidaRival.innerHTML = "";
            vidaEevee = vidaEevee + 30;
            barraEevee.innerText = Math.ceil(vidaEevee) + "/55";
            vidaRival.appendChild(barraEevee);
            Toastify({
                text: "Eevee uso recuperación. Eevee recupera 30 de vida",
                duration: 2000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
            if (vidaPikachu <= 0){
                mensajeDeDerrota();
                pikachu.remove();
            };
        } else if (vidaEevee > 25){
            Toastify({
                text: "Eevee uso recuperación. Eevee recupera 30 de vida",
                duration: 2000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
            vidaRival.innerHTML = "";
            vidaEevee = 55;
            barraEevee.innerText = vidaEevee + "/55";
            vidaRival.appendChild(barraEevee);
            if (vidaPikachu <= 0){
                mensajeDeDerrota();
                pikachu.remove();
            };
        };
    } else {
        vidaUsuario.innerHTML = "";
        vidaPikachu = vidaPikachu - 0.01 * (((1 + estadisticas[1].ataque * movimientos.cabezazo)/25 * estadisticas[0].defensa)+2);
        barraUsuario.innerText = Math.ceil(vidaPikachu) + "/35";
        vidaUsuario.appendChild(barraUsuario);
        Toastify({
            text: "Eevee uso cabezazo. Pikachu pierde "+ Math.ceil(0.01 * (((1 + estadisticas[1].ataque * movimientos.cabezazo)/25 * estadisticas[0].defensa)+2)) +" de vida",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            className: "comentario",
            onClick: function(){} // Callback after click
        }).showToast();
        if (vidaPikachu <= 0){
            mensajeDeDerrota();
            pikachu.remove();
        };
    }
};
/* Daño = 0.01 x (((1 + ataque x poder de ataque)/25xDefensa)+2) */