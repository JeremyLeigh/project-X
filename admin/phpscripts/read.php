<?php
//echo "from read.php";
	//read.php gathers and stores (temp) info from the database
	function getAll($tbl) {
		require_once("connect.php");
		$queryAll = "SELECT * From {$tbl}";
		$runAll = mysqli_query($link, $queryAll); 
		//echo $runAll;
		if($runAll){
			return $runAll;	
		}
		else{
			$error = "Error accessing info"	;
			return $error;
		}
		
		mysqli_close($link);
	}
	
		function getSingle($id, $tbl, $col) {
		require_once ("connect.php");	
		$querySingle = "SELECT * FROM {$tbl} WHERE {$col}={$id}";
		//echo $querySingle; 
		$runSingle = mysqli_query($link, $querySingle);
		if($runSingle){
			return $runSingle;	
		}else{
			$error = "I'm a dumb man";
			return $error;	
		}
		mysqli_close($link);	
	}
	
	function filterType ($tbl, $tbl1, $tbl2, $col, $col1, $col2, $filter) {
			require_once("connect.php");
			$queryFilter = "SELECT * FROM {$tbl},{$tbl1}, {$tbl2} WHERE {$tbl}.{$col} = {$tbl2}.{$col} AND {$tbl1}.{$col1} = {$tbl2}.{$col1} AND {$tbl1}.{$col2} = '{$filter}'";
			$runFilter = mysqli_query($link, $queryFilter);
			
			if ($runFilter){
				return $runFilter;
			}else{
				$error = "There was an error";
				return $error;	
			}
			mysqli_close($link);
	}
	
?>