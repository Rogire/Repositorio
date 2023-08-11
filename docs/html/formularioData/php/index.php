<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Teste de resultado de form</h1>
    
    <?php 
    $nome=$_GET["username"];
    $email=$_GET["email"];
    $password =$_GET["password"];

    print("Olá $nome!");
    ?>
</body>
</html>