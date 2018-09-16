/* global Module */

/* Magic Mirror
 * Module: MMM-Selfie
 *
 * By Alberto de Tena Rojas http://albertodetena.com
 * MIT Licensed.
 */

Module.register('selfie',
{
	defaults:
	{
    useUSBCam: false,
    maxResX: 2592,
    maxResY: 1944,
    cameraRotation: 0,
  },



  cmd_selfie : function ()
	{
	console.log("command processing cmd_selfie func");
      
    	this.sendSocketNotification('SELFIE', this.config);
 	},
 
	start: function()
	{
	  Log.info('Starting module: ' + this.name);
	},

	notificationReceived: function(notification, payload, sender){
	var self = this;
	if (notification === "sign"){
	console.log("command recognized and called in selfie.js");
	self.cmd_selfie();
	console.log("command was sent to func");
	}
	}
});
