<?php
include("conexionbd.php");
if(isset($_POST['registro'])){                                  
    if(strlen($_POST['fnombre']) >=1 && strlen($_POST['fapellido'])  >=1 &&  srtlen ($_POST['fconstraseña'])  >=1  && strlen($_POST['femail']) >=1  && srtlen ($_POST['ffechanacimiento']) >=1 && srtlen ($_POST['fgenero']) {
        $nombre=trim($_POST['fnombre']); 
        $apellido=trim($_POST['fapellido']); 
        $contraseña=trim($_POST['fconstraseña'])
        $email=trim($_POST['femail']); 
        $fechanacimiento=trim($_POST['ffechanacimiento']);
        $genero=trim($_POST['fgenero']); 
     }
        $consulta="INSERT INTO formulario(nombre, apellido, contraseña, email, fecha, genero) VALUES('$nombre','$apellido','$contraseña','$email','$fechanacimiento','$genero')";
        $result=mysqli_query($conexion, $consulta);
     
        if($result){
         echo "<h4>El Usuario Ha Sido Registrado Exitosamente</h4>";
     }
        else{
            echo "<h4>El Usuario No Se Pudo Registrar</h4>;
        
     }
}
    

?>