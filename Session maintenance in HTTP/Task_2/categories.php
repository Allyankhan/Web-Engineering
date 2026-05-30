<?php
$conn = new mysqli("localhost", "root", "", "lab_db");

if(isset($_POST['add_category'])) {
    $name = $_POST['name'];
    $conn->query("INSERT INTO categories(name) VALUES('$name')");
}
?>

<h2>Add Category</h2>
<form method="POST">
    Category Name: <input type="text" name="name">
    <button name="add_category">Add</button>
</form>

<h2>Categories</h2>
<a href="items.php">Add Items</a>