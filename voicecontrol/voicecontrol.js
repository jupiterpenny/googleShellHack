
'use strict';
/* Magic Mirror
 * Module: voicecontrol
 *
 * By Alex Yakhnin
 * MIT Licensed.
 */

Module.register("voicecontrol", {

	// Default module config.

    defaults: {
		models: [
					{
						keyword: "sign",
						description: "Say 'sign' to start the sign language learning program",
						file: "sign.pmdl",
						message: "sign"
					},
{
						keyword: "stop",
						description: "Say 'stop' to stop your learning progarm",
						file: "stop.pmdl",
						message: "sstop"
					},
				]
	},

    start: function() { 

        this.sendSocketNotification("CONNECT", this.config);

    },

    getStyles: function() {
		return ['voicecontrol.css'];
	},

    socketNotificationReceived: function(notification, payload){
        if (notification === "KEYWORD_SPOTTED"){
            //Broadcast the message
            this.sendNotification(payload.message, {type: "notification"});
        }
	},

    getDom: function() {
        var wrapper = document.createElement("div");
        var header = document.createElement("header");
        header.innerHTML = "Voice Commands";
        wrapper.appendChild(header);
        var models = this.config.models;

        models.forEach(function(model) {
            var command = document.createElement("div");
            command.innerHTML = model.description;
            command.className = "small dimmed top";
            wrapper.appendChild(command);
        }, this);

        return wrapper;
    }

});