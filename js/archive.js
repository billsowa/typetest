    // $.getJSON("data/words.json", function(data) {
    //     processData(data);
    // });

    // function processData(data) {

    //     console.log(data.words);

    //     var randomLetter = data[Math.floor(Math.random() * data.length)];
        
    //     console.log(randomLetter);

    //     for (var i = 0; i <= data.length; i++) {
    //         console.log(i);
    //     }
    // }

        var wordString;
        var firstWord;
        var currentWord;
        var chars = [];

function userInteract(currentWord, wordString) {
    var i = 1,
        chars = [],
        container = document.getElementById('container');
    
    window.addEventListener('keypress', function (e) {
    if (e.keyCode !== 32) {    
        chars.push(String.fromCharCode(e.charCode));
    }
    }, false);
    
    window.addEventListener('keyup', function (e) {
        if (e.keyCode === 32) {
            $('#container').html(chars.join(''));
            if (chars.join('') === currentWord) {
                console.log(currentWord);
                var newString = wordString.replace(currentWord, '');
                console.log(newString);
                $('.words').html(wordString);
                currentWord = wordArr[i];
                $('.current-word').html(currentWord);
                i++;
            }

            console.log(chars);
            chars = [];
           }
    }, false);
}

function init() {
    generateWordString();

    $('.current-word').html(wordArr[0]);
    $('.words').html(wordArr.slice(1,200).join(' '));
}

init();