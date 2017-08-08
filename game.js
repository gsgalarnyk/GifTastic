var pref;
var newButton;
// Event listener for our cat-button
$("#weeb-button").on("click", function() {
    pref = $("#desire").val().trim();
    // Storing our giphy API URL for a random cat image
    newButton = $("<button>");
    newButton.addClass( "butt0n");
    newButton.addClass( "btn");
    newButton.addClass( "btn-danger");
    newButton.addClass( "col-md-4");
    // newButton.attr("disabled", "false");
    newButton.attr("value", pref);

    $("#clickers").append(newButton );
    
});
$(document).on("click", ".butt0n", function() {
	var queryURL;
        if ($(this).val() != false) {
            queryURL =
                "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=anime&tag=" + $(this).val();
        } else {
            queryURL =
                "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=anime"
        }
        console.log(queryURL);
    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
            url: queryURL,
            method: "GET"
        })

        // After the data from the AJAX request comes back
        .done(function(response) {
        	console.log(response);
            // Saving the image_original_url property
            var imageUrl = response.data.image_original_url;

            // Creating and storing an image tag
            var animeImage = $("<img>");

            // Setting the animeImage src attribute to imageUrl
            animeImage.attr("src", imageUrl);
            animeImage.attr("alt", "anime image");

            // Prepending the animeImage to the images div
            $("#images").prepend(animeImage);
        });

});