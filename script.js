// $(document).ready(function () {


$(document).on('click', '.quadrato', function() {



  $.ajax(
    {
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function (data, stato) {
console.log(data);

        // if (data <= 5) {
        //   $(this).addClass('giallo');
        // } else {
        //   $(this).addClass('verde');
        // }
        },
      error: function (richiesta, stato, errore) {
        alert("E' avvenuto un errore. " + errore);
        }
    }
  );








// });














}); // end ready
