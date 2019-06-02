<?php

class Categoria {
	 
	 private $Id;
	 private $Nombre;
	 private $Descripcion;
	 
	 public function __get($k)
	 { 
	    return $this->$k; 
	 }
	 public function __set($k, $v)
	 {  $this->$k = $v; }
		
}



?>