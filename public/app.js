$(document).ready(function() {
  $('.artist-link').click(function(event) {
    // event.preventDefault();

    // Get and print all artists to screen
    $.get('/artists').done(function(data) {
      var source = $("#artist-template").html();
      var template = Handlebars.compile(source)
      $('body').append(template({artists: data}));
    })
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
  }

  // Get all art
  $('.paintings-link').click(function(event) {
    // event.preventDefault();

    // Get and print all paintings to screen
    $.get('/paintings').done(function(data) {
      var source = $("#painting-template").html();
      var template = Handlebars.compile(source)
      $('body').append(template({paintings: data}));
    })
  });

  // Get New Paintings
  $('.new-artist').click(function(event) {
  // Get New Artist Parameters
    var title       = $('#input-title').val();
    var image       = $('#input-image').val();
    var year_made   = $('#input-year_made').val();
    var created_at  = Date.now;

    // Create New Painting Based On Params
    $.ajax({
      type: "POST",
      url:  "/paintings",
      data: {
        title: title,
        img_url: image,
        year_made: year,
        created_at: created_at,
        // Artist?
      }
    }).done(function(createdPainting) {
      console.log(createdPainting);
    });
  });
});
