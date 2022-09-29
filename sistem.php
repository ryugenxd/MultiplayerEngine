<?php

define("DB_HOST","127.0.0.1");
define("DB_USER","root");
define("DB_PASS","1234");
define("DB_NAME","multiplayer");
define("TB_PLAYER","player");

$connect = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);

function query($q){

	global $connect;

	$result = mysqli_query($connect,$q);
	$array = [];
	while($row=mysqli_fetch_assoc($result)){
		$array[]=$row;
	}
	return $array;
}
