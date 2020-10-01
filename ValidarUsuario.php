<?php
include("conexionbd.php");
$name=$_POST["name"];
$pw=$_POST["pw"];

$consulta="SELECT * FROM usuarios WHERE nombre='$name' AND contraseña='$pw'";
$resultado=mysqli_query($conexion,$consulta);
$rows=mysqli_num_rows($resultado);

if ($rows>0){
    header('location:formulario.html');

}
else{
    header('location:login.html');
}
?>