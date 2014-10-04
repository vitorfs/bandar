var score = 0;
var bandar_moves = new Array();
var player_moves = new Array();
var player_turn = false;

var COLORS = ["#e1e1e1", "#e4e4e4", "#e7e7e7", "#d1d1d1", "#d4d4d4", "#d7d7d7", "#c1c1c1", "#c4c4c4", "#c7c7c7"];
var HOVER_COLORS = ["#5e0005", "#980413", "#d9021c", "#004d2d", "#008042", "#2fbf63", "#1b335b", "#25467c", "#3c64ab"];

var get_move = function () {
  return Math.floor(Math.random() * 9);
};

var start_game = function () {
  score = 0;
  bandar_moves = new Array();
  player_moves = new Array();
  player_turn = false;
  bandar_moves.push(get_move());
  play();
};

var init = function () {
  for (var i = 0; i < COLORS.length; i++) {
    $("body").append("<div></div>");
    $("div:eq(" + (i) + ")").css("backgroundColor", COLORS[i]);
  };

  $("div").hover(function () {
    if (player_turn)
      $(this).css("backgroundColor", HOVER_COLORS[$(this).index()]);
  },
  function () {
    if (player_turn)
      $(this).css("backgroundColor", COLORS[$(this).index()]);
  });

  $("div").click(function () {
    if (player_turn) {

      player_moves.push($(this).index());

      var passing = true;

      for (var i = 0; i < player_moves.length; i++) {
        if (bandar_moves[i] !== player_moves[i]) {
          passing = false;
        }
      };

      if (!passing) {
        alert("Game Over\nScore: " + score);
        start_game();
        return;
      }

      if (player_moves.length === bandar_moves.length) {
        $(this).css("backgroundColor", COLORS[$(this).index()]);
        score = player_moves.length;
        player_moves = new Array();
        bandar_moves.push(get_move());
        play();
      }

    }
  });

};

var play = function (i) {
  i = i || 0;
  player_turn = false;
  if (i == bandar_moves.length) {
    player_turn = true;
    return;
  }
  else {
    var move = bandar_moves[i];
    $("div:eq(" + move + ")").append("<div></div>");
    $("div:eq(" + move + ") div").css({ 
      "height": "100%", 
      "width": "100%", 
      "backgroundColor": HOVER_COLORS[move], 
      "display": "none"})
      .fadeIn(400, function () {
        window.setTimeout(function () {
          $("div:eq(" + move + ") div").fadeOut(400, function () {
            $(this).remove();
            i = i + 1;
            play(i);
          });
        }, 100);
      });
  }
};

$(function () {
  init();
  start_game();
});