const botonesCategorias = document.querySelectorAll(".boton-categoria");

const CONTENEDOREXP = document.getElementById("Experiencia");
const CONTENEDORNOTIEDU = document.getElementById("educación");
const CONTENEDORDAT = document.getElementById("datos");

const CONTENEDNOTI = document.querySelectorAll(".contenedor-de-noti");

//mouseover: estoy teniendo problemas con el diseño.con click todo ok
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");
        if (e.currentTarget.id == "btnexperiencia") {
            CONTENEDOREXP.classList.add("active")
        } else {
            CONTENEDOREXP.classList.remove("active")
        }

        if (e.currentTarget.id == "btneducación") {
            CONTENEDORNOTIEDU.classList.add("active")
        } else {
            CONTENEDORNOTIEDU.classList.remove("active")
        }
        if (e.currentTarget.id == "btndatos") {
            CONTENEDORDAT.classList.add("active")
        } else {
            CONTENEDORDAT.classList.remove("active")
        }
    })
});


//fetch

let datosuser = '';

const URLDATFALSOS = "https://randomuser.me/api/";

//jo
const consulta = async () => {
    try {

        const RESPUESTA = await fetch(`${URLDATFALSOS}`)

        const DATOS = await RESPUESTA.json();

        DATOS.results.forEach(user => {
            datosuser += `
            <div class="contimg_avatar">
                <img src="${user.picture.medium}" alt="" class="img_avatar">
            </div>
            
            <h1 class="header-h1">Nombre</h1>
            <p class="header-parrafo">${user.name.first}</p>
            <h1 class="header-h1">Apellido</h1>
            <p class="header-parrafo">${user.name.last}</p>
            <h1 class="header-h1">Correo</h1>
            <p class="header-parrafo">${user.email}</p>
            <h1 class="header-h1">Número de celular</h1>
            <p class="header-parrafo">${user.phone}</p>
            <h1 class="header-h1">ubicación</h1>
            <p class="header-parrafo">${user.location.country}</p>

            `;
        });

        document.getElementById('datos').innerHTML = datosuser;

    } catch (error) {
        console.log(error);
    }
};
consulta();

