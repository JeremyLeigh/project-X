// JavaScript Document
(function() {
	"use strict";
	
	
	
	function slidePage(evt) {
	console.log(evt.target.id);	
		var curID = evt.target.id;

		
	}
	var nxtBtn = document.querySelectorAll(".btn");

		for(var i=0; i<nxtBtn.length; i++) {
			nxtBtn[i].addEventListener("click", slidePage, false);
		}
})();