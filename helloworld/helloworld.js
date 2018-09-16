/* global Module */

/* Magic Mirror
 * Module: HelloWorld
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

Module.register("helloworld",{

	// Default module config.
	defaults: {
		text: "Welcome to LanPi Communications language learning application"
	},

	getScripts: function(){
		return ["hello.css"];
	},

	getDom: function(){
		var wrapper = document.createElement("div");
		wrapper.id = "text";
		wrapper.innerHTML = this.config.text;
			return wrapper;
	},

	notificationReceived: function(notification, payload, sender) {
		var text = document.getElementById("text");
		if (notification === "sign"){
			console.log("called sign");
text.innerHTML = "Get ready to sign the letters you see";
setTimeout(function(){
text.innerHTML = "One...."
}, 2000);
setTimeout(function(){
text.innerHTML = "Two...."
}, 4000);
setTimeout(function(){
text.innerHTML = "Three...."
}, 6000);
setTimeout(function(){
text.innerHTML = "Go...."
}, 8000);
setTimeout(function(){
text.innerHTML = "...A...."
}, 10000);
setTimeout(function(){
text.innerHTML = ""
}, 12000);

		}
		if (notification === "stop"){
			console.log("called stop")
			text.innerHTML = "";
		}
	}
});
