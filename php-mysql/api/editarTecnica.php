<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  /*if ((int)$request->id < 1 || trim($request->nombre) == '' || trim($request->descripcion) =='' {
    return http_response_code(400);
  }*/
  // Sanitize.
  $id    = mysqli_real_escape_string($con, (int)$request->id);
  $nombre = mysqli_real_escape_string($con, trim($request->name));
  $descripcion = mysqli_real_escape_string($con, trim($request->description));
  $categoria = mysqli_real_escape_string($con, (int)($request->categoria));
  
  // Update.
  $sql = "UPDATE `tecnica` SET `Nombre`='$nombre',`Descripcion`='$descripcion',`Categoria`='$categoria' WHERE `id` = '{$id}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}
?>