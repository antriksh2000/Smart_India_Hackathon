   // get import Dynamic link
   function getInputFromTextBox() {
    let input = document.getElementById("userInput").value;
    document.getElementById("text").innerHTML = input;
  }
//  full screen onclick
  var elem = document.documentElement;
  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  //10 countdowun
 console.log("hhfgdshja");
jQuery(document).ready(function(){
jQuery(function() {
      jQuery(this).bind("contextmenu", function(event) {
          event.preventDefault();
          alert('Right click disable in this site!!')
      });
  });
});
