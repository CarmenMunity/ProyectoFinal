<?php
require 'database.php';
// Extract, validate and sanitize the id.
$id = isset($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;

if(!$id)
{
  return http_response_code(400);
}
// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if (trim($request->nombre) == '' || trim($request->descripcion )  == '' {
    return http_response_code(400);
  }

  // Sanitize.
  //$id    = mysqli_real_escape_string($con, (int)$request->id);
  $nombre = mysqli_real_escape_string($con, trim($request->nombre));
  $descripcion = mysqli_real_escape_string($con, trim($request->d));

  // Update.
  $sql = "UPDATE `categoria` SET `Nombre`='$nombre',`Descripcion`='$descripcion' WHERE `Id` = '{$id}' LIMIT 1";

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