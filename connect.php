<?php 
$login = $_POST['login'];
$entrar = $_POST['entrar'];
$senha = md5($_POST['password']);
$connect = mysql_connect('localhost','root','');
$db = mysql_select_db('userdb');
  if (isset($entrar)) {
           
    $verifica = mysql_query("SELECT * FROM user WHERE userLogin = 
    '$login' AND pass = '$senha'") or die("erro ao selecionar");
      if (mysql_num_rows($verifica)<=0){
        echo"<script language='javascript' type='text/javascript'>
        alert('Login e/ou senha incorretos');window.location
        .href='login_page.html';</script>";
        die();
      }else{
        setcookie("WiKnowledge",$login);
        header("Location:index.php");
      }
  }
?>