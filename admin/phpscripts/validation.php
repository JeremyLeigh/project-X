<?php
 function has_value($value) {
	 return isset($value) && $value !== "";	  
 }
 
 	function form_errors($errors=array()) {
		$op = "";
		if(!empty($errors)) {
			$op .=	"<p>Your attention is required on the following</p>";
			$op .= "<ul>";
			foreach($errors as $key => $error) {
			$op .= "<li>{$error}</li>";
			}
			$op .= "</ul>";
		}
		return $op;
	}

?>