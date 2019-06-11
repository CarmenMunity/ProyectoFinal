<?php
/**
 * Returns the list of tipos.
 */
require 'database.php';

$tipos = [];
$sql = "SELECT Id, Entrada, Producto, Tecnica FROM tipo";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $tipos[$i]['Id']    = $row['Id'];
    $tipos[$i]['Entrada'] = $row['Entrada'];
    $tipos[$i]['Producto'] = $row['Producto'];
    $tipos[$i]['Tecnica'] = $row['Tecnica'];
    $i++;
  }

  echo json_encode($tipos);
}
else
{
  http_response_code(404);
}
?>