<?php
include 'config.php'; 
header('Access-Control-Allow-Origin: http://localhost:4200'); 

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)) {

    $request = json_decode($postdata);
    $username = $request->username;
    $password = $request->password;
    $sql = "select * from user where username = '$username'";
    $result = $conn->query($sql);              
    $row = $result->fetch_assoc();

    if($row['username'] == $username && password_verify($password, $row['password'])) //kanei verify me to hash pou exei ginei
        {
            $_SESSION['username'] = $username;  
            $_SESSION['loggedin'] = true;
            ?>
            {
                "success": true,
                "message": "You have logged in"
            }
            <?php
        }
    else {
        ?>
        {
            "success": false,
            "message": "Invalid credentials"
        }
        <?php
        }
}

?>