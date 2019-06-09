<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
  /*if(trim($request->nombre) === '' || (float)$request->descripcion < 0)
  {
    return http_response_code(400);
  }*/

  // Sanitize.
  $nombre = mysqli_real_escape_string($con, trim($request->name));
  $apellidos = mysqli_real_escape_string($con, trim($request->surname));
  $email = mysqli_real_escape_string($con, trim($request->email));
  //$imagen = mysqli_real_escape_string($con, trim($request->imagen));
  //$perfil = mysqli_real_escape_string($con, trim($request->perfil));
  $password = mysqli_real_escape_string($con, trim($request->password1));
  $login = mysqli_real_escape_string($con, trim($request->login));
  // Create.
  $sql = "INSERT INTO `usuario`(`Id`,`Nombre`,`Apellidos`, `Email`,`Imagen`, `Perfil`,`Pass`, `UserName`) VALUES (null,'{$nombre}','{$apellidos}','{$email}', null,'usuario','{$password}','{$login}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $usuario = [
      'Nombre' => $nombre,
      'Apellidos' => $apellidos,
      'Email' => $email,
      'Imagen' => null,
      'Perfil' => "usuario",
      'Password' => $password,
      'Login' => $login,
      'Id'    => mysqli_insert_id($con)
    ];
    echo json_encode($usuario);
  }
  else
  {
    //http_response_code(422);
    echo "miau";
  }
}
?>