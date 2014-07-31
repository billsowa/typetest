(function ($, window, undefined) {

    var words = [ "about", "above", "across", "act", "active", "activity", "add", "afraid", "after", "again", "age", "ago", "agree", "air", "all", "alone", "along", "already", "always", "am", "amount", "an", "and", "angry", "another", "answer", "any", "anyone", "anything", "anytime", "appear", "apple", "are", "area", "arm", "army", "around", "arrive", "art", "as", "ask", "at", "attack", "aunt", "autumn", "away", "baby", "back", "bad", "bag", "ball", "bank", "base", "basket", "bath", "be", "bean", "bear", "beautiful", "bed", "bedroom", "beer", "behave", "before", "begin", "behind", "bell", "below", "besides", "best", "better", "between", "big", "bird", "birth", "birthday", "bit", "bite", "black", "bleed", "block", "blood", "blow", "blue", "board", "boat", "body", "boil", "bone", "book", "border", "born", "borrow", "both", "bottle", "bottom", "bowl", "box", "boy", "branch", "brave", "bread", "break", "breakfast", "breathe", "bridge", "bright", "bring", "brother", "brown", "brush", "build", "burn", "business", "bus", "busy", "but", "buy", "by", "c", "cake", "call", "can", "candle", "cap", "car", "card", "care", "careful", "careless", "carry", "case", "cat", "catch", "central", "century", "certain", "chair", "chance", "change", "chase", "cheap", "cheese", "chicken", "child", "children", "chocolate", "choice", "choose", "circle", "city", "clever", "clean", "clear", "climb", "clock", "cloth", "clothes", "cloud", "cloudy", "close", "coffee", "coat", "coin", "cold", "collect", "color", "comb", "comfortable", "common", "compare", "come", "complete", "computer", "condition", "continue", "control", "cook", "cool", "copper", "corn", "corner", "correct", "cost", "contain", "count", "country", "course", "cover", "crash", "cross", "cry", "cup", "cupboard", "cut", "dance", "dangerous", "dark", "daughter", "day", "dead", "decide", "decrease", "deep", "deer", "depend", "desk", "destroy", "develop", "die", "different", "difficult", "dinner", "direction", "dirty", "discover", "dish", "do", "dog", "door", "double", "down", "draw", "dream", "dress", "drink", "drive", "drop", "dry", "duck", "dust", "duty"],
        correctWords = [],
        wrongWords = [];

    function generateWordString() {
        var wordArr = [],
            randomWord = "";

        for ( var i = 0; i <= words.length; i++ ) {
            randomWord = words[Math.floor(Math.random() * words.length)];
            if ( wordArr.indexOf(randomWord) === -1 ) {
                if ( randomWord.length > 2 ) {
                    wordArr.push('<span class="word">'+randomWord+'</span>');
                    if ( i > 200 ) {
                        break;
                    }
                }
            }    
        }
        $('.words').html(wordArr.join(' '));
        checkInput(wordArr);
    }

    function checkInput(wordArr) {
        var i = 0;

        $('.input-area input').on('keypress', function (e) {
            if (e.keyCode === 32) {    
                var usrWord = $('.input-area input').val().replace(' ',''),
                    currentWord = $('.word').eq(i);
                $('.input-area input').val('');
                if ( usrWord === currentWord.text() ) {
                    currentWord.addClass('yarp');
                    correctWords.push(usrWord);
                    pushLeft(currentWord);
                } else {
                    currentWord.addClass('narp');
                    wrongWords.push(usrWord);
                    pushLeft(currentWord);
                }
                i++;
            }
        });
    }

    function pushLeft(currentWord) {
        $('.words').animate({
            'margin-left' : '-=' + (currentWord.innerWidth() + 25)
        });
    }

    function timer() {
        var clockTime = 59;
        countDown = setInterval(function () {
            if ( clockTime >= 0 ) {
                $('.time span').text(clockTime);
                clockTime--;
            } else {
                clearInterval(countDown);
                $('.input-area input, .words, .time').hide();
                evaluate();
            }
        }, 1000);
    }

    function evaluate() {
        $('.results').show();
        $('.wpm').html(correctWords.length + ' words per minute');
        $('.correct').html(correctWords.length + ' spelled correctly');
        $('.incorrect').html(wrongWords.length + ' spelled incorrectly');
    }

    function init() {
        $('.input-area input, .words, .time').show();
        generateWordString();
        $('.input-area input').one('click', function () {
            $('button').show();
            timer();
        });
    }

    $('button').on('click', function () {
        correctWords = [];
        wrongWords = [];
        $('.time span').text('60');
        $('.input-area input').val('');
        $('.results').hide();
        $('.words').css('margin-left','0');
        $('.input-area input').off('keypress');
        init();
    });

    init();

    /*Insert word into current word div*/

    /*Keypress event*/

    /*Check spelling, move to prev div, insert next word into current word div*/

})(jQuery, window);
