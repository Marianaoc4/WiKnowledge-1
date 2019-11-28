<!DOCTYPE html>
<?php
$logoff = $_POST['logoff'];

if(isset($entrar)){
setcookie("WiKnowledge", "", time() - 3600);
}
?>
<html>
<body>

<?php
echo "Cookie 'user' is deleted.";
?>

</body>
</html>