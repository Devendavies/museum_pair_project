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

});


// $.ajax({
//   type: "POST",
//   url: "/artists",
//   data: {name: "nicole", img_url: "lol", nationality: "lol"}
// }).done(function(createdArtist) {
//   console.log(createdArtist);
// });
