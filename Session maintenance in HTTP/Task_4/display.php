<?php
$conn = new mysqli("localhost", "root", "", "lab_db");

$result = $conn->query("
    SELECT items.name AS item, categories.name AS category
    FROM items
    JOIN categories ON items.category_id = categories.id
");
?>

<h2>All Items</h2>

<table border="1">
<tr>
    <th>Item</th>
    <th>Category</th>
</tr>

<?php while($row = $result->fetch_assoc()) { ?>
<tr>
    <td><?php echo $row['item']; ?></td>
    <td><?php echo $row['category']; ?></td>
</tr>
<?php } ?>

</table>