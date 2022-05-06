window.addEventListener("load", function(){
  var menuButtons = Array.prototype.slice.call(document.getElementsByClassName("navbar-toggler"));
  for(var i = 0; i < menuButtons.length; i++){

    // BIND CLICK TO OPEN CLOSE
    var button = menuButtons[i];
    var targetId = button.getAttribute("data-target");

    if(!targetId) return;
    var target = document.querySelector(targetId)

    if(!target) return;

    button.addEventListener("click", function(){
      if(target.classList.contains("collapse")){
        target.classList.remove("collapse");
      }else{
        target.classList.add("collapse");
      }
    })


    // 
  }




});
