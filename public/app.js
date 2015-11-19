$('#somebutton').click(function(event) {

  $.get('/artists/1').done(function(myArtist) {
    console.log(myArtist);
  })

})
