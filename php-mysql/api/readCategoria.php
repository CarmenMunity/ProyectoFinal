<?php

require_once("libreriaPDO.php");
require_once("categoria.php");

class ReadCategorias
{

    private $con;    //Propiedad para guardar el objeto conexion

    public $resul = array();  //Array de objetos para devolver el resultado

    public function __CONSTRUCT($base)
    {
        try {
            $this->con = new DB($base);

        } catch (Exception $e) {
            die($e->getMessage());
        }
    }
    try {
        $consulta = "select * from categoria ";

        $param = array();

        $this->con->Consulta($consulta, $param);

        $this->resul = array();  //Inicializamos el array


        foreach ($this->con->datos as $fila) {

            $categoria = new categoria();   //Instanciamos la clase categoria

            $categoria->__set("Id", $fila['Id']);
            $categoria->__set("Nombre", $fila['Nombre']);
            $categoria->__set("Descripcion", $fila['Descripcion']);

            $this->resul[] = $categoria;

        }
        echo json_encode($this->resul);

    } catch (Exception $e) {
        echo("El error está en el php");
        echo($e->getMessage());
    }
}
?>
