<?php
$conn = new mysqli("localhost", "root", "", "lab_db");

$categories = $conn->query("SELECT * FROM categories");

if(isset($_POST['add_item'])) {
    $name = $_POST['item_name'];
    $cat_id = $_POST['category_id'];

    $conn->query("INSERT INTO items(name, category_id) VALUES('$name', '$cat_id')");
}
?>

<h2>Add Item</h2>
<form method="POST">
    Item Name: <input type="text" name="item_name"><br>

    Category:
    <select name="category_id">
        <?php while($row = $categories->fetch_assoc()) { ?>
            <option value="<?php echo $row['id']; ?>">
                <?php echo $row['name']; ?>
            </option>
        <?php } ?>
    </select>

    <button name="add_item">Add Item</button>
</form>

<a href="display.php">View All Items</a>