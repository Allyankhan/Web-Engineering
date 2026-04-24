<?php include 'db.php'; ?>

<form method="POST" enctype="multipart/form-data">
    Select Image:
    <input type="file" name="file"><br><br>
    <input type="submit" name="upload" value="Upload">
</form>

<?php
if (isset($_POST['upload'])) {

    $filename = $_FILES['file']['name'];
    $tempname = $_FILES['file']['tmp_name'];
    $folder = "uploads/" . $filename;

    if (!is_dir("uploads")) {
        mkdir("uploads");
    }

    if (move_uploaded_file($tempname, $folder)) {
        echo "File Uploaded Successfully!";
    } else {
        echo "Uploa
    }
}
?>