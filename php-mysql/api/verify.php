<?php
session_start();
header('Access-Control-Allow-Origin: http://localhost:4200');

if (isset($_SESSION['loggedin'])) {
    ?>
    {
        "success": true,
        "message": "You have the right."

    } 
    <?php
}
else {
    ?>
    {
        "success": false,
        "message": "You DONT have the right."
    }
    <?php
}

?>