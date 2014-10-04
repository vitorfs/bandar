var SCORE = 0;
var MOVES = new Array();
var PLAY = false;

var COLORS = [
  ["#e1e1e1", "#e4e4e4", "#e7e7e7"], 
  ["#d1d1d1", "#d4d4d4", "#d7d7d7"], 
  ["#c1c1c1", "#c4c4c4", "#c7c7c7"]];

var ACTIVE_COLORS = [
  ["#5e0005", "#980413", "#d9021c"], 
  ["#004d2d", "#008042", "#2fbf63"], 
  ["#1b335b", "#25467c", "#3c64ab"]];

$(function () {

  for (var i = 0; i < COLORS.length; i++) {
    for (var j = 0; j < COLORS[i].length; j++) {
      $("div:nth-child(" + (i + 1) + ") div:nth-child(" + (j + 1) + ")").css("backgroundColor", COLORS[i][j]);
    };    
  };

  $("div div").hover(function () {
    $(this).css("backgroundColor", ACTIVE_COLORS[$(this).parent().index()][$(this).index()]);
  },
  function () {
    $(this).css("backgroundColor", COLORS[$(this).parent().index()][$(this).index()]);
  });

  var move = Math.random() * 9 - 1;
});