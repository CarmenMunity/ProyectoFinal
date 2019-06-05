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
  $descripcion = mysqli_real_escape_string($con, trim($request->description));
  $categoria = mysqli_real_escape_string($con, (int)($request->categoria));
  // Create.
  $sql = "INSERT INTO `tecnica`(`Id`,`Nombre`,`Descripcion`, `Categoria`) VALUES (null,'{$nombre}','{$descripcion}','{$categoria}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $tecnica = [
      'Nombre' => $nombre,
      'Descripcion' => $descripcion,
      'Categoria' => $categoria,
      'Id'    => mysqli_insert_id($con)
    ];
    echo json_encode($tecnica);
  }
  else
  {
    http_response_code(422);
  }
}
?>