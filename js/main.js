// JavaScript Document

(function () {
     "use strict";
	console.log("Main Working");
	var dynamicContent = {
		home: {
			text : "The Arctic is changing rapidly. As the effects of climate change continue to be felt all across our planet, the Arctic is ground zero. The year 2016 tied with 2007 for the second-lowest Arctic sea ice minimum.In addition, the Arctic faces potential threats from offshore oil drilling. The oil and gas companies still hold drilling leases in the Arctic Ocean off northern Alaska. Even more alarming, the Obama Administration is still considering whether to allow the sale of additional offshore oil leases in Arctic waters.",

			headline : "Great White North"
		},

		team: {
			//text: "Jeremy Leigh’s career has taken him from Wall Street to philanthropy to a leading role in the global fight to stop climate change. Leigh completed eight years as executive director of Arctic Defence USA in 2008, the longest serving director in the history of the organization.",
			headline : "The Team",
			text: "Meet the board of directors for the Arctic Defence Society and Arctic Defence Fund"
		},

		get: {
			text: "People power is the most powerful force on the planet, and it’s up to us to fight for the change we deserve. And right now, we’ve got the fight of our lives on hand in resisting the world leaders' climate denial. There’s only one thing strong enough to stop the worst of their agenda: you. The Arctic Army App is a place where people like you connect with other volunteers, activists, and groups working on environmental campaigns all across the country. This is your meeting place to start groups, host events, run campaigns, share photos and videos, and join with other interested activists eager to help.",
			headline : "Getting Involved"
		},

	};

	var buttons = document.querySelectorAll(".btn");
	var theImages = document.querySelector("#bgImage");
	var theHeading = document.querySelector(".homepage h2");
	var theText = document.querySelector(".homepage p"), appliedClass;
	var box = document.querySelector("#box");

	function changeElements() {
			console.log("okay buddy");
			console.log(appliedClass);
			theHeading.classList.remove(appliedClass);

			appliedClass = this.id;


			theHeading.classList.add(this.id);
			theText.firstChild.nodeValue = dynamicContent[this.id].text;
			theHeading.firstChild.nodeValue = dynamicContent[this.id].headline;
			theImages.src = "images/"+(this.id)+".jpg";

			if(this.id === "team"){
				box.classList.remove("hidden");
			}else
			box.classList.add("hidden");
		}

	[].forEach.call(buttons, function(run) {
		run.addEventListener("click", changeElements, true);
	});
			theHeading.classList.add('home');
			theText.firstChild.nodeValue = dynamicContent['home'].text;

	

})();