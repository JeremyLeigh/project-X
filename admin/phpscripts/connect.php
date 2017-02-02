<?php
	//set up connection credentials
	$user = "root";
	$password = ""; // for PC
	//$password = "root" //for Mac
	$url = "localhost";
	$db = "db_projects";


	//Everything below does not need to be changed
	$link = mysqli_connect($url, $user, $password, $db); //needs to be sqli, sql (without the "i") is not supported
	//$link = mysqli_connect($url, $user, $password, $db, "8889"); //Mac only, last number is port
	
	//check Connection
	if (mysqli_connect_errno()){
		printf ("connect failed: %s\n", msqli_connect_errror());
		exit();
			
	}
	
	
?>