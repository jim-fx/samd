window.addEventListener("load", function() {
  var menuButtons = Array.prototype.slice.call(document.getElementsByClassName("navbar-toggler"));
  for (var i = 0; i < menuButtons.length; i++) {

    // BIND CLICK TO OPEN CLOSE
    var button = menuButtons[i];
    var targetId = button.getAttribute("data-target");

    if (!targetId) return;
    var target = document.querySelector(targetId)

    if (!target) return;

    button.addEventListener("click", function() {
      if (target.classList.contains("collapse")) {
        target.classList.remove("collapse");
      } else {
        target.classList.add("collapse");
      }
    })


    // 
  }


  // // When the user scrolls the page, execute myFunction
  // window.onscroll = function() { myFunction() };
  //
  // // Get the header
  // var header = document.querySelector(".navbar");
  //
  // // Get the offset position of the navbar
  // var sticky = header.offsetTop;
  //
  // // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  // function myFunction() {
  //   if (window.pageYOffset > sticky) {
  //     document.body.classList.add("sticky");
  //   } else {
  //     document.body.classList.remove("sticky");
  //   }
  // }



});
