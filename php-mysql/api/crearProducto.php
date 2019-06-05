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
  $tipo = mysqli_real_escape_string($con, trim($request->tipo));
  $ingredientes = mysqli_real_escape_string($con, trim($request->ingredientes));
  $marca = mysqli_real_escape_string($con, trim($request->marca));
  $categoria = mysqli_real_escape_string($con, (int)($request->categoria));

  // Create.
  $sql = "INSERT INTO `producto`(`Id`,`Nombre`,`Descripcion`, `Tipo`='$tipo', `Ingredientes`='$ingredientes', `Marca`='$marca', `Categoria`) VALUES (null,'{$nombre}','{$descripcion}','{$categoria}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $producto = [
      'Nombre' => $nombre,
      'Descripcion' => $descripcion,
      'Tipo' => $tipo,
      'Ingredientes' => $ingredientes,
      'Marca' => $marca,
      'Categoria' => $categoria,
      'Id'    => mysqli_insert_id($con)
    ];
    echo json_encode($producto);
  }
  else
  {
    http_response_code(422);
  }
}
?>