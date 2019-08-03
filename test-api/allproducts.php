<?php
$data = file_get_contents("./products.json");
$result = json_decode($data, true);

var_dump($result) ;
?>