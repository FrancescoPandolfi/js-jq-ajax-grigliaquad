$(document).ready(function () {


  $(document).on('click', '.quadrato', function() {

    var quadrato = this;

    $.ajax({
        'url' : "https://flynn.boolean.careers/exercises/api/random/int",
        'method' : "GET",
        'success' : function (data, stato) {


          checkNum(data.response);

          },
        'error' : function (richiesta, stato, errore) {
          alert("E' avvenuto un errore. " + errore);
          }
    });

    function checkNum(num) {
      $(quadrato).text(num);
      if (num <= 5) {
        $(quadrato).addClass('giallo');
      } else {
        $(quadrato).addClass('verde');
      }
    }

  }); // end on click


}); // end ready
