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
  $nombre = mysqli_real_escape_string($con, trim($request->nombre));
  $descripcion = mysqli_real_escape_string($con, trim($request->descripcion);


  // Create.
  $sql = "INSERT INTO `categoria`(`Id`,`Nombre`,`Descripcion`) VALUES (null,'{$nombre}','{$descripcion}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $categoria = [
      'Nombre' => $nombre,
      'Descripcion' => $descripcion,
      'Id'    => mysqli_insert_id($con)
    ];
    echo json_encode($categoria);
  }
  else
  {
    http_response_code(422);
  }
}
?>