/* Author: Elliot Winard
*/

$(function () {
  var MS_BETWEEN_TICKS = 1000;
  
  // make UI for hour, minute
  for (var i = 0; i<24; i++) {
    $('#hours').append('<span id="hour'+i+'">'+i+'</span>');
  }
  for (var i = 0; i<60; i++) {
    $('#minutes').append('<span id="minute'+i+'">'+i+'</span>');
  }
  for (var i = 0; i<60; i++) {
    $('#seconds').append('<span id="second'+i+'">'+i+'</span>');
  }

  // update current DOM elements
  function tick () {
    var now = new Date();
    $("#main span").removeClass("current");
    $("#second"+now.getSeconds()).addClass("current");
    $("#minute"+now.getMinutes()).addClass("current");
    $("#hour"+now.getHours()).addClass("current");

    $("#bigtime").removeClass("hidden");
    $("#hour").text(now.getHours());
    $("#minute").text(now.getMinutes());
    $("#second").text(now.getSeconds());
  }
  var iid = setInterval( tick, MS_BETWEEN_TICKS );
})
