$(document).ready(function() {
  $('.artist-link').click(function(event) {
    console.log('working');

    $.get('/artists').done(function(data) {
      $('.response').empty();
      $('.form-div').empty();
      var source = $("#artist-template").html();
      var template = Handlebars.compile(source)
      $('.response').append(template({artists: data}));
    })

  });


  $('.new-artist').click(function(event) {
    $('.response').empty();
    $('.form-div').empty();
    var source = $("#artist-form-template").html();
    var template = Handlebars.compile(source)
    $('.form-div').append(template);
  });


  $('.new-artist').click(function(event) {
    // Get New Artist Parameters
    var name        = $('#input-name').val();
    var picture     = $('#input-picture').val();
    var nationality = $('#input-nationality').val();
    var birthYear   = $('#input-birthYear').val();
    var description = $('#input-description').val();
    var created_at  = Date.now;

    // Create New Artist Based On Params
    $.ajax({
      type: "POST",
      url:  "/artists",
      data: {
        name:        name,
        img_url:     picture,
        nationality: nationality,
        birthYear:   birthYear,
        description: description,
        created_at:  created_at,
        // PAINTINGS?
      }
    }).done(function(createdArtist) {
      console.log(createdArtist);
    });
  });

  $('.new-painting').click(function(event) {
    $('.response').empty();
    $('.form-div').empty();
    var source = $("#painting-form-template").html();
    var template = Handlebars.compile(source)
    $('.form-div').append(template);
  });

});


// $.ajax({
//   type: "POST",
//   url: "/artists",
//   data: {name: "nicole", img_url: "lol", nationality: "lol"}
// }).done(function(createdArtist) {
//   console.log(createdArtist);
// });
