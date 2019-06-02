<?php
/**
 * Returns the list of categorias.
 */
require 'database.php';

$categorias = [];
$sql = "SELECT Id, Nombre, Descripcion FROM categoria";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $categorias[$i]['Id']    = $row['Id'];
    $categorias[$i]['Nombre'] = $row['Nombre'];
    $categorias[$i]['Descripcion'] = $row['Descripcion'];
    $i++;
  }

  echo json_encode($categorias);
}
else
{
  http_response_code(404);
}
?>