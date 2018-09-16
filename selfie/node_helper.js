'use strict';
const NodeHelper = require('node_helper');

var PythonShell = require('python-shell');
var pythonStarted = false

module.exports = NodeHelper.create({
  
  python_selfie: function () {
console.log("selfie func from socket server called");
    const self = this;
    


PythonShell.run('/selfie/selfie/selfie.py', null, function(err) {
	if(err) throw err;
	console.log('finished');
});



  },

  

 
  // Subclass socketNotificationReceived received.
  socketNotificationReceived: function(notification, payload) {
var self = this;
    if(notification === 'SELFIE')
    {
	console.log("called from server socket");
      this.config = payload
      if(!pythonStarted)
      {
        pythonStarted = true;
        self.python_selfie();
      };
    };
    
    
  
  pythonStarted = false;

  }
  
});
