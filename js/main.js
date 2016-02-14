$(document).ready(function() {

  $("time.timeago").timeago();
  $("abbr.timeago").timeago();
  $("time#some_id").timeago("update", new Date());
  var time = jQuery.timeago(new Date());


  $("#tweet-submit").click(function() {
    var data = {
      tweet_text: $('.tweet-compose').val()
    };
    $('#stream').prepend(tmpl('tweet_tmpl', data));
    $("time.timeago").timeago("update", new Date());

  });

  var maxCharacters = 140;
  var tc = $('.tweet-compose').height();
  $('#tweet-controls').hide();
  //this jquery doubles the selected text box height and shows the buttons and counter
  $('.tweet-compose').focusin(function() {
    $('#tweet-controls').show();
    $(this).height(tc * 2);
  });



  $('#count').text(maxCharacters);

  $('.tweet-compose').bind('keyup keydown', function() {
    var count = $('#count');
    var characters = $(this).val().length;

    if (characters > maxCharacters) {
      count.addClass('over');
    } else {
      count.removeClass('over');
    }
    count.text(maxCharacters - characters);
  });

  /*
    $('.tweet-compose').on('keyup keydown', function() {
      var characters = $(this).val().length
      $('#char-count').text(140 - characters)
      var count = $('#char-count').text()
      if (count <= 10) {
        $('#char-count').css('color', 'red')
      } else {
        $('#char-count').css('color', 'black')
      }
      if (count <= 0) {
        $('#tweet-submit').attr('disabled', true)
      } else {
        $('#tweet-submit').attr('disabled', false)
      }
    })

  */





});
