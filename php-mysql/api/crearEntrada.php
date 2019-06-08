<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");
$usuario = ($_GET['usuario'] !== null && (int)$_GET['usuario'] > 0)? mysqli_real_escape_string($con, (int)$_GET['usuario']) : false;
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
  $titulo = mysqli_real_escape_string($con, trim($request->title));
  $descripcion = mysqli_real_escape_string($con, trim($request->description));
  $imagen = mysqli_real_escape_string($con, trim($request->imagen));
  $producto = mysqli_real_escape_string($con, int($request->producto));
  $tecnica = mysqli_real_escape_string($con, (int)($request->tecnica));

  // Create.
  $sql = "INSERT INTO `entrada`(`Id`,`Titulo`,`Descripcion`, `Imagen`, `Usuario`) VALUES (null,'{$titulo}','{$descripcion}','{$imagen}','{$usuario}')";
  
  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $entrada = [
      'Titulo' => $titulo,
      'Descripcion' => $descripcion,
      'Imagen' => $imagen,
      'Usuario' => $usuario,
      'Id'    => mysqli_insert_id($con)
    ];
    echo json_encode($entrada);
  }
  //$sql = "INSERT INTO `tipo`(`Id`,`Entrada`,`Producto`, `Tecnica`) VALUES (null,'{$entrada}','{$producto}','{$tecnica}')";
  else
  {
    http_response_code(422);
  }
}
?>