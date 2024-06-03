<?php 
    $conn = mysqli_connect("localhost", "root", "", "urlshortener");
    if(!$conn){
        echo "Database Connection error".mysqli_connect_error();
    }
    
?>