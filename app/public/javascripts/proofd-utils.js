$(function() {

  $("#jsGrid").jsGrid({
    width: "100%",

    sorting: true,
    paging: true,
    editing: true,
    inserting: true,
    autoload: true,
    pageLoading: true,

    controller: {
      loadData: function(filter) {
        console.log("loadData");
        return $.ajax({
          type: "GET",
          url: "/recipes",
          data: filter
        });
      },

      insertItem: function(item) {
        return $.ajax({
          type: "POST",
          url: "/recipes",
          data: item
        });
      },

      updateItem: function(item) {
        return $.ajax({
          type: "PUT",
          url: "/recipes",
          data: item
        });
      },

      deleteItem: function(item) {
        return $.ajax({
          type: "DELETE",
          url: "/recipes",
          data: item
        });
      },
    },

    fields: [{
        name: "name",
        type: "text",
        width: 100,
        title: "Name"
      },
      {
        name: "style",
        type: "select",
        width: 100,
        // FIXME: hardcoded
        items: [
          "Enriched",
          "Pre-Ferment",
          "Sourdough",
          "Straight"
        ],
        title: "Style"
      },
      {
        name: "description",
        type: "text",
        width: 200,
        title: "Description"
      },
      {
        name: "actions",
        type: "control",
        title: "Actions"
      },
      {
        name: "_id",
        type: "text",
        visible: false
      }
    ]
  });
});
