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
  var app = $('#app');

  // Aggiunta di un nuovo reminder alla Todo List
  newInput.keyup(function(event) {
    
    // Al sollevamento del tasto Invio viene eseguito il seguente codice
    if ( event.which == 13 || event.keyCode == 13 ) {
      var text = newInput.val().trim();
      console.log(text);

      // Validazione e aggiunta reminder alla Todo List
      if ( text !== '' ) {
        var newReminder = $('.template li').clone();
        newReminder.prepend(text);
        list.append(newReminder);

        // Reset dell'input
        newInput.val('');
      }
    }
  });

  // Cancellazione reminder dalla Todo List
  app.on('click', '.todo li .fa-trash', function() {
    var icons = $(this).parent();
    icons.parent().remove();
  });

  // Aggiunta text-decoration al reminder completato
  app.on('click', '.todo li', function() {
    $(this).toggleClass('done');
  });

  // Aggiunta possibilità per l'utente di evidenziare dei reminder speciali
  app.on('click', '.todo li .fa-star', function() {
    var icons = $(this).parent();
    icons.parent().toggleClass('special');
    $(this).toggleClass('special-color');
  });







































  
}); // End document