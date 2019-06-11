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
  $entrada = mysqli_real_escape_string($con, (int)($request->entrada));
  $producto = mysqli_real_escape_string($con, (int)($request->producto));
  $tecnica = mysqli_real_escape_string($con, (int)($request->tecnica));

  // Create.
  $sql = "INSERT INTO `tipo`(`Id`,`Entrada`,`Producto`, `Tecnica`) VALUES (null,'{$entrada}','{$producto}','{$tecnica}')";
  
  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $tipo = [
      'Entrada' => $entrada,
      'Producto' => $producto,
      'Tecnica' => $tecnica,
      'Id'    => mysqli_insert_id($con)
    ];
    echo json_encode($tipo);
  }
  else
  {
    //http_response_code(422);
    echo "miau";
  }
}
?>