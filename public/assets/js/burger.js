// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devour").on("click", function (event) {
    var id = $(this).data("id");
    $.ajax("/api/burger/" + id, {
      type: "PUT",
    }).then(function () {
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    var newBurger = {
      name: $("#ca").val().trim(),
    };
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      location.reload();
    });
  });
});
