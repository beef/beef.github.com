var beefTweets=function(){};beefTweets.prototype.load=function(){var e=this,t=$.ajax({type:"POST",headers:{"X-Parse-Application-Id":"5aiKmEJ8NOmYWxpYX1nSJbgLEOm8dVtQcrCOs8UP","X-Parse-REST-API-Key":"mfbWd8t1M0I12F6ps6HPpMjDuol20Pxf3TaHWZaa","Content-Type":"application/json"},url:"https://api.parse.com/1/functions/getTweets",data:"{}",dataType:"JSON",processData:!1});t.done(function(t,n,r){e.render(t.result)}),t.fail(function(e,t,n){})},$(document).ready(function(){BeefSite.loadTweets()});