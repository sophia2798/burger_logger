$(document).ready(() => {
    $(".devour").on("click", event => {
        event.preventDefault();

        let id = $(event.target).data("id");
        let eatenState = {devoured: true};
        console.log(id)

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: eatenState
        }).then(() => {
            console.log("You have eaten the burger with an ID: ",id);
            location.reload();
        });
    });

    $("#new-burger").on("submit", event => {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burger").val().trim(),
            // devoured boolean defaults to false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("You created a new burger!");
            location.reload();
        });
    });
})