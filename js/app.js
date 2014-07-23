(function ($, window, undefined) {

    $.getJSON("data/words.json", function(data) {
        processData(data);
    });

    function processData(data) {

        console.log(data.words);

        var randomLetter = data[Math.floor(Math.random() * data.length)];
        
        console.log(randomLetter);

        for (var i = 0; i <= data.length; i++) {
            console.log(i);
        }
    }

})(jQuery, window);