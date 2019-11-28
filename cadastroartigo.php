<?php 

echo"<script language='javascript' type='text/javascript'>
    alert('Chegou aqui caraio');</script>";

$userArticle = $_COOKIE["WiKnowledge"];
$article = $_POST['suggestionin'];
$connect = mysql_connect('localhost','root','');
$db = mysql_select_db('userdb');
$query_select = "SELECT article FROM article WHERE article = '$article'";
$select = mysql_query($query_select,$connect);
$array = mysql_fetch_array($select);
$artarray = $array['article'];
 
  if($article == "" || $article == null){
    echo"<script language='javascript' type='text/javascript'>
    alert('O campo login deve ser preenchido');window.location.href='
    cadastro.html';</script>";
 
    }else{
      if($artarray == $article){
 
        echo"<script language='javascript' type='text/javascript'>
        alert('Esse login já existe');window.location.href='
        cadastro.html';</script>";
        die();
 
      }else{
        $query = "INSERT INTO article (userA,article) VALUES ('$userArticle','$article')";
        $insert = mysql_query($query,$connect);
         
        if($insert){
          echo"<script language='javascript' type='text/javascript'>
          alert('Usuário cadastrado com sucesso!');window.location.
          href='login_page.html'</script>";
        }else{
          echo"<script language='javascript' type='text/javascript'>
          alert('Não foi possível cadastrar esse usuário');window.location
          .href='cadastro.html'</script>";
        }
      }
    }
?>
