$(function(){
  var os = require('os');
  var prettyBytes = require('pretty-bytes');
  setInterval(function(){
      $('.cpu').empty().append('CPU: <span>' + os.cpus()[0].model + '</span>');
      $('.cores').empty().append('Number of cpu cores: <span>' + os.cpus().length + '</span>');
      $('.freemem').empty().append('Free memory: <span>' + prettyBytes(os.freemem())+ ' out of ' + prettyBytes(os.totalmem()) + '</span>');
      console.log("the time is now", new Date());
    }, 1000);
})
