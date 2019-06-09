<?php 
    $id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;
    session_start();
    /*session is started if you don't write this line can't use $_Session  global variable*/
    $_SESSION["id"]=$id;
?>