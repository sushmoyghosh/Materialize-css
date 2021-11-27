$(function() {
    M.AutoInit();

    $('.sidenav').sidenav();

    $('.slider').slider();

    $('.scrollspy').scrollSpy();

    $('.carousel').carousel();

    $('.parallax').parallax();

    $('.fixed-action-btn').floatingActionButton();

    M.updateTextFields();

    $('input.autocomplete').autocomplete({
        data: {
          "Apple": null,
          "Microsoft": null,
          "Google": 'https://placehold.it/250x250'
        },
      });

})