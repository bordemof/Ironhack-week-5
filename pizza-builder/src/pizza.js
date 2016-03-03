// Write your Pizza Builder JavaScript in this file.

var PizzaBuilder = function () {

    // Event Handling
    var initializePizzaBuilder = function () {
        console.log("Initializing Pizza");
        $('.active').removeClass('active');
        $('[data-target="toggle-ingredient"]').hide();
    };
    // EVENTS
    var toggleIngredientListener = $('[data-action="toggle-ingredient"]').click(function(event) {
        var ingredient = $(this).prop('name');
        $(this).toggleClass('active');
        $('.'+ingredient).toggle();
        addToList(ingredient, 1);
    });

    var addSauce = $('[data-action="add-sauce"]').click(function(event) {
        sauce = $(this).prop('name');
        $(this).toggleClass('active');
        $('[data-target="sauce"]').toggleClass(sauce);
        addToList(sauce, 3);
    });

    var addCrust = $('[data-action="add-crust"]').click(function(event) {
        var crust = $(this).prop('name');
        $(this).toggleClass('active');
        $('[data-target="crust"]').toggleClass(crust);
        addToList(crust, 5);
    });

    var addToList = function(target, price) {
        $('[data-target="list-item-'+target+'"]').remove();
        var template = '<li data-target=list-item-'+target+' data-value='+price+'> '+price+'$ '+target+'</li>';

        if ($('[name="'+target+'"]').hasClass('active')) {
            $('[data-target="ingredient-list"]').append(template);
        }

        updateTotalPrice()
    };

    updateTotalPrice = function() {
        var totalPrice = 10;
        $('[data-target="ingredient-list"] li').each(function(index, element) {
            totalPrice += parseInt($(element).attr('data-value'));
        });
        $('[data-target="total-price"]').text('$'+totalPrice);
    }

}()
