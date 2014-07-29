(function ($, window, undefined) {

    
        var words = [ "about", "above", "across", "act", "active", "activity", "add", "afraid", "after", "again", "age", "ago", "agree", "air", "all", "alone", "along", "already", "always", "am", "amount", "an", "and", "angry", "another", "answer", "any", "anyone", "anything", "anytime", "appear", "apple", "are", "area", "arm", "army", "around", "arrive", "art", "as", "ask", "at", "attack", "aunt", "autumn", "away", "baby", "back", "bad", "bag", "ball", "bank", "base", "basket", "bath", "be", "bean", "bear", "beautiful", "bed", "bedroom", "beer", "behave", "before", "begin", "behind", "bell", "below", "besides", "best", "better", "between", "big", "bird", "birth", "birthday", "bit", "bite", "black", "bleed", "block", "blood", "blow", "blue", "board", "boat", "body", "boil", "bone", "book", "border", "born", "borrow", "both", "bottle", "bottom", "bowl", "box", "boy", "branch", "brave", "bread", "break", "breakfast", "breathe", "bridge", "bright", "bring", "brother", "brown", "brush", "build", "burn", "business", "bus", "busy", "but", "buy", "by", "c", "cake", "call", "can", "candle", "cap", "car", "card", "care", "careful", "careless", "carry", "case", "cat", "catch", "central", "century", "certain", "chair", "chance", "change", "chase", "cheap", "cheese", "chicken", "child", "children", "chocolate", "choice", "choose", "circle", "city", "class", "clever", "clean", "clear", "climb", "clock", "cloth", "clothes", "cloud", "cloudy", "close", "coffee", "coat", "coin", "cold", "collect", "colour", "comb", "comfortable", "common", "compare", "come", "complete", "computer", "condition", "continue", "control", "cook", "cool", "copper", "corn", "corner", "correct", "cost", "contain", "count", "country", "course", "cover", "crash", "cross", "cry", "cup", "cupboard", "cut", "dance", "dangerous", "dark", "daughter", "day", "dead", "decide", "decrease", "deep", "deer", "depend", "desk", "destroy", "develop", "die", "different", "difficult", "dinner", "direction", "dirty", "discover", "dish", "do", "dog", "door", "double", "down", "draw", "dream", "dress", "drink", "drive", "drop", "dry", "duck", "dust", "duty"];
        var wordArr = [];
        var randomWord;
        var wordString;
        var firstWord;
        var currentWord;
        var chars = [];

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


    function generateWordString() {

        for ( var i = 0; i <= words.length; i++ ) {
            randomWord = words[Math.floor(Math.random() * words.length)];
            if ( randomWord.length > 2 ) {
                wordArr.push(randomWord);
                if ( i > 200 ) {
                    break;
                }
            }
        }
        console.log(wordArr.length);

        userInteract(wordArr[0], wordArr.slice(1,200).join(' '));
    }

    /*Insert word into current word div*/

    /*Keypress event*/

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

    /*Check spelling, move to prev div, insert next word into current word div*/

})(jQuery, window);
