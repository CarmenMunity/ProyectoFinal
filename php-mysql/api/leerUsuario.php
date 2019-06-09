<?php
/**
 * Returns the list of usuarios.
 */
require 'database.php';

$usuarios = [];
$sql = "SELECT Id, Nombre, Apellidos, Email, Imagen, Perfil, UserName, Pass  FROM usuario";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $usuarios[$i]['Id']    = $row['Id'];
    $usuarios[$i]['Nombre'] = $row['Nombre'];
    $usuarios[$i]['Apellidos'] = $row['Apellidos'];
    $usuarios[$i]['Email'] = $row['Email'];
    $usuarios[$i]['Imagen'] = $row['Imagen'];
    $usuarios[$i]['Perfil'] = $row['Perfil'];
    $usuarios[$i]['UserName'] = $row['UserName'];
    $usuarios[$i]['Pass'] = $row['Pass'];
    $i++;
  }

  echo json_encode($usuarios);
}
else
{
  //http_response_code(404);
  echo "miau";
}
?>