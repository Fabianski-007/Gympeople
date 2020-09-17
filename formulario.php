<!DOCTYPE html>
<html lang="es">
	<head>
        <meta charset="utf-8">
		<title> Formulario | Registro </title>
    <link rel="stylesheet" type="text/css" href="CSS/styleform.css">
	</head>
	<body>
	<!-- ENVIA A LA BASE DE DATOS -->
		<form action="registrar.php" method="POST">
      <div id="formulario"> 
        <h1> FORMULARIO </h1>
      </div>
        
			<div id="tabla-formulario">
        <label for="nombre">Nombres</label>
				<input placeholder="Ingrese su nombre..." name="fnombre" type="text"     id="tabla">
        
        <label for="apellido">Apellidos</label>
				<input placeholder="Ingrese su apellido..." name="fapellido" type="text" id="tabla">

        <label for="correo">Correo electronico (*) </label>
				<input placeholder="Escriba su e-mail" name="femail" type="text" id="tabla">

        <label for="contra">Contraseña</label>
				<input placeholder="Escriba contraseña" name="fpassword" type="password" id="tabla">

        <label for="fecha">Fecha nacimiento (*) </label>
				<input placeholder="DD/MM/AA" name="ffechanacimiento" type="text" id="tabla">

        <label for="genero">Gènero</label>
				<input placeholder="Escriba genero" name="fgenero" type="text" id="tabla">
			</div>
			  <button name="registro" type="submit" id="button"> Registrarse </button>
		</form>
	</body>
</html>