 <?php 
 include "config.php";
    $full_url = mysqli_real_escape_string($conn, $_POST['full-url']);

    if(!empty($full_url) && filter_var($full_url, FILTER_VALIDATE_URL)){
        $ran_url = substr(md5(microtime()), rand(0, 26), 5);
        // $sql = mysqli_query($conn, "SELECT");
    }else{
        echo "$full_url - This is not a valid URL!";
    }
 ?>