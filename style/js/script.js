$(document).ready(function(){

    function shuffle(array) {
        var currentIndex = array.length,
        temporaryValue, randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }
    
        return array;
    }
    
    var recipes = shuffle($(".recipes_container>.recipe").get());
    $(".recipes_container").html(recipes);

});