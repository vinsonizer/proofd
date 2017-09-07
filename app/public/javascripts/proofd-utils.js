$(function() {

  $.ajax({
    url: '/?format=json',
    type: 'GET',
    dataType: 'json',
    complete: function(res) {

      $("#jsGrid").jsGrid({
        width: "100%",

        sorting: true,
        paging: true,

        data: res.responseJSON.data,

        controller: {
          loadData: function(item) {
            window.location = "/recipes/" + item._id;
          },
          insertItem: function(item) {
            debugger;
          },
          updateItem: function(item) {
            debugger;
          },
          deleteItem: function(item) {
            $.ajax({
              url: '/recipes',
              type: 'DELETE',
              dataType: 'json',
              data: {
                _id: item._id
              }

            });
          }
        },

        fields: [{
            name: "name",
            type: "text",
            width: 100,
            title: "Name"
          },
          {
            name: "description",
            type: "text",
            width: 200,
            title: "Description"
          },
          {
            name: "Delete",
            type: "control",
            title: "Delete?"
          },
          {
            name: "_id",
            type: "text",
            visible: false
          }
        ]
      });
    }
  });


});
