//funciones para provicnias
function ProvinciasArgentinas() {
    cargar_provincias();
}

// funcion para Cargar Provincias al campo <select>
function cargar_provincias() {
    var array = ["Buenos Aires", "Buenos Aires Capital", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"];

    // Ordena el Array Alfabeticamente
    array.sort();

    addOptions("provincias", array);
}

// Rutina para agregar opciones a un <select>
function addOptions(domElement, array) {
    var select = document.getElementById(domElement);

    for (let provincia of array) {
        var option = document.createElement("option");
        option.setAttribute("value", provincia);
        option.textContent = provincia;
        select.add(option);
    }
}

// validacion form registro

function validar(campo, min, max) {
    var palabra = campo.value;
    // Crear mensaje, en blanco para valor correcto
    let validity = campo.validity;
    var msg = "";

    if (validity.tooShort || validity.tooLong) {
        alert("The field must have between " + min + " and " + max + " characters.");
        //msg = "Excede el largo permitido";
    }

    if (validity.patternMismatch) {
        if (campo.name == "contrasenia") {
            alert("the password must have at least one uppercase letter, one lowercase letter and one number ");
        } else {
            alert("Wrong field format");
        }
    }
}

function validarContrasenia2(campo1, campo2) {
    let contrasenia = document.getElementById(campo1);

    let regex = contrasenia.value.toString();

    campo2.setAttribute("pattern", regex);
    let validity = campo2.validity;

    if (validity.patternMismatch) {
        alert("The two passwords must match");
    }
}

function calculateAge(fechaNac) {
    birthDate = new Date(fechaNac.value);

    otherDate = new Date();

    var years = otherDate.getFullYear() - birthDate.getFullYear();

    if (otherDate.getMonth() < birthDate.getMonth() || (otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate())) {
        years--;
    }

    return years.toString();
}

function agregarEdad(fechaNac, campo) {
    let edadCampo = document.getElementById(campo);
    console.log(edadCampo);
    edadCampo.innerText = calculateAge(fechaNac);
}
// funcion modal
//var myModal = new bootstrap.Modal(document.getElementById("myModal"), options);

//funcion Post registro
async function register() {
    let [nombre, apellido, provincias, fechaNac, email, password] = [document.getElementById("nombre"), document.getElementById("apellido"), document.getElementById("provincias"), document.getElementById("fechaNac"), document.getElementById("email"), document.getElementById("password")];

    let data = {
        nombre: nombre.value,
        apellido: apellido.value,
        localidad: provincias.value,
        fechaNac: fechaNac.value,
        email: email.value,
        contraseña: password.value,
    };

    axios
        .post("http://localhost:8080/registro", data)
        .then(function (response) {
            alert(response.data);
            window.location.href = "login.html";
        })
        .catch(function (error) {
            console.log(error.response.data);
            alert(error.response.data.message);
        });

    /* if (post.data != "se registro correctamente") {
        alert(post.data);
    } */

    /*let post = await fetch("http://localhost:8080/registro", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
    });

    let response = await post.json();*/
}

//funcion post login

async function login() {
    let [username, password] = [document.getElementById("username"), document.getElementById("password")];

    let data = {
        username: username.value,
        password: password.value,
    };

    axios
        .post("http://localhost:8080/login", data)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("id", response.data.id);
            this.axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
            Swal.fire(
                'successful login',
                'Redirecting to profile...',
                'success'
              )
            window.location.href = "perfil.html";
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Login Error',
                text: 'Please check your email and password and try again.',
              })
        });
}

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("nombre");
    window.location.href = "login.html";
}

function agregarNombreMenu(){
 let nombre = localStorage.getItem("nombre");

 let menu = document.getElementById("menuNombre");
 menu.textContent = nombre;
}

function validaSiEstaLogueado(){

    if (localStorage.getItem("token") != null) {
        let menu = document.getElementById("menuSinNombre");
        menu.classList.add("hide");

        console.log(menu.classList)


    }else{
        let menu = document.getElementById("menuNombre");
        menu.classList.add("hide");
    }
}
