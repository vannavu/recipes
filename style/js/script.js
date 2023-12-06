$(document).ready(function(){

    function shuffle(array) {
        var currentIndex = array.length,
        temporaryValue, randomIndex;
    
        while (0 !== currentIndex) {
    
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }
    
        return array;
    }

    var recipes = shuffle($(".recipes_container>.recipe").get());
    $(".recipes_container").html(recipes);
    

    // recipe filter
    $("input[type='checkbox']").change(function(){
    
        var list = "";
    
        $("input[type='checkbox']").each(function(){
            if(this.checked){
                list = list + '.' + $(this).attr('id');
            }
        });

        if(list !==''){
            $(".recipe").hide();
            $(list).show();
        }
        else {
            $(".recipe").show();
        }
    });

});