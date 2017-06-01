function deleteRecipe(id) {
  if (confirm("Are you sure you want to delete this recipe?")) {
    $.ajax({
      url: '/recipes',
      type: 'DELETE',
      dataType: 'json',
      complete: function (req, status) {
        console.log("STATUS: " + status);
        window.location.reload(true);
      },
      data: {
        _id: id
      }

    });
  }
}
