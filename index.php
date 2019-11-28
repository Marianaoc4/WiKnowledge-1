<?php
  $login_cookie = $_COOKIE['WiKnowledge'];
    if(isset($login_cookie)){
      header("Location: website/index.html");
    }else{
    header("Location: login_page.html");  
    }
?>