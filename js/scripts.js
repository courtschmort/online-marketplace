$(document).ready(function() {
  $("body").on('click','button.product', function() {
    let productValue = $(this).val();
    $("ul#cart").append("<li>" + productValue + "</li>");


  });

  // $("#product1").click(function() {
  //   let product1Value = $("#product1").val();
  //   $("ul#cart").append("<li>" + product1Value + "</li>");
  // });
  // $('#product2').click(function() {
  //   let product2Value = $('#product2').val();
  //   $('ul#cart').append('<li>' + product2Value + '</li>');
  // });
  // $('#product3').click(function() {
  //   let product3Value = $('#product3').val();
  //   $('ul#cart').append('<li>' + product3Value + '</li>');
  // });
});
