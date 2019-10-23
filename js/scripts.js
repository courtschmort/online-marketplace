$(document).ready(function() {
  $("body").on('click','button.product', function() {
    let productValue = $(this).val();
    $("ul#cart").append("<li class='list-group-item'>" + productValue + "</li>");
    $("ul#cart").children("li").click(function() {
      $(this).remove();
    });
  });

  $("form#contact-information").submit(function(event) {
    event.preventDefault();
      let nameInput = $("#name").val();
      let addressInput = $('#street-address').val();
      let cityInput = $('#city').val();
      let stateInput = $('#state').val();
      let zipInput = $('#zip-code').val();
    $("ul#delivery-info").append('<li>' + nameInput + '</li>');
    $("ul#delivery-info").append('<li>' + addressInput + '</li>');
    $("ul#delivery-info").append('<li>' + cityInput + '</li>');
    $("ul#delivery-info").append('<li>' + stateInput + '</li>');
    $("ul#delivery-info").append('<li>' + zipInput + '</li>');
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
