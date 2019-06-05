<?php
/**
 * Returns the list of tecnicas.
 */
require 'database.php';

$tecnicas = [];
$sql = "SELECT t.Id, t.Nombre, t.Descripcion, c.Nombre as Cat  FROM tecnica t, categoria c WHERE t.Categoria = c.Id";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $tecnicas[$i]['Id']    = $row['Id'];
    $tecnicas[$i]['Nombre'] = $row['Nombre'];
    $tecnicas[$i]['Descripcion'] = $row['Descripcion'];
    $tecnicas[$i]['Categoria'] = $row['Cat'];
    $i++;
  }

  echo json_encode($tecnicas);
}
else
{
  http_response_code(404);
}
?>