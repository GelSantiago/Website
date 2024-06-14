$(document).ready(function() {
    $('#searchbar').on('input', function() {
        var searchTerm = $(this).val().toLowerCase();
        $('#search-results').empty();
        $('.breadsearch').each(function() {
            var itemName = $(this).data('name').toLowerCase();
            if (itemName.includes(searchTerm)) {
                $(this).show(); 
                $('#search-results').append('<div>' + $(this).data('name') + '</div>');
            } else {
                $(this).hide();
            }
        });
    });


    $('#searchbar').on('keypress', function(e) {
        if (e.which == 13) { // Enter key pressed
            var firstVisible = $('.breadsearch:visible').first();
            if (firstVisible.length) {
                var itemID = firstVisible.attr('id');
                console.log("Enter key pressed, redirecting to item with ID:", itemID); // Debug log
                document.getElementById(itemID).scrollIntoView({ behavior: 'smooth' });
            } else {
                console.log("Enter key pressed, no visible items found"); // Debug log
            }
        }
    }); 

    $('.breadsearch').on('click', function() {
        var itemID = $(this).attr('id');
        console.log("Item clicked, redirecting to item with ID:", itemID); // Debug log
        document.getElementById(itemID).scrollIntoView({ behavior: 'smooth' });
    });



    $('#search-icon').click(function() {
        $('#search-container').toggle();
        

    });

});