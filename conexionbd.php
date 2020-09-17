<?php 
$host="localhost";
$user="root";
$password="";
$bdname="naibaf";
$conexion=mysqli_connect($host,$user,$password,$bdname);
if (!$conexion){
die("error de conexion: ".mysqli_connect_error());

}
else{
    echo "Conexion Exitosa";
}

?>
