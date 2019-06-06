<?php
/**
 * Returns the list of productos.
 */
require 'database.php';

$productos = [];
$sql = "SELECT p.Id, p.Nombre, p.Descripcion, p.Genero, p.Ingredientes, p.Marca, c.Nombre as Cat  FROM producto p, categoria c WHERE p.Categoria = c.Id";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $productos[$i]['Id']    = $row['Id'];
    $productos[$i]['Nombre'] = $row['Nombre'];
    $productos[$i]['Descripcion'] = $row['Descripcion'];
    $productos[$i]['Genero'] = $row['Genero'];
    $productos[$i]['Ingredientes'] = $row['Ingredientes'];
    $productos[$i]['Marca'] = $row['Marca'];
    $productos[$i]['Categoria'] = $row['Cat'];
    $i++;
  }

  echo json_encode($productos);
}
else
{
  http_response_code(404);
}
?>