<?php
$host="localhost";
$usuario="root";
$clave="admin";
$db="emprenred_php";

$conn = new mysql($host,$usuario,$clave,$db);
    mysql_query($conn,"SET character_set_result=utf8");
    if($conn-> connect_error){
        die("Database Error : " . $conn->connect_error)
    }