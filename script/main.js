/*
* Todo List
Ricreare la todo list vista oggi durante la lezione (focus dell’esercizio la logica)
Usiamo i template in html e il clone per separare la parte logica (JS) dalla parte di markup (HTML)
recap funzionalità: mostrare, aggiungere e eliminare elementi dalla lista
*/

$( document ).ready(function() {

  // Referenze
  var list = $('.todo');
  var newInput = $('.add-reminder');

  // Aggiunta di un nuovo reminder alla Todo List
  newInput.keyup(function(event) {
    if ( event.which == 13 || event.keyCode == 13 ) {
      var text = newInput.val().trim();
      console.log(text);

      if ( text !== '' ) {
        var newReminder = $('.template li').clone();
        newReminder.prepend(text);
        list.append(newReminder);

        newInput.val('');
      }
    }
  });

  $('#app').on('click', '.todo li .fa-trash', function() {
    $(this).parent().remove();
  });

  $('#app').on('click', '.todo li', function() {
    $(this).toggleClass('done');
  });







































  
}); // End document