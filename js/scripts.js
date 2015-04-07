var titleCase = function(input) {

    var input = input.toLowerCase();
    var titlecased = [];
    var words = input.split(" ");

    for (var i = 0; i < words.length; i ++) {
        var str = words[i];

        //cap the first word always
        if (i === 0) {
            var cap = str[0].toUpperCase();
            var remainder = str.slice(1, str.length);
            var newstring = cap + remainder;
            titlecased.push(newstring);
        }
        //cap all not article words
        else if ((str !== 'the') &&
            (str !== 'in') &&
            (str !== 'and') &&
            (str !== 'a') &&
            (str !== 'to') &&
            (str !== 'as') &&
            (str !== 'for') &&
            (str !== 'with') &&
            (str !== 'but') &&
            (str !== 'is') &&
            (str !== 'it') &&
            (str !== 'on') &&
            (str !== 'an') &&
            (str !== 'of')) {
                var cap = str[0].toUpperCase();
                var remainder = str.slice(1, str.length);
                var newstring = cap + remainder;
                titlecased.push(newstring);
        }
        //push all remaining words, ie all articles
        else {
            titlecased.push(str);
        }

    }

    return titlecased.join(" ");

};

$(document).ready(function() {
    $("form#titlecase").submit(function(event) {
        var input = $("input#input").val();
        var result = titleCase(input);

        $(".banana").text(result);



        $("#result").show();
        event.preventDefault();
    });
});
