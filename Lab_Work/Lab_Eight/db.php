<?php
$conn = mysqli_connect("localhost", "root", "", "lab8");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>