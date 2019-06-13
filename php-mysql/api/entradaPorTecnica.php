<?php
/**
 * Returns the list of entradas.
 */
require 'database.php';
// Extract, validate and sanitize the id.
$tecnica = ($_GET['tecnica'] !== null && (int)$_GET['tecnica'] > 0)? mysqli_real_escape_string($con, (int)$_GET['tecnica']) : false;
$entradas = [];
$sql = "SELECT e.Id, e.Titulo, e.Descripcion, e.Imagen, e.Usuario, t.Producto, t.Tecnica FROM entrada e, tipo t WHERE t.Entrada = e.Id  AND e.tecnica='{$tecnica}'";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $entradas[$i]['Id']  = $row['Id'];
    $entradas[$i]['Titulo'] = $row['Titulo'];
    $entradas[$i]['Descripcion'] = $row['Descripcion'];
    $entradas[$i]['Imagen'] = $row['Imagen'];
    $entradas[$i]['Usuario'] = $row['Usuario'];
    $entradas[$i]['Producto'] = $row['Producto'];
    $entradas[$i]['Tecnica'] = $row['Tecnica'];
    $i++;
  }

  echo json_encode($entradas);
}
else
{
  http_response_code(404);
}
?>