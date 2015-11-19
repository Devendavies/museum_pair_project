$(document).ready(function() {
  $('.artist-link').click(function(event) {
    // event.preventDefault();
    console.log('working');

    $.get('/artists').done(function(data) {
      var source = $("#artist-template").html();
      var template = Handlebars.compile(source)
      $('body').append(template({artists: data}));
    })

  });
});


$.ajax({
  type: "POST",
  url: "/artists",
  data: {name: "nicole", img_url: "lol", nationality: "lol"}
}).done(function(createdArtist) {
  console.log(createdArtist);
});
