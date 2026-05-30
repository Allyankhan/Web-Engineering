<?php include 'db.php'; ?>

<!DOCTYPE html>
<html>
<head>
    <title>Signup Form</title>
</head>
<body>

<h2>Signup Form</h2>

<form method="POST">
    Name: <input type="text" name="name" required><br><br>
    Email: <input type="email" name="email" required><br><br>
    Password: <input type="password" name="password" required><br><br>
    <input type="submit" name="submit" value="Register">
</form>

<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = "INSERT INTO users (name, email, password)
              VALUES ('$name', '$email', '$password')";

    if (mysqli_query($conn, $query)) {
        echo "Data Inserted Successfully!";
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}
?>

</body>
</html>