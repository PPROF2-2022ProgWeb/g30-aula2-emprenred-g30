<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible"
    content="IE=edge">
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0">
  <meta name="description"
    content="EmprenRed es una red social para emprendedores y proveedores">
  <meta name="keywords"
    content="Red Social Emprendedores, Catálogo Productos, Emprendimientos , Emprendedores, Proveedores,Venta por Mayor,Empreder,Pymes" />
  <title>Registro</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous">
  <link rel="stylesheet"
    href="../static/css/style.css">
  <link rel="icon"
    type="image/vnd.microsoft.icon"
    href="../static/iconos/favicon.ico">
</head>
<body>

<header>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">

      <div class="container-fluid">
        <a class="navbar-brand "
          href="index.html"><img id="logo-nav"
            src="../static/images/Logo_Rectangular.png"
            alt="Logo EmprenRed" /></a>
        <button class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse displa "
          id="navbarNavDropdown">
          <ul class=" navbar-nav d-flex justify-content-between ">

            <li class=" campo nav-item">
              <a class="nav-link text-white "
                aria-current="page"
                href="index.html">Inicio</a>
            </li>
            <li class="  campo nav-item">
              <a class="nav-link text-white "
                aria-current="page"
                href="contacto.html">Contacto</a>
            </li>

            <li class="nav-item  ">
              <a class="btn btn-warning ps-5 pe-5 p-2"
                href="login.html"
                role="button"  aria-expanded="
                false">
                <b> Login </b>
              </a>

            </li>
          </ul>
        </div>

      </div>
    </nav>
  </header>

<main>


<div id="contentContainer"
      class="d-flex flex-column justify-content-center align-items-center container border border-warning mt-5 "
      style="background-color:whitesmoke; ">

      

    
<?php 
$name = $_POST["nombre"];
$lastname = $_POST["apellido"];
$provincia = $_POST["provincia"];
$fechaNacimiento = $_POST["fechaNacimiento"];
$email = $_POST["email"];


function obtener_edad_segun_fecha($fecha_nacimiento)
{
    $nacimiento = new DateTime($fecha_nacimiento);
    $ahora = new DateTime(date("Y-m-d"));
    $diferencia = $ahora->diff($nacimiento);
    return $diferencia->format("%y");
}

$edad = obtener_edad_segun_fecha($fechaNacimiento);
echo "<h1>  Bienvenid@ <strong> $name </strong> </h1>";
print "<h3> Tus datos son : </h3> <div>";
echo "<p> <strong> Nombre : </strong> $name </p>";
echo "<p> <strong> Apellido : </strong> $lastname </p>";
echo "<p> <strong> Provincia : </strong> $provincia </p>";
echo "<p> <strong> Edad : </strong> $$edad </p>";
echo "<p> <strong> Email : </strong> $email </p> </div>";

/*
include ("datosDB.php")
$con = mysqli_connet($host,$usuario,$clave,$db) or die ("No se pudo conectar con base de datos");
if (!$con) {
    die ("conexion fallida: " . mysqli_connect_error());
}
$datab = mysqli_select_db($con,$db) or die ("error base de datos");
$consulta ="INSERT INTO personas(nombre,apellido,provincia,fechaNacimiento,email,password) VALUES('$name','$lastname','$provincia','$fechaNacimiento','$email','$password')";*/
?>

<p> Muchas gracias por confiar en nosotros!!</p>
</div>
</main>

<footer class="footer py-3 bg-dark fixed-bottom d-flex justify-content-center align-items-center ">
    <div class=" text ">
      <p>EmprenRed - 2021</p>
    </div>
    <div class="d-flex justify-content-center align-items-center  ms-3 ">
      <p>Seguinos en nuestras <b>redes</b> </p>
    </div>
    <div class="iconos ms-3 ">
      <a href="https://instagram.com/emprenRed/"><img class="icono"
          src="../static/images/topinsta.png"
          width="30"></a>
      <a href="https://facebook.com/emprenRed/"><img class="icono"
          src="../static/images/topface.png"
          width="30"></a>
    </div>


  </footer>
<script>
 

 alert("se proceso correctamente sus datos");

setTimeout(function () {
   window.location.href= 'login.html';},5000); 
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

</body>
</html>