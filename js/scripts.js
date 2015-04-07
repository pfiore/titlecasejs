var queenAttack = function(queen, enemy) {
    if (queen[0] === enemy[0]) {
        return true;
    }
    if (queen[1] === enemy[1]) {
        return true;
    }
    if ((queen[1] - enemy[1]) === (queen[0] - enemy[0])) {
        return true;
    }
    else {
        return false;
    };
};

$(document).ready(function() {
    $("form#coords").submit(function(event) {
    var enemy_x = parseInt($("input#enemy_x").val());
    var enemy_y = parseInt($("input#enemy_y").val());

    var queen_x = parseInt($("input#queen_x").val());
    var queen_y = parseInt($("input#queen_y").val());

    var result = queenAttack([queen_x, queen_y], [enemy_x, enemy_y]);

    if (!result) {
        $(".not").text("not");
    }

    else {
        $(".not").text("");
    }

    $("#result").show();
    event.preventDefault();

    });
});
