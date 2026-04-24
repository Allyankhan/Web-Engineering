<?php include 'db.php';

$id = $_GET['id'];

$query = "DELETE FROM users WHERE id=$id";

if (mysqli_query($conn, $query)) {
    echo "Deleted Successfully!";
    header("Location: view.php");
}
?>
